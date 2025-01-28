import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Portfolio - Budi Rahmawan</title>
        <meta
          name="description"
          content="I’m Budi Rahmawan. I live in Pekalongan City, where I design the future."
        />
      </Head>
      <body id="root" className="bg-zinc-900 text-zinc-50">
      <Main/>
      <NextScript/>
      </body>
    </Html>
  );
}
