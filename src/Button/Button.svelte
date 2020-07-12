<script>
    export let text;
    export let classes = ["uk-button"];


    export let style = "default";
    const styles = ["default", "primary", "secondary", "danger", "text", "link"];
    if (styles.includes(style.toLowerCase())) {
        classes.push("uk-button-" + style);
    } else {
        classes.push("uk-button-default");
    }

</script>


<button class={classes.join(" ")}>
    <slot>
        {text}
    </slot>
</button>

