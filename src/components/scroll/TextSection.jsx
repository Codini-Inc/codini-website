"use client";
import React from "react";
import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";
const TextWrapper = ({ children }) => {
  const text = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: text,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [1, 0.8, 0], [1, 1, 0.5]);
  const x = useTransform(scrollYProgress, [1, 0.4, 0], [0, 0, -100]);
  const colorChange = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [
      "hsla(180, 7%, 75%, 0.9)",
      "hsla(180, 7%, 75%, 0.9)",
      "#f2994a",
      "#f2994a",
      "#f2994a",
      "#f2994a",
    ]
  );
  return (
    <div ref={text}>
      <motion.p style={{ opacity, x, color: colorChange }}>{children}</motion.p>
    </div>
  );
};
function TextSection() {
  return (
    <TextSectionStyled>
      <TextWrapper>
        Lorem ipsum dolor, sit amet consectetur adipisicing.
      </TextWrapper>
    </TextSectionStyled>
  );
}
const TextSectionStyled = styled.section`
  p {
    font-size: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }
`;
export default TextSection;
