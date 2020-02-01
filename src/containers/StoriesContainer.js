import React, { useEffect, useState, memo } from 'react';
import { getStoryIds, getStory } from '../services/hnApi';
import { Story } from '../components/Story';
import { GlobalStyle, StoriesContainerWrapper } from '../styles/StoriesContainerStyles';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';

export const StoriesContainer = () => {
  const { count } = useInfiniteScroll();
  const [storyIds, setStoryIds] = useState([]);
  

  useEffect(() => {
    getStoryIds().then(source => setStoryIds(source));
  }, []);

  return ( 
      <>
      <GlobalStyle />
      <StoriesContainerWrapper data-test-id="stories-container">
        <h1>Hacker News Stories</h1>
        {storyIds.slice(0, count).map(storyId => (
          <Story key={storyId} storyId={storyId} /> 
        ))}
      </StoriesContainerWrapper>
      </>
  );
}