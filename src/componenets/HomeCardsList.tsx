import {FC} from "react";
import {Box} from "@mui/material"
import "../index.css"
import HeaderSection from "./HeaderSection";
import NewsCard from "./NewsCard";

interface HomeCardListProps {
    category: string;
}

const HomeCardList: FC<HomeCardListProps> = ({ category }) => {

    
    return (
        
            <Box>
                    <HeaderSection title={category} />
                    <NewsCard />
            </Box>
        
    )
}
export default HomeCardList;