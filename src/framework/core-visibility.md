---
title: Visibility
date: "2017-08-10"
thumb: ./core-visibility.png
url: /framework/core-visibility
category: core
---

Компонент `visibility` позволяет отображать и скрывать блоки в зависимости от media.
Компонент не имеет настроек и зависит от настроек для `flexy-breakpoint` и имеет 2 модификатора
состояния.

* Модификатор `_only` - Только для указанного media
* Модификатор `_up` - Для указанного media и выше

---

## Отображение блока только для определенного breakpoint

<div class="b-visible b-visible_small_only">
    <div class="b-helper">b-visible b-visible_small_only</div>
</div>
<div class="b-visible b-visible_medium_only">
    <div class="b-helper">b-visible b-visible_medium_only</div>
</div>
<div class="b-visible b-visible_large_only">
    <div class="b-helper">b-visible b-visible_large_only</div>
</div>
<div class="b-visible b-visible_xlarge_only">
    <div class="b-helper">b-visible b-visible_xlarge_only</div>
</div>
<div class="b-visible b-visible_xxlarge_only">
    <div class="b-helper">b-visible b-visible_xxlarge_only</div>
</div>

```html
<div class="b-visible b-visible_small_only"></div>
<div class="b-visible b-visible_medium_only"></div>
<div class="b-visible b-visible_large_only"></div>
<div class="b-visible b-visible_xlarge_only"></div>
<div class="b-visible b-visible_xxlarge_only"></div>
```

---

## Отображение блока только для определенного breakpoint и выше

<div class="b-visible b-visible_small_up">
    <div class="b-helper">b-visible b-visible_small_up</div>
</div>
<div class="b-visible b-visible_medium_up">
    <div class="b-helper">b-visible b-visible_medium_up</div>
</div>
<div class="b-visible b-visible_large_up">
    <div class="b-helper">b-visible b-visible_large_up</div>
</div>
<div class="b-visible b-visible_xlarge_up">
    <div class="b-helper">b-visible b-visible_xlarge_up</div>
</div>
<div class="b-visible b-visible_xxlarge_up">
    <div class="b-helper">b-visible b-visible_xxlarge_up</div>
</div>

```html
<div class="b-visible b-visible_small_up"></div>
<div class="b-visible b-visible_medium_up"></div>
<div class="b-visible b-visible_large_up"></div>
<div class="b-visible b-visible_xlarge_up"></div>
<div class="b-visible b-visible_xxlarge_up"></div>
```

---

## Скрытие блока для определенного breakpoint

<div class="b-hide b-hide_small_only">
    <div class="b-helper">b-hide b-hide_small_only</div>
</div>
<div class="b-hide b-hide_medium_only">
    <div class="b-helper">b-hide b-hide_medium_only</div>
</div>
<div class="b-hide b-hide_large_only">
    <div class="b-helper">b-hide b-hide_large_only</div>
</div>

```html
<div class="b-hide b-hide_small_only"></div>
<div class="b-hide b-hide_medium_only"></div>
<div class="b-hide b-hide_large_only"></div>
```

---

## Скрытие блока для определенного breakpoint и ниже

<div class="b-hide b-hide_small_up">
    <div class="b-helper">b-hide b-hide_small_up</div>
</div>
<div class="b-hide b-hide_medium_up">
    <div class="b-helper">b-hide b-hide_medium_up</div>
</div>
<div class="b-hide b-hide_large_up">
    <div class="b-helper">b-hide b-hide_large_up</div>
</div>

```html

<div class="b-hide b-hide_small_up"></div>
<div class="b-hide b-hide_medium_up"></div>
<div class="b-hide b-hide_large_up"></div>
```
