import React, { useEffect, useState } from 'react';
import {getStoryIds} from './services/hnApi';

export const App = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then(source => setStoryIds(source));
    console.log('useEffect here!');
    
  }, []);

  return (
    <p>{JSON.stringify(storyIds)}</p>
  )
}