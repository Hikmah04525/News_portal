import { FC, useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { NewsType } from "../utils/Types";
import { getTopHeadlines } from "../utils/api";
import ExploreCardList from "../componenets/ExploreCardList";




interface CategoryDataType {
    [key: string]: NewsType[];
}

const Explore: FC = () => {
    const location = useLocation();
    const category = location.state?.category;

    const [categoryData, setCategoryData] = useState<CategoryDataType>({});

    const fetchNews = async () => {
        if (!category) return;
        const response = await getTopHeadlines(category);
        if (response.data) {
        const filteredNews = response.data.articles.filter(
            (res: NewsType) => res.urlToImage != null);
        setCategoryData(prev => ({
            ...prev,[category]: filteredNews,
        }));
    }
}


    useEffect (() => {
        fetchNews()
    }, [category]);

    useEffect(()=>{
        console.log("shuemsm")
    }, [categoryData])

  return (
    <Container max-width={false} sx={{width:"90%", mt:5, mb:10}}>
        <Typography variant="h4" sx={{fontFamily:"serif", cursor:"pointer", mb:1}}>
            {category}
        </Typography>
      {
        categoryData[category]?.length > 0  &&
        <ExploreCardList list={categoryData[category]} />
      }
    </Container>
  );
};

export default Explore;

  