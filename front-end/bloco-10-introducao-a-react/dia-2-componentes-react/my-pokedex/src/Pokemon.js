import React from "react";
import PropTypes from "prop-types";

class Pokemon extends React.Component {
  render() {
    const {pokemon: { name, type, averageWeight, image} } = this.props;
    return (
      <div className='pokemon'>
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>{averageWeight.value} {averageWeight.mesurementUnit}</p>
        </div>
        <img src={image} alt={name} />
      </div>
    );
  };
};

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      mesurementUnit: PropTypes.string,
      value: PropTypes.number,
    }),
    image: PropTypes.string,
  })
}

export default Pokemon;
