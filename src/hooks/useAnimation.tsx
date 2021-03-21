import { useState } from "react";

export function useAnimation() {
  const [animateActive, setAnimateActive] = useState(false);
  const [animationInActive, setAnimationInActive] = useState(false);

  const animateOn = () => {
    setAnimateActive(true);
    setAnimationInActive(false);
  };

  const animateOff = () => {
    setAnimateActive(false);
    setAnimationInActive(true);
  };

  return { animateOn, animateOff, animateActive, animationInActive };
}
