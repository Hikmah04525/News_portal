import { FC, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import HeaderSection from "./HeaderSection";
import Carouselcard from "./Carouselcard";
import CarouselList from "./CarouselList";
import axios from "axios";
import { NewsType } from "../utils/Types";
import { getTopHeadlines } from "../utils/api";

const Carousel: FC = () => {
  const [active, setActive] = useState<number>(0);
  const [topHeadlines, setTopHeadlines] = useState<NewsType[]>([]);

   const [error, setError] = useState<string | null>(null);
   const [loading, setLoading] = useState<boolean>(true);
  

  const fetchTopHeadlines = async () => {
    setLoading(true);
    setError(null);
    
      const response= await getTopHeadlines()
      console.log(response)

      if (response.data){
        const filterHeadlines = response?.data?.articles.filter(
          (res: NewsType) => res.urlToImage != null
        );
        setTopHeadlines(filterHeadlines);
        setLoading(false);
      }

      if (response.error){
                setError(response.error.message || "Something went wrong");
                
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
      {
            error ?
            <Typography color="error" className="">{error} </Typography>
            :
            <>
            {loading ?
             <Typography>Loading...</Typography>
             : 
<Box>
{/* Carousel*/}
      <Carouselcard
       toggleActive= {toggleActive}
       topHeadline={topHeadlines[active]} />
      {/*CarouselList*/ }
      <CarouselList 
      active={active}
      topHeadlines={topHeadlines} />
    </Box>
}
    </>


     }



      
    </Box>
  );
};

export default Carousel;
