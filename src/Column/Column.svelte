<script>
    import {uk_width} from "..";
    export let columns = 2;
    export let width = "1-1";
    export let divider = false;
    if(columns > 6) columns = 6;
    if(columns < 2) columns = 2;
    let _class = "";
    export {_class as class}
</script>

<div use:uk_width={width} class:uk-column-divider={divider} class={"uk-column-1-" + columns + " " + _class}>
    <slot/>
</div>