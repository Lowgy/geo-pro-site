import React from 'react';
import { Streamer } from '../utils/types/streamer';

const StreamCard: React.FC<{ streamer: Streamer }> = ({ streamer }) => {
  return (
    <div className="p-2 rounded bg-green-200">
      <div className="m-2">
        <h1 className="font-semibold truncate">{streamer.title}</h1>
      </div>
      <div className="aspect-video">
        <iframe
          key={streamer.id}
          src={`https://player.twitch.tv/?channel=${streamer.user_name}&parent=localhost&muted=true&autoplay=false`}
          height="100%"
          width="100%"
          className="rounded"
        ></iframe>
      </div>
    </div>
  );
};

export default StreamCard;
