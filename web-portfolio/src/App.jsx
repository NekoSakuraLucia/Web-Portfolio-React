import PropTypes from 'prop-types';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer/Footer';

function App({ children }) {
    return (
        <div className="min-h-screen bg-white dark:bg-neutral-950 transition-colors duration-300 flex flex-col">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
        </div>
    );
}

App.propTypes = {
    children: PropTypes.node.isRequired,
};

export default App;
