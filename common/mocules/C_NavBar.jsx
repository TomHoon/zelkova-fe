'use client';

import NavBarStyles from '@/styles/C_NavBar.module.scss';
import C_Button from '../atom/C_Button';

export default function Navbar({ elementList = [], callback }) {
  const handleClick = (idx, label) => {
    if (typeof callback === 'function') {
      callback(idx, label);
    }
  };

  return (
    <div className={NavBarStyles.wrapper}>
      <nav className={NavBarStyles.navbar}>
        <div className={NavBarStyles.logo}>
          <img src="/images/tree.png" alt="로고" />
        </div>

        <ul className={NavBarStyles.menu}>
          {elementList.map((item, idx) => (
            <li key={idx} className={NavBarStyles.menuItem}>
              <span onClick={() => handleClick(idx, item.label)}>{item.label}</span>
            </li>
          ))}
        </ul>

        <div className={NavBarStyles.login}>
          <C_Button title="로그인" size="nav" type="A" />
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
