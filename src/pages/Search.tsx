import { FC , useEffect, useState} from "react";
import { Box, Container, Typography, Button} from "@mui/material";
import { useLocation } from "react-router-dom";
import { NewsType } from "../utils/Types";
import { getByQuery } from "../utils/api";
import ExploreCardList from "../componenets/ExploreCardList";




const Search : FC = () => {
    const [searchData, setSearchData] = useState<NewsType[]>([]);
    const [pageNo, setPageNo] = useState<number>(1);


    const location = useLocation();
    const { title, query } = location.state

    const fetchSearch = async () =>{
        const response = await getByQuery(query, pageNo);
        console.log(response);

        if (response.data) {
             const filteredNews = response.data.articles.filter(
                        (res: NewsType) => res.urlToImage != null);
            setSearchData(prev => [...prev, ...filteredNews]);
            setPageNo(prev => prev + 1);
        }
    }

    useEffect(() => {
        fetchSearch();
    }, []);

    return (
        <Container max-width={false} sx={{width:"90%", mt:5, mb:10}}>
           <Typography variant="h4" sx={{fontFamily:"serif", mt:5, mb:1, textAlign:'center', cursor:'pointer'}}>
            {title}
           </Typography>
           {
        searchData.length > 0  &&
        <ExploreCardList list={searchData} />
      }
      <Box display='flex' justifyContent='center' mt={3}>
        
          <Button
        variant="contained"
        disableElevation
      className="bg-neutral-700"
      onClick={() => fetchSearch()}
      >
        Load More
      </Button>
      
      
      </Box>
        </Container>
    )
}

export default Search;
