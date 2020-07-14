<script>
    import {uk_width} from "..";
    export let width;
    let _class;
    export {_class as class}
</script>

<div class={"uk-button-group " + _class} use:uk_width={width}>
    <slot/>
</div>