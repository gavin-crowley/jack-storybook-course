import React from 'react';
import Button from './button'

export const basicButton = () => (
    <Button>My basic Button</Button>
);

export const secondaryButton = () => (
    <Button variant="secondary">Secondary Button</Button>
);

export const tertiaryButton = () => (
    <Button variant="tertiary">Tertiary Button</Button>
);

export const iconButton = () => (
    <Button icon="user">My basic Button</Button>
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
