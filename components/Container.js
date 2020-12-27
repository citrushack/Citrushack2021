import Head from "next/head";
import { useRouter } from "next/router";
import { Nav } from "./Nav";

export const siteTitle = "Citrushack"

export default function Container({ children, main }) {
  const router = useRouter();

  return (
    <>
    <Nav/>
      {children}
    </>
  );
}
