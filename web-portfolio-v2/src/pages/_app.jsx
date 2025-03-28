import '@/styles/globals.css';
import { Mitr } from 'next/font/google';

const mitr = Mitr({
    weight: ['200', '300', '400', '500', '600', '700'],
    subsets: ['latin', 'thai'],
});

export default function App({ Component, pageProps }) {
    return (
        <div className={mitr.className}>
            <Component {...pageProps} />
        </div>
    );
}
