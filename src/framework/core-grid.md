---
title: Grid
date: "2017-08-10"
thumb: ./core-grid.png
url: /framework/core-grid
category: core
---

<div class="b-row">
    <div class="b-col b-col_small_12">
        <div class="b-helper"></div>
    </div>
    <div class="b-col b-col_small_6">
        <div class="b-helper"></div>
    </div>
    <div class="b-col b-col_small_6">
        <div class="b-helper"></div>
    </div>
    <div class="b-col b-col_small_4">
        <div class="b-helper"></div>
    </div>
    <div class="b-col b-col_small_4">
        <div class="b-helper"></div>
    </div>
    <div class="b-col b-col_small_4">
        <div class="b-helper"></div>
    </div>
    <div class="b-col b-col_small_3">
        <div class="b-helper"></div>
    </div>
    <div class="b-col b-col_small_3">
        <div class="b-helper"></div>
    </div>
    <div class="b-col b-col_small_3">
        <div class="b-helper"></div>
    </div>
    <div class="b-col b-col_small_3">
        <div class="b-helper"></div>
    </div>
    <div class="b-col b-col_small_2">
        <div class="b-helper"></div>
    </div>
    <div class="b-col b-col_small_2">
        <div class="b-helper"></div>
    </div>
    <div class="b-col b-col_small_2">
        <div class="b-helper"></div>
    </div>
    <div class="b-col b-col_small_2">
        <div class="b-helper"></div>
    </div>
    <div class="b-col b-col_small_2">
        <div class="b-helper"></div>
    </div>
    <div class="b-col b-col_small_2">
        <div class="b-helper"></div>
    </div>
    <div class="b-col b-col_small_1">
        <div class="b-helper"></div>
    </div>
    <div class="b-col b-col_small_1">
        <div class="b-helper"></div>
    </div>
    <div class="b-col b-col_small_1">
        <div class="b-helper"></div>
    </div>
    <div class="b-col b-col_small_1">
        <div class="b-helper"></div>
    </div>
    <div class="b-col b-col_small_1">
        <div class="b-helper"></div>
    </div>
    <div class="b-col b-col_small_1">
        <div class="b-helper"></div>
    </div>
    <div class="b-col b-col_small_1">
        <div class="b-helper"></div>
    </div>
    <div class="b-col b-col_small_1">
        <div class="b-helper"></div>
    </div>
    <div class="b-col b-col_small_1">
        <div class="b-helper"></div>
    </div>
    <div class="b-col b-col_small_1">
        <div class="b-helper"></div>
    </div>
    <div class="b-col b-col_small_1">
        <div class="b-helper"></div>
    </div>
    <div class="b-col b-col_small_1">
        <div class="b-helper"></div>
    </div>
</div>

```html
<div class="b-row">
    <div class="b-col b-col_small_12"></div>
    <div class="b-col b-col_small_6"></div>
    <div class="b-col b-col_small_6"></div>
    <div class="b-col b-col_small_4"></div>
    <div class="b-col b-col_small_4"></div>
    <div class="b-col b-col_small_4"></div>
    <div class="b-col b-col_small_3"></div>
    <div class="b-col b-col_small_3"></div>
    <div class="b-col b-col_small_3"></div>
    <div class="b-col b-col_small_3"></div>
    <div class="b-col b-col_small_2"></div>
    <div class="b-col b-col_small_2"></div>
    <div class="b-col b-col_small_2"></div>
    <div class="b-col b-col_small_2"></div>
    <div class="b-col b-col_small_2"></div>
    <div class="b-col b-col_small_2"></div>
    <div class="b-col b-col_small_1"></div>
    <div class="b-col b-col_small_1"></div>
    <div class="b-col b-col_small_1"></div>
    <div class="b-col b-col_small_1"></div>
    <div class="b-col b-col_small_1"></div>
    <div class="b-col b-col_small_1"></div>
    <div class="b-col b-col_small_1"></div>
    <div class="b-col b-col_small_1"></div>
    <div class="b-col b-col_small_1"></div>
    <div class="b-col b-col_small_1"></div>
    <div class="b-col b-col_small_1"></div>
    <div class="b-col b-col_small_1"></div>
</div>
```

---

## Вложенная сетка

