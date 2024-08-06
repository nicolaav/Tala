import { BrowserRouter, Routes, Route } from 'react-router-dom'

// page & layout imports
import AllDocuments from './pages/AllDocuments'


function App() {
  return (
    <div>
      <AllDocuments />
    </div>
  );
}

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<AllDocuments />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

export default App
