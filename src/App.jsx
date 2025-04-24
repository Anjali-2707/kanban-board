import './App.scss'
import { Outlet } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <>
      <Outlet />
    </>
  )
}

export default App;
