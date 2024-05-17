import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.tsx';
import Login from './pages/Login.tsx';
import Cadastro from './pages/Cadastro.tsx';
import Recuperar from './pages/Recuperar.tsx';
import Ponto from './pages/Ponto.tsx';

const router = createBrowserRouter([
  
  
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cadastro",
    element: <Cadastro />,
  },
  {
    path: "/recuperar-senha",
    element: <Recuperar />,
  },
  {
    path: "/ponto",
    element: <Ponto />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

function App (){
  return(
    <div className="App">
      
    </div>
  )
}