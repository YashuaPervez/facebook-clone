import { useState } from "react";

// Components
import IconButton from "../../UI/IconButton";

//
import { Like } from "../../icons";
import { toggleLikeMutation } from "../../../utils/queries/postQueries";
import { useMutation } from "@apollo/client";

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
      <IconButton className={postLiked ? "liked-button" : ""}>
        <Like size={6} color="#fff" status={postLiked} altColor="blue" />
      </IconButton>
    </div>
  );
};

export default LikeSection;
