---
title: Block grid
date: "2017-08-10"
thumb: ./core-block-grid.png
url: /framework/core-block-grid
category: core
---

Block grid is a [clone component from foundation](http://foundation.zurb.com/sites/docs/v/5.5.3/components/block_grid.html)
with flexbox support

<br/>

## Left (default)

<div class="b-block-grid b-block-grid_small_1 b-block-grid_medium_3 b-block-grid_large_4">
    <div class="b-block-grid__item">
        <div class="b-helper"></div>
    </div>
    <div class="b-block-grid__item">
        <div class="b-helper"></div>
    </div>
    <div class="b-block-grid__item">
        <div class="b-helper"></div>
    </div>
    <div class="b-block-grid__item">
        <div class="b-helper"></div>
    </div>
    <div class="b-block-grid__item">
        <div class="b-helper"></div>
    </div>
    <div class="b-block-grid__item">
        <div class="b-helper"></div>
    </div>
    <div class="b-block-grid__item">
        <div class="b-helper"></div>
    </div>
    <div class="b-block-grid__item">
        <div class="b-helper"></div>
    </div>
</div>

```html{1}
<div class="b-block-grid b-block-grid_small_1 b-block-grid_medium_3 b-block-grid_large_4">
    <div class="b-block-grid__item"></div>
    <div class="b-block-grid__item"></div>
    <div class="b-block-grid__item"></div>
    <div class="b-block-grid__item"></div>
</div>
```

---

## Center

<div class="b-block-grid b-block-grid_small_4 b-block-grid_center">
    <div class="b-block-grid__item">
        <div class="b-helper"></div>
    </div>
    <div class="b-block-grid__item">
        <div class="b-helper"></div>
    </div>
    <div class="b-block-grid__item">
        <div class="b-helper"></div>
    </div>
    <div class="b-block-grid__item">
        <div class="b-helper"></div>
    </div>
    <div class="b-block-grid__item">
        <div class="b-helper"></div>
    </div>
    <div class="b-block-grid__item">
        <div class="b-helper"></div>
    </div>
</div>

```html{1}
<div class="b-block-grid b-block-grid_small_4 b-block-grid_center">
    <div class="b-block-grid__item"></div>
    <div class="b-block-grid__item"></div>
    <div class="b-block-grid__item"></div>
    <div class="b-block-grid__item"></div>
</div>
```

---

## Right

<div class="b-block-grid b-block-grid_small_4 b-block-grid_right">
    <div class="b-block-grid__item">
        <div class="b-helper"></div>
    </div>
    <div class="b-block-grid__item">
        <div class="b-helper"></div>
    </div>
    <div class="b-block-grid__item">
        <div class="b-helper"></div>
    </div>
    <div class="b-block-grid__item">
        <div class="b-helper"></div>
    </div>
    <div class="b-block-grid__item">
        <div class="b-helper"></div>
    </div>
    <div class="b-block-grid__item">
        <div class="b-helper"></div>
    </div>
</div>

```html{1}
<div class="b-block-grid b-block-grid_small_1 b-block-grid_medium_3 b-block-grid_right">
    <div class="b-block-grid__item"></div>
    <div class="b-block-grid__item"></div>
    <div class="b-block-grid__item"></div>
    <div class="b-block-grid__item"></div>
</div>
```

---

## Device support

small: 1, medium: 3, large: 4, ipad-1-2-portrait: 2, ipad-1-2-landscape: 3

<br/>
<div class="b-block-grid b-block-grid_small_1 b-block-grid_medium_3 b-block-grid_large_4 b-block-grid_ipad-1-2-portrait_2 b-block-grid_ipad-1-2-landscape_3">
    <div class="b-block-grid__item">
        <div class="b-helper"></div>
    </div>
    <div class="b-block-grid__item">
        <div class="b-helper"></div>
    </div>
    <div class="b-block-grid__item">
        <div class="b-helper"></div>
    </div>
    <div class="b-block-grid__item">
        <div class="b-helper"></div>
    </div>
    <div class="b-block-grid__item">
        <div class="b-helper"></div>
    </div>
    <div class="b-block-grid__item">
        <div class="b-helper"></div>
    </div>
    <div class="b-block-grid__item">
        <div class="b-helper"></div>
    </div>
    <div class="b-block-grid__item">
        <div class="b-helper"></div>
    </div>
</div>

```html{1}
<div class="b-block-grid b-block-grid_small_1 b-block-grid_medium_3 b-block-grid_large_4 b-block-grid_ipad-1-2-portrait_2 b-block-grid_ipad-1-2-landscape_3">
    <div class="b-block-grid__item"></div>
    <div class="b-block-grid__item"></div>
    <div class="b-block-grid__item"></div>
    <div class="b-block-grid__item"></div>
</div>
```

---

## Settings

```scss
// maximum blocks
$flexy-block-grid-count: 25 !default;

// sace between blocks
$flexy-block-grid-padding: $flexy-grid-gutter !default;

// use flexbox. if flexbox is false used foundation-like block-grid.
$flexy-block-grid-flexbox: true !default;
```
