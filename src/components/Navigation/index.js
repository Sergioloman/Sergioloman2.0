import React from 'react';

function NavTabs({ currentPage, handlePageChange}) {
  
  const tabs = [ 'About', 'Portfolio'];
  return (
    <header> 
    <div id="title">
        <a href="/">
            <h1>Sergio Torres</h1>
        </a>
        <h2>Web developer at <span><a href="https://youtu.be/tZyQRXxzsFI">Once upon...</a></span></h2>
    </div>
    <nav>

    <ul>
      {tabs.map(tab => (
        <li key={tab}>
          <a
            href={'#' + tab.toLowerCase()}
            onClick={() => handlePageChange(tab)}
            className={
              currentPage === tab ? 'nav-link active' : 'nav-link'
            }
          >
            {tab}
          </a>
        </li>
      ))}
    </ul>
    </nav>
    </header>
  );
}

export default NavTabs;
