import "./Home.css";

const Home = () => {
  return (
    <div className="admin-home">
      <div className="welcome-banner">
        <h1>Welcome to Admin Panel</h1>
        <p>Manage your computer products store</p>
      </div>

      <div className="quick-info">
        <p>
          Please use the sidebar to navigate to different sections of the admin
          panel.
        </p>
        <p>You can add new products, view existing items, and manage orders.</p>
      </div>
    </div>
  );
};

export default Home;
