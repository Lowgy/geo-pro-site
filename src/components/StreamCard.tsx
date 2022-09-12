import React from 'react';
import { Streamer } from '../utils/types/streamer';

const StreamCard: React.FC<{ streamer: Streamer }> = ({ streamer }) => {
  return (
    <>
      <iframe
        key={streamer.id}
        src={`https://player.twitch.tv/?channel=${streamer.user_name}&parent=localhost&muted=true&autoplay=false`}
        height="720"
        width="1280"
      ></iframe>
    </>
  );
};

export default StreamCard;
