import { NavItem } from '@/components/navbar/NavItem';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const MenuList = ({ items, isActive, className = '' }) => {
    const [isClient, setIsClient] = useState(false);
    const isTablet = useMediaQuery({ query: '(min-width: 768px)' });

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <>
            {isClient &&
                items.map((item, index) => (
                    <li key={index}>
                        <NavItem
                            isActive={isActive}
                            to={item.to}
                            isTablet={isTablet}
                        >
                            <div
                                className={`flex items-center gap-1.5 ${className}`}
                            >
                                {item.icon}
                                {item.title}
                            </div>
                        </NavItem>
                    </li>
                ))}
        </>
    );
};

export { MenuList };
