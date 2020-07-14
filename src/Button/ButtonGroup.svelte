<script>
    import {uk_width} from "..";
    export let width;
</script>

<div class="uk-button-group" use:uk_width={width}>
    <slot/>
</div>