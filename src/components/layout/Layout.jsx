import { Outlet } from "react-router-dom"
import NavBar from "./Header/NavBar/NavBar"


const Layout = () => {
  return (
    <>
        <NavBar /> 
        <Outlet />
    </>
  )
}

export default Layout