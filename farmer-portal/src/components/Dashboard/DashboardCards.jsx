const DashboardCards = () => {
  return (
    <div className="cards-container">
      <div className="card">
        <h4>Soil Health</h4>
        <p>Good</p>
      </div>

      <div className="card">
        <h4>Moisture Level</h4>
        <p>45%</p>
      </div>

      <div className="card">
        <h4>Temperature</h4>
        <p>28°C</p>
      </div>

      <div className="card">
        <h4>Crop Suggestion</h4>
        <p>Wheat, Maize</p>
      </div>
    </div>
  );
};

export default DashboardCards;
