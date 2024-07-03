"use client";
import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import styles from "./Markdown.module.css";

function Markdown({ content }) {
  const copyToClipboard = (e, code) => {
    navigator.clipboard.writeText(code);
    const previousText = e.target.innerText;
    e.target.innerText = "Copied!";
    setTimeout(() => {
      e.target.innerText = previousText;
    }, 2000);
  };

  const renderCodeBlock = (props) => {
    const { node, inline, className, children, ...rest } = props;
    const match = /language-(\w+)/.exec(className || "");
    const text = String(children).replace(/\n$/, "");

    return match ? (
      <div style={{ position: "relative" }}>
        <div className={styles.header}>
          <span className={styles.fileType}>{match[1]}</span>
          <button
            onClick={(e) => copyToClipboard(e, text)}
            className={styles.copyBtn}
          >
            Copy
          </button>
        </div>
        <SyntaxHighlighter
          {...rest}
          PreTag="div"
          language={match[1]}
          style={a11yDark}
          wrapLines={true}
          wrapLongLines={true}
          className={styles.syntaxHighlighter}
        >
          {text}
        </SyntaxHighlighter>
      </div>
    ) : (
      <code {...rest} className={className}>
        {children}
      </code>
    );
  };

  return (
    <ReactMarkdown
      components={{
        code: renderCodeBlock,
        h2: ({ node, ...props }) => (
          <h2
            id={`component-${Math.random().toString(16).slice(2)}`}
            {...props}
          />
        ),
        h3: ({ node, ...props }) => (
          <h3
            id={`component-${Math.random().toString(16).slice(2)}`}
            {...props}
          />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}

export default Markdown;
