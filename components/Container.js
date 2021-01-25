import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
// import { Nav } from "./Nav";
import dynamic from "next/dynamic";
import styles from "../styles/Common.module.css";

//Since the login state is stored client side, we need to make the nav bar hydrate after the static page load
//Might move the dynamic part just to the sign up button, but for for now this works fine
const Nav = dynamic(
  () =>
    import("./Nav").catch((err) => {
      return () => <p>oops... this failed to load</p>;
    }),
  { ssr: false }
);

export const siteTitle = "Citrushack";

export default function Container({ children, main }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <title>Citrus Hack</title>
        <meta name="title" content="Citrus Hack/"/>
        <meta name="description" content="Citrus Hack is where hundreds of students from all over the world come together and form teams, aiming to build a project from scratch in just 36 hours."/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://citrushack.com/"/>
        <meta property="og:title" content="Citrus Hack"/>
        <meta property="og:description" content="Citrus Hack is where hundreds of students from all over the world come together and form teams, aiming to build a project from scratch in just 36 hours."/>
        <meta property="og:image" content=""/>
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://citrushack.com/"/>
        <meta property="twitter:title" content="Citrus Hack"/>
        <meta property="twitter:description" content="Citrus Hack is where hundreds of students from all over the world come together and form teams, aiming to build a project from scratch in just 36 hours."/>
        <meta property="twitter:image" content=""/>
      </Head>
      <Nav />
      {children}
    </>
  );
}
