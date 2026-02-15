import sanitizeHtml from 'sanitize-html';

/**
 * Sanitize user input to prevent XSS (OWASP A7)
 * Strips all HTML tags and attributes
 */
export function sanitize(input: string): string {
  return sanitizeHtml(input, {
    allowedTags: [],
    allowedAttributes: {},
    disallowedTagsMode: 'recursiveEscape',
  }).trim();
}
