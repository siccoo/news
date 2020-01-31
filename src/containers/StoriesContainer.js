import React, { useEffect, useState } from 'react';
import { getStoryIds, getStory } from '../services/hnApi';
import { Story } from '../components/Story';
import { GlobalStyle, StoriesContainerWrapper } from '../styles/StoriesContainerStyles';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';

export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);
  const test = useInfiniteScroll();

  useEffect(() => {
    getStoryIds().then(source => setStoryIds(source));
    // getStory(20970623).then(data => console.log(data));
  }, []);

  return ( 
      <>
      <GlobalStyle />
      <StoriesContainerWrapper data-test-id="stories-container">
        <h1>Hacker News Stories</h1>
        {storyIds.map(storyId => (
          <Story key={storyId} storyId={storyId} /> 
        ))}
      </StoriesContainerWrapper>
      </>
  );
}