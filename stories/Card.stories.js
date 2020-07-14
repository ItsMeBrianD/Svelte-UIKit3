import {action} from '@storybook/addon-actions';

import CardView from "./views/Card/CardView.svelte";
import {withKnobs, text, boolean, number, select} from "@storybook/addon-knobs";
import {validWidths} from "../src/helpers/width";

export default {
    title: 'Card',
    component: CardView,
    decorators: [withKnobs]
};

const colors = ["default", "primary", "secondary"];
const sizes = ["small", "", "large"];

export const Main = () => ({
    Component: CardView,
    props: {
        title: text("Title", "Card Title"),
        titleIsHeader: boolean("Title is a header", false),
        color: select("Color", colors, "default"),
        size: select("Size", sizes, ""),
        hover: boolean("Hover Effect", false),
        badge: text("Badge Text", ""),
        width: select("Width", ["", ...validWidths], "medium"),
        body: text("Body Text", ""),
        footer: text("Footer Text", "")
    }
});