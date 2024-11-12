import React from 'react';
import './Column.css';
import Card from '../Card/Card.jsx';

const userImages = [
  'https://randomuser.me/api/portraits/men/1.jpg',
  'https://randomuser.me/api/portraits/men/2.jpg',
  'https://randomuser.me/api/portraits/men/3.jpg',
  'https://randomuser.me/api/portraits/women/1.jpg',
  'https://randomuser.me/api/portraits/women/2.jpg',
  'https://randomuser.me/api/portraits/women/3.jpg',
];

const Column = ({ group, grouping }) => {
  // Render icon based on grouping and group status
  const renderStatusIcon = (status) => {
    switch (status) {
      case 'Todo':
        return <img src="To-do.svg" alt="To Do" />;
      case 'Backlog':
        return <img src="Backlog.svg" alt="Backlog" />;
      case 'Cancelled':
        return <img src="Cancelled.svg" alt="Cancelled" />;
      case 'In progress':
        return <img src="in-progress.svg" alt="In Progress" />;
      case 'Done':
        return <img src="Done.svg" alt="Done" />;
      default:
        return null;
    }
  };
  const renderPriorityIcon = (status) => {
    switch (status) {
      case 'No priority':
        return <img src="No-priority.svg" alt="To Do" />;
      case 'Urgent':
        return <img src="UrgP.svg" alt="Backlog" />;
      case 'High':
        return <img src="HighP.svg" alt="Cancelled" />;
      case 'Medium':
        return <img src="MedP.svg" alt="In Progress" />;
      case 'Low':
        return <img src="LowP.svg" alt="Done" />;
      default:
        return null;
    }
  };

  return (
    <div className="column">
      <div className="header">
        <div className="header-left">
          {grouping === 'status' && renderStatusIcon(group.status)}
          {grouping === 'priority' && renderPriorityIcon(group.priority)}
          {grouping === 'user' && <img src={userImages[Math.floor(Math.random() * userImages.length)]} alt="User" />}
          <p>{grouping === 'status' ? group.status : grouping === 'user' ? group.user.name : group.priority}</p>
          <p>{group.tickets.length}</p>
        </div>
        <div className="header-right">
          <p>+</p>
          <p>•••</p>
        </div>
      </div>

      <div className="cards">
        {group.tickets.map((ticket) => (
          <div className="p-card" key={ticket.id}>
            <Card
              user={ticket.userId}
              title={ticket.title}
              tag={ticket.tag.join(', ')}
              grouping={grouping}
              status={ticket.status} // Passing the status to the Card component
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Column;
