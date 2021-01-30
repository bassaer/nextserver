import { NextPageContext } from 'next';
import { parse } from 'url';
import { log } from '../src/logger';

interface Props {
  data: string;
}

const Main = (props: Props) => {
  log('[Main]')
  return (
    <div>
      <p>Main Page</p>
      data: {props.data}
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
