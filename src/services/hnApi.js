import axios from 'axios';

export const baseUrl = "https://hacker-news.firebaseio.com/v0/";
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const storyUrl = `${baseUrl}item/`;

export const getStoryIds = async () => {
    // MAKING A CALL TO THE HACKER NEWS API USING AXIOS
    const result = await axios.get(newStoriesUrl).then(data => data);

    return result;
}