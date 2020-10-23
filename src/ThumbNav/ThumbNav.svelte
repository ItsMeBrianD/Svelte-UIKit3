<script context="module">

</script>

<script>
    import {uk_width} from "..";

    export let vertical = false;
    export let width;

    let classes = ["uk-thumbnav"];

    $: {
        classes = ["uk-thumbnav"];

        if (vertical) {
            classes.push("uk-thumbnav-vertical")
        }

        classes = classes

    }

    let _class = "";
    export {_class as class}
</script>

<ul class={classes.join(" ") + " " + _class} use:uk_width={width}>
    <slot/>
</ul>