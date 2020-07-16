# Breadcrumb
> [UIKit documentation](https://getuikit.com/docs/breadcrumb)

> [Storybook](https://0c370t.github.io/Svelte-UIKit3/docs/?path=/story/breadcrumb--main)
## Usage

#### Slots

| name    | type            | inside              | description                                   |
|---------|-----------------|---------------------|-----------------------------------------------|
| default | BreadcrumbItems | root element (ul)   | BreadcrumbItems that belong inside Breadcrumb |

#### Real Example
> Note that all props are default values
```html
<script>
    import {Breadcrumb, BreadcrumbItem} from 'svelte-uikit3';

</script>

<Breadcrumb>
    <BreadcrumbItem>Home</BreadcrumbItem>
    <BreadcrumbItem>Blog</BreadcrumbItem>
    <BreadcrumbItem isLink={false}>Blog Post</BreadcrumbItem>
</Breadcrumb>
```

# BreadcrumbItem
This component should only exist within `Breadcrumb`

## Usage

#### Props
| name        | type  | description                                              | see also                        |
|-------------|-------|----------------------------------------------------------|---------------------------------|
| href        | str   | href for the link                                        |
| disabled    | bool  | Disable item (i.e. current page)                         | 
| isLink      | bool  | Determines if `a` or `span` is used                      |
| text        | str   | Text to display for breadcrumb, if slot is not used      | 

#### Slots

| name    | type  | inside                      | description                      |
|---------|-------|-----------------------------|----------------------------------|
| default | any   | a or span (see isLink prop) | Text to display for breadcrumb   |
