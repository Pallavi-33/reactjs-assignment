import React from 'react';
import './Card.css';

const Card = ({ user, title, tag, grouping, status }) => {
  // Map status values to corresponding image URLs
  const statusImages = {
    'Done': 'Done.svg',
    'Backlog': 'Backlog.svg',
    'Todo': 'To-do.svg',
    'In progress': 'in-progress.svg',
  };

  // Function to get the image based on the status
  const getStatusImage = (status) => {
    return statusImages[status] || null; // Return the image or null if not found
  };

  return (
    <div className="card">
      <div className="user">
        <div className="user-upper">
          <div className="user-left">
            {user}
          </div>
          <div className="user-right">
            {/* Show the user avatar image if grouping is not "user" */}
            {grouping !== 'user' ? <img src={`https://i.pravatar.cc/150?u=${user}`} alt="User" className="user-avatar" /> : null}
          </div>
        </div>

        <div className="user-lower">
          <div className="status-img">
            {/* Show the status image before the title if grouping is priority or user */}
            {(grouping === 'priority' || grouping === 'user') && status && (
              <img src={getStatusImage(status)} alt="Status" className="status-avatar" />
            )}
          </div>
          <div className="title">{title}</div>

          <div className="user-lower-lower">
            <p>
              {grouping !== 'priority' ? (
                <img src={'3dotMenu.svg'} alt="Menu" className="user-avatar" />
              ) : null}
            </p>
            <div className="tag">
              <span className="dot">•</span>{tag}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
