
import PropTypes from 'prop-types';

function Body(props) {
  return (
    <>
    <div className="bodycontent">
      {props.children}
    </div>
    </>
  )
}

Body.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Body