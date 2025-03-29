import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Home, User, Contact, Book } from 'lucide-react';
import { MenuList } from '@/components/navbar/MenuList';
import { NavSheet } from '@/components/navbar/NavSheet';

const Navbar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { icon: <Home size={18} />, title: 'หน้าแรก', to: '/' },
        { icon: <User size={18} />, title: 'เกี่ยวกับ', to: '/about' },
        { icon: <Book size={18} />, title: 'ผลงาน', to: '/projects' },
        { icon: <Contact size={18} />, title: 'ติดต่อ', to: '/contact' },
    ];

    const isActive = (href) => {
        return pathname === href;
    };

    return (
        <div className='fixed top-0 z-50 w-full py-5 transition-all duration-300 border-b'>
            <div className='container mx-auto px-3 md:px-0 max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl'>
                <div className='flex items-center justify-between py-2'>
                    <div>
                        <h1 className='text-2xl font-semibold'>Your Name</h1>
                    </div>
                    <ul className='hidden md:flex items-center gap-7'>
                        {menuItems.length >= 5 ? (
                            <NavSheet
                                isOpen={isOpen}
                                setIsOpen={setIsOpen}
                                items={menuItems}
                                isActive={isActive}
                            />
                        ) : (
                            <MenuList items={menuItems} isActive={isActive} />
                        )}
                    </ul>
                    <div className='md:hidden block'>
                        <NavSheet
                            isOpen={isOpen}
                            setIsOpen={setIsOpen}
                            items={menuItems}
                            isActive={isActive}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Navbar };
