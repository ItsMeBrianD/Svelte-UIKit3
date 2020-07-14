import ColumnView from "./views/Column/ColumnView.svelte";
import {withKnobs, text, boolean, number, select} from "@storybook/addon-knobs";
import {validWidths} from "../src/helpers/width";

export default {
    title: 'Column',
    component: ColumnView,
    decorators: [withKnobs]
};

const colors = ["default", "primary", "secondary"];
const sizes = ["small", "", "large"];

export const Main = () => ({
    Component: ColumnView,
    props: {
        props: {
            columns: number("Number of Columns", 2, {min:2, max:6})
        },
        items: number("Number of content elements", 2)
    }
});