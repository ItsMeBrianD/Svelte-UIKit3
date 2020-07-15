import CommentView from "./views/Comment/CommentView.svelte";
import CommentListView from "./views/Comment/CommentListView.svelte";
import {withKnobs, text, boolean, number, select, array} from "@storybook/addon-knobs";
import {validWidths} from "../src/helpers/width";

export default {
    title: 'Comment',
    component: CommentView,
    decorators: [withKnobs]
};




export const Main = () => ({
    Component: CommentView,
    props: {
        props: {
            title: text("Title", "An insightful comment"),
            avatarSrc: text("Avatar URL", "https://randomuser.me/api/portraits/med/men/1.jpg"),
            avatarAlt: text("Avatar Alt Text", ""),
            meta: array("Meta Items", ["user@example.com", "Jan 1, 1970"]),
            width: select("Width", ["", ...validWidths], ""),
            primary: boolean("Is Primary", false)
        },
    }
});
export const CommentList = () => ({
    Component: CommentListView,
    props: {
        props: {
            width: select("Width", ["", ...validWidths], "", "Comment List"),
        },
        comment1: {
            title: text("Title", "An insightful comment", "Comment 1"),
            avatarSrc: text("Avatar URL", "https://randomuser.me/api/portraits/med/men/1.jpg", "Comment 1"),
            avatarAlt: text("Avatar Alt Text", "", "Comment 1"),
            meta: array("Meta Items", ["user@example.com", "Jan 1, 1970"], "Comment 1"),
            width: select("Width", ["", ...validWidths], "", "Comment 1"),
            primary: boolean("Is Primary", false, "Comment 1"),
        },
        comment2: {
            title: text("Title", "An insightful comment", "Comment 2"),
            avatarSrc: text("Avatar URL", "https://randomuser.me/api/portraits/med/men/1.jpg", "Comment 2"),
            avatarAlt: text("Avatar Alt Text", "", "Comment 2"),
            meta: array("Meta Items", ["user@example.com", "Jan 1, 1970"], "Comment 2"),
            width: select("Width", ["", ...validWidths], "", "Comment 2"),
            primary: boolean("Is Primary", false, "Comment 2"),
        },
        comment3: {
            title: text("Title", "An insightful comment", "Comment 3"),
            avatarSrc: text("Avatar URL", "https://randomuser.me/api/portraits/med/men/1.jpg", "Comment 3"),
            avatarAlt: text("Avatar Alt Text", "", "Comment 3"),
            meta: array("Meta Items", ["user@example.com", "Jan 1, 1970"], "Comment 3"),
            width: select("Width", ["", ...validWidths], "", "Comment 3"),
            primary: boolean("Is Primary", false, "Comment 3"),
        },
    }
})