import React, { PropTypes } from "react";
import radium, { Style } from "radium";
import { media } from "../../../settings.json";
import { gutter } from "../../utils/grid";
import Heading from "../heading";
import CalloutLink from "../calloutLink";
import ArticlePreview from "../articlePreview";

const styles = {
  header: {
    marginBottom: "43px",
  },

  heading: {
    fontSize: "28px",
    fontWeight: 100,
    lineHeight: 1,
  },

  articles: {
    [`@media (min-width: ${media.min["600"]})`]: {
      display: "flex",
    },
  },

  footer: {
    marginTop: "39px",
  },
};

const RecommendedArticles = ({ articles, heading, calloutHref, calloutLabel, style }) => (
  <section className="RecommendedArticles" style={style}>
    <Style
      scopeSelector=".RecommendedArticles"
      rules={{
        mediaQueries: {
          [`(max-width: ${media.max["600"]})`]: {
            ".ArticlePreview + .ArticlePreview": {
              marginTop: gutter("static"),
            },
          },

          [`(min-width: ${media.min["600"]})`]: {
            ".ArticlePreview + .ArticlePreview": {
              marginLeft: gutter("static"),
            },
          },
        },
      }}
    />

    {heading &&
      <header style={styles.header}>
        <Heading
          level={2}
          weight="thin"
          override={styles.heading}
        >
          {heading}
        </Heading>
      </header>
    }

    <div style={styles.articles}>
      {articles.map((preview, index) => (
        <ArticlePreview
          title={preview.title}
          paragraph={preview.paragraph}
          image={preview.image}
          href={preview.href}
          category={preview.category}
          categoryHref={preview.categoryHref}
          key={index}
        />
      ))}
    </div>

    {calloutLabel && calloutHref &&
      <footer style={styles.footer}>
        <CalloutLink href={calloutHref}>
          {calloutLabel}
        </CalloutLink>
      </footer>
    }
  </section>
);

RecommendedArticles.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    paragraph: PropTypes.string,
    image: PropTypes.string,
    href: PropTypes.string,
    category: PropTypes.string,
    categoryHref: PropTypes.string,
  })).isRequired,
  heading: PropTypes.string,
  calloutLabel: PropTypes.string,
  calloutHref: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.object),
};

export default radium(RecommendedArticles);
