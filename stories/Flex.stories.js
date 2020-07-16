import FlexView from "./views/Flex/FlexView.svelte";
import {flexOptions} from "../src";
import {withKnobs, text, boolean, number, select} from "@storybook/addon-knobs";
import {validWidths} from "../src/helpers/width";

export default {
    title: 'Flex',
    component: FlexView,
    decorators: [withKnobs]
};

export const Main = () => ({
    Component: FlexView,
    props: {
        props: {
            width: select("Width", ["", ...validWidths], ""),
            inline: boolean("Inline", false),
            justification: select("Justification", ["", ...flexOptions.justifications], ""),
            alignment: select("Alignment", ["", ...flexOptions.alignments], ""),
            direction: select("Direction", ["", ...flexOptions.directions], ""),
            wrap: select("Wrap", ["", ...flexOptions.wraps], ""),
            wrapAlignment: select("Wrap Alignement", ["", ...flexOptions.wrapAlignments], "")

        },
        items: number("Number of content elements", 2)
    }
});