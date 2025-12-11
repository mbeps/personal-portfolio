import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";

import bash from "react-syntax-highlighter/dist/esm/languages/prism/bash";
import clike from "react-syntax-highlighter/dist/esm/languages/prism/clike";
import css from "react-syntax-highlighter/dist/esm/languages/prism/css";
import graphql from "react-syntax-highlighter/dist/esm/languages/prism/graphql";
import java from "react-syntax-highlighter/dist/esm/languages/prism/java";
import javascript from "react-syntax-highlighter/dist/esm/languages/prism/javascript";
import json from "react-syntax-highlighter/dist/esm/languages/prism/json";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import markdown from "react-syntax-highlighter/dist/esm/languages/prism/markdown";
import python from "react-syntax-highlighter/dist/esm/languages/prism/python";
import sql from "react-syntax-highlighter/dist/esm/languages/prism/sql";
import tsx from "react-syntax-highlighter/dist/esm/languages/prism/tsx";
import typescript from "react-syntax-highlighter/dist/esm/languages/prism/typescript";
import yaml from "react-syntax-highlighter/dist/esm/languages/prism/yaml";

const languages = [
  ["clike", clike],
  ["bash", bash],
  ["shell", bash],
  ["sh", bash],
  ["css", css],
  ["graphql", graphql],
  ["gql", graphql],
  ["java", java],
  ["javascript", javascript],
  ["js", javascript],
  ["json", json],
  ["jsx", jsx],
  ["markdown", markdown],
  ["md", markdown],
  ["python", python],
  ["py", python],
  ["sql", sql],
  ["tsx", tsx],
  ["typescript", typescript],
  ["ts", typescript],
  ["yaml", yaml],
  ["yml", yaml],
];

languages.forEach(([name, language]) => {
  SyntaxHighlighter.registerLanguage(name, language);
});

export default SyntaxHighlighter;
