import React from 'react';
import './UserAside.css';

const UserAside = ({
  profileImageUrl,
  username,
  messageCount
}) => (
  <aside className="col-sm-4" id="home-aside">
    <div className="panel panel-default">
      <img src={profileImageUrl} alt={username} id="profile-image"/>
      <div className="row text-center">
      </div>
    </div>
  </aside>
)

export default UserAside;
