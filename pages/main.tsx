import { NextPageContext } from 'next';
import Link from 'next/link';
import { parse } from 'url';
import { log } from '../src/logger';

interface Props {
  data: string;
}

const Main = (props: Props) => {
  log('[Main]')
  return (
    <div>
      <h1>Main Page</h1>
      <Link href='/about'>About</Link>
      <p>data: {props.data}</p>
    </div>
  );
}

Main.getInitialProps = async ({ req }: NextPageContext) => {
  log('[Main.getInitialProps]')
  if (!req?.url) {
    return { data: '???' }
  }
  const query = parse(req.url, true).query;
  if (query['debug'] === 'error') {
    throw new Error();
  }
  return { data: req?.url }
}


export default Main;
