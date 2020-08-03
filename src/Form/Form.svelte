<script context="module">
    let layouts = ["stacked","horizontal"];
    export const formOptions = {
        layouts
    };
</script>

<script>
    let classes = [];
    // HTML Attributes
    export let action = "";
    export let method = "";
    let _class = "";
    export {_class as class};


    // UIKit Attributes
    export let layout = "";
    if(layouts.includes(layout.toLowerCase())){
        classes.push("uk-form-"+layout.toLowerCase());
    }
</script>

<form {action} {method} class={classes.join(" ") + " " + _class}>
    <slot/>
</form>