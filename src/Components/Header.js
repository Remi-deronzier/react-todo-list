import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ handleDarkMode, darkMode }) => {
  return (
    <header className={darkMode ? "header-dark" : undefined}>
      <div className="container nav">
        <div className="call1">
          <FontAwesomeIcon icon="list-alt" className="list-alt" />
          <h1 className={darkMode ? "white" : undefined}>Todo List</h1>
        </div>
        <div className="call2">
          <p
            className={
              darkMode ? "white p-toggle-dark-light" : "p-toggle-dark-light"
            }
          >
            Click to change the display mode
          </p>
          <div className="btn-toggle">
            <input
              type="checkbox"
              id="toggle"
              className="toggle-dark-light"
              onChange={handleDarkMode}
            />
            <label htmlFor="toggle" className="lb-toggle-dark-light"></label>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
