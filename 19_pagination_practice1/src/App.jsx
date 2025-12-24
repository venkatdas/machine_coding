import { useState } from 'react'
import './App.css'
import data from './data'
function App() {
  const [currentPage, setCurrentPage] = useState(1) // state required to track the current page
  // instead of giving itemsPerPage as hardcoded value, we can create state and select dropdown (offset)
  const [itemsPerPage, setItemsPerPage] = useState(5)
  // const itemsPerPage = 5; // how many items perpage
  const startIndex = (currentPage - 1) * itemsPerPage // 
  const endIndex = startIndex + itemsPerPage;
  const userToDisplay = data.slice(startIndex, endIndex)

  const totalPages = Math.ceil(data.length / itemsPerPage)

  const handlePageChange = (e) => {
    setItemsPerPage(Number(e.target.value))
    setCurrentPage(1);

  }

  return (
    <div>
      <h1>Users Table</h1>
      <p>Showing users {startIndex + 1} to {Math.min(endIndex, data.length)}</p>

      <p>Current page: {currentPage}</p>

      <div>
        <label htmlFor="itemsPerPage">Show per page</label>
        <select name="" id="itemsPerPage" value={itemsPerPage} onChange={handlePageChange}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>

        </select>
      </div>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Occupation</th>
          </tr>
        </thead>
        <tbody>
          {userToDisplay.map((user) => (
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
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Prev</button>
        <span>Page{currentPage} of {totalPages}</span>
        <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
      </div>

    </div>
  );
}


export default App
