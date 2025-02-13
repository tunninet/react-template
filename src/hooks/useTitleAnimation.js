import gsap  from "gsap";
import { useIsomorphicLayoutEffect } from "./useIsomorphicEffect";
import { useGSAP } from "@gsap/react";

const useTitleAnimation = (animeRef) => {
  useGSAP(() => {
    gsap.timeline({ default: { ease: "SlowMo.easeOut" } });
    gsap.to(animeRef?.current, {
      y: "0px",
      duration: 1,
      opacity: 1,
      stagger: 0.3,
      delay: 0.5,
      scrollTrigger:{
        trigger:animeRef?.current
      }
    });
  });
};

export default useTitleAnimation;
