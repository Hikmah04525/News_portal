import { FC, useEffect, useState } from "react";
import { Box } from "@mui/material";
import HeaderSection from "./HeaderSection";
import Carouselcard from "./Carouselcard";
import CarouselList from "./CarouselList";
import axios from "axios";
import { NewsType } from "../utils/Types";

const Carousel: FC = () => {
  const [active, setActive] = useState<number>(0);
  const [topHeadlines, setTopHeadlines] = useState<NewsType[]>([]);

  const fetchTopHeadlines = async () => {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/everything?q=ethiopia+education&apiKey=4e00e0ce40514691a5b7b8741f2ad3c9"
      );
      console.log(response.data.articles);
        const filteredArticles = response.data.articles.filter((res: NewsType) => res.urlToImage != null );
        setTopHeadlines(filteredArticles);
      } catch (error) {
        console.log(error);
      }
  };

  const toggleActive =(direction:'next' | 'prev')=>{
    if (direction === 'next'){
        setActive((prev)=> (prev +1) % topHeadlines.length);
    } else if (direction === 'prev'){
        setActive((prev)=> (prev -1 ) % topHeadlines.length);
    }
  }

  useEffect(() => {
    fetchTopHeadlines();
  }, []);

  return (
    <Box>
      {/* Header */}
      <HeaderSection title="Top Headlines" />

      {/* Carousel*/}
      <Carouselcard
       toggleActive= {toggleActive}
       topHeadline={topHeadlines[active]} />
      {/*CarouselList*/ }
      <CarouselList 
      active={active}
      topHeadlines={topHeadlines} />
    </Box>
  );
};

export default Carousel;
