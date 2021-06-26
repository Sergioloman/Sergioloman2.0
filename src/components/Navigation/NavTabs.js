import React from 'react';
//copied from class module
function NavTabs(props) {
  const tabs = [ 'About', 'Portfolio','Media', 'Contact'];
  return (
    <ul>
      {tabs.map(tab => (
        <li key={tab}>
          <a
            href={'#' + tab.toLowerCase()}
            onClick={() => props.handlePageChange(tab)}
            className={
              props.currentPage === tab ? 'nav-link active' : 'nav-link'
            }
          >
            {tab}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default NavTabs;
