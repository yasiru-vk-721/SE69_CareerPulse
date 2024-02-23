
import PropTypes from 'prop-types';
import './MenuLink.css';
import { Link } from "react-router-dom";

function MenuLink(props) {
  return (
    <>
      <Link className="navgateLinks " to={props.url}>{props.linkname}</Link>
    </>
  );
}

MenuLink.propTypes = {
  url: PropTypes.string.isRequired,
  linkname: PropTypes.string.isRequired,
};

export default MenuLink;
