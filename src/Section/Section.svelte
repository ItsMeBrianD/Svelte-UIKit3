<script context="module">
    const styles = ["default", "muted", "primary", "secondary"]

    export const sectionOptions = {
        styles
    }

</script>

<script>
    import {uk_width} from "..";
    let classes = ["uk-section"]

    export let style = "";
    $: {
        classes = ["uk-section"]

        if(styles.includes(style.toLowerCase())){
            classes.push("uk-section-" + style.toLowerCase())
        } else {
            classes.push("uk-section-default")
        }

        classes = [...classes]
    }
    $: console.log(style)

    export let width = "";

    let _class = "";
    export {_class as class}

</script>

<div class={classes.join(" ") + " " + _class} use:uk_width={width}>
    <slot/>
</div>