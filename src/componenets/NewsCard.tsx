import {FC} from "react";
import {Box, Typography, Card, CardContent} from "@mui/material"

const NewsCard: FC = () => {
    return (
        <>
        <Box className="grid grid-cols-5 gap-3">
            {[...Array(5)].map((_, ind) =>(
                    <Card key={ind}>
        <Box className="bg-red-300 aspect-[16/9] h-[180px]" />
        <CardContent className="relative">
            <Typography className="text-[16px] font-serif line-clamp-4">
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            </Typography>
            <Typography className="text-[14px] font-serif line-clamp-4">
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            </Typography>

        <Box className="">
            <Typography className="text-[14px] font-serif line-clamp-4">
                source: ABC NEWS 
            </Typography>
            <Typography className="text-[14px] font-serif line-clamp-4">
                date: 10/26/22025
            </Typography>
        </Box>
            </CardContent>
            </Card>
                ))}
            
        </Box>
        </>

    );
};
export default NewsCard;