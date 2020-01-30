interface ISanitizer {
  text: string;
  sanitize(): string;
}

export default ISanitizer;