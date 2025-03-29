import Link from 'next/link';
import { motion } from 'framer-motion';

const NavItem = ({ to, children, isActive, isTablet }) => {
    return (
        <Link href={to} className='relative text-sm tracking-wider font-medium'>
            <span className='relative py-2'>
                {children}
                {isActive(to) &&
                    (isTablet ? (
                        <motion.span
                            layoutId='underline'
                            className='absolute inset-x-0 -bottom-0.5 h-0.5 bg-black dark:bg-white'
                            initial={false}
                            transition={{
                                type: 'spring',
                                bounce: 0.2,
                                duration: 0.6,
                            }}
                        />
                    ) : (
                        <motion.span
                            layoutId='box'
                            className='bg-zinc-100 dark:bg-zinc-900/50 border -z-1 absolute inset-0 rounded-xl'
                            initial={false}
                            transition={{
                                type: 'spring',
                                bounce: 0.2,
                                duration: 0.6,
                            }}
                        />
                    ))}
            </span>
        </Link>
    );
};

export { NavItem };
