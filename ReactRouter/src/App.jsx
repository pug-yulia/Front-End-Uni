import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App
