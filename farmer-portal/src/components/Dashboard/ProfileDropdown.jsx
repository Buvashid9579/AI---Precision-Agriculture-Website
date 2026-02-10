const ProfileDropdown = () => {
  return (
    <div className="profile-card">
      <div className="profile-info">
        <p><span>Name:</span> Farmer Ravi</p>
        <p><span>Location:</span> Pune, Maharashtra</p>
        <p><span>Farm Size:</span> 5 Acres</p>
      </div>

      <div className="profile-actions">
        <button className="profile-btn">View Profile</button>
        <button className="logout-btn">Logout</button>
      </div>
    </div>
  );
};

export default ProfileDropdown;
