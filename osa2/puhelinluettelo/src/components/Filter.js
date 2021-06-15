
function Filter({filter, handleFilter}) {
    return(
        <div>Filter with: <input value={filter} onChange={handleFilter}/></div>
    )
}

export default Filter;
