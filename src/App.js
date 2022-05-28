// import logo from './logo.svg';
// import { Routes, Route, Link } from "react-router-dom";
import { Homepage } from './homepage';
import {Publications} from './publications';
// // import './App.css';

// function App() {
//   <div>
//       <h1>Welcome to React Router!</h1>
//       <Routes>
//         <Route path="/" element={<Homepage />} />
//         <Route path="publications" element={<Homepage />} />
//       </Routes>
//     </div>
// }



import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
// import "./App.css";

function App() {
  return (
    <div style={{height: '100%'}}>
      {/* <h1>Welcome to React Router!</h1> */}
      <Routes>
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/homepage/publications" element={<Publications />} />
      </Routes>
    </div>
  );
}


export default App;