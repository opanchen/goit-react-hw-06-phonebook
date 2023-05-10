import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getFilterValue } from 'redux/selectors';
import { updateFilter } from 'redux/filterSlice';


// import PropTypes from 'prop-types';


export const Filter = ({value, onChange}) => {

    const dispatch = useDispatch();

    const filterValue = useSelector(getFilterValue);
    console.log('filterValue: ', filterValue);

    const changeFilter = (e) => {

        console.log(e.currentTarget.value);
        dispatch(updateFilter(e.currentTarget.value));

        // setFilter(e.currentTarget.value)

    }

    return(
        <label className={css.filter}>
        Find contact by name
          <input 
          type="text" 
          value={filterValue}
          onChange={changeFilter}
          />
        </label>
    )
}

// Filter.propTypes = {
//     value: PropTypes.string.isRequired,
//     onChange: PropTypes.func.isRequired,
// }