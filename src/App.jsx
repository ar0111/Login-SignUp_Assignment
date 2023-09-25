import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';
import Main from './Layout/Main';

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<SignUp></SignUp>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },
        {
          path:'/login',
          element:<Login></Login>
        }
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
