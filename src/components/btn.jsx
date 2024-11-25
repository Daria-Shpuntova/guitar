import { useEffect, useState } from 'react';
import $ from 'jquery'; // Убедитесь, что jQuery установлен

const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = (e) => {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 300);
    };

    return (
        <button
            onClick={scrollToTop}
            className={`scroll-to-top ${visible ? 'show' : ''}`}
            style={{ display: visible ? 'block' : 'none' }} // Зависит от видимости
        >
            ↑
        </button>
    );
};

export default ScrollToTopButton;