import { PropTypes } from "react";

export default {
  heading: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  fontWeight: PropTypes.oneOf([
    "light",
    "regular",
    "medium",
    "book", // Book is deprecated and will be removed in the next major release
  ]),
  style: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
  ),
};
