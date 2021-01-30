import { NextPageContext } from "next";

interface Props {
  statusCode: number
}

const Error = (props: Props) => {
  return <p style={{ color: '#ff0000' }}>Error: {props.statusCode}</p>
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res?.statusCode ? res.statusCode : err?.statusCode;
  return { statusCode }
}

export default Error;
