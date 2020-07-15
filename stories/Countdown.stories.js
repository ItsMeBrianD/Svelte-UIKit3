import {Countdown} from "../src"
import {withKnobs, date, boolean, number, select, array, text} from "@storybook/addon-knobs";

export default {
    title: 'Countdown',
    component: Countdown,
    decorators: [withKnobs]
};

export const Main = () => ({
    Component: Countdown,
    props: {
        date: text("Countdown to:", "01/01/2021"),
        separator: text("Separator", ""),
        showDays: boolean("Show Days", true),
        dayLabel: text("Day Label", "days"),
        showHours: boolean("Show Hours", true),
        hourLabel: text("Hour Label", "hours"),
        showMinutes: boolean("Show Minutes", true),
        minutesLabel: text("Minutes Label", "minutes"),
        showSeconds: boolean("Show Seconds", true),
        secondsLabel: text("Seconds Label", "seconds"),
    }
});
