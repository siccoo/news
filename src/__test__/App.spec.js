import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, cleanup, waitForElement } from '@testing-library/react';
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

    await act(async () => {
        const { getByText, queryTestById } = render(<App />);
        await waitForElement(() => [
            expect(getByText('Hacker News Stories')).toBeTruthy(),
            expect(getByText('Tarnished: Google Responds')).toBeTruthy(),
            expect(queryTestById('story-by').textContent).toEqual('By: Karl Hadwen'),
        ]);
    });
});