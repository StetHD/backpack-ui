import React from "react";
import radium from "radium";
import settings from "rizzo-next/sass/settings.json";
import Heading from "../heading";
import MoreLink from "../moreLink";
import { gutter } from "../../utils/grid";

const styles = {
  container: {
    base: {},

    border: {
      bottom: {
        borderBottom: `.1rem solid ${settings.color.gray}`,
        paddingBottom: ".7rem",
        marginBottom: gutter("static"),
      },

      top: {
        borderTop: `.1rem solid ${settings.color.gray}`,
        paddingTop: ".7rem",
        marginTop: gutter("static"),
      },
    },
  },

  heading: {
    base: {
      float: "left",
    },
  },

  link: {
    base: {
      float: "right",
    },
  },
};

function ContentHeader({ title, heading, border, moreLink }) {
  const style = {
    container: [styles.container.base],
  };

  if (border) {
    style.container.push(styles.container.border[border]);
  }

  const hasLink = moreLink && moreLink.href && moreLink.children;

  const headerClassName = hasLink ?
    "ContentHeader clearfix" :
    "ContentHeader";

  return (
    <header
      className={headerClassName}
      style={style.container}
    >
      {hasLink &&
        <div style={styles.heading.base}>
          <Heading {...heading}>
            {title}
          </Heading>
        </div>
      }

      {!hasLink &&
        <Heading {...heading}>
          {title}
        </Heading>
      }

      {hasLink &&
        <div style={styles.link.base}>
          <MoreLink {...moreLink} />
        </div>
      }
    </header>
  );
}

ContentHeader.propTypes = {
  /**
   * Title of the content widget
   */
  title: React.PropTypes.string.isRequired,

  /**
   * Options for Heading component
   */
  heading: React.PropTypes.object.isRequired,

  /**
   * Adds a border to the header
   */
  border: React.PropTypes.oneOf([
    "",
    "top",
    "bottom",
  ]),

  /**
   * Options for MoreLink component
   */
  moreLink: React.PropTypes.object,
};

ContentHeader.defaultProps = {
  title: "",

  heading: {},

  border: "",

  moreLink: {},
};

ContentHeader.styles = styles;

export default radium(ContentHeader);
