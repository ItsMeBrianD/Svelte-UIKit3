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
    export let color = "";
    export let size = "";
    export let divider = false;
    export let striped = false;

    $: {
        classes = ["uk-list"];
        if (styles.includes(style.toLowerCase())) {
            classes.push("uk-list-" + style.toLowerCase())
        }
        if (colors.includes(color.toLowerCase())) {
            classes.push("uk-list-" + color.toLowerCase());
        }
        if (sizes.includes(size.toLowerCase())) {
            classes.push("uk-list-" + size.toLowerCase());
        }
        classes = [...classes];
    }

</script>

<ul class={classes.join(" ")} class:uk-list-divider={divider} class:uk-list-striped={striped}>
    <slot/>
</ul>