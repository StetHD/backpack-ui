import React from "react";
import font from "../../utils/font";
import ContentHeader from "../contentHeader";
import Heading from "../heading";

const styles = {
  list: {
    base: {
      fontFamily: font("miller"),
      fontSize: "20px",
      lineHeight: (36 / 20),
      marginLeft: "20px",
    },
  },
};

function ContentSectionList({ header, listItems }) {
  const isListItemsString = typeof listItems === "string";

  return (
    <section className="ContentSection">
      {header && header.title &&
        <ContentHeader {...header} />
      }

      {listItems &&
        <ul style={styles.list.base}>
          {!isListItemsString && listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}

          {isListItemsString &&
            <li>{listItems}</li>
          }
        </ul>
      }
    </section>
  );
}

ContentSectionList.propTypes = {
  /**
   * Props for ContentHeader
   */
  header: React.PropTypes.shape({
    title: React.PropTypes.string,
    heading: React.PropTypes.shape(Heading.propTypes),
    border: React.PropTypes.oneOf([
      "",
      "top",
      "bottom",
    ]),
  }).isRequired,

  /**
   * List item(s) to display
   */
  listItems: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.arrayOf(React.PropTypes.string),
  ]).isRequired,
};

ContentSectionList.defaultProps = {
  header: {
    title: "",
    heading: {},
    border: "",
  },

  listItems: "",
};

export default ContentSectionList;
