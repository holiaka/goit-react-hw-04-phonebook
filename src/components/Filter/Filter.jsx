import PropTypes from "prop-types";
import { FilterInput, FilterTitle, FilterBox } from './Filter'


export const Filter = ({ onChange }) => {
    return (
        <FilterBox>
        <FilterTitle>Find contacts by name:</FilterTitle>
        <FilterInput type="text" onChange={onChange} />
        </FilterBox>
    );
}

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
}