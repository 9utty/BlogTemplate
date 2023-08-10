import React from "react";

export default function Utterances() {
  return (
    <section
      ref={(elem) => {
        if (!elem) {
          return;
        }
        const scriptElem = document.createElement("script");
        scriptElem.src = "https://utteranc.es/client.js";
        scriptElem.async = true;
        scriptElem.setAttribute(
          "repo",
          `${process.env.NEXT_PUBLIC_UTTERANCES_REPO}`
        );
        scriptElem.setAttribute(
          "issue-term",
          `${process.env.NEXT_PUBLIC_UTTERANCES_ISSUE_TERM}`
        );
        scriptElem.setAttribute("theme", "github-dark-orange");
        scriptElem.setAttribute("label", "blog-comment");
        scriptElem.crossOrigin = "anonymous";
        elem.appendChild(scriptElem);
      }}
    />
  );
}
