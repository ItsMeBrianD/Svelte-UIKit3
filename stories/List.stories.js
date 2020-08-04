import ListView from "./views/List/ListView.svelte";
import {withKnobs, text, boolean, number, select} from "@storybook/addon-knobs";
import {validWidths} from "../src/helpers/width";
import {listOptions} from "../src";

export default {
    title: 'List',
    component: ListView,
    decorators: [withKnobs]
};

export const Main = () => ({
    Component: ListView,
    props: {
        props: {
            style: select("Style", ["", ...listOptions.styles], ""),
            color: select("Color", ["", ...listOptions.colors], ""),
            size: select("Size", ["", ...listOptions.sizes], ""),
            divider: boolean("Divider", false),
            striped: boolean("Striped", false)
        }
    }
});