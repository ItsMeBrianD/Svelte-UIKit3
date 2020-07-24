import FilterView from "./views/Filter/FilterView.svelte";
import {withKnobs, text, boolean, number, select} from "@storybook/addon-knobs";

export default {
    title: 'Filter',
    component: FilterView,
    decorators: [withKnobs]
};

export const Main = () => ({
    Component: FilterView,
    props: {
        props: {
        },
        items: number("Number of content elements", 4)
    }
});