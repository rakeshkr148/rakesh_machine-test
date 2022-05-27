
import { Routes, Route } from 'react-router-dom';
import Login from './Login/Login';
import EmployeeList from './Dashboard/EmployeeList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='dashboard' element={<EmployeeList />} />
     </Routes>
    </div>
  );
}

export default App;
