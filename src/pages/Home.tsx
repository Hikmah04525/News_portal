import {Box, Typography, Button, Card, CardContent} from "@mui/material"
import  { FC } from "react"
import "../index.css"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const Home : FC=()=>{
    return (
        <Box sx={{width:'90%', mx:"auto"}}>
            {/*Header*/}
        <Box sx={{display:'flex', justifyContent:'space-between', mt:4}}>
           <Typography sx={{fontSize:'2.5rem', fontFamily:'serif', cursor:'pointer'}}>
            Top Hedalines
           </Typography>

           <Button sx={{display:'flex', alignItem:'center', gap:1, color:'black', '&:hover':{textDecoration:'underline', textUnderlineOffset:'2px'}}}>
                see All
                <ArrowForwardIcon sx={{fontSize:'1.25rem'}}/>
           </Button>
        </Box>
           {/*Carousel*/}
           <Card className="grid grid-cols-2 boreder-2 shadow-none">
            <Box className='relative h-[360px]'>
                <Box className="bg-red-300 h-full"></Box>
                <Box 
                className="_carouselGradient"
                sx={{position:'absolute',bottom:0, height:'70px', width:'100%' }}
                />
                <Typography
                sx={{fontFamily:'serif'}}
                 className="absolute bottom-2 text-white text-[22px] leading-8 line-clamp3 px-6">
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </Typography>
              
            </Box>
            
            <CardContent className="relative">
<Typography className="text-xl font-serif line-clamp-4">
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
</Typography>
<Typography className="text-lg font-serif line-clamp-4">
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
</Typography>

<Box className="absolute bottom-2">
<Typography className="text-xl font-serif line-clamp-4">
    source: ABC NEWS 
</Typography>
<Typography className="text-xl font-serif line-clamp-4">
    date: 10/26/22025
</Typography>
</Box>
            </CardContent>

           </Card>

        </Box>
        
    )
}

export default Home