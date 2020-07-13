import {Article} from "../src"
import {boolean, number, select, text, withKnobs} from "@storybook/addon-knobs";

export default {
    title: 'Article',
    component: Article,
    decorators: [withKnobs]
};

const colors = ["", "primary", "success", "warning", "danger"];

export const Main = () => ({
    Component: Article,
    props: {
        title: text("Title", "Article"),
        meta: text("Meta", "Written on Jan 1, 1970"),
        lead: text("Lead", "Svelte-UIKit3 Article"),
        content: text("Content", "All props can also be slotted to inject components into the article")
    },
});
