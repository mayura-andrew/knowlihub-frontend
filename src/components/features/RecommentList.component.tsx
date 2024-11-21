import { RecommendProps } from "@/types/types";
import Recommend from "../common/Recommend.component";

interface RecommendListProps {
    recommends: RecommendProps[];
}

const RecommendList: React.FC<RecommendListProps> = ({ recommends }) => {
    return (
      <div className="mt-4">
        {recommends.map((recommend: RecommendProps, index) => (
          <Recommend
            key={index}
            author={recommend.author}
            text={recommend.text}
            avatar={recommend.avatar}
          />
        ))}
      </div>
    );
  };
  
  export default RecommendList;