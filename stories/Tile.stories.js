import TileView from "./views/Tile/TileView.svelte";
import {withKnobs, text, boolean, number, select} from "@storybook/addon-knobs";
import {validWidths} from "../src/helpers/width";
import {tileOptions} from "../src";

export default {
    title: 'Tile',
    component: TileView,
    decorators: [withKnobs]
};

export const Main = () => ({
    Component: TileView,
    props: {
        props: {
            style: select("Style", ["", ...tileOptions.styles], ""),
        },

    }
});