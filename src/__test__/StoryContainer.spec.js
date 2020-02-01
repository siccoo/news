import React from 'react';
import { render, cleanup, waitForElement } from '@testing-library/react';
import { StoriesContainer } from '../containers/StoriesContainer';
import { storyIds, singularStory } from '../fixtures';
import { getStory, getStoryIds } from '../services/hnApi';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import { STORY_INCREMENT } from '../constants';

beforeEach(cleanup);

jest.mock('../hooks/useInfiniteScroll.js');

jest.mock('../services/hnApi', () => ({
    getStory: jest.fn(),
    getStoryIds: jest.fn(),
}));

test('renders the story container with a story', async () => {
    useInfiniteScroll.mockImplemetation(() => ({
        count: STORY_INCREMENT,
    }));
    getStory.mockImplemetation(() => Promise.resolve(singularStory));
    getStoryIds.mockImplemetation(() => Promise.resolve(storyIds));

    
        const { getByText, queryTestById } = render(<StoriesContainer />);
        await waitForElement(() => [
            expect(getByText('Hacker News Stories')).toBeTruthy(),
            expect(getByText('Tarnished: Google Responds')).toBeTruthy(),
            expect(queryTestById('story-by').textContent).toEqual('By: Karl Hadwen'),
        ]);
});