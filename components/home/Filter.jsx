/* eslint-disable react/prop-types */
function Filter({
  dateFilter, setDateFilter, statusFilter, setStatusFilter,
}) {
  return (
    <>
      <p>Filter Tasks</p>
      <div className="select">
        <select value={dateFilter} onChange={(event) => setDateFilter(event.target.value)}>
          <option value="">Created date</option>
          <option value="asc">asc</option>
          <option value="desc">desc</option>
        </select>
      </div>
      <div className="select">
        <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)}>
          <option value="">Status</option>
          <option value="done">done</option>
          <option value="todo">todo</option>
        </select>
      </div>
    </>
  );
}

export default Filter;
