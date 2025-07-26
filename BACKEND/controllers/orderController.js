import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";

// global variables
const currency = "BDT";
const deliveryCharge = 50;

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;
    const orderData = {
      userId,
      items,
      amount,
      address,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    };
    const newOrder = new orderModel(orderData);
    await newOrder.save();

    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    res.json({ success: true, message: "Order Placed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Placing orders using stripe method
const placeOrderStripe = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;
    const { origin } = req.headers;
    const orderData = {
      userId,
      items,
      amount,
      address,
      paymentMethod: "Stripe",
      payment: true,
      date: Date.now(),
    };
    const newOrder = new orderModel(orderData);
    await newOrder.save();

    const line_items = items.map((item) => ({
      price_data: {
        currency: currency,
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    }));

    line_items.push({
      price_data: {
        currency: currency,
        product_data: {
          name: "Delivery Charge",
        },
        unit_amount: deliveryCharge * 100,
      },
      quantity: 1,
    });

    const session = await stripe.checkout.sessions.create({
      success_url: `${origin}/collections`,
      cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`,
      line_items,
      mode: "payment",
    });

    res.json({ success: true, session_url: session.url });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// All orders data for admin panel
const allOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// User order data for frontend
const userOrders = async (req, res) => {
  try {
    const { userId } = req.body;
    const orders = await orderModel.find({ userId });
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Update order status
const updateStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;
    await orderModel.findByIdAndUpdate(orderId, { status });
    res.json({ success: true, message: "Order Status Updated" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Dashboard data for admin panel
const getDashboardData = async (req, res) => {
  try {
    const now = new Date();
    const startOfWeek = new Date(now);
    startOfWeek.setDate(now.getDate() - now.getDay());
    startOfWeek.setHours(0, 0, 0, 0);

    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const startOfYear = new Date(now.getFullYear(), 0, 1);

    // Get all orders
    const allOrders = await orderModel.find({});

    // Weekly orders
    const weeklyOrders = allOrders.filter(
      (order) => new Date(order.date) >= startOfWeek
    );

    // Monthly orders
    const monthlyOrders = allOrders.filter(
      (order) => new Date(order.date) >= startOfMonth
    );

    // Yearly orders
    const yearlyOrders = allOrders.filter(
      (order) => new Date(order.date) >= startOfYear
    );

    // Calculate revenue
    const weeklyRevenue = weeklyOrders.reduce(
      (sum, order) => sum + order.amount,
      0
    );
    const monthlyRevenue = monthlyOrders.reduce(
      (sum, order) => sum + order.amount,
      0
    );
    const yearlyRevenue = yearlyOrders.reduce(
      (sum, order) => sum + order.amount,
      0
    );
    const totalRevenue = allOrders.reduce(
      (sum, order) => sum + order.amount,
      0
    );

    // Get daily sales for the last 7 days
    const dailySales = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      date.setHours(0, 0, 0, 0);

      const nextDate = new Date(date);
      nextDate.setDate(date.getDate() + 1);

      const dayOrders = allOrders.filter((order) => {
        const orderDate = new Date(order.date);
        return orderDate >= date && orderDate < nextDate;
      });

      const dayRevenue = dayOrders.reduce(
        (sum, order) => sum + order.amount,
        0
      );

      dailySales.push({
        date: date.toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
        }),
        revenue: dayRevenue,
        orders: dayOrders.length,
      });
    }

    // Get monthly sales for the last 6 months
    const monthlySales = [];
    for (let i = 5; i >= 0; i--) {
      const date = new Date();
      date.setMonth(date.getMonth() - i);
      date.setDate(1);
      date.setHours(0, 0, 0, 0);

      const nextDate = new Date(date);
      nextDate.setMonth(date.getMonth() + 1);

      const monthOrders = allOrders.filter((order) => {
        const orderDate = new Date(order.date);
        return orderDate >= date && orderDate < nextDate;
      });

      const monthRevenue = monthOrders.reduce(
        (sum, order) => sum + order.amount,
        0
      );

      monthlySales.push({
        month: date.toLocaleDateString("en-US", { month: "short" }),
        revenue: monthRevenue,
        orders: monthOrders.length,
      });
    }

    // Get top selling products
    const productSales = {};
    allOrders.forEach((order) => {
      order.items.forEach((item) => {
        if (productSales[item.name]) {
          productSales[item.name] += item.quantity;
        } else {
          productSales[item.name] = item.quantity;
        }
      });
    });

    const topProducts = Object.entries(productSales)
      .map(([name, quantity]) => ({ name, quantity }))
      .sort((a, b) => b.quantity - a.quantity)
      .slice(0, 5);

    // Order status distribution
    const statusCounts = {};
    allOrders.forEach((order) => {
      statusCounts[order.status] = (statusCounts[order.status] || 0) + 1;
    });

    const orderStatusData = Object.entries(statusCounts).map(
      ([status, count]) => ({
        status,
        count,
      })
    );

    res.json({
      success: true,
      dashboardData: {
        summary: {
          totalOrders: allOrders.length,
          totalRevenue,
          weeklyOrders: weeklyOrders.length,
          weeklyRevenue,
          monthlyOrders: monthlyOrders.length,
          monthlyRevenue,
          yearlyOrders: yearlyOrders.length,
          yearlyRevenue,
        },
        charts: {
          dailySales,
          monthlySales,
          topProducts,
          orderStatusData,
        },
      },
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export {
  placeOrder,
  placeOrderStripe,
  allOrders,
  updateStatus,
  userOrders,
  getDashboardData,
};
