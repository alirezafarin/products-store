import { useState } from "react";

export const useLike = () => {
  const [liked, setLiked] = useState(false);

  const onLikeClick = () => setLiked((prevState) => !prevState);

  return { liked, onLikeClick };
};
