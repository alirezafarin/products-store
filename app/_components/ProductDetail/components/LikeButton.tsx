import { LikeFilledIcon, LikeIcon } from "@/app/_assets/ts";
import { BaseIconButton } from "../../Base";
import { useLike } from "../hooks";

export const LikeButton = () => {
  const { liked, onLikeClick } = useLike();

  return (
    <BaseIconButton onClick={onLikeClick}>
      {liked ? <LikeFilledIcon /> : <LikeIcon />}
    </BaseIconButton>
  );
};
