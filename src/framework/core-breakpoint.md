---
title: Breakpoint
date: "2017-08-10"
thumb: ./core-breakpoint.png
url: /framework/core-breakpoint
category: core
---

`$flexy-breakpoints` it's array where key is a name of media query and value is a maximum size.

All breakpoints started from N and not limited to upper value.

---

## Example

```scss
$flexy-breakpoints: (
    foo: 100px,
    bar: 350px
);

.my-class {
    font-weight: normal;

    // Compiled CSS: @media only screen and (min-width: 350px)
    @include flexy-breakpoint(bar) {
        font-weight: bold;
    }
}
```

---

## Functions and mixins

* `flexy-breakpoint(string, string)`

```scss
.my-class {
    @include flexy-breakpoint(bar, print) {
        color: red;
    }
}
```

```css
@media print and (min-width: 350px) {
    .my-class {
        color: red;
    }
}
```

---

* `flexy-media(map, string)`

```scss
.my-class {
    @include flexy-media((min-width: 100px, max-width: 110px), print) {
        color: red;
    }
}
```

```css
@media print and (min-width: 100px) and (max-width: 110px) {
    .my-class {
        color: red;
    }
}
```

---

* `flexy-get-breakpoint(string)`

```scss
@debug flexy-get-breakpoint(foo);
```

```css
350px
```

---

## Settings

```scss
$flexy-breakpoints: (
    small: 0,
    medium: 768px,
    large: 992px,
    xlarge: 1200px,
    xxlarge: 1600px
) !default;
```
