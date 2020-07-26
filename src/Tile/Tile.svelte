<script context="module">
    const styles = [
        "default",
        "muted",
        "primary",
        "secondary",
    ]

    export const tileOptions = {
        styles
    }
</script>

<script>
    let classes = ["uk-tile"]

    export let style = "";
    if(styles.includes(style.toLowerCase())){
        classes.push("uk-tile-" + style.toLowerCase())
    }
</script>

<div class={classes.join(" ")}>
    <slot/>
</div>