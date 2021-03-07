import Link from 'next/link'
import { log } from '../src/logger';
interface Props {
  data: string;
}

const About = (props: Props) => {
  log('[About]')
  return (
    <div>
      <h1>About Page</h1>
      <Link href='/main'>Main</Link>
      <p>{props.data}</p>
    </div>
  );
}

About.getInitialProps = async () => {
  log('[About.getInitialProps]')
  return { data: `NOW: ${new Date()}` }
}

export default About;
