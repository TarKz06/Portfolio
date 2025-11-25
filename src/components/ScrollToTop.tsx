

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'auto',
        });
    }, [pathname]); // เรียกทุกครั้งที่ path เปลี่ยน

    return null;
};

export default ScrollToTop;
