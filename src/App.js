import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/" element={<CreatePost />}></Route>
        <Route path="/" element={<Login />}></Route>
        <Route path="/" element={<Logout />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
