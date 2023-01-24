import "./styles.scss";

import { Form } from "../Form";
import { ShortenedLinks } from "./ShortenedLinks";

import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export function ShortenLink() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    fetchShortLinks();
  }, []);

  function fetchShortLinks() {
    const links = JSON.parse(localStorage.getItem("shortened_links"));
    if (links) setLinks(links);
  }

  function createShortLink(link) {
    axios
      .get(`https://api.shrtco.de/v2/shorten?url=${link}`)
      .then((response) => {
        saveShortLink(response.data.result);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }

  function saveShortLink({ code, original_link, full_short_link }) {
    const newShortenedLink = {
      code,
      original_link,
      full_short_link,
    };

    setLinks([newShortenedLink, ...links]);
    localStorage.setItem(
      "shortened_links",
      JSON.stringify([newShortenedLink, ...links])
    );
  }

  return (
    <section className="shortenlink-section">
      <div className="shortenlink-itens">
        <div className="shortenlinks-form">
          <Form createShortLink={createShortLink} />
        </div>
        <div className="shortenlinks-links">
          {links.map((link) => (
            <ShortenedLinks
              key={link.code}
              full_short_link={link.full_short_link}
              original_link={link.original_link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