<div class="b-row">
    <div class="b-col b-col_small_12">
        <div class="b-helper"></div>
    </div>
    <div class="b-col b-col_small_6">
        <div class="b-helper">
            <div class="b-row">
                <div class="b-col b-col_small_12">
                    <div class="b-helper"></div>
                </div>
                <div class="b-col b-col_small_6">
                    <div class="b-helper"></div>
                </div>
                <div class="b-col b-col_small_6">
                    <div class="b-helper"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="b-col b-col_small_6">
        <div class="b-helper">
            <div class="b-row">
                <div class="b-col b-col_small_4">
                    <div class="b-helper"></div>
                </div>
                <div class="b-col b-col_small_4">
                    <div class="b-helper"></div>
                </div>
                <div class="b-col b-col_small_4">
                    <div class="b-helper"></div>
                </div>
            </div>
        </div>
    </div>
</div>

```html
<div class="b-row">
    <div class="b-col b-col_small_12"></div>
    <div class="b-col b-col_small_6">
        <div class="b-row">
            <div class="b-col b-col_small_12"></div>
            <div class="b-col b-col_small_6"></div>
            <div class="b-col b-col_small_6"></div>
        </div>
    </div>
    <div class="b-col b-col_small_6">
        <div class="b-row">
            <div class="b-col b-col_small_4"></div>
            <div class="b-col b-col_small_4"></div>
            <div class="b-col b-col_small_4"></div>
        </div>
    </div>
</div>
```

---

## Адаптивность

<div class="b-row">
    <div class="b-col b-col_small_12 b-col_medium_6 b-col_large_3 b-col_xlarge_4">
        <div class="b-helper">
            small_12 medium_6 large_3 xlarge_4
        </div>
    </div>
    <div class="b-col b-col_small_12 b-col_medium_6 b-col_large_3 b-col_xlarge_4">
        <div class="b-helper">
            small_12 medium_6 large_3 xlarge_4
        </div>
    </div>
    <div class="b-col b-col_small_12 b-col_medium_6 b-col_large_3 b-col_xlarge_4">
        <div class="b-helper">
            small_12 medium_6 large_3 xlarge_4
        </div>
    </div>
    <div class="b-col b-col_small_12 b-col_medium_6 b-col_large_3 b-col_xlarge_4">
        <div class="b-helper">
            small_12 medium_6 large_3 xlarge_4
        </div>
    </div>
</div>

```html
<div class="b-row">
    <div class="b-col b-col_small_12 b-col_medium_6 b-col_large_3 b-col_xlarge_4"></div>
    <div class="b-col b-col_small_12 b-col_medium_6 b-col_large_3 b-col_xlarge_4"></div>
    <div class="b-col b-col_small_12 b-col_medium_6 b-col_large_3 b-col_xlarge_4"></div>
    <div class="b-col b-col_small_12 b-col_medium_6 b-col_large_3 b-col_xlarge_4"></div>
</div>
```

---

## Настройки

Сетка использует названия из настроек [breakpoint](/blog/core-breakpoint) в качестве модификаторов.

```scss
// Максимальное количество колонок
$flexy-grid-columns: 12 !default;

// Отступы между колонками
$flexy-grid-gutter: 0.5em !default;

// Максимальная ширина контейнера
$flexy-grid-wrapper-max-width: 100% !default;

// Минимальная ширина контейнера
$flexy-grid-wrapper-min-width: auto !default;
```

По умолчанию контейнер не ограничен по ширине.

Для того, чтобы создать фиксированный по ширине контейнер, нужно указать в настройках максимальную ширину контейнера:

```scss
$flexy-grid-wrapper-max-width: 1280px;
```

```html
<div class="b-wrapper">
    <div class="b-row">
        ...
    </div>
</div>
```

По умолчанию контейнер позиционируется по центру. Контейнер можно прижать к краям с помощью модификаторов `_left` и `_right`.

```html
<div class="b-wrapper b-wrapper_left"></div>
<div class="b-wrapper b-wrapper_right"></div>
<div class="b-wrapper b-wrapper_center"></div>
```

Для отключения media query и фиксации контейнера по ширине укажите в настройках максимальную ширину и
минимальную ширину (хотя кому оно нужно? на дворе 2018 год =)

```scss
$flexy-grid-wrapper-max-width: 978px;
$flexy-grid-wrapper-min-width: $flexy-grid-wrapper-max-width;
```

После изменения настроек контейнер не будет изменяться, следовательно и сетка внутри
не будет перестраиваться.
