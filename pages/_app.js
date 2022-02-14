import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <Component className="bg-white-dark text-blue-dark dark:bg-blue-very-dark dark:text-white h-screen" {...pageProps} />;
}

export default MyApp;
