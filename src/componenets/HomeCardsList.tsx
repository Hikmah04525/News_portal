import {FC} from "react";
import {Box} from "@mui/material"
import "../index.css"
import {categories} from "../utils/constants"
import HeaderSection from "./HeaderSection";
import NewsCard from "./NewsCard";

const HomeCardList: FC = () => {
    return (
        <Box>
            <Box className="mt-4">
                <Box>
                    {categories.map((item)=>(
                    <Box>
                    <HeaderSection title={item} />
                    <NewsCard />
                    </Box>
                ))}
                </Box>
        </Box>
        </Box>
    )
}
export default HomeCardList;