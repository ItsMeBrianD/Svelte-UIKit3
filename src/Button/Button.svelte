<script context="module">
    const styles = ["default", "primary", "secondary", "danger", "text", "link"];
    const sizes = ["small", "large"];
    export const buttonOptions = {
        styles,
        sizes
    }
</script>

<script>
    import {uk_width} from "..";

    export let text = "";
    let classes = ["uk-button"];


    export let style = "";
    export let size = "";

    $: {
        classes = ["uk-button"];
        if (styles.includes(style.toLowerCase())) {
            classes.push("uk-button-" + style.toLowerCase());
        } else {
            classes.push("uk-button-default");
        }
        if (sizes.includes(size.toLowerCase())) {
            classes.push("uk-button-" + size.toLowerCase());
        }
        classes = [...classes];
    }

    export let width = "";

    let _class = "";
    export {_class as class};
</script>


<button class={classes.join(" ") + " " + _class} on:focus on:blur on:focusin on:focusout on:click on:dblclick on:mouseenter
        on:mouseleave on:auxclick use:uk_width={width}>
    <slot>
        {text}
    </slot>
</button>

