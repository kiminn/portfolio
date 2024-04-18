import React, { useState } from 'react';

import { headerNav } from '@/constants';

const Header = () => {
    const [show, setShow] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number | null>(null); // 활성 링크의 인덱스 상태

    const toggleMenu = () => {
        setShow((prevShow) => !prevShow);
    };

    const handleLinkClick = (index: number) => {
        setActiveIndex(index); // 클릭된 링크의 인덱스를 활성화
    };

    return (
        <header id="header" role="banner">
            <div className="header__inner">
                <div className="header__logo">
                    <h1>
                        <a href="#">
                            portfolio<em>next.js</em>
                        </a>
                    </h1>
                </div>
                <nav className={`header__nav ${show ? 'show' : ''}`} role="navigation" aria-label="메인 메뉴">
                    <ul>
                        {headerNav.map((nav, key) => (
                            <li key={key} className={key === activeIndex ? 'active' : ''}>
                                <a href={nav.url} onClick={() => handleLinkClick(key)}>
                                    {nav.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div
                    className="header__nav__mobile"
                    id="headerToggle"
                    aria-controls="primary-menu"
                    aria-expanded={show ? 'true' : 'false'}
                    role="button"
                    tabIndex={0}
                    onClick={toggleMenu}
                >
                    <span></span>
                </div>
            </div>
        </header>
    );
};

export default Header;
