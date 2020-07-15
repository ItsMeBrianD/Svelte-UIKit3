import {Divider} from "../src"
import {withKnobs, date, boolean, number, select, array, text} from "@storybook/addon-knobs";

export default {
    title: 'Divider',
    component: Divider,
    decorators: [withKnobs]
};
export const Main = () => ({
    Component: Divider,
    props: {
        icon: boolean("Icon", false),
        small: boolean("Small", false),
        vertical: boolean("Vertical", false)
    }
})