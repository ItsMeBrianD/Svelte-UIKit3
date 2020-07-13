import {Dropdown} from "../src";
import {number, select, text, withKnobs} from "@storybook/addon-knobs";
import {validWidths} from "../src/helpers/width";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Dropdown',
    component: Dropdown,
    decorators: [withKnobs]
};

const positions = [
    "bottom-left", "bottom-center", "bottom-right", "bottom-justify",
    "top-left", "top-center", "top-right", "top-justify",
    "left-top", "left-center", "left-bottom",
    "right-top", "right-center", "right-bottom"
];

export const Main = () => ({
    Component: Dropdown,
    props: {
        position: select("Position", positions, ""),
        mode: select("Mode", ["hover","click"], "hover"),
        offset: number("Offset", 0),
        delayShow: number("Delay Show", 0),
        delayHide: number("Delay Hide", 0),
        flip: select("Flip", [true,false,"x","y"], true)
    }
});
