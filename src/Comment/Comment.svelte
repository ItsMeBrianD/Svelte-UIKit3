<script>
    import {uk_width} from "..";

    export let avatarSrc;
    export let avatarAlt;
    export let title = "";
    export let meta = [];
    export let primary = false;
    export let width;
</script>

<article class="uk-comment" class:uk-comment-primary={primary} use:uk_width={width}>
    <header class="uk-comment-header uk-flex">
        <div class="uk-width-auto uk-margin-medium-right">
            {#if avatarSrc}
                <img class="uk-comment-avatar" src={avatarSrc} alt={avatarAlt}/>
            {/if}
        </div>
        <div class="uk-width-expand">
            <h4 class="uk-comment-title">{title}</h4>
            <ul class="uk-comment-meta uk-subnav">
                <slot name="meta">
                    {#each meta as m}
                        <li>{m}</li>
                    {/each}
                </slot>
            </ul>
        </div>
    </header>
    <div class="uk-comment-body">
        <slot/>
    </div>

</article>