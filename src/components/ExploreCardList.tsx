import { Box } from "@mui/material";
import { NewsType } from "../utils/Types";
import NewsCard from "./NewsCard";

export interface ExploreCardListProps {
  list: NewsType[];
  loading?: boolean;
}

const ExploreCardList: React.FC<ExploreCardListProps> = ({ list, loading }) => {
  // If loading is true, show skeleton / loading text
  if (loading) {
    return (
      <div className="w-full text-center py-6 text-gray-600">
        Loading...
      </div>
    );
  }

  return (
    <Box className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3">
      {list?.map((item, index) => (
        <NewsCard key={index} item={item} />
      ))}
    </Box>
  );
};

export default ExploreCardList;

