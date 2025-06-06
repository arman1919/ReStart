import s from './Nav-bar.module.css';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className= {s.nav}>
          <div className={s.item}>
            <NavLink to="/profile" className={({ isActive }) => isActive ? `${s.activeLink} ${s.item}` : s.item}>Profile</NavLink>
          </div>
          <div className={s.item}>
            <NavLink to="/dialogs" className={({ isActive }) => isActive ? `${s.activeLink} ${s.item}` : s.item}>Messages</NavLink>
          </div>
          <div className={s.item}>
            <NavLink to="/news" className={({ isActive }) => isActive ? `${s.activeLink} ${s.item}` : s.item}>News</NavLink>
          </div>
          <div className={s.item}>
            <NavLink to="/music" className={({ isActive }) => isActive ? `${s.activeLink} ${s.item}` : s.item}>Music</NavLink>
          </div>
          <div className={s.item}>
            <NavLink to="/settings" className={({ isActive }) => isActive ? `${s.activeLink} ${s.item}` : s.item}>Settings</NavLink>
          </div>
        </nav>
    );
}

export default NavBar;