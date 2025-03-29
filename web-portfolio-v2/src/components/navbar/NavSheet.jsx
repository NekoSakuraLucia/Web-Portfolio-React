import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { MenuList } from '@/components/navbar/MenuList';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';

const NavSheet = ({ isOpen, setIsOpen, ...props }) => {
    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <motion.div
                    initial={false}
                    animate={isOpen ? 'open' : 'closed'}
                    variants={{
                        open: {
                            rotate: 180, // หมุน 180 องศาเพื่อให้ดูมีการเปลี่ยนแปลงชัดเจน
                            scale: 1.1, // ขยายนิดหน่อยเพื่อเพิ่มความรู้สึก
                            transition: {
                                type: 'spring',
                                stiffness: 200,
                                damping: 20,
                            },
                        },
                        closed: {
                            rotate: 0,
                            scale: 1,
                            transition: {
                                type: 'spring',
                                stiffness: 200,
                                damping: 20,
                            },
                        },
                    }}
                    className='lg:cursor-pointer'
                >
                    {/* ใช้ motion.span เพื่อควบคุมการเปลี่ยนไอคอน */}
                    {isOpen ? (
                        <motion.span
                            key='x-icon'
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            transition={{ duration: 0.2 }}
                        >
                            <X />
                        </motion.span>
                    ) : (
                        <motion.span
                            key='menu-icon'
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Menu />
                        </motion.span>
                    )}
                </motion.div>
            </SheetTrigger>
            <SheetContent side='left'>
                <SheetHeader className='border-b'>
                    <SheetTitle>Mobile Menu</SheetTitle>
                    <SheetDescription>
                        UI สำหรับหน้าจอขนาดเล็กที่เหมาะกับอุปกรณ์ของคุณที่สุด
                    </SheetDescription>
                </SheetHeader>
                <div className='p-6 py-8'>
                    <ul className='space-y-6'>
                        <MenuList {...props} className='py-4 px-2' />
                    </ul>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export { NavSheet };
