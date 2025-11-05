import {Box, Typography, InputBase, Divider, Button, ButtonGroup, } from "@mui/material"
import  { FC, useState, ChangeEvent, KeyboardEvent} from "react"
import SearchIcon from '@mui/icons-material/Search';
import {categories} from '../utils/constants'
import { useNavigate } from "react-router-dom";

const Navbar : FC = ()=> {
    const navigate = useNavigate();

    const [search, setSearch] = useState<string>("");

        const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
            setSearch(e.target.value);
        }

        const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter' ) {
                e.preventDefault();
                setSearch("");
                navigate('/search', {state:{title:`what we search is ${search}`, query:search}});
            }
        }

        const handleSearchIconClick = () => {
            setSearch("")
            navigate('/search', {state:{title:`what we search is ${search}`, query:search}});
        }
    return (
       
    
        <Box className="bg-neutral-900 text-white">
            <Box sx={{display:'flex', alignItem:'center', justifyContent:'space-between', width:'90%', mx:'auto', py:'1' }}>
        <Box
        onClick={() => navigate('/')}
         sx= {{display:'flex', alignItems:'center', cursor:'pointer', fontSize:'1.5rem', fontFamily:'serif'}}>
            <Typography sx= {{fontFamily:'inherit', fontSize:'inherit', fontWeight:'bold'}}>
                News
            </Typography>
            <Typography sx={{fontFamily:'inherit', fontSize:'inherit', fontWeight:'light'}}>
                Daily
            </Typography>
        </Box>
        <Box sx={{display:'flex', alignItems:'center', gap:2, bgcolor:'black', color:"#c2c2c2",px:4 , borderRadius:'999px'}}>
            <SearchIcon onClick={handleSearchIconClick}/>
            <Divider orientation="vertical" variant="middle" flexItem  sx={{bgcolor:'gray'}}/>
            <InputBase 
            value={search}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            placeholder="serach" sx={{ color:'white', width:"350px", height:'2.5rem', fontSize:'1rem', fontFaimly:"serif", '&::placehlder':{ color:'#646464'}}}/>
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
                        onClick={() => navigate(`/explore`, {state:{category:item}})}
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