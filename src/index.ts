import Sanitizer from "./sanitizer/remark-sanitizer";
import TypeicodeEndpoint from "./endpoint/typicode-endpoint";

const title = "Sanitize me!";
const body =
  "Some *emphasis*, **importance**, and `code`. " +
  "Here is a <p>paragraph</p> and a <a href='https://google.com'>link</a>.";

try {
  const sanitizedBody = new Sanitizer(body).sanitize();

  TypeicodeEndpoint.post(title, sanitizedBody).then(response => {
    process.stdout.write(`${JSON.stringify(response.data, undefined, 2)}\n`);
  });
} catch (error) {
  process.stdout.write(error.message);
}
