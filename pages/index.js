import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/airbnb.ico" />
      </Head>

      <Header />

      <Banner />
    </div>
  );
}
