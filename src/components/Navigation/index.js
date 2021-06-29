import React from 'react';
import Header from '../Header'

function NavTabs({ currentPage, handlePageChange}) {
  
  const tabs = [ 'About', 'Portfolio','Resume','Contact'];
  return (
    <header> 
      <Header/>
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
