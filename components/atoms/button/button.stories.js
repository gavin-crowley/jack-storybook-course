import React from 'react';
import Button from './button';
import { withKnobs, text, select } from "@storybook/addon-knobs";

import knobData from "./button.knobs.json";
const { icon, innerText } = knobData;

export const basicButton = () => (
    <Button>{text("Button text", "Basic button")}</Button>
);

export const secondaryButton = () => (
    <Button variant="secondary">Secondary Button</Button>
);

export const tertiaryButton = () => (
    <Button variant="tertiary">Tertiary Button</Button>
);

export const iconButton = () => (
    <Button icon={select(icon.label, icon.options, icon.default, icon.group)}>{text("Button text", "Basic button")}</Button>
);

export const functionButton = () => (
    <Button onClick={() => alert('Hello')}>Function Button</Button>
);

export const linkedButton = () => (
    <Button href="/route">Linked Button</Button>
);

export default {
    component: Button,
    decorators: [withKnobs],
    title: "Button"
};
