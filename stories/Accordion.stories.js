import AccordionView from "./views/Accordion/AccordionView.svelte"
import {boolean, number, select, text, withKnobs} from "@storybook/addon-knobs";
import {validWidths} from "../src/helpers/width";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Accordion',
    component: AccordionView,
    decorators: [withKnobs]
};


export const Main = () => ({
    Component: AccordionView,
    props: {
        props: {
            animate : boolean("Animate", true),
            collapsible : boolean("Collapsible", true),
            duration : number("Duration", 200),
            multiple : boolean("Multiple", false),
            offset : number("Offset", 0)
        }
    }
});
