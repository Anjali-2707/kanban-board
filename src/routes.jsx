import { createBrowserRouter } from 'react-router-dom' 
import App   from './App.jsx'
import Login from './components/login-page.jsx'
import Board from './components/board.jsx'

const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: 'login',
          element: <Login/>
        },
        {
          path: '',
          element: <Board/>
        },
        {
          path: 'board',
          element: <Board/>
        }]
    },
]);

export default router;