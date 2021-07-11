const Footer = ({ darkMode }) => {
  return (
    <footer className={darkMode ? "footer-dark white" : undefined}>
      <div className="center-footer">
        <p className="p-footer">
          Made with{" "}
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noreferrer"
            className={darkMode ? "a-dark" : undefined}
          >
            React
          </a>{" "}
          at{" "}
          <a
            href="https://www.lereacteur.io/"
            target="_blank"
            rel="noreferrer"
            className={darkMode ? "a-dark" : undefined}
          >
            Le Reacteur
          </a>{" "}
          by{" "}
          <a
            href="https://github.com/Remi-deronzier"
            target="_blank"
            rel="noreferrer"
            className={darkMode ? "a-dark" : undefined}
          >
            Rémi
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
