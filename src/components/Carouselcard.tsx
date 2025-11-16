import { Box, Card, Typography, CardContent, CardMedia } from "@mui/material";
import { FC } from "react";
import { NewsType } from "../utils/Types";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Link } from "react-router-dom";

interface CarouselCardType {
  topHeadline: NewsType;
  toggleActive: (direction: "next" | "prev") => void;
}
const Carouselcard: FC<CarouselCardType> = ({ topHeadline, toggleActive }) => {
  return (
    <Box className="relative ">
      <Link to={topHeadline.url}>
        <Card className=" grid lg:grid-cols-2 md:grid-cols-3 border-2 shadow-none">
          <Box className="relative md:h-[360px] h-[280px] lg:col-span-1 md:col-span-2">
            <CardMedia
              component="img"
              className="h-full"
              image={topHeadline?.urlToImage}
            />
            <Box
              className="_carouselGradient"
              sx={{
                position: "absolute",
                bottom: 0,
                height: "70px",
                width: "100%"
              }}
            />
            <Typography
              sx={{ fontFamily: "serif" }}
              className="absolute bottom-2 text-white md:text-[22px] sm:text-xl text-lg leading-8 line-clamp3 px-6"
            >
              {topHeadline?.title}
            </Typography>
          </Box>

          <CardContent className="relative">
            <Typography
              gutterBottom
              className="sm:text-xl text:lg font-serif line-clamp-4"
            >
              {topHeadline?.description}
            </Typography>
            <Typography className="sm:text-xl text-lg font-serif line-clamp-4">
              {topHeadline?.content}
            </Typography>

            <Box className="md:absolute bottom-2">
              <Typography className="sm:text-xl text-lg font-serif line-clamp-4">
                source: {topHeadline?.source.name}
              </Typography>
              <Typography className="sm:text-xl text-lg font-serif line-clamp-4">
                date: {new Date(topHeadline?.publishedAt).toLocaleDateString()}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Link>
      {/* Navigation Buttons */}
      <KeyboardArrowLeftIcon
        className="absolute top-1/2 left-1 bg-neutral-800 text-white text-4xl rounded-full cursor-pointer"
        onClick={() => toggleActive("prev")}
      />
      <KeyboardArrowRightIcon
        className="absolute top-1/2 right-1 bg-neutral-800 text-white text-4xl rounded-full cursor-pointer"
        onClick={() => toggleActive("next")}
      />
    </Box>
  );
};
export default Carouselcard;
