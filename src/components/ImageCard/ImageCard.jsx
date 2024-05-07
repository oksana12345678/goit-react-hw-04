const ImageCard = ({ small, description, likes, download }) => {
  return (
    <div>
      <img src={small} alt="" />
      <p>{likes}</p>
      <p>{description}</p>
      <a href={download}>Download</a>
    </div>
  );
};
export default ImageCard;
