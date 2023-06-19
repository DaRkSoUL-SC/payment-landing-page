import './App.css';
import Hero from './components/Hero/Hero';
import Layout from './components/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout />} >
    </Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
