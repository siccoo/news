import axios from 'axios';
import { getStoryIds, getStory, newStoriesUrl, storyUrl } from '../services/hnApi';
import { singularStory, storyIds, emptySingularStory } from '../fixtures';

describe('HackerNews Api', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    describe('getStory functionality', () => {
        it('request and get a story from HackerNews Api', async () => {
            axios.get.mockImplementation(() => {
                Promise.resolve({ data: { ...singularStory } })
            });

            const entity = await getStory(1);
            expect(axios.get).toHaveBeenCalledTimes(1);
        })
    });
});
