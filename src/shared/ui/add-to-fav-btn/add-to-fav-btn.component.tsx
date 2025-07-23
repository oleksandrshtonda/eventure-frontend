import type { FC } from "react";
import "./add-to-fav-btn.component.scss";
import FavouriteIcon from "../../assets/svg/favourite-icon.svg?react";

interface AddToFavButtonProps {
  isFavourite: boolean;
  callback: () => void;
}

const AddToFavButtonComponent: FC<AddToFavButtonProps> = ({
  isFavourite,
  callback,
}) => {
  return (
    <button
      className={`add-to-fav-btn ${isFavourite && "add-to-fav-btn--active"}`}
      onClick={callback}
    >
      <FavouriteIcon />
    </button>
  );
};

export default AddToFavButtonComponent;
