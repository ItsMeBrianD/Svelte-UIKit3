import {action} from '@storybook/addon-actions';

import {Button} from '../src';
import ButtonGroupView from "./views/ButtonGroupView.svelte";
import ButtonDropdownView from "./views/ButtonDropdownView.svelte";
import {withKnobs, text, boolean, number, select} from "@storybook/addon-knobs";
import {validWidths} from "../src/helpers/width";

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
        size: select("Size", sizes, ""),
        width: select("Width", ["", ...validWidths], "")
    },
    on: {
        click: action('clicked'),
        focus: action('focus'),
        blur: action('blur'),
        focusin: action('focusin'),
        focusout: action('focusout'),
        dblclick: action('dblclick'),
        mouseenter: action('mouseenter'),
        mouseleave: action('mouseleave'),
        mouseover: action('mouseover'),
        mouseout: action('mouseout'),
        auxclick: action('auxclick'),
    },
});

export const ButtonGroup = () => ({
    Component: ButtonGroupView,
    props: {
        button1: {
            text: text("Text", "Button 1", "Button 1"),
            style: select("Style", colors, "default", "Button 1"),
            size: select("Size", sizes, "", "Button 1"),
            width: select("Width", ["", ...validWidths], "", "Button 1")
        },
        button2: {
            text: text("Text", "Button 2", "Button 2"),
            style: select("Style", colors, "primary", "Button 2"),
            size: select("Size", sizes, "", "Button 2"),
            width: select("Width", ["", ...validWidths], "", "Button 2")
        },
        button3: {
            text: text("Text", "Button 3", "Button 3"),
            style: select("Style", colors, "secondary", "Button 3"),
            size: select("Size", sizes, "", "Button 3"),
            width: select("Width", ["", ...validWidths], "", "Button 3")
        }
    }
});

export const ButtonWithDropdown = () => ({
    Component: ButtonDropdownView,
    props: {
        text: text("Text", "Button 3", "Button"),
        style: select("Style", colors, "", "Button"),
        size: select("Size", sizes, "", "Button"),
        width: select("Width", ["", ...validWidths], "", "Button")
    }
});

// TODO: Button with Dropdowns