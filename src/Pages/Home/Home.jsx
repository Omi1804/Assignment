import React, { useState } from "react";
import "./home.css";
import { Heart, Eye, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cardDetails as initialCardDetails } from "../../data";
import { Carousel } from "react-responsive-carousel";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../../redux/wishlistSlice";

const Home = () => {
  const navigate = useNavigate();
  const [cardDetails, setCardDetails] = useState(initialCardDetails);
  const [visibleCards, setVisibleCards] = useState(4);
  const dispatch = useDispatch();

  const loadMoreCards = () => {
    setVisibleCards((prevVisible) => prevVisible + 4);
  };

  const handleWishlist = (cardId) => {
    setCardDetails((prevDetails) =>
      prevDetails.map((card) =>
        card.id === cardId ? { ...card, liked: !card.liked } : card
      )
    );

    const selectedCard = cardDetails.find((card) => card.id === cardId);
    dispatch(addToWishlist(selectedCard));
  };

  return (
    <div className="homeCont">
      {cardDetails.slice(0, visibleCards).map((card) => (
        <div key={card.id} className="card">
          {card.mostLiked && <div className="mostLiked">Most Liked</div>}
          <div
            className="heartIcon"
            onClick={(e) => {
              e.stopPropagation();
              handleWishlist(card.id);
            }}
          >
            <Heart
              color={card.liked ? "red" : "#FFF"}
              fill={card.liked ? "red" : "#ccc"}
              size={30}
            />
          </div>
          <Carousel
            showStatus={false}
            showArrows={false}
            showThumbs={false}
            infiniteLoop={true}
          >
            {card.image.map((imgs, index) => (
              <div
                key={index}
                className="imageContainer"
                onClick={() => navigate(`/details/${card.id}`)}
              >
                <img
                  src={imgs}
                  alt={card.address.shortAddress}
                  className="cardImage"
                />
              </div>
            ))}
          </Carousel>
          <div
            onClick={() => navigate(`/details/${card.id}`)}
            className="cardDetails"
          >
            <div className="viewStars">
              <div className="views">
                <Eye size={20} /> {card.views}
              </div>
              <div className={`stars ${card.stars >= 4 ? "green" : "red"}`}>
                <Star
                  size={17}
                  fill={`${card.stars >= 4 ? "#278717" : "#E57601"}`}
                  color={`${card.stars >= 4 ? "#278717" : "#E57601"}`}
                />
                {card.stars}
              </div>
            </div>

            <div className="address">{card.address.shortAddress}</div>
            <div className="date">{card.date}</div>
          </div>
        </div>
      ))}

      {/* Load More Button */}
      {visibleCards < cardDetails.length && (
        <button className="loadMoreButton" onClick={loadMoreCards}>
          Load More
        </button>
      )}
    </div>
  );
};

export default Home;
