import { Route, Routes } from "react-router-dom"
import Homepage from "./pages/homepage"
import Dashboard from "./pages/dashboard"

const AppRoutes = () =>{
    return(
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/dashboard/:id" element={<Dashboard/>}/>
        </Routes>
    )
}

export default AppRoutes