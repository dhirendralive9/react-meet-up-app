import { Link } from 'react-router-dom';

import css from './MainNavigation.module.css';

const MainNavigation = ()=>{
  return <header className={css.header}>
     <div className={css.logo}>React Meetups</div>
     <nav>
        <ul>
            <Link to='/'>All Meetups</Link>
        </ul>
        <ul>
            <Link to='/new-meetup'>New Meetups</Link>
        </ul>
        <ul>
            <Link to='/favorites'>Favorites</Link>
        </ul>
     </nav>
  </header>
}

export default MainNavigation;