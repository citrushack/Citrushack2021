import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useSignIn } from "react-auth-kit";
import { fetch } from "whatwg-fetch";
import Container, { siteTitle } from "../../../components/Container";
import styles from "../../../styles/Common.module.css";

const backendUrl = "http://localhost:1337";

export default function Redirect() {
  const router = useRouter();
  const [text, setText] = useState("Loading...");
  const signIn = useSignIn();

  useEffect(() => {
    // Successfully logged with google
    // Now logging with strapi by using the access_token (given by the provider) in props.location.search
    const queryString = new URLSearchParams(router.query).toString();
    if (!queryString.length) return;
    fetch(`${backendUrl}/auth/google/callback?${queryString}`)
      .then((res) => {
        if (res.status !== 200) {
          console.log(res);
          throw new Error(`Couldn't login to Strapi. Status: ${res.status}`);
        }

        return res;
      })
      .then((res) => res.json())
      .then((res) => {
        // Successfully logged with Strapi
        // Now saving the jwt to use it for future authenticated requests to Strapi

        if (
          signIn({
            token: res.jwt,
            expiresIn: 10080,
            tokenType: "Bearer",
            authState: res.user,
          })
        ) {
          setText("Wait just a moment...");
          if (res.user.appComplete) {
            setTimeout(() => router.push("/account"), 1000);
          } else {
            setTimeout(() => router.push("/apply"), 1000);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [router.query]);

  return (
    <Container main>
      <main className={styles.main}>
        <h1>{text}</h1>
      </main>
    </Container>
  );
}
