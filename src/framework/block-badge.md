---
title: Badge
date: "2017-08-21"
url: /framework/block-badge
---

<h3 class="b-heading">Lorem ipsum <span class="b-badge">Beta Version</span></h3>
<div>b-badge <span class="b-badge">Beta Version</span></div>
<div>b-badge <span class="b-badge b-badge_error">Beta Version</span></div>
<div>b-badge <span class="b-badge b-badge_success">Beta Version</span></div>

```html
<div>b-badge <span class="b-badge">Beta Version</span></div>
<div>b-badge <span class="b-badge b-badge_error">Beta Version</span></div>
<div>b-badge <span class="b-badge b-badge_success">Beta Version</span></div>
```

---

## Настройки

```scss
// border-radius по умолчанию берется из темы
$flexy-block-badge-border-radius: $flexy-theme-border-radius !default;

// Размер шрифта по умолчанию
$flexy-block-badge-font-size: .9rem !default;

// Цвета значков
$flexy-block-badge-colors: $flexy-theme-colors !default;
```
