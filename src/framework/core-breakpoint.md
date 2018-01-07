---
title: Breakpoint
date: "2017-08-10"
thumb: ./core-breakpoint.png
url: /framework/core-breakpoint
category: core
---

`$flexy-breakpoints` это массив где в качестве ключа выступает любое удобное для вас название media.

Все блоки имеют по умолчанию `media query` **от N и не фиксируются по верхнему значению**.

---

## Пример

```scss
$flexy-breakpoints: (
    foo: 100px,
    bar: 350px
);

.my-class {
    font-weight: normal;

    // Будет скомпилировано в
    // @media only screen and (min-width: 350px)
    @include flexy-breakpoint(bar) {
        font-weight: bold;
    }
}
```

---

## Описание функций и миксинов

* `flexy-breakpoint` - Принимает в качестве аргументов `(string, string)`

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

* `flexy-media` - Принимает в качестве аргументов `(map, string)`

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

* `flexy-get-breakpoint` - Функция принимает в качестве аргументов `(string)`

```scss
@debug flexy-get-breakpoint(foo);
```

```css
350px
```

---

## Настройки

```scss
$flexy-breakpoints: (
    small: 0,
    medium: 768px,
    large: 992px,
    xlarge: 1200px,
    xxlarge: 1600px
) !default;
```
