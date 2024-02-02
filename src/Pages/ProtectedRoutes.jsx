import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoutes = () => {
  
    if(localStorage.getIten('token')) {
      return  <Outlet />
    } else {
        return <Navigate to='/login' />
    }
}

export default ProtectedRoutes