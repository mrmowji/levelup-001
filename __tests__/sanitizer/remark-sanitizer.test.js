import Sanitizer from "../../source/sanitizer/remark-sanitizer";

describe("Remark Sanitizer", () => {
  test("HTML <p>", () => {
    expect(new Sanitizer("<p>Hello!</p>").sanitize()).toEqual("Hello!");
  });

  test("HTML comments", () => {
    expect(
      new Sanitizer("This is a comment: <!-- comment -->").sanitize()
    ).toEqual("This is a comment:");
  });

  test("HTML scripts", () => {
    expect(
      new Sanitizer(
        "This is a script: <script>alert();</script>"
      ).sanitize()
    ).toEqual("This is a script: alert();");
  });

  test("Markdown", () => {
    expect(
      new Sanitizer(
        "Some *emphasis*, **importance**, `code` and [link](https://example.com)"
      ).sanitize()
    ).toEqual("Some emphasis, importance, code and link");
  });
});
