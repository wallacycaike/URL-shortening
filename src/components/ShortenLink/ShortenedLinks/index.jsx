import { useState } from "react";
import "./styles.scss";

export function ShortenedLinks({ full_short_link, original_link }) {
  const [linkCopied, setLinkCopied] = useState(false);

  const copyLink = () => {
    setLinkCopied(!linkCopied);

    navigator.clipboard.writeText(full_short_link);

    setTimeout(() => {
      setLinkCopied(false);
    }, 3000);
  };

  return (
    <div className="shortenedLinks">
      <div className="shortenedLinks-link">
        <span>{original_link}</span>
      </div>
      <div className="shortenedLinks-linkShortened">
        <span>{full_short_link}</span>
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
