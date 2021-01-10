import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { Nav } from "./Nav";

import styles from "../styles/Common.module.css"

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
