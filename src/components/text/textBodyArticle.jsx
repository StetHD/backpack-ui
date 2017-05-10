import React, { PropTypes } from "react";
import radium from "radium";
import colors from "../../styles/colors";
import { textBodyArticle } from "../../utils/typography";
import propTypes from "../../utils/propTypes";

const styles = Object.assign({}, {
  color: colors.textPrimary,
  marginBottom: 0,
  marginTop: 0,
}, textBodyArticle());

const TextBodyArticle = ({ children, style }) => (
  <p style={[styles, style]}>
    {children}
  </p>
);

TextBodyArticle.propTypes = {
  children: PropTypes.string.isRequired,
  style: propTypes.style,
};

export default radium(TextBodyArticle);