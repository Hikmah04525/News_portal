import {FC} from "react"; 
import {Box,  Card, Grid, Skeleton} from "@mui/material";

const CarouselListSkeleton: FC = () => {

  

  return (
    <Box className="   mt-8">
        {
            [...Array(5)].map((item, ind) => (
      <Grid container spacing={2}>
        
          
            <Grid key={ind} size={{ xs: 12, sm: 6, md: 4, lg: 2.4 }}>
              
            <Card className="relative ">
    <Skeleton  variant="rectangular" width={"100%"} > 
    <Box className=" w-full aspect-[16/10]"/>
    </Skeleton>
            </Card>
            
          </Grid>
      </Grid>
            ))
        }
    </Box>
  );
};

export default CarouselListSkeleton;
