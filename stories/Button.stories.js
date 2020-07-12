import {action} from '@storybook/addon-actions';

import Button from '../src/Button/Button.svelte';
import ButtonGroupView from "./views/ButtonGroupView.svelte";
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
    Small: "small", Default: "", Large: "large"
};

export const Main = () => ({
    Component: Button,
    props: {
        text: text("Text", "Button Text"),
        style: select("Style", colors, "default"),
        size: select("Size", sizes, "")
    },
    on: {click: action('clicked')},
});

export const ButtonGroup = () => ({
    Component: ButtonGroupView,
    props: {
        button1: {
            text: text("Text", "Button 1", "Button 1"),
            style: select("Style", colors, "default", "Button 1"),
            size: select("Size", sizes, "", "Button 1")
        },
        button2: {
            text: text("Text", "Button 2", "Button 2"),
            style: select("Style", colors, "primary", "Button 2"),
            size: select("Size", sizes, "", "Button 2")
        },
        button3: {
            text: text("Text", "Button 3", "Button 3"),
            style: select("Style", colors, "secondary", "Button 3"),
            size: select("Size", sizes, "", "Button 3")
        }
    }
});

// TODO: Button with Dropdowns