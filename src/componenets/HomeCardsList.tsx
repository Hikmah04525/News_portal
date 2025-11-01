import {FC, useEffect} from "react";
import {Box, Typography} from "@mui/material"
import "../index.css"
import HeaderSection from "./HeaderSection";
import NewsCard from "./NewsCard";
import { NewsType } from "../utils/Types";
import { useState } from "react";
import { getTopHeadlines } from "../utils/api";

interface HomeCardListProps {
    category: string;
}

const HomeCardList: FC<HomeCardListProps> = ({ category }) => {

    const [catNews, setCatNews] = useState<NewsType[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchCategoryNews = async () => {
        setLoading(true);
        setError(null);
        const response = await getTopHeadlines(category);
            if(response.data){
                const filterCatNews = response?.data?.articles.filter(
                        (res: NewsType) => res.urlToImage != null
                        );
                setCatNews(filterCatNews);
                setLoading(false);
            }
            if (response.error){
                setError(response.error.message || "Something went wrong");
                
            }
    }

    useEffect (() =>{
        fetchCategoryNews();
    }, [])

    
    return (
        <>
             <HeaderSection title={category} />
        {
            error ? 
            <Typography color="error" className="">{error} </Typography>
            :
            <>
        { loading
        ?
        <Box>
           
            <Typography> Loading...</Typography>
        </Box>
        
        :
        <Box>
            
            <NewsCard  news={catNews} />
        </Box>
}
            </>
        }
        
        </>
        
    )
}
export default HomeCardList;