<script context="module">
    const justifications = ["left","center","right","between","around"];
    const alignments = ["stretch","top","middle","bottom"];
    const directions = ["row","row-reverse","column","column-reverse"];
    const wraps = ["wrap","wrap-reverse","nowrap"];
    const wrapAlignments = ["stretch", "between", "around", "top", "middle", "bottom"];

    export const flexOptions = {
        justifications,
        alignments,
        directions,
        wraps,
        wrapAlignments
    }
</script>
<script>
    import {uk_width} from "..";
    let classes = ["uk-flex"];

    export let inline = false;
    if(inline) classes.push("uk-flex-inline");

    export let justification = "";
    if(justifications.includes(justification.toLowerCase())) classes.push("uk-flex-" + justification);

    export let alignment = "";
    if(alignments.includes(alignment.toLowerCase())) classes.push("uk-flex-" + alignment);

    export let direction = "";
    if(directions.includes(direction.toLowerCase())) classes.push("uk-flex-" + direction);

    export let wrap = "";
    export let wrapAlignment = "";
    if(wraps.includes(wrap.toLowerCase())) {
        classes.push("uk-flex-" + wrap);
        if(wrapAlignments.includes(wrapAlignment.toLowerCase())) classes.push("uk-flex-wrap-"+wrapAlignment);
    }

    let _class = "";
    export {_class as class}
    export let width;
    export let element;

    classes = classes.map(c=>c.toLowerCase());
</script>

<div use:uk_width={width} class={classes.join(" ") + " " + _class} bind:this={element}>
    <slot/>
</div>