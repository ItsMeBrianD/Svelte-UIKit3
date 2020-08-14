<script context="module">
    const styles = ["default", "muted", "primary", "secondary"]
    const sizes = ["xsmall", "small", "large", "xlarge"]

    export const sectionOptions = {
        styles,
        sizes
    }

</script>

<script>
    import {uk_width} from "..";
    let classes = ["uk-section"]

    export let style = "";
    export let size = "";
    export let overlap = false;
    $: {
        classes = ["uk-section"]

        if(styles.includes(style.toLowerCase())){
            classes.push("uk-section-" + style.toLowerCase())
        } else {
            classes.push("uk-section-default")
        }

        if(sizes.includes(size.toLowerCase())){
            classes.push("uk-section-" + size.toLowerCase())
        }

        if (overlap) {
            classes.push("uk-section-overlap")
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