import { useState } from "react";
import "./styles.scss";

export function ShortenedLinks() {
  const [linkCopied, setLinkCopied] = useState(false);

  const copyLink = () => {
    setLinkCopied(!linkCopied);

    setTimeout(() => {
      setLinkCopied(false);
    }, 3000);
  };

  return (
    <div className="shortenedLinks">
      <div className="shortenedLinks-link">
        <span>https://www.frontendmentor.io</span>
      </div>
      <div className="shortenedLinks-linkShortened">
        <span>https://rel.ink/k4IKyk</span>
        <button
          className={`shortenedLinks-copyBtn ${linkCopied ? "copied" : ""}`}
          onClick={copyLink}
        >
          {linkCopied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
}
