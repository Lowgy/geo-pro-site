import type { NextPage } from 'next';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Streamer } from '../utils/types/streamer';
import StreamCard from '../components/StreamCard';

const Home: NextPage = () => {
  const [numberOfStreams, setNumberOfStreams] = useState<number>(3);
  const [streams, setStreams] = useState<Streamer[]>([]);

  const getToken = () => {
    axios
      .post('https://id.twitch.tv/oauth2/token', {
        client_id: process.env.TWITCH_CLIENT_ID,
        client_secret: process.env.TWITCH_SECRET,
        grant_type: 'client_credentials',
      })
      .then((res) => {
        const token = res.data.access_token;
        getGeoStreams(token);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getGeoStreams = (token: string) => {
    axios
      .get('https://api.twitch.tv/helix/streams?game_id=369418', {
        headers: {
          'Client-Id': `${process.env.TWITCH_CLIENT_ID}`,
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data.data);
        setStreams(res.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const loadMoreStreams = () => {
    setNumberOfStreams(numberOfStreams + 3);
  };

  useEffect(() => {
    getToken();
  });
  return (
    <div>
      <h1>
        Welcome to GeoPro! This site is currently under development so do not
        expect much... yet!
      </h1>
      <div className="text-center">
        <h1 className="font-bold">Geo Streamers</h1>
        <div className="grid grid-cols-3 gap-2">
          {streams.length !== 0
            ? streams
                .slice(0, numberOfStreams)
                .map((streamer) => (
                  <StreamCard key={streamer.id} streamer={streamer} />
                ))
            : ''}
        </div>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={loadMoreStreams}
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default Home;
