<script>
    export let text = "";
    export let card = false;
</script>

<span class="uk-badge" class:uk-badge-card={card}>
    <slot>
        {text}
    </slot>
</span>