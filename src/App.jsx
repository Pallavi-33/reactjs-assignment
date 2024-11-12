import React, { useState } from 'react';
import './App.css';
import Home from './components/Home/Home.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [grouping, setGrouping] = useState('status'); // Default grouping: status
  const [ordering, setOrdering] = useState('priority'); // Default ordering: priority

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleGroupingChange = (e) => {
    setGrouping(e.target.value);
  };

  const handleOrderingChange = (e) => {
    setOrdering(e.target.value);
  };

  return (
    <div>
      <div className="head">
        <button className="display-button" onClick={toggleDropdown}>
          <FontAwesomeIcon icon={faFilter} />
          Display
          <FontAwesomeIcon icon={faChevronDown} />
        </button>

        {dropdownOpen && (
          <div className="dropdown">
            <div className="grouping">
              <label>Grouping</label>
              <select value={grouping} onChange={handleGroupingChange}>
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>
            <div className="ordering">
              <label>Ordering</label>
              <select value={ordering} onChange={handleOrderingChange}>
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        )}
      </div>

      <div>
        <Home grouping={grouping} ordering={ordering} />
      </div>
    </div>
  );
};

export default App;
