import {FC} from "react";
import {Box, Typography, Button} from "@mui/material"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


interface HeaderSectionProps {
    title: string;
}
const HeaderSection : FC = ({title}) => {
    return(
        <Box sx={{display:'flex', justifyContent:'space-between', mt:4}}>
            <Typography sx={{fontSize:'2.5rem', fontFamily:'serif', cursor:'pointer'}}>
            {title}
            </Typography>

            <Button sx={{display:'flex', alignItem:'center', gap:1, color:'black', '&:hover':{textDecoration:'underline', textUnderlineOffset:'2px'}}}>
                see All
                <ArrowForwardIcon sx={{fontSize:'1.25rem'}}/>
            </Button>
        </Box>
    )
}
export default HeaderSection;