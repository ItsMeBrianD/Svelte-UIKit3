# Button
> [UIKit documentation](https://getuikit.com/docs/Button)

> [Storybook](https://0c370t.github.io/Svelte-UIKit3/docs/?path=/story/Button--main)
## Usage

#### Props
| name        | type  | description                          | see also                                           |
|-------------|-------|--------------------------------------|----------------------------------------------------|
| text        | str   | Text for button, if slot is not used |                                                    |
| style       | enum  | Color/Style of button                | Module Context of [Button.svelte](./Button.svelte) |
| size        | enum  | Add more/less padding to button      | Module Context of [Button.svelte](./Button.svelte) |
| width       | enum  | Width of button                      | [helpers/width.js](../helpers/)                    |

#### Slots
| name    | type | inside                 | description                               |
|---------|------|------------------------|-------------------------------------------|
| default | any  | root element (button)  | Content of the button                     |


#### Real Example
> Note that all props are default values
```html
<script>
    import {Button} from 'svelte-uikit3';
</script>

<Button text={""} style={""} size={""} width={""}/>
```
