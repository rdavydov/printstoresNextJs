import React from "react";

declare global {
  interface Window {
    grecaptcha: IRecaptcha;
  }
}

export interface IRecaptcha {
  execute: (sitekey: string) => Promise<string>;
}

const google_script = "https://www.google.com/recaptcha/api.js";

const WithGoogleReCAPTCHA = (sitekey: string) => (Component) => {
  return (props) => {
    const [recaptchaLoaded, setRecaptchaLoaded] = React.useState(false);

    const recaptchaLoad = () => {
      setRecaptchaLoaded(true);
    };
    React.useEffect(() => {
      const script = document.createElement("script");
      script.src = google_script + `?render=${sitekey}`;
      script.onload = recaptchaLoad;
      script.type = "text/javascript";
      script.defer = true;
      script.async = true;

      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
        const nodeList = document.querySelectorAll(".grecaptcha-badge");
        nodeList.forEach((el) => el.parentElement.remove());
      };
    }, []);

    if (recaptchaLoaded) {
      return (
        <Component
          {...props}
          recaptchaExecute={() => window.grecaptcha.execute(sitekey)}
          recaptchaLoaded={recaptchaLoaded}
        />
      );
    }
    return <Component {...props} recaptchaLoaded={recaptchaLoaded} />;
  };
};

export default WithGoogleReCAPTCHA;
