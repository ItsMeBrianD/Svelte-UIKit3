import AnimationView from "./views/Animation/AnimationView.svelte";
import {withKnobs, date, boolean, number, select, array, text} from "@storybook/addon-knobs";
import {animations, transformations} from "../src/helpers/animation";

export default {
    title: 'Animation',
    component: AnimationView,
    decorators: [withKnobs]
};
export const Main = () => ({
    Component: AnimationView,
    props: {
        animation: select("Animation", animations, "fade"),
        origin: select("Origin", ["", ...transformations], "fade"),
        reverse: boolean("Reverse", false),
        fast: boolean("Fast", false)
    }
})