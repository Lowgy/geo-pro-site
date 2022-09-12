import type { NextPage } from 'next';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Streamer } from '../utils/types/streamer';
import StreamCard from '../components/StreamCard';

const Home: NextPage = () => {
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

  useEffect(() => {
    getToken();
  }, []);
  return (
    <div>
      <h1>
        Welcome to GeoPro! This site is currently under development so do not
        expect much... yet!
        {streams.length !== 0
          ? streams?.map((stream) => (
              <StreamCard streamer={stream} key={stream.id} />
            ))
          : ''}
      </h1>
    </div>
  );
};

export default Home;
