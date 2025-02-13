import axios from 'axios';

import { config } from '../config/env.config';

const { clientId, clientSecret } = config.spotify;

let accessToken = ''

const getAccessToken = async () => {
    try {
        const response = await axios.post('https://accounts.spotify.com/api/token', null, {
            params: {
                grant_type: 'client_credentials'
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${btoa(`${clientId}:${clientSecret}`).toString('base64')}`
            }
        })
        accessToken = response.data.access_token
    } catch (error) {
        console.error('Error getting access token', error)
    }
}


export const searchTracks = async (query) => {
  if (!accessToken) {
    await getAccessToken();
  }
  const response = await axios.get("https://api.spotify.com/v1/search", {
    params: {
      q: query,
      type: "track",
      limit: 10,
    },
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data.tracks.items;
};