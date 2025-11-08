import {FC} from "react"; 
import {Box, Typography, Card, Grid, CardMedia} from "@mui/material";
import { NewsType } from "../utils/Types";
import { Link } from "react-router-dom";

interface CarouselListProps{
    topHeadlines: NewsType[];
    active: number
}

const CarouselList: FC<CarouselListProps> = ({ topHeadlines, active }) => {

  const getNextFive = (active: number, topHeadline: NewsType[]) => {
    const nextFive = [];

    for (let i = 0; i < 5; i++) {
      const index = (active + i + 1) % topHeadline.length;
      nextFive.push(topHeadline[index]);
    }
    return nextFive;
  };

  const nextFiveHeadlines = getNextFive(active, topHeadlines);

  // ✅ move return INSIDE the function
  return (
    <Box className="   mt-8">
      <Grid container spacing={2}>
        {nextFiveHeadlines.map((item, ind) => (
          
            <Grid key={ind} size={{ xs: 12, sm: 6, md: 4, lg: 2.4 }}>
              <Link to={topHeadlines[ind]?.url}>
            <Card className="relative h-[200px]">

              <CardMedia
                component="img"
                className="w-full aspect-[16/16]"
                image={topHeadlines[ind]?.urlToImage} // fixed small typo here too
              />

              <Box
                className="_carouselGradient"
                sx={{
                  position: "absolute",
                  bottom: 0,
                  height: "70px",
                  width: "100%",
                }}
              />
              <Typography
                sx={{ fontFamily: "serif" }}
                className="absolute bottom-2 text-white md:text-[17px] sm:text-[15px]  text-[14px] line-clamp-3 px-3"
              >
                {topHeadlines[ind]?.title}
              </Typography>
            </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CarouselList;
