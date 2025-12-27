import { useState } from 'react'
import data from './data'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState(1)
  const [usersPerPage, setUsersPerPage] = useState(5)
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  // caculate how many items u want to display intially

  // const usersPerPage = 5;

    const getSortedData = () => {
     if (!sortColumn) {
    console.log('No sorting, returning original');
    return data;
  }
    console.log('Getting sorted data...');
    console.log('Sort column:', sortColumn);
    console.log('Sort order:', sortOrder);
    const sorted = [...data]

    sorted.sort((a, b) => {
      const aValue = a[sortColumn]
      const bValue = b[sortColumn]
      console.log('Comparing:', aValue, 'vs', bValue);
      //for numbers
      if (typeof aValue === 'number') {
        return sortOrder === 'asc' ? aValue - bValue : bValue - aValue

      }
      //for strings:
      if (sortOrder === 'asc') {
        return aValue.localeCompare(bValue)
      } else {
        return bValue.localeCompare(aValue)
      }

    })
    console.log("SortedData", sorted);
    return sorted

  }

const sortedData = getSortedData(); // using sorting data here, then pagination
  const startIndex = (currentPage - 1) * usersPerPage;
  const endIndex = startIndex + usersPerPage;
  const usersToDisplay = sortedData.slice(startIndex, endIndex)

  const totalPages = Math.ceil(data.length / usersPerPage)
  // console.log("userstodisplay", usersToDisplay);


  const handlePrev = () => {
    setCurrentPage(currentPage - 1)

  }

  const handleNext = () => {
    setCurrentPage(currentPage + 1)

  }
  const handleOffset = (e) => {
    setUsersPerPage(Number(e.target.value))
    setCurrentPage(1);
  }
  const handleHeaderClick = (column) => {
    if (sortColumn === column) {
      const newOrder = sortOrder === 'asc' ? "desc" : "asc"
      console.log("Toggling to", newOrder);
      setSortOrder(newOrder)

    } else {
      console.log("resetting to orginal position asc",)

      setSortColumn(column)
      setSortOrder('asc')
    }


  }



  // Add this temporarily to test
// const sortedData = getSortedData();
// console.log('First 5 sorted users:', sortedData.slice(0, 5));
  return (
    <div >
      <div>
        <label htmlFor="selectNumber">Select</label>
        <select name="" id="selectNumber" value={usersPerPage} onChange={handleOffset}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>

      </div>
      <table border={1}>
        <thead>
          <tr>
            <th onClick={() => handleHeaderClick("id")}>id {sortColumn === 'id' && (sortOrder === 'asc' ? '↑' : '↓')}</th>
            <th onClick={() => handleHeaderClick("name")}>name {sortColumn === 'name' && (sortOrder === 'asc' ? '↑' : '↓')}</th>
            <th onClick={() => handleHeaderClick("age")}>age  {sortColumn === 'age' && (sortOrder === 'asc' ? '↑' : '↓')}</th>
            <th onClick={() => handleHeaderClick("occupation")}>Occupation {sortColumn === 'occupation' && (sortOrder === 'asc' ? '↑' : '↓')} </th>
          </tr>
        </thead>

        <tbody>
          {usersToDisplay.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={handlePrev} disabled={currentPage === 1} >Prev</button>
        <span> page {currentPage} of {totalPages}</span>
        <button onClick={handleNext} disabled={currentPage === totalPages}>next</button>
      </div>
    </div>

  )
}

export default App
