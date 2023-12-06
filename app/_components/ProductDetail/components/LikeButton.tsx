import { LikeFilledIcon, LikeIcon } from "@/app/_assets/ts";
import { BaseIconButton } from "../../Base";
import { useLike } from "../hooks";
import { FC } from "react";
import { IDefaultIdProps } from "../types";

export const LikeButton: FC<IDefaultIdProps> = ({ defaultId }) => {
  const { liked, onLikeClick } = useLike({ defaultId });

  return (
    <BaseIconButton onClick={onLikeClick}>
      {liked ? <LikeFilledIcon /> : <LikeIcon />}
    </BaseIconButton>
  );
};
