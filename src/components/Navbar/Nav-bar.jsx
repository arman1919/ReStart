

import s from './Nav-bar.module.css';

const NavBar = () => {
    return (
        <nav className= {s.nav}>
          <div className={ `${s.item} ${s.active}`}>
            <a>Profile</a>
          </div>
          <div className={s.item}>
            <a>Messafes</a>
          </div>
          <div className={s .item}>
            <a>News</a>
          </div>
          <div className={s.item}>
            <a>Music</a>
          </div>
          <div className={s.item}>
            <a>Settings</a>
          </div>
        </nav>
    );
}

export default NavBar;