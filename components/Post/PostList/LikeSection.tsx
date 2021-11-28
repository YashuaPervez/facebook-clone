import { useState } from "react";

// Components
import IconButton from "../../UI/IconButton";

//
import { Like } from "../../icons";
import { toggleLikeMutation } from "../../../utils/queries/postQueries";
import { useMutation } from "@apollo/client";
import { colors } from "../../../styles/colors";

type LikeSectionProps = {
  liked: boolean;
  postId: number;
};

const LikeSection: React.FC<LikeSectionProps> = ({ liked, postId }) => {
  const [postLiked, setPostLiked] = useState<boolean>(liked);

  const [toggleLike] = useMutation(toggleLikeMutation);

  const toggleLikeHandler = async () => {
    try {
      const response = await toggleLike({
        variables: {
          postId,
        },
      });

      const newStatus = response.data.toggleLike;
      setPostLiked(newStatus);
    } catch (e) {}
  };

  return (
    <div onClick={toggleLikeHandler} className="mb-2">
      <IconButton className={postLiked ? "liked-button" : ""} size="sm">
        <Like
          size={4.4}
          color="#fff"
          status={postLiked}
          altColor={colors.primary.main}
        />
      </IconButton>
    </div>
  );
};

export default LikeSection;
