import React from 'react';
import './ProfilePage.css';

const ProfilePage = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        {/* <div className="profile-image">
          <img src="" alt="Profile" />
        </div> */}
        <div className="profile-info">
          <h1>Your Name<span>your id</span></h1>
          <p>country</p>
          <p>Languages: English</p>
        </div>
      </div>
      
      <div className="profile-body">
        <div className="bio-section">
          <h2>Biography</h2>
          <p>Your biography goes here. Share a bit about yourself...</p>
        </div>
        
        <div className="interests-section">
          <h2>Interests</h2>
          <div className="interests">
            <span>interst 1</span>
            <span>interst 2</span>
            <span>interst 3</span>
          </div>
        </div>
        
        <div className="links-section">
          <h2>Social Media Links</h2>
          <ul>
            <li><a href="#" target="_blank">LinkedIn</a></li>
            <li><a href="#" target="_blank">GitHub</a></li>
            <li><a href="#" target="_blank">Twitter</a></li>
          </ul>
        </div>
        
        <div className="actions-section">
          <button>Edit Profile</button>
          <button className="logout-btn">Log Out</button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

