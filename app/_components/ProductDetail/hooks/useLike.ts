import { useParams } from "next/navigation";
import { FC, useEffect, useState } from "react";
import { getLikeStatuses, setLikeStatus } from "../utils";
import { IDefaultIdProps } from "../types";

export const useLike = ({ defaultId = "" }: IDefaultIdProps) => {
  const { id = defaultId } = useParams<{ id: string }>();
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const statuses = getLikeStatuses();
    setLiked(!!statuses?.[id]);
  }, [id]);

  const onLikeClick = () => {
    setLiked((prevState) => !prevState);
    setLikeStatus({ id, status: !liked });
  };

  return { liked, onLikeClick };
};
