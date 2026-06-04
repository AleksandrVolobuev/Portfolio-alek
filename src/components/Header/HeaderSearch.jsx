import React from 'react';

const HeaderSearch = () => (
  <div className="header-search">
    <form>
      <input type="text" placeholder="Search..." />
      <div className="icon-search"><i className="fa-solid fa-magnifying-glass"></i></div>
    </form>
  </div>
);

export default HeaderSearch;
