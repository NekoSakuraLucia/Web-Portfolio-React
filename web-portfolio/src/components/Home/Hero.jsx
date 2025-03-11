import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router';
import { TypeAnimation } from 'react-type-animation';
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Hero = () => {
    return (
        <div
            className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center"
            id="home"
        >
            <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <div className="inline-flex group relative rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]">
                            <span
                                className={cn(
                                    'absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]'
                                )}
                                style={{
                                    WebkitMask:
                                        'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                    WebkitMaskComposite: 'destination-out',
                                    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                    maskComposite: 'subtract',
                                    WebkitClipPath: 'padding-box',
                                }}
                            />
                            <AnimatedGradientText className="text-sm font-semibold">
                                ยินดีต้อนรับสู่พอร์ตโฟลิโอของผม
                            </AnimatedGradientText>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="mt-6"
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                            <span className="block text-gray-900 dark:text-gray-100">
                                สวัสดี, ผมคือ
                            </span>
                            <span className="block mt-2">
                                <TypeAnimation
                                    sequence={[
                                        'นักพัฒนาเว็บ',
                                        1000,
                                        'Frontend Developer',
                                        1000,
                                        'Your Name',
                                        2000,
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    repeat={Infinity}
                                    className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"
                                />
                            </span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="mt-6 max-w-2xl mx-auto text-lg text-gray-600"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.8 }}
                        className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <NavLink
                            to="/contact"
                            className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                        >
                            ติดต่อ
                        </NavLink>
                        <NavLink
                            to="/projects"
                            className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 rounded-full font-medium hover:bg-indigo-50 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                        >
                            ดูผลงาน
                        </NavLink>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.6 }}
                        className="mt-12 flex justify-center space-x-8"
                    >
                        {[
                            {
                                Icon: FiGithub,
                                href: 'https://github.com',
                                label: 'GitHub',
                            },
                            {
                                Icon: FiLinkedin,
                                href: 'https://linkedin.com',
                                label: 'LinkedIn',
                            },
                            {
                                Icon: FiMail,
                                href: 'https://gmail.com',
                                label: 'Email',
                            },
                        ].map(({ Icon, href, label }) => (
                            <motion.a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 text-gray-600 hover:text-indigo-600 transition-all duration-300 rounded-full hover:bg-indigo-50 hover:shadow-md"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Icon size={28} />
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
