---
title: Flash
date: "2017-08-21"
url: /framework/block-flash
---

<div class="b-flash b-flash_success">message</div>
<div class="b-flash b-flash_warning">message</div>
<div class="b-flash b-flash_info">message</div>
<div class="b-flash b-flash_error">message</div>

---

### HTML разметка

```html
<div class="b-flash b-flash_success">message</div>
<div class="b-flash b-flash_warning">message</div>
<div class="b-flash b-flash_info">message</div>
<div class="b-flash b-flash_error">message</div>
```

---

### JS компонент

```js
import $ from 'jquery';

$(document)
    .on('click', '.b-flash', e => {
        e.preventDefault();

        let $target = $(e.target);
        $target.fadeOut(300, () => {
            $target.remove();
        });
    });
```

---

### Настройки

```scss
// типы и цвета
$flexy-block-flash-types: (
    success: #27ae60,
    info: #2980b9,
    warning: #d35400,
    error: #c0392b,
);

// border-radius по умолчанию
$flexy-block-flash-border-radius: $flexy-theme-border-radius !default;

// размер шрифта по умолчанию
$flexy-block-flash-font-size: .9em !default;

// дополнительные стили
$flexy-block-flash-styles: (
    margin-bottom: .5em,
    user-select: none,
    cursor: pointer,
    color: #fff,
    border-radius: $flexy-block-flash-border-radius,
    box-sizing: border-box,
    padding: .5em 1em,
    font-size: $flexy-block-flash-font-size,
) !default;
```
