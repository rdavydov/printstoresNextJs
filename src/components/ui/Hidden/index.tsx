import React, { useEffect, useMemo, useState } from "react";
import { theme } from "../config/theme";

interface PropsHidden {
  hidden?: {
    xs?: boolean;
    md?: boolean;
    lg?: boolean;
    xl?: boolean;
    sm?: boolean;
  };
}

export const Hidden: React.FC<PropsHidden> = ({
  children,
  hidden = {
    xs: false,
    md: false,
    lg: false,
    xl: false,
    sm: false,
  },
}) => {
  const [width, setWidth] = useState(null);

  const componentHidden = useMemo(
    () =>
      Object.entries(hidden).some(([key, value]) => {
        return value && width <= theme.breakpoints[key];
      }),
    [width]
  );
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setWidth(null);
      });
    };
  }, []);

  return <div hidden={componentHidden}>{children}</div>;
};
