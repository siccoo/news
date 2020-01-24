import React, { useState, useEffect } from 'react';
import { getStory } from '../services/hnApi';

export const Story = props => {
    useEffect(() => {

    }, []);

return <p>I'm a story teller! {JSON.stringify(props)}</p>
}