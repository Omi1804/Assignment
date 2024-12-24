import React from "react";
import { useSelector } from "react-redux";
import "./wishlist.css";
import { Heart, Trash } from "lucide-react";
import { useDispatch } from "react-redux";
import { removeFromWishlist } from "../../redux/wishlistSlice";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemove = (id) => {
    dispatch(removeFromWishlist({ id }));
  };

  return (
    <div className="wishlistContainer">
      {wishlistItems.length > 0 ? (
        <div className="wishlistGrid">
          {wishlistItems.map((item) => (
            <div key={item.id} className="wishlistCard">
              <div
                className="wishlistImage"
                onClick={() => navigate(`/details/${item.id}`)}
              >
                <img src={item.image[0]} alt={item.address.shortAddress} />
              </div>
              <div className="wishlistContent">
                <h3
                  className="wishlistAddress"
                  onClick={() => navigate(`/details/${item.id}`)}
                >
                  {item.address.shortAddress}
                </h3>

                <div className="wishlistActions">
                  <button
                    className="removeButton"
                    onClick={() => handleRemove(item.id)}
                  >
                    <Trash size={20} />
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="emptyWishlistMessage">
          Your wishlist is empty. Start exploring and adding items!
        </p>
      )}
    </div>
  );
};

export default Wishlist;
