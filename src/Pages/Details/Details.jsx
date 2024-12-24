import React from "react";
import { useParams } from "react-router-dom";
import "./details.css";
import { cardDetails } from "../../data";
import { Carousel } from "react-responsive-carousel";
import { Heart, MapPin, Pin } from "lucide-react";
import MapComponent from "../../Components/GoogleMap";

const Details = () => {
  const { id } = useParams();
  const card = cardDetails.find((card) => card.id === parseInt(id));

  console.log(card);

  return (
    <div className="detailsContainer">
      <div className="detailcard">
        {card.mostLiked && <div className="mostLiked">Most Liked</div>}
        <Carousel
          showStatus={false}
          showArrows={false}
          showThumbs={false}
          infiniteLoop={true}
        >
          {card.image.map((imgs, index) => (
            <div key={index} className="imgContainer">
              <img src={imgs} alt={card.address} className="detailsImage" />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="detailsContent">
        <div className="detailedAddress">
          <h1>Sushant Lok 2</h1>
          <div className="pinAddress">
            <MapPin size={20} fill="#252b5c" color="white" />
            <p>Sector 57, Gurgaon</p>
          </div>
        </div>
        <div className="prices">
          <h1>{card.price}</h1>
          <p>EMI Available</p>
        </div>
      </div>

      <div className="location">
        <h1>Location</h1>
        <div className="fullAddress">
          <span>
            <MapPin size={25} />
          </span>
          <p>{card.address.fullAddress}</p>
        </div>
      </div>

      <div className="googleMap">
        <MapComponent />
        <p>View on Map</p>
      </div>

      <div className="ameneties">
        <p>2 Hospital</p>
        <p>4 Gas stations</p>
        <p>2 Schools</p>
      </div>

      <div className="moreAmeneties">
        <h1>Property Ammenties</h1>
        <div className="types">
          <p className="selected">House</p>
          <p>Apartment</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
