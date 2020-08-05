<script context="module">
    const styles = ["default", "muted", "primary", "secondary"]

    export const tileOptions = {
        styles
    }
</script>

<script>
    import {uk_width} from "..";
    let classes = ["uk-tile"]

    export let style = "";
    $: {
        classes = ["uk-tile"];
        if(styles.includes(style.toLowerCase())){
            classes.push("uk-tile-" + style.toLowerCase())
        } else {
            classes.push("uk-tile-default")
        }
        classes = [...classes]

    }

    export let width = "";

    let _class = "";
    export {_class as class}
</script>

<div class={classes.join(" ") + " " + _class} use:uk_width={width}>
    <slot/>
</div>