import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { RxExit } from 'react-icons/rx';
import { IconContext } from 'react-icons';
import { FaUser } from 'react-icons/fa';
import s from './Header.module.scss';

export const Header = () => {
  return (
    <header className={s.container}>
      <section className={s.header}>
        <Link to="/home" className={s.link}>
          <Logo svg={s.link__logo} />
          <p className={s.link__title}>Wallet</p>
        </Link>
        <div className={s.wrapper}>
          <div className={s.user}>
            <IconContext.Provider
              value={{
                color: '#bdbdbd',
                className: 'global-class-name',
                size: '18px',
              }}
            >
              <div className={s.icon}>
                <FaUser value={{
                color: '#bdbdbd',
                className: 'global-class-name',
                size: '18px',
              }} />
              </div>
              <span className={s.user__name}>name</span>
            </IconContext.Provider>
          </div>
          <IconContext.Provider
            value={{ className: 'global-class-name', size: '24px' }}
          >
            <button className={s.logout__button} type="button">
              <RxExit />
              <span className={s.logout__text}>Exit</span>
            </button>
          </IconContext.Provider>
        </div>
      </section>
    </header>
  );
};
