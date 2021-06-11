import Head from "next/head";

export default function PageTitle(props) {
  return (
    <Head>
      <title>{props.title}</title>
    </Head>
  );
}
