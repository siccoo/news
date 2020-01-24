import React, { useState, useEffect } from 'react';
import { getStory } from '../services/hnApi';

export const Story = ({ storyId }) => {
    const [story, setStory] = useState({});
    
    useEffect(() => {
        getStory(storyId).then(source => source && source.url && setStory(source));
    }, []);

return <p>{JSON.stringify(story)}</p>
}