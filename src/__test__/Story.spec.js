import React from 'react';
import { render, cleanup, waitForElement } from '@testing-library/react';
import { Story } from '../components/Story';
import { singularStory } from '../fixtures';
import { getStory } from '../services/hnApi';

beforeEach(() => {
    cleanup();
    jest.resetAllMocks();
});

jest.mock('../services/hnApi', () => ({
    getStory: jest.fn(),
}));

test('renders the story component with content', async () => {
    getStory.mockImplemetation(() => Promise.resolve(singularStory));
    
        const { getByText, queryTestById } = render(<Story storyId="1" />);
        await waitForElement(() => [
            expect(getByText('Hacker News Stories')).toBeTruthy(),
            expect(getByText('Tarnished: Google Responds')).toBeTruthy(),
            expect(queryTestById('story-by').textContent).toEqual('By: Karl Hadwen'),
        ]);
});