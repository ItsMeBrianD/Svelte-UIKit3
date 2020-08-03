import InputView from "./views/Form/InputView.svelte";
import FormView from "./views/Form/FormView.svelte";
import {withKnobs, text, boolean, number, select} from "@storybook/addon-knobs";
import {validWidths} from "../src/helpers/width";
import {inputOptions} from "../src";

export default {
    title: 'Form',
    component: InputView,
    decorators: [withKnobs]
};

export const Input = () => ({
    Component: InputView,
    props: {
        props: {
            state: select("State", ["", ...inputOptions.states], ""),
            size: select("Size", ["",...inputOptions.sizes], ""),
            type: select("Type", ["text","password","number"], "text"),
            width: select("Width", ["",...inputOptions.widths, ...validWidths], ""),
            blank: boolean("Blank", false),
        }
    }
});

export const FullExample = () => ({
    Component: FormView
})