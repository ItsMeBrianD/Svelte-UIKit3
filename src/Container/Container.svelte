<script context="module">
    const sizes = ["xsmall", "small", "large", "xlarge", "expand"];
    export let containerOptions = {
        sizes
    };
</script>

<script>
    let classes = ["uk-container"];
    export let size = "";
    $: {
        classes = ["uk-container"];
        if(sizes.includes(size.toLowerCase())){
            classes.push("uk-container-" + size.toLowerCase())
        }
    }
</script>

<div class={classes.join(" ")}>

</div>