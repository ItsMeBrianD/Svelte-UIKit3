<script>
    export let title = "Accordion Item";
</script>

<li>
    <span class="uk-accordion-title">{title}</span>
    <div class="uk-accordion-content">
        <slot>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
            </p>
        </slot>
    </div>
</li>


<style>
    span {
        cursor: pointer;
    }
</style>