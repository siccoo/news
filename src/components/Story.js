import React, { useState, useEffect } from 'react';
import { getStory } from '../services/hnApi';
import { StoryWrapper } from '../styles/storyStyles';

export const Story = ({ storyId }) => {
    const [story, setStory] = useState({});
    
    useEffect(() => {
        getStory(storyId).then(source => source && source.url && setStory(source));
    }, []);

return story && story.url ? (
    <StoryWrapper datatestid="story">
        <a href={story.url}>
            <p>{story.title}</p>
        </a>
        By: <p>{story.by}</p>
        Posted: <p>{story.time}</p>
    </StoryWrapper>
    ) : null;
};