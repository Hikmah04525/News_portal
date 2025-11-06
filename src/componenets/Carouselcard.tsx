import {Box, Card, Typography, CardContent, CardMedia} from "@mui/material";
import  { FC } from "react"
import { NewsType } from "../utils/Types";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link } from "react-router-dom";

interface CarouselCardType{
    topHeadline: NewsType;
    toggleActive: (direction:'next' | 'prev')=> void;
}
const Carouselcard : FC<CarouselCardType> = ({topHeadline, toggleActive})=>{
    return(
        <Box className="relative w-full h-[360px] mb-10">
        <Link to={topHeadline.url}>
        <Card className=" grid grid-cols-2 boreder-2 shadow-none">
            <Box className='relative h-[360px]'>
           
            <CardMedia
            component='img'
            className="h-full"
            image={topHeadline?.urlToImage}
            />
            <Box 
                className="_carouselGradient"
                sx={{position:'absolute', bottom:0, height:'70px', width:'100%' }}
                />
                <Typography
                sx={{fontFamily:'serif'}}
                className="absolute bottom-2 text-white text-[22px] leading-8 line-clamp3 px-6">
                {topHeadline?.title}
                </Typography>
            </Box>
            
            <CardContent className="relative">
                <Typography gutterBottom className="text-xl font-serif line-clamp-4">
                {topHeadline?.description}
                </Typography>
                <Typography className="text-lg font-serif line-clamp-4">
                {topHeadline?.content}
                </Typography>

            <Box className="absolute bottom-2">
            <Typography className="text-xl font-serif line-clamp-4">
                    source: {topHeadline?.source.name}
            </Typography>
            <Typography className="text-xl font-serif line-clamp-4">
                date: {new Date(topHeadline?.publishedAt).toLocaleDateString()}
            </Typography>
            </Box>
            </CardContent>
           
            
            </Card>
            </Link>
              {/* Navigation Buttons */}
      <KeyboardArrowLeftIcon
        className="absolute top-1/2 left-1 bg-neutral-800 text-white text-4xl rounded-full cursor-pointer"
        onClick={() => toggleActive("prev")}
      />
      <KeyboardArrowRightIcon
        className="absolute top-1/2 right-1 bg-neutral-800 text-white text-4xl rounded-full cursor-pointer"
        onClick={() => toggleActive("next")}
      />
        </Box>

    )
}
export default Carouselcard;