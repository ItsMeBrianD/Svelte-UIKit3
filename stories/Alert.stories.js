import {Alert} from "../src"
import {boolean, number, select, text, withKnobs} from "@storybook/addon-knobs";
import {validWidths} from "../src/helpers/width";

export default {
    title: 'Alert',
    component: Alert,
    decorators: [withKnobs]
};

const colors = ["", "primary", "success", "warning", "danger"];

export const Main = () => ({
    Component: Alert,
    props: {
        showClose: boolean("Show Close Button", false),
        largeClose: boolean("Large Close Button", false),
        style: select("Style", colors, ""),
        width: select("Width", ["", ...validWidths], "")
    },
});
