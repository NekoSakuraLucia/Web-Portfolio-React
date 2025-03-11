import { NavLink } from 'react-router';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { TypeAnimation } from 'react-type-animation';

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
                        <h2 className="inline-block text-sm font-semibold text-indigo-600 tracking-wide uppercase bg-indigo-50/80 px-6 py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-300">
                            ยินดีต้อนรับสู่พอร์ตโฟลิโอของผม
                        </h2>
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
