import React, { useState, useEffect } from 'react';
import './Home.css';
import Column from '../Column/Column.jsx';

const Home = ({ grouping, ordering }) => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then((response) => response.json())
      .then((data) => {
        setTickets(data.tickets);
        setUsers(data.users);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Sort tickets based on the ordering (priority or title)
  const sortedTickets = tickets.sort((a, b) => {
    if (ordering === 'priority') {
      return b.priority - a.priority; // Descending order of priority
    } else {
      return a.title.localeCompare(b.title); // Ascending order of title
    }
  });

  // Group tickets by the selected grouping type (status, user, or priority)
  const groupedTickets = () => {
    if (grouping === 'status') {
      const statuses = ['Backlog', 'Todo', 'In progress', 'Done', 'Cancelled'];
      return statuses.map((status) => ({
        status,
        tickets: sortedTickets.filter((ticket) => ticket.status === status),
      }));
    }

    if (grouping === 'user') {
      return users.map((user) => ({
        user,
        tickets: sortedTickets.filter((ticket) => ticket.userId === user.id),
      }));
    }

    if (grouping === 'priority') {
      const priorities = ['No priority', 'Urgent', 'High', 'Medium', 'Low'];
      return priorities.map((priority) => ({
        priority,
        tickets: sortedTickets.filter((ticket) => getPriorityLabel(ticket.priority) === priority),
      }));
    }

    return [];
  };

  const getPriorityLabel = (priority) => {
    switch (priority) {
      case 0:
        return 'No priority';
      case 1:
        return 'Urgent';
      case 2:
        return 'High';
      case 3:
        return 'Medium';
      case 4:
        return 'Low';
      default:
        return 'No priority';
    }
  };

  return (
    <div className="home">
      {groupedTickets().map((group, index) => (
        <Column key={index} group={group} grouping={grouping} />
      ))}
    </div>
  );
};

export default Home;
