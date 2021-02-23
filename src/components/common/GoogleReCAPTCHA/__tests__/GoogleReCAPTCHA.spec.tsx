import React from "react";
import ReactTestUtils from "react-dom/test-utils";

const siteKey = "6LeirWEaAAAAAGOUF9yqR3CDeMYxF2T502fjHBiM";
const google_script = "https://www.google.com/recaptcha/api.js";

const TestComponent = ({ recaptchaExecute }) => {
  return <div onClick={recaptchaExecute}></div>;
};

describe("testing__google__recaptcha", () => {
  it("test-render-component and window grecaptha execute", () => {
    const WrappingComponent = (sitekey) => (Component) => {
      expect(sitekey).not.toBe(undefined);
      return (props) => {
        React.useEffect(() => {
          const script = document.createElement("script");
          script.src = google_script + `?render=${sitekey}`;
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

        if (typeof window !== undefined && typeof window?.grecaptcha !== undefined) {
          return <Component {...props} recaptchaExecute={() => window.grecaptcha.execute(sitekey)} />;
        }
        return null;
      };
    };
    const RecaptchaCurrent = WrappingComponent(siteKey)(TestComponent);
    ReactTestUtils.renderIntoDocument(<RecaptchaCurrent window={window.grecaptcha} />);
  });
});
