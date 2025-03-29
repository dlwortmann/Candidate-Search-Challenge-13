import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const currentPage = useLocation().pathname;
  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <nav>
      <ul className='nav nav-tabs'>
        <li className='nav-item'>
          <h2>
            <Link
              to="/"
              className={currentPage === '/' ? 'nav-link-active' : 'nav-link'}>
                Home</Link>
          </h2>
        </li>
        <li className='nav-item'>
          <h2>
            <Link
              to="/SavedCandidates"
              className={currentPage === '/SavedCandidates' ? 'nav-link-active' : 'nav-link'}>
              Saved Candidates
            </Link>
          </h2>
        </li>
      </ul>
    </nav>
  )
};

export default Nav;
