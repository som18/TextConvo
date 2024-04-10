import React , { UseState } from 'react'

export default function Darkmode() {
    const [isDarkMode, setIsDarkMode] = UseState(false);
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
      };
      const appStyle = {
        backgroundColor: isDarkMode ? '#333' : '#fff',
        color: isDarkMode ? '#fff' : '#333',
      };
      return (
        <div style={appStyle}>
          <input
            type="text"
            style={{ backgroundColor: isDarkMode ? '#444' : '#fff', color: isDarkMode ? '#fff' : '#333' }}
          />
          <button onClick={toggleDarkMode}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      </div>
      );
}
