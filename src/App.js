import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './Components/Root/Root';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';
import About from './Components/About/About';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/',
          element: <Login />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/registration',
          element: <Registration />
        },
        {
          path: '/about',
          element: <About />
        }
      ]
    }
  ])
  return (
    <div className="">
      <RouterProvider router={ router } />
    </div>
  );
}

export default App;
