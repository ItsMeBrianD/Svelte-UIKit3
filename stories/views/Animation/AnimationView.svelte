<script>
    import {uk_animate} from "../../../src";

    export let animation;
    export let origin;
    export let reverse = false;
    export let fast = false;
</script>

<div class="uk-box-shadow-medium uk-width-medium uk-height-medium uk-background-primary"
     use:uk_animate={{animation, origin, reverse, fast}}>
    <div class="uk-light uk-flex uk-flex-center uk-flex-middle uk-height-1-1 uk-text-large">
        {animation}
    </div>

</div>
