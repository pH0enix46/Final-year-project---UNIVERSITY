import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    let token = req.headers.token;

    // Check for Bearer token in Authorization header
    if (!token && req.headers.authorization) {
      token = req.headers.authorization.replace("Bearer ", "");
    }

    // Temporary bypass for testing - remove this in production
    if (token === "test" || token === "demo") {
      return next();
    }

    if (!token) {
      return res.json({
        success: false,
        message: "Not Authorized Login Again",
      });
    }
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.json({
        success: false,
        message: "Not Authorized Login Again",
      });
    }
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default adminAuth;
