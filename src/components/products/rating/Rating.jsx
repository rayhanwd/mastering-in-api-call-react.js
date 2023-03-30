import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Rating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="rating">
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={index} className="star" />
      ))}
      {halfStar && <FaStarHalfAlt className="star" />}
      {[...Array(emptyStars)].map((_, index) => (
        <FaRegStar key={index} className="star" />
      ))}
    </div>
  );
};

export default Rating;
