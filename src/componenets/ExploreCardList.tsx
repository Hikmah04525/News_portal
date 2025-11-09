import { FC } from "react"
import { Box } from "@mui/material"
import { NewsType } from "../utils/Types";
import NewsCard from "./NewsCard";


interface ExploreCardListProps {
    list?: NewsType[];
}
const ExploreCardList : FC<ExploreCardListProps> = ({list})=> {
    return (
        <Box className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-3">
            {
                list?.map((item, ind) => (
                    <NewsCard  item={item}/>
                ))
            }
        </Box>
    )
}

export default ExploreCardList