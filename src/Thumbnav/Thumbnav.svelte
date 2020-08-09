<script context="module">
    import {uk_width} from "..";

    export let meta = [];
    export let vertical = false;
    export let width;
</script>

<script>
    let classes = ["uk-thumbnav"];

</script>

<ul class={classes.join(" ")}>
    <slot/>
</ul>