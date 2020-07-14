import {Badge} from "../src"
import {text, withKnobs} from "@storybook/addon-knobs";

export default {
    title: 'Badge',
    component: Badge,
    decorators: [withKnobs]
};

export const Main = () => ({
    Component: Badge,
    props: {
        text: text("Text", "Badge"),
    },
});