import ThumbnavView from "./views/ThumbNav/ThumbnavView.svelte";
import {thumbnavOptions} from "../src";
import {withKnobs, text, boolean, number, select} from "@storybook/addon-knobs";
import {validWidths} from "../src/helpers/width";

export default {
    title: 'ThumbNav',
    component: ThumbnavView,
    decorators: [withKnobs]
};

export const Main = () => ({
    Component: ThumbnavView,
    props: {
        props: {
            vertical: boolean("Vertical", false),
            width: select("Width", ["", ...validWidths], "")
        },
    }
});