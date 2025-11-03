import {FC} from "react";
import {Box, Typography, Button} from "@mui/material"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from "react-router-dom";


interface HeaderSectionProps {
    title: string;
}
const HeaderSection : FC<HeaderSectionProps> = ({title}) => {
    const navigate = useNavigate();
   
    return(
        <Box sx={{display:'flex', justifyContent:'space-between', mt:4}}>
            <Typography sx={{fontSize:'2.5rem', fontFamily:'serif', cursor:'pointer'}}>
            {title}
            </Typography>
            {title !== "Top Headlines" &&

            <Button sx={{display:'flex', alignItem:'center', gap:1, color:'black', '&:hover':{textDecoration:'underline', textUnderlineOffset:'2px'}}}
            onClick={() => navigate('/explore', {state:{category:title}})}>
                see All
                <ArrowForwardIcon sx={{fontSize:'1.25rem'}}/>
            </Button>
}
        </Box>
    )
}
export default HeaderSection;