import plugin from "tailwindcss/plugin";
import { CSSRuleObject } from "tailwindcss/types/config";

export const highlightPlugin = plugin(function ({ addComponents, theme }) {
  const highlightStyles: CSSRuleObject = {
    '.prose': {
      '& .hljs-keyword': { color: theme("colors.pink.600") },
      '& .hljs-string': { color: theme("colors.green.600") },
      '& .hljs-comment': {
        color: theme("colors.gray.500"),
        fontStyle: "italic",
      },
      '& .hljs-number': { color: theme("colors.purple.600") },
      '& .hljs-function': { color: theme("colors.blue.600") },
      '& .hljs-operator': { color: theme("colors.yellow.600") },
      '& .hljs-punctuation': { color: theme("colors.gray.700") },
      '& .hljs-variable': { color: theme("colors.orange.600") },
      '& .hljs-params': { color: theme("colors.blue.500") },
      '& .hljs-property': { color: theme("colors.indigo.600") },
      '& .hljs-title': {
        color: theme("colors.blue.700"),
        fontWeight: "bold",
      },
      '& .hljs-tag': { color: theme("colors.teal.600") },

      '&.prose-invert': {
        '& .hljs-keyword': { color: theme("colors.pink.400") },
        '& .hljs-string': { color: theme("colors.green.400") },
        '& .hljs-comment': { color: theme("colors.gray.400") },
        '& .hljs-number': { color: theme("colors.purple.400") },
        '& .hljs-function': { color: theme("colors.blue.400") },
        '& .hljs-operator': { color: theme("colors.yellow.400") },
        '& .hljs-punctuation': { color: theme("colors.gray.300") },
        '& .hljs-variable': { color: theme("colors.orange.400") },
        '& .hljs-params': { color: theme("colors.blue.300") },
        '& .hljs-property': { color: theme("colors.indigo.400") },
        '& .hljs-title': {
          color: theme("colors.blue.300"),
          fontWeight: "bold",
        },
        '& .hljs-tag': { color: theme("colors.teal.400") },
      }
    }
  };

  addComponents(highlightStyles);
});