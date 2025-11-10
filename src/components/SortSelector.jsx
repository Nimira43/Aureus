const SortSelector = ({ sortBy, onSortChange }) => {
  return ( 
    <div className='controls'>
      <label htmlFor='sort'>Sort By</label>
      <select 
        id='sort'
        value={sortBy}
        onChange={
          (e) => onSortChange(e.target.value)
        }
      >

      </select>

    </div>
  )
}
 
export default SortSelector