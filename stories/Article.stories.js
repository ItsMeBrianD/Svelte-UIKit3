import {Article} from "../src"
import FancyArticleView from "./views/Article/FancyArticleView.svelte";
import {boolean, number, select, text, withKnobs} from "@storybook/addon-knobs";
import {validWidths} from "../src/helpers/width";
import {backgroundColors} from "../src/helpers/background";

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
        content: text("Content", "All props can also be slotted to inject components into the article"),
        class: text("Classes", "uk-padding"),
        width: select("Width", ["", ...validWidths], ""),
        backgroundColor: select("Background Color", backgroundColors, "default")
    },
});

export const Fancy = () => ({
    Component: FancyArticleView,
    props: {
        width: select("Width", ["", ...validWidths], ""),
        backgroundColor: select("Background Color", backgroundColors, "default")
    }
})
