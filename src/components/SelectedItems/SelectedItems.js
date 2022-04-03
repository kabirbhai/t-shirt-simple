import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SelectedItems = ({ tShirt, handleRemoveFromCart }) => {
  return (
    <div>
      <div className="flex justify-between items-center w-full">
        <img
          className="w-8 h-8  rounded-md"
          src={tShirt.picture}
          alt="loading"
        />
        <h1 className="text-xl my-2">{tShirt.name}</h1>
        <button onClick={() => handleRemoveFromCart(tShirt)}>
          <FontAwesomeIcon
            className="text-amber-900"
            icon={faTrashCan}
          ></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default SelectedItems;
