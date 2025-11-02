import { Box } from "@mui/material"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./componenets/Navbar"
import Home from "./pages/Home"
import Explore from "./pages/Explore"

function App() {
  

  return (
    
      <Box>
        <BrowserRouter>
          <Navbar />
          <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/explore" element={<Explore />} />
          </Routes>
          
        </BrowserRouter>
      </Box>
   
  )
}

export default App
