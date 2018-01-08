---
title: Visibility
date: "2017-08-10"
thumb: ./core-visibility.png
url: /framework/core-visibility
category: core
---

Visibility allow to show/hide containers based on media query.

* `_only` modifier for current media only
* `_up` modified for current and up media

---

## Show for current breakpoint

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

## Show for breakpoint and up

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

## Hide for current breakpoint only

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

## Hide for current breakpoint and up

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
