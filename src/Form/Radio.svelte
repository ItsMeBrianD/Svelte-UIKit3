<script>
    import {inputOptions} from "./index";

    let {states, sizes, widths} = inputOptions;

    import {uk_width} from ".."; // TODO: Verify that this works in tandem with the form-specific width handles

    export let type;
    export let disabled = false;

    let classes = ["uk-input"];

    export let state = "";
    if (states.includes(state.toLowerCase())) {
        classes.push("uk-form-" + state.toLowerCase());
    }

    export let size = "";
    if (sizes.includes(size.toLowerCase())) {
        classes.push("uk-form-" + size.toLowerCase());
    }

    export let width = "";
    if (widths.includes(width.toLowerCase())) {
        classes.push("uk-form-width-" + width.toLowerCase());
    }

    export let blank = false;
    if (blank) {
        classes.push("uk-form-blank");
    }

    let _class = "";
    export {_class as class};

    export let value = "";
    // Cannot use a binding because type is dynamic
    const onChange = (e) => {
        value = e.target.value;
    }

    export let autocomplete, max, min, maxlength, name, pattern, placeholder, readonly, required, step;
</script>

<input use:uk_width={width} class={classes.join(" ") + " " + _class} type="radio" {disabled} on:input={onChange}
       {autocomplete} {max} {min} {maxlength} {name} {pattern} {placeholder} {readonly} {required} {step} on:input
       on:blur on:change on:contextmenu on:focus on:invalid on:reset on:search on:select on:submit/>