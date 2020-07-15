<script>
    import {Comment, CommentList} from "../../../src";

    export let comment1 = {};
    export let comment2 = {};
    export let comment3 = {};
    export let text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim id maiores maxime minima nesciunt numquam, perspiciatis sapiente sit ullam voluptate. Atque doloribus et exercitationem nostrum. Accusamus assumenda ipsum maiores voluptatem.";
    export let props = {};
</script>

<CommentList {...props}>
    <li>
        <Comment {...comment1}>
            <p>{text}</p>
        </Comment>

        <CommentList>
            <li>
                <Comment {...comment2}>
                    <p>{text}</p>
                </Comment>
            </li>
            <li>
                <Comment {...comment3}>
                    <p>{text}</p>
                </Comment>
            </li>
        </CommentList>
    </li>
</CommentList>