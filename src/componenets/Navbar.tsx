import {Box, Typography, InputBase, Divider, Button, ButtonGroup, } from "@mui/material"
import  { FC } from "react"
import SearchIcon from '@mui/icons-material/Search';
import {categories} from '../utils/constants'
const Navbar : FC = ()=> {
    return (
       
        <Box className="bg-neutral-900 text-white">
            <Box sx={{display:'flex', alignItem:'center', justifyContent:'space-between', width:'90%', mx:'auto', py:'1' }}>
        <Box sx= {{display:'flex', alignItems:'center', cursor:'pointer', fontSize:'1.5rem', fontFamily:'serif'}}>
            <Typography sx= {{fontFamily:'inherit', fontSize:'inherit', fontWeight:'bold'}}>
                News
            </Typography>
            <Typography sx={{fontFamily:'inherit', fontSize:'inherit', fontWeight:'light'}}>
                Daily
            </Typography>
        </Box>
        <Box sx={{display:'flex', alignItems:'center', gap:2, bgcolor:'black', color:"#c2c2c2",px:4 , borderRadius:'999px'}}>
            <SearchIcon />
            <Divider orientation="vertical" variant="middle" flexItem  sx={{bgcolor:'gray'}}/>
            <InputBase placeholder="serach" sx={{ color:'white', width:"350px", height:'2.5rem', fontSize:'1rem', fontFaimly:"serif", '&::placehlder':{ color:'#646464'}}}/>
        </Box>
        </Box>
        <ButtonGroup className="bg-neutral-800 w-full overflow-x-auto rounded-none" 
            sx={{'& .MuiButton-root':{
                color:'white'
            }}}
            variant="text" >
                {
                    categories.map ((item, ind)=>(
                        <Button key={ind}
                        sx={{fontSize:'12px'}}
                        className="min-w-fit w-full hover:bg-neutral-900"
                        >
                            {item}
                        </Button>
                    ))
                }
            </ButtonGroup>
        </Box>
    )
}
export default Navbar