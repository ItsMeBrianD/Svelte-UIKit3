<script>
    import {Card} from "../../../src";

    export let title;
    export let titleIsHeader = false;
    export let color;
    export let size;
    export let hover;
    export let badge;
    export let width;
    export let body = "";
    export let footer = "";
</script>

<Card {title} {size} {color} {hover} {badge} {width} {titleIsHeader}>
    <p>
        {body}
    </p>
    <div slot="footer">
        <p class="uk-text-meta">
            {footer}
        </p>
        <span class="uk-text-meta">Footer will always appear when there is content in the slot.</span>
    </div>

</Card>