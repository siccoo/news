import React, { useEffect, useState } from 'react';
import {getStoryIds} from '../services/hnApi';

export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then(source => setStoryIds(source));
  }, []);

  return (
    <p>{JSON.stringify(storyIds)}</p>
  )
}