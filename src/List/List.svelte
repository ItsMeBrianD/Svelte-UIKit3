<script context="module">

    const styles = [
        "circle",
        "decimal",
        "disc",
        "hyphen",
        "square",
    ];

    const colors = [
        "muted",
        "emphasis",
        "primary",
        "secondary",
    ];
    const sizes = [
        "large",
        "collapse",
    ]

    export const listOptions = {
        styles,
        colors,
        sizes,
    }
</script>

<script>
    let classes = ["uk-list"];

    export let style = "";
    if(styles.includes(style.toLowerCase())){
        classes.push("uk-list-" + style.toLowerCase())
    }

    export let color = "";
    if(colors.includes(color.toLowerCase())){
        classes.push("uk-list-" + color.toLowerCase());
    }

    export let size = "";
    if(sizes.includes(size.toLowerCase())){
        classes.push("uk-list-" + size.toLowerCase());
    }

    export let divider = false;
    export let striped = false;

</script>

<ul class={classes.join(" ")}
    class:uk-list-divider={divider}
    class:uk-list-striped={striped}
>
    <slot/>
</ul>