const remark = require("remark");
const stripMarkdown = require("strip-markdown");

class RemarkSanitizer {
  text: string;

  constructor(text: string) {
    this.text = text;
  }

  sanitize(): string {
    let sanitizedText = "";

    // see https://github.com/remarkjs/strip-markdown/issues/14
    remark()
      .use(stripMarkdown)
      .process(`A${this.text}`, (error, file) => {
        if (error) throw error;
        sanitizedText = String(file);
      });

    return sanitizedText.slice(1).trim();
  }
}

export default RemarkSanitizer;
