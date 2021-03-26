import createCss from "./createCss";

describe("css-tests-styled", () => {
  it("createCss__test-props:color", () => {
    expect(createCss({ color: "text" }).join("")).toBe("color:var(--text);");
  });
  it("createCss__test-props:margin", () => {
    expect(createCss({ margin: 10 }).join("")).toBe("margin:10px;");
  });
  it("createCss__test-props:mr", () => {
    expect(createCss({ mr: "10px" }).join("")).toBe("margin-right:10px;");
  });
  it("createCss__test-props:undefined", () => {
    expect(createCss({ color2: "text" }).join("")).toBe("");
  });
  it("createCss__test-props:color-white", () => {
    expect(createCss({ color: "white" }).join("")).toBe("color:white;");
  });
});
