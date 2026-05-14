import Head from "next/head";
import AboutSection from "@/components/AboutSection";

export default function About() {
  return (
    <>
      <Head>
        <title>About - Shabrina Amalia Safaana</title>
        <meta
          name="description"
          content="About Shabrina Amalia Safaana - Backend Developer and Informatics Engineering student at ITS."
        />
      </Head>
      <AboutSection />
    </>
  );
}
