import { Link } from 'react-router-dom'

const MainNavigation = ()=>{
  return <header>
     <div>React Meetups</div>
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