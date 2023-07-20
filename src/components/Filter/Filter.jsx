import PropTypes from 'prop-types';
import { FilterWrap, FilterLabel, FilterInput } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <FilterWrap>
      <FilterLabel>
        <FilterInput
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Type a name to search"
        />
      </FilterLabel>
    </FilterWrap>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
