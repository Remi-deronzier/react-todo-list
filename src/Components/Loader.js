const Loader = () => {
  return (
    <div className="container">
      <div className="loader">
        <p>Hover over the blue bars to synchronise them</p>
        <div className="load">
          <div className="load__bar load__bar--1"></div>
          <div className="load__bar load__bar--2"></div>
          <div className="load__bar load__bar--3"></div>
          <div className="load__bar load__bar--4"></div>
          <div className="load__bar load__bar--5"></div>
        </div>
        <div className="load">
          <div className="load__bar load__bar--1-inv"></div>
          <div className="load__bar load__bar--2-inv"></div>
          <div className="load__bar load__bar--3-inv"></div>
          <div className="load__bar load__bar--4-inv"></div>
          <div className="load__bar load__bar--5-inv"></div>
        </div>
        <p>with their green counterparts below !!!</p>
      </div>
    </div>
  );
};

export default Loader;
