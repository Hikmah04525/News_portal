import { FC } from "react"
import { Box } from "@mui/material"
import { NewsType } from "../utils/Types";
import NewsCard from "./NewsCard";


interface ExploreCardListProps {
    list?: NewsType[];
}
const ExploreCardList : FC<ExploreCardListProps> = ({list})=> {
    return (
        <Box className="grid grid-cols-5 gap-3">
            {
                list?.map((item, ind) => (
                    <NewsCard  item={item}/>
                ))
            }
        </Box>
    )
}

export default ExploreCardList