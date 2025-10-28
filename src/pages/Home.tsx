import  { FC } from "react"
import {Box,} from "@mui/material"
import Carousel from "../componenets/Carousel"
import HomeCardList from "../componenets/HomeCardsList"
import "../index.css"

const Home : FC=()=>{
    return (
        <Box sx={{width:'90%', mx:"auto"}}>
        <Carousel />
        <HomeCardList />
        </Box>
    )
}

export default Home