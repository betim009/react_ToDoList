import { Outlet } from "react-router-dom"
import Footer from "../footer"


export default function LayOut() {
    return (
        <>
          <Outlet />
          <Footer /> 
        </>
    ) 
}