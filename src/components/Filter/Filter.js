import PropTypes from 'prop-types';

export const Filter = ({ filter, filterChange }) => {
  return (
    <div>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        value={filter}
        onChange={evt => filterChange(evt.currentTarget.value)}
      />
    </div>
  );
};
Filter.propTypes = {
  filter: PropTypes.string,
};
