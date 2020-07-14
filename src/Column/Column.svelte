<script>
    import {uk_width} from "..";
    export let columns = 2;
    export let width = "1-1";
    if(columns > 6) columns = 6;
    if(columns < 2) columns = 2;
</script>

<div use:uk_width={width} class={"uk-column-1-" + columns}>
    <slot/>
</div>