/*  Template Name: Hacker News API
    Author: Chilaka Michael Obinna
    Author URL: github.com/siccoo
    Version: 1.0.0
    Website: '';
*/

import styled from 'styled-components';

export const StoryWrapper = styled.section`
    padding-top: 10px;
    margin-bottom: 20px;
    border-top: 1px solid #ccc;

    &:first-of-type {
        border-top: 0;
    }

    &:last-of-type {
        margin-bottom: 0;
        padding-bottom: 0;
    }
`;

// TITLE & META (time / by) 
export const StoryTitle = styled.h1`
    margin-bottom: 5px;
    font-size: 18px;
    font-family: 'Cambria', Cochin, Georgia, Times, 'Times New Roman', serif;
    line-height: 1.8;
    margin: 0;
    text-decoration: none;

    a {
        color: #2e2e2c;
        background-color: #f8dc3d;
        text-decoration: none;
    }
`