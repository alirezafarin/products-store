import React from "react";
import { BaseIconButton } from "../../Base";
import { LikeFilledIcon, LikeIcon } from "@/app/_assets/ts";
import { useLike } from "../hooks";

export const LikeButton = () => {
  const { liked, onLikeClick } = useLike();

  return (
    <BaseIconButton onClick={onLikeClick}>
      {liked ? <LikeIcon /> : <LikeFilledIcon />}
    </BaseIconButton>
  );
};
