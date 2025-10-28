import {FC} from "react";
import {Box} from "@mui/material"
import HeaderSection from "./HeaderSection";
import Carouselcard from "./Carouselcard";
import CarouselList from "./CarouselList";


const Carousel: FC = () => {
    return (

        <Box>
            {/*Header*/}
            <HeaderSection title="Top Headlines" />

            {/*Carousel*/}
            <Carouselcard />

           {/* Carousel List */}
            <CarouselList />
        </Box>
    )
}
export default Carousel;