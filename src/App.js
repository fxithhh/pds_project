import './App.css';
import Welcome from "./pages/welcome"
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />}></Route>
        </Routes>
      </Router>
      {/* <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p className='text-red-700'>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* </header>  */}
    </div>
  );
}

export default App;
