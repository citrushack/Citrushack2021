import Head from "next/head";
import Container, { siteTitle } from "../components/Container";
import styles from "../styles/Common.module.css";
import { useEffect, useState } from "react";

import Hero from "./Hero";
import Intro from "./Intro";
import Faq from "./Faq";
import Sponsors from "./Sponsors";
import Volunteer from "./Volunteer";
import Footer from "../components/Footer";

import {
  Polyline,
  Renderer,
  Transform,
  Geometry,
  Program,
  Mesh,
  Vec3,
  Vec2,
  Color
} from "ogl";
import {
  Element,
  animateScroll as scroll,
} from "react-scroll";
const vertex = `
attribute vec3 position;
attribute vec3 next;
attribute vec3 prev;
attribute vec2 uv;
attribute float side;

uniform vec2 uResolution;
uniform float uDPR;
uniform float uThickness;

vec4 getPosition() {
    vec2 aspect = vec2(uResolution.x / uResolution.y, 1);
    vec2 nextScreen = next.xy * aspect;
    vec2 prevScreen = prev.xy * aspect;

    vec2 tangent = normalize(nextScreen - prevScreen);
    vec2 normal = vec2(-tangent.y, tangent.x);
    normal /= aspect;
    normal *= 1.0 - pow(abs(uv.y - 0.5) * 2.0, 2.0);

    float pixelWidth = 1.0 / (uResolution.y / uDPR);
    normal *= pixelWidth * uThickness;

    // When the points are on top of each other, shrink the line to avoid artifacts.
    float dist = length(nextScreen - prevScreen);
    normal *= smoothstep(0.0, 0.02, dist);

    vec4 current = vec4(position, 1);
    current.xy -= normal * side;
    return current;
}

void main() {
    gl_Position = getPosition();
}
`;
export default function Home() {
  
  useEffect(() => {
    const renderer = new Renderer({ dpr: 1, alpha: true,transparent: true });
    const gl = renderer.gl;
    document.body.appendChild(gl.canvas);
    gl.clearColor(0, 0, 0, 0);

    const scene = new Transform();

    let polyline;

    function resize() {
      renderer.setSize(window.innerWidth, window.innerHeight);
      if (polyline) polyline.resize();
    }
    window.addEventListener("resize", resize, false);

    // Create an array of Vec3s (eg [[0, 0, 0], ...])
    const count = 8;
    const points = [];
    for (let i = 0; i < count; i++) points.push(new Vec3());

    polyline = new Polyline(gl, {
      points,
      vertex,
      uniforms: {
        uColor: { value: new Color("#ed2424") },
        uThickness: { value: 20 }
      }
    });

    polyline.mesh.setParent(scene);

    // Call initial resize after creating the polylines
    resize();

    // Add handlers to get mouse position
    const mouse = new Vec3();
    if ("ontouchstart" in window) {
      window.addEventListener("touchstart", updateMouse, false);
      window.addEventListener("touchmove", updateMouse, false);
    } else {
      window.addEventListener("mousemove", updateMouse, false);
    }

    function updateMouse(e) {
      if (e.changedTouches && e.changedTouches.length) {
        e.x = e.changedTouches[0].pageX;
        e.y = e.changedTouches[0].pageY;
      }
      if (e.x === undefined) {
        e.x = e.pageX;
        e.y = e.pageY;
      }

      // Get mouse value in -1 to 1 range, with y flipped
      mouse.set(
        (e.x / gl.renderer.width) * 2 - 1,
        (e.y / gl.renderer.height) * -2 + 1,
        0
      );
    }

    const tmp = new Vec3();

    requestAnimationFrame(update);
    function update(t) {
      requestAnimationFrame(update);

      // Update polyline input points
      for (let i = points.length - 1; i >= 0; i--) {
        if (!i) {
          // Ease the first point to the mouse
          points[i].lerp(mouse, 0.5);
        } else {
          // Ease to the previous point
          points[i].lerp(points[i - 1], 0.5);          
        }
      }
      polyline.updateGeometry();

      renderer.render({ scene });
    }
  }, []);

  return (
    <Container main>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <Element name="Home">
          <Hero />
        </Element>
        <Element name="About">
          <Intro />
        </Element>
        <Element name="Questions">
          <Faq />
        </Element>
        <Element name="Help">
          <Volunteer />
        </Element>
        <Element name="Sponsors">
          <Sponsors />
        </Element>
      </div>
      <Footer />
    </Container>
  );
}
