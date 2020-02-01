import React, { useState, useEffect, memo } from 'react';
import { getStory } from '../services/hnApi';
import { StoryWrapper, StoryTitle, StoryMeta, StoryMetaElement } from '../styles/storyStyles';
import { mapTime } from '../mappers/mapTime';

export const Story = memo(function Story({ storyId }) {
    const [story, setStory] = useState({});
    
    useEffect(() => {
        getStory(storyId).then(source => source && source.url && setStory(source));
    }, []);

return story && story.url ? (
    <StoryWrapper datatestid="story">
        <StoryTitle>
            <a href={story.url}>{story.title}</a>
        </StoryTitle>

        <StoryMeta>
            <span className="story_by" datatestid="story-by">
                <StoryMetaElement color="#000">By:</StoryMetaElement> {story.by}
            </span>
            <span className="story_time" datatestid="story-time">
                <StoryMetaElement color="#000">Posted:</StoryMetaElement> {` `}
                {mapTime(story.time)}
            </span>
        </StoryMeta>
    </StoryWrapper>
    ) : null;
});