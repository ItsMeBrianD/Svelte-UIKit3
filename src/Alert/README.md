# Alert
> [UIKit documentation](https://getuikit.com/docs/alert)

> [Storybook](https://0c370t.github.io/Svelte-UIKit3/docs/?path=/story/alert--main)
## Usage

#### Props
| name        | type  | description                  | see also                                          |
|-------------|-------|------------------------------|---------------------------------------------------|
| showClose   | bool  | Show a button to close alert |                                                   |
| largeClose  | bool  | Make close button larger     |                                                   |
| style       | enum  | Background / Text color      | Module context of [Alert.svelte](./Alert.svelte)  |
| width       | enum  | Width of the alert           | [helpers/width.js](../helpers/)                   |                                |
| title       | str   | Title of the Alert           |                                                   |

#### Slots

| name    | type | inside              | description                               |
|---------|------|---------------------|-------------------------------------------|
| default | any  | root element (div)  | Content of the alert                      |

#### Real Example
> Note that all props are default values
```html
<script>
    import {Alert} from 'svelte-uikit3';
</script>

<Alert showClose={false} largeClose={false} style={false}
       width={""} title={""}>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid cupiditate dignissimos,
        dolores eius, enim eos expedita in libero molestiae nisi odit quae, quas quis ratione recusandae 
        reiciendis sed ullam.
    </p>
</Alert>
```

