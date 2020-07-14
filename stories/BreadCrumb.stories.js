import {Breadcrumb} from "../src"
import BreadcrumbView from "./views/Breadcrumb/BreadcrumbView.svelte";
import {boolean, number, select, text, withKnobs} from "@storybook/addon-knobs";
import {validWidths} from "../src/helpers/width";
import {backgroundColors} from "../src/helpers/background";

export default {
    title: 'Breadcrumb',
    component: Breadcrumb,
    decorators: [withKnobs]
};

const colors = ["", "primary", "success", "warning", "danger"];

export const Main = () => ({
    Component: BreadcrumbView,
    props: {

    },
});
