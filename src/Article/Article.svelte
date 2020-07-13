<script>
    export let title;
    export let meta;
    export let lead;
    export let content;
</script>


<article class="uk-article">
    <h2 class="uk-article-title">
        <slot name="title">
            {title}
        </slot>
    </h2>
    <p class="uk-article-meta">
        <slot name="meta">
            {meta}
        </slot>
    </p>
    <p class="uk-text-lead">
        <slot name="lead">
            {lead}
        </slot>
    </p>
    <slot>
        <p>
            {content}
        </p>
    </slot>
</article>