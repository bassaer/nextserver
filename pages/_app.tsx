import App, { AppProps, AppContext } from 'next/app';
import { log } from '../src/logger';

const MyApp = ({ Component, pageProps }: AppProps) => {
  log('[MyApp]');
  return <Component {...pageProps} />
}

MyApp.getIntialProps = async (appContext: AppContext) => {
  log('[MyApp.getIntialProps]');
  const props = await App.getInitialProps(appContext);
  return { ...props };
}

export default MyApp;
