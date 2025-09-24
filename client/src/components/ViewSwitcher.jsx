const ViewSwitcher = ({ currentView, setCurrentView }) => {
  const views = ["Monthly", "Quarterly", "Yearly"];

  return (
    <div className="view-switcher" style={{ margin: "1rem 0" }}>
      {views.map((view) => (
        <button
          key={view}
          className={
            currentView.toLowerCase() === view.toLowerCase() ? "active" : ""
          }
          onClick={() => setCurrentView(view.toLowerCase())}
          style={{
            padding: "8px 16px",
            fontSize: "16px",
            marginRight: "10px",
          }}>
          {view}
        </button>
      ))}
    </div>
  );
};

export default ViewSwitcher;
