import React, { useState, useEffect } from 'react';
import '../App.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface NavbarProps {
    setActiveSection: (section: string) => void;
}

export function Navbar({setActiveSection}: NavbarProps) {
    const [isMobile, setIsMobile] = useState(false);
    //const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);
    const navRef = React.useRef<HTMLDivElement>(null);

    const navItems = [
        { id: 'main', label: 'Home' },
        { id: 'products', label: 'Products' },
        { id: 'services', label: 'Services' },
        { id: 'contact', label: 'Contact' },
        { id: 'blog', label: 'Blog' }
    ];

    const handleClick = (section: string) => {
        setActiveSection(section);
        // if (isMobile) {
        //     setShowMobileMenu(false);
        // }
    };

    // Check screen size and update isMobile state
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    // Check scroll position for arrows visibility
    useEffect(() => {
        const checkScroll = () => {
            if (navRef.current && isMobile) {
                const { scrollLeft, scrollWidth, clientWidth } = navRef.current;
                setScrollPosition(scrollLeft);
                setCanScrollLeft(scrollLeft > 0);
                setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
            }
        };

        const navElement = navRef.current;
        if (navElement) {
            navElement.addEventListener('scroll', checkScroll);
            checkScroll(); // Initial check
        }

        return () => {
            if (navElement) {
                navElement.removeEventListener('scroll', checkScroll);
            }
        };
    }, [isMobile]);

    const scrollNav = (direction: 'left' | 'right') => {
        if (navRef.current) {
            const scrollAmount = 150;
            const newPosition = direction === 'left' 
                ? Math.max(0, scrollPosition - scrollAmount)
                : scrollPosition + scrollAmount;
            
            navRef.current.scrollTo({
                left: newPosition,
                behavior: 'smooth'
            });
        }
    };

    // Desktop Navbar
    const DesktopNavbar = () => (
        <nav className='nav desktop-nav'>
            {navItems.map((item) => (
                <a 
                    key={item.id}
                    href={`#${item.id}`} 
                    onClick={(e) => {
                        e.preventDefault();
                        handleClick(item.id);
                    }}
                    className="nav-link"
                >
                    {item.label}
                </a>
            ))}
        </nav>
    );

    // Mobile Navbar with scrollable links
    const MobileNavbar = () => (
        <div className="mobile-nav-container">
            {/* <button 
                className="mobile-menu-toggle"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                aria-label={showMobileMenu ? "Close menu" : "Open menu"}
            >
                {showMobileMenu ? <FaTimes /> : <FaBars />}
            </button> */}

            {/* {showMobileMenu && (
                <div className="mobile-menu-overlay" onClick={() => setShowMobileMenu(false)}>
                    <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
                        <div className="mobile-menu-header">
                            <h3>Menu</h3>
                            <button 
                                className="close-menu"
                                onClick={() => setShowMobileMenu(false)}
                                aria-label="Close menu"
                            >
                                <FaTimes />
                            </button>
                        </div>
                        <div className="mobile-menu-links">
                            {navItems.map((item) => (
                                <a 
                                    key={item.id}
                                    href={`#${item.id}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleClick(item.id);
                                    }}
                                    className="mobile-nav-link"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            )} */}

            {/* Scrollable Navbar for Mobile */}
            <div className="scrollable-nav-wrapper">
                {canScrollLeft && (
                    <button 
                        className="nav-scroll-button left"
                        onClick={() => scrollNav('left')}
                        aria-label="Scroll left"
                    >
                        <FaChevronLeft />
                    </button>
                )}
                
                <div className="scrollable-nav" ref={navRef}>
                    <nav className="nav mobile-scroll-nav">
                        {navItems.map((item) => (
                            <a 
                                key={item.id}
                                href={`#${item.id}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleClick(item.id);
                                }}
                                className="nav-link mobile-scroll-link"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>
                </div>

                {canScrollRight && (
                    <button 
                        className="nav-scroll-button right"
                        onClick={() => scrollNav('right')}
                        aria-label="Scroll right"
                    >
                        <FaChevronRight />
                    </button>
                )}
            </div>
        </div>
    );

    return (
        <>
            {isMobile ? MobileNavbar()  : DesktopNavbar()}
        </>
    );
}