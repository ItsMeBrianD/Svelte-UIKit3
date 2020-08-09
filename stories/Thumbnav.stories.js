import ThumbnavView from "./views/Thumbnav/ThumbnavView.svelte";
import {thumbnavOptions} from "../src";
import {withKnobs, text, boolean, number, select} from "@storybook/addon-knobs";
import {validWidths} from "../src/helpers/width";

export default {
    title: 'Thumbnav',
    component: ThumbnavView,
    decorators: [withKnobs]
};

export const Main = () => ({
    Component: ThumbnavView,
    props: {
        props: {

        },
    }
});