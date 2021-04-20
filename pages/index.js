import Head from "next/head";
import algoliasearch from "algoliasearch/lite";
import ReactMarkdown from "react-markdown";

import {
  InstantSearch,
  Hits,
  SearchBox,
  Highlight,
} from "react-instantsearch-dom";

const Hit = ({ hit }) => (
  <article>
    <h3>
      <Highlight attribute="name" hit={hit} />
    </h3>
    <p>
      <Highlight attribute="text" hit={hit} />
    </p>
  </article>
);

export default function Home() {
  const searchClient = algoliasearch(
    "IHECCSK1OM",
    "6d4e29857303233e29b0e0547176954f"
  );

  return (
    <div className="container">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/instantsearch.css@7.3.1/themes/reset-min.css"
          integrity="sha256-t2ATOGCtAIZNnzER679jwcFcKYfLlw01gli6F6oszk8="
          crossorigin="anonymous"
        />
      </Head>

      <div className="ais-InstantSearch">
        <h1>Hugging Face Model Search Engine</h1>
        <InstantSearch text indexName="git_sync" searchClient={searchClient}>
          <div className="right-panel">
            <SearchBox />
            <Hits hitComponent={Hit} />
          </div>
        </InstantSearch>
      </div>
    </div>
  );
}
