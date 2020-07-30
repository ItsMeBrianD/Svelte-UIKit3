import SectionView from "./views/Section/SectionView.svelte";
import {sectionOptions} from "../src";
import {withKnobs, text, boolean, number, select} from "@storybook/addon-knobs";
import {validWidths} from "../src/helpers/width";

export default {
    title: 'Section',
    component: SectionView,
    decorators: [withKnobs]
};

export const Main = () => ({
    Component: SectionView,
    props: {
        props: {

        },
    }
});