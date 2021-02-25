import React from 'react';
import Button from './button'

export const basicButton = () => (
    <Button variant="secondary">My basic Button</Button>
);

export const functionButton = () => (
    <Button onClick={() => alert('Hello')}>Function Button</Button>
);

export const linkedButton = () => (
    <Button href="/route">Linked Button</Button>
);

export default {
    component: Button,
    title: "Button"
};
