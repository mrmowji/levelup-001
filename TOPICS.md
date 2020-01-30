# Topics

Here is the list of all topics/concepts I learned during this task.

## Using regex is not performant

That's why we're encouraged to use some modules specially developed for this purpose.

## remarkjs/strip-markdown issues

There are 2 issues I faced here:

- If your text starts with an HTML tag, `process()` wouldn't be able to sanitize it correctly. A quick workaround is to add a special character at the beginning and remove it after sanitization. See [the issue](https://github.com/remarkjs/strip-markdown/issues/14).
- Sanitized text has a new line at end, even if the original text doesn't have one. A `trim()` is needed, but it would trim whitespaces that are part of the original text. Frustrated by these bugs, I decided to trim all whitespaces anyway.
