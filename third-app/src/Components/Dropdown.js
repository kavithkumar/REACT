function DropDown({filter,handleFilter}){
    return(<>
    <select value={filter} onChange={(e)=>handleFilter(e)}>
        <option value='All'>All</option>
        <option value='Chennai'>Chennai</option>
        <option value='Mumbai'>Mumbai</option>
        <option value='Delhi'>Delhi</option>
    </select>
    </>);
}
export default DropDown