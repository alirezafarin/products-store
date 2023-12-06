import { productLikesLocalStorage } from "../constant";

interface ISetLikeStatus {
  id: number | string;
  status: boolean;
}

export const getLikeStatuses = () => {
  const likeStatuses = localStorage.getItem(productLikesLocalStorage) || "{}";
  return JSON.parse(likeStatuses);
};

export const setLikeStatus = ({ id, status }: ISetLikeStatus) => {
  const statuses = getLikeStatuses();
  localStorage.setItem(
    productLikesLocalStorage,
    JSON.stringify({ ...statuses, [id]: status })
  );
};
