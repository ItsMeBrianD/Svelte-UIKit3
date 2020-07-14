<script>
    export let text = "";
    export let card = false;
</script>

<div class="uk-badge" class:uk-card-badge={card}>
    <slot>
        {text}
    </slot>
</div>