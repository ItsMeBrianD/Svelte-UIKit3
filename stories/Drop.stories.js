import {Drop} from "../src"
import {withKnobs, date, boolean, number, select, array, text} from "@storybook/addon-knobs";

export default {
    title: 'Drop',
    component: Drop,
    decorators: [withKnobs]
};
const positions = ["bottom-left", "bottom-center", "bottom-right", "bottom-justify", "top-left", "top-center", "top-right", "top-justify", "left-top", "left-center", "left-bottom", "right-top", "right-center", "right-bottom",];
const modes = ["click", "hover"];
const flips = [true, false, "x", "y"];
export const Main = () => ({
    Component: Drop,
    props: {
        pos: select("Position", positions, "bottom-center"),
        mode: select("Mode", modes, "click"),
        delayShow: number("Delay show", 0),
        delayHide: number("Delay hide", 0),
        flip: select("Flip", flips, true),
        offset: number("Offset", 0),


    }
})