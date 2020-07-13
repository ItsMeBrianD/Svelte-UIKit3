<script>
    import {Dropdown, Button} from "../../src";
    export let text;
    export let style;
    export let size;
    export let width;
</script>

<Dropdown>
    <span slot="handle">
        <Button {text} {style} {size} {width}/>
    </span>
    <ul class="uk-nav uk-dropdown-nav">
        <li class="uk-active"><a href="/">Active</a></li>
        <li><a href="/">Item</a></li>
        <li class="uk-nav-header">Header</li>
        <li><a href="/">Item</a></li>
        <li><a href="/">Item</a></li>
        <li class="uk-nav-divider"></li>
        <li><a href="/">Item</a></li>
    </ul>
</Dropdown>