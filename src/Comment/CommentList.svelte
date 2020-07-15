<script>
    import {uk_width} from "..";
    export let width;
</script>

<ul class="uk-comment-list" use:uk_width={width}>
    <slot/>
</ul>