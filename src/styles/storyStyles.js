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