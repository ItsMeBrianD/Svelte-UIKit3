<script>
    import {Comment} from "../../../src";
    export let props = {};
    export let text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim id maiores maxime minima nesciunt numquam, perspiciatis sapiente sit ullam voluptate. Atque doloribus et exercitationem nostrum. Accusamus assumenda ipsum maiores voluptatem.";
</script>

<Comment {...props}>
    <p>{text}</p>
</Comment>