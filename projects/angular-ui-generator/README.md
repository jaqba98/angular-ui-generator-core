# Angular UI Generator

This project is an Angular UI generator that helps you create user interfaces quickly and efficiently.
It provides a way to generate a user interface from metadata. Metadata is a JSON-like structure that
describes how to generate a user interface. You do not have to use HTML and CSS anymore to create
a user interface. You can use TypeScript only to create a user interface.

## Table of contents

- [Register](#register)
  - [AugRegisterRoute](#augregisterroute)
  - [AugRegisterView](#augregisterview)
- [Routes](#routes)
- [Generator](#generator)
  - [AugViewGenerator](#augviewgenerator)
  - [AugViewMetadata](#augviewmetadata)
    - [Link](#link)
    - [Button](#button)
    - [Div](#div)
    - [Header](#header)
    - [Paragraph](#paragraph)

## Register

### AugRegisterRoute

This is a TypeScript decorator that you can use to add additional metadata to the angular components.
This decorator describes how the component should be treated by the `augRouteGenerator()`.

> **WARNING** The component must be decorated with `@Component()` decorator.

Example:

```typescript
@Component({
  selector: "home",
  template: "",
})
@AugRegisterRoute({
  path: "home",
  title: "Home",
})
export class HomeComponent {
  // content
}
```

Possible `AugRegisterRoute` options:

```
{
  path?: string, // The route path for the Angular component.
  redirectTo?: string, // Path to redirect to instead of rendering this component.
  title?: string, // Title for the route, used in navigation or page metadata.
}
```

### AugRegisterView

This is a TypeScript decorator that you can use to add additional metadata to the angular components.
This decorator describes the hierarchy structure of views, and it will be used by the `augRouteGenerator()`.

> **WARNING** The component must be decorated with `@Component()` decorator.

Example:

```typescript
@Component({
  selector: "home",
  template: "",
})
@AugRegisterView({
  name: "home-view",
  children: [],
})
export class HomeComponent {
  // content
}
```

Possible `AugRegisterView` options:

```
{
  name: string, // Name of the view.
  children: ViewGeneratorType[], // Children of the current view.
}
```

## Routes

The `augRoutes()` method is used to automatically generate routes for the Angular application.
As a parameter, you can pass an array of root views.

Example:

```typescript
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(augRoutes(HomeView, AboutView))],
};
```

## Generator

### AugViewGenerator

To generate a view, you need to extend the `AugViewGenerator` class and implement the `buildViewMetadata` method.
This method should return an array of `AugViewMetadata` objects that define the structure and content of the view.
The `AugViewMetadata[]` defines the metadata structure of the view.

Example:

```typescript
export class HelloWorldView extends AugViewGenerator {
  override buildViewMetadata(): AugViewMetadata[] {
    return [
      {
        kind: "text",
        text: "Hello World",
      },
    ];
  }
}
```

### AugViewMetadata

Below there are all the possible metadata objects that you can use to define the structure of your view.

> ### Link
>
> #### Metadata object for a link:
>
> ```typescript
> [
>   {
>     kind: "link", // Specifies that the metadata object is a link.
>     path: "/home", // The path to navigate to when the link is clicked.
>     text: "Click me!", // The text displayed on the link.
>   },
> ];
> ```

> ### Button
>
> #### Metadata object for a button:
>
> ```typescript
> [
>   {
>     kind: "button", // Specifies that the metadata object is a button.
>     label: "Click me!", // The label displayed on the button.
>   },
> ];
> ```

> ### Div
>
> #### Metadata object for a div:
>
> ```typescript
> [
>   {
>     kind: "div", // Specifies that the metadata object is a div.
>     children: [], // Array of metadata objects to be nested inside the block.
>   },
> ];
> ```

> ### Header
>
> #### Metadata object for a header:
>
> ```typescript
> [
>   {
>     kind: "header", // Specifies that the metadata object is a header.
>     children: [], // Array of metadata objects to be nested inside the block.
>   },
> ];
> ```

> ### Paragraph
>
> #### Metadata object for a paragraph:
>
> ```typescript
> [
>   {
>     kind: "paragraph", // Specifies that the metadata object is a paragraph.
>     text: "Hello world", // The text displayed on the paragraph.
>   },
> ];
> ```
