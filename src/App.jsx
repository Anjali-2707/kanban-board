import './App.css'
import { Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <h1>Hello, dhinga chika!</h1>
      <Outlet />
    </>
  )
}

export default App;
