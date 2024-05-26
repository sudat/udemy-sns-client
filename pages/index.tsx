import Timeline from "@/src/components/Timeline";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>SNS Udemy</title>
        <meta name="description" content="SNS Udemy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      <div>
        <Timeline />
      </div>
    </>
  );
}
