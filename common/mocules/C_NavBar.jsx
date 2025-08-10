'use client';

import NavBarStyles from '@/styles/C_NavBar.module.scss';
import C_Button from '../atom/C_Button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Navbar({ elementList = [], callback }) {
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

  return (
    <div className={NavBarStyles.wrapper}>
      <nav className={NavBarStyles.navbar}>
        <div className={NavBarStyles.logo}>
          <Link href="/">
            <img src="/images/tree.png" alt="로고" />
          </Link>
        </div>

        <ul className={NavBarStyles.menu}>
          {elementList.map((item, idx) => (
            <li key={idx} className={NavBarStyles.menuItem}>
              <span onClick={() => handleClick(idx, item.label)}>{item.label}</span>
            </li>
          ))}
        </ul>

        <div className={NavBarStyles.login}>
          <C_Button title="로그인" size="nav" type="A" onClick={() => router.push('/login')} />
          <C_Button title="회원가입" size="nav" type="B" />
        </div>
      </nav>

      <div className={NavBarStyles.dropdown}>
        {elementList
          .filter(menu => menu.submenu && menu.submenu.length > 0)
          .map((menu, idx) => (
            <div key={idx} className={NavBarStyles.dropdownColumn}>
              {menu.submenu.map((sub, subIdx) => (
                <div
                  key={subIdx}
                  className={NavBarStyles.dropdownItem}
                  onClick={() => handleClick(idx, sub)}
                >
                  {sub}
                </div>
              ))}
            </div>
          ))}
        <div className={NavBarStyles.dropdownImage}>
          <img src="/images/tree.png" alt="트리 이미지" />
        </div>
      </div>
    </div>
  );
}
