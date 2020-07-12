import {action} from '@storybook/addon-actions';

import Button from '../src/Button/Button.svelte';
import {withKnobs, text, boolean, number, select} from "@storybook/addon-knobs";

export default {
    title: 'Button',
    component: Button,
    decorators: [withKnobs]
};

const colors = {
    Default: "default", Primary: "primary", Secondary: "secondary", Danger: "danger", Text: "text", Link: "link"
};

const sizes = {
    Small: "small",
    Default: "",
    Large: "large"
};

export const Main = () => ({
    Component: Button,
    props: {
        text: text("text", "Button Text"),
        style: select("Style", colors, "default"),
        size: select("Size", sizes, "")
    },
    on: {click: action('clicked')},
});
