import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, cleanup } from '@testing-library/react';
import { App } from '../App';
import { storyIds, singularStory } from '../fixtures';
import { getStory, getStoryIds } from '../services/hnApi';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import { STORY_INCREMENT } from '../constants';

beforeEach(cleanup);

test('renders the application', async () => {
    useInfiniteScroll.mockImplemetation(() => ({
        count: STORY_INCREMENT,
    }));
    getStory.mockImplemetation(() => Promise.resolve(singularStory));
    getStoryIds.mockImplemetation(() => Promise.resolve(storyIds));
});