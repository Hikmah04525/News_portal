import { FC, useState, useEffect } from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { useLocation } from "react-router-dom";
import { NewsType } from "../utils/Types";
import { getTopHeadlines } from "../utils/api";
import ExploreCardList from "../componenets/ExploreCardList";




interface CategoryDataType {
    [key: string]: { articles: NewsType[], pageNo: number}
}

const Explore: FC = () => {
    const location = useLocation();
    const category = location.state?.category;

    const [categoryData, setCategoryData] = useState<CategoryDataType>({});
    const [loadMore, setLoadMore] = useState<boolean>(true);

    const fetchNews = async () => {

      const currentCategoryData = categoryData[category] || { articles: [], pageNo: 1 };
      const pageNo = currentCategoryData.pageNo;

        if (!category) return;
        const response = await getTopHeadlines(category, pageNo);
        if (response.data) {
        const filteredNews = response.data.articles.filter(
            (res: NewsType) => res.urlToImage != null);
        setCategoryData(prev => ({
            ...prev,[category]: {
              articles:[...prev[category]?.articles || [], ...filteredNews],
              pageNo: pageNo + 1
            },
        }));
        setLoadMore(currentCategoryData.articles.length + filteredNews.length < response.data.totalResults);
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
        categoryData[category]?.articles?.length > 0  &&
        <ExploreCardList list={categoryData[category]?.articles} />
      }
      <Box display='flex' justifyContent='center' mt={3}>
        {
          loadMore &&
          <Button
        variant="contained"
        disableElevation
      className="bg-neutral-700"
      onClick={() => fetchNews()}
      >
        Load More
      </Button>
        }
      
      </Box>
    </Container>
  );
};

export default Explore;

  