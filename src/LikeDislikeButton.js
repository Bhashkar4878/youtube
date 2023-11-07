import React, { useState } from 'react';

const LikeDislikeButton = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  return (
    <div>
      <button onClick={handleLike}>Like</button>
      <span>{likes}</span>
      <button onClick={handleDislike}>Dislike</button>
      <span>{dislikes}</span>
    </div>
  );
};

export default LikeDislikeButton;
