import { Link, useNavigate } from "react-router-dom";
import "./card.scss";

function Card({ item, currentUser }) {
  const navigate = useNavigate();
  const isOwnProperty = currentUser && item.userId === currentUser.id;

  const handleChatRedirect = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (!isOwnProperty) {
      navigate(`/chat/${item.userId}`);
    }
  };

  const handleCardClick = () => {
    navigate(`/${item.id}`);
  };

  return (
    <div className="card" onClick={handleCardClick} style={{ cursor: "pointer" }}>
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.images[0]} alt="" />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src="/pin.png" alt="" />
          <span>{item.address}</span>
        </p>
        <p className="price">$ {item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="" />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="" />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div className="icons">
            {!isOwnProperty && (
              <div className="icon" onClick={handleChatRedirect} title="Chat with owner">
                <img src="/chat.png" alt="Chat" />
              </div>
            )}
            {/* Save icon can also redirect to single page if you want, or handle save logic here */}
            {!isOwnProperty && (
              <div className="icon" onClick={handleCardClick} title="View property">
                <img src="/save.png" alt="Save" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
