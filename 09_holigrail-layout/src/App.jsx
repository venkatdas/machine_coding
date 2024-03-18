
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="container">
      <header className="header">Header</header>
      <div className="main">
        <aside className="sidebar">Left Sidebar</aside>
        <div className="content">Main Content</div>
        <aside className="sidebar">Right Sidebar</aside>
      </div>
      <footer className="footer">Footer</footer>
    </div>
  );
}

export default App;
