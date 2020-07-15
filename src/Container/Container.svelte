<script>
    let classes = ["uk-container"];
    export let size = "";
    const sizes = ["xsmall", "small", "large", "xlarge", "expand"];
    if(sizes.includes(size.toLowerCase())){
        classes.push("uk-container-" + size.toLowerCase())
    }
</script>

<div class={classes.join(" ")}>

</div>