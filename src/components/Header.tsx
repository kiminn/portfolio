import React, { useEffect, useRef, useState } from 'react';

import { headerNav } from '@/constants';

const Header = () => {
    const headerRef = useRef<HTMLElement>(null);
    const [show, setShow] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number | null>(null); // 활성 링크의 인덱스 상태
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setShow((prevShow) => !prevShow);
    };

    const handleLinkClick = (index: number) => {
        setActiveIndex(index); // 클릭된 링크의 인덱스를 활성화
    };
    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true); // 스크롤이 발생하면 true로 설정
        } else {
            setIsScrolled(false); // 스크롤이 위로 올라가면 false로 설정
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header id="header" role="banner" ref={headerRef} className={isScrolled ? 'scrolled' : ''}>
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
