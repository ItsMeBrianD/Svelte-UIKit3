<script>
    import {getWidthClass} from "../helpers/width";

    export let text;
    let classes = ["uk-button"];


    export let style = "default";
    const styles = ["default", "primary", "secondary", "danger", "text", "link"];
    if (styles.includes(style.toLowerCase())) {
        classes.push("uk-button-" + style.toLowerCase());
    } else {
        classes.push("uk-button-default");
    }

    export let size = "";
    const sizes = ["small", "large"];
    if (sizes.includes(size.toLowerCase())) {
        classes.push("uk-button-" + size.toLowerCase());
    }

    export let width = "";
    classes.push(getWidthClass(width));

    let _class;
    export {_class as class};
</script>


<button class={classes.join(" ") + " " + _class} on:focus on:blur on:focusin on:focusout on:click on:dblclick on:mouseenter
        on:mouseleave on:auxclick>
    <slot>
        {text}
    </slot>
</button>

