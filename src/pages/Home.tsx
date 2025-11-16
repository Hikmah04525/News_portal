import  { FC } from "react"
import {Box,} from "@mui/material"
import Carousel from "../components/Carousel"
import HomeCardList from "../components/HomeCardsList"
import {categories} from "../utils/constants"
import "../index.css"

const Home : FC=()=>{
    return (
        <Box sx={{width:'90%', mx:"auto"}}>
        <Carousel />
        <Box className="mt-4 mb-24">
                <Box>
                    {categories.map((item: string, ind: number)=>(
                        <HomeCardList key={ind} category={item}/>
                    
                ))}
                </Box>
        </Box>
        </Box>
    )
}

export default Home