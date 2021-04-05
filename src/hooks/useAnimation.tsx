import { useEffect, useState } from "react";

export function useAnimation(node) {
  const [animateActive, setAnimateActive] = useState(false);
  const [animationInActive, setAnimationInActive] = useState(false);
  const [focused, setFocused] = useState(false);

  const animateOn = () => {
    if (!focused) {
      setAnimateActive(true);
      setAnimationInActive(false);
      node && node.focus();
    }
  };

  const animateOff = () => {
    setAnimateActive(false);
    setAnimationInActive(true);
  };

  return { animateOn, animateOff, animateActive, animationInActive };
}
