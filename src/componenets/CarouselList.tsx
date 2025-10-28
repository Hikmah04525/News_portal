import {FC} from "react";
import {Box, Typography, Card, Grid} from "@mui/material";

const CarouselList: FC = () => {
    return (
        <Box className="mt-8">
        <Grid container spacing={2}>
          {[...Array(5)].map((_, ind) => (
            <Grid key={ind} size={{ xs: 12, sm: 6, md: 4, lg: 2.4 }}>
              <Card className="relative h-[200px]">
                <Box className="bg-red-300 h-full"></Box>
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
                  className="absolute bottom-2 text-white text-[17px] line-clamp-3 px-3"
                >
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s,
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    )
}
export default CarouselList;