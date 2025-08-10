'use client';

import NavBarStyles from '@/styles/C_NavBar.module.scss';
import C_Button from '../atom/C_Button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Navbar({ elementList = [], callback }) {
  const [ishovering, setIsHovering] = useState(false);
  const router = useRouter();

  const handleClick = (idx, label) => {
    if (typeof callback === 'function') {
      callback(idx, label);
    }

    const url = [
      '/notice/boardList',
      '/familynotice/boardList',
      '/volunteer/boardList',
      '/community/boardList',
    ][idx ?? 0];

    router.push(url);
  };

  const handleHovering = () => {
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      className={NavBarStyles.wrapper}
      onMouseEnter={handleHovering}
      onMouseLeave={handleMouseLeave}
    >
      <nav className={`${NavBarStyles.navbar} ${ishovering ? NavBarStyles.active : ''}`}>
        <div className={NavBarStyles.logo}>
          <Link href="/wonjun/mainPage">
            <img src="/images/tree.png" alt="로고" />
          </Link>
        </div>

        <ul className={NavBarStyles.menu}>
          {elementList.map((item, idx) => (
            <li key={idx} className={NavBarStyles.menuItem}>
              <span onClick={() => handleClick(idx, item.label)}>{item.label}</span>
              {/* {item.submenu} */}
              <ul
                className={`${NavBarStyles.menuHideItem} ${ishovering ? NavBarStyles.active : ''}`}
              >
                {item.submenu && item.submenu.map((sub, idx) => <li key={idx}>{sub}</li>)}
              </ul>
            </li>
          ))}
        </ul>

        <div className={NavBarStyles.login}>
          <C_Button title="로그인" size="nav" type="A" onClick={() => router.push('/login')} />
          <C_Button title="회원가입" size="nav" type="B" />
        </div>
      </nav>
    </div>
  );
}

