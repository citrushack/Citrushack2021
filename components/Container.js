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
      <Nav />
      {children}
    </>
  );
}
