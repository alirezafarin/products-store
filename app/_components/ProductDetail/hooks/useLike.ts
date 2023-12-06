import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IDefaultIdProps } from "../types";
import { getLikeStatuses, setLikeStatus } from "../utils";

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
