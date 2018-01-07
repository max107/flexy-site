---
title: Tabs
date: "2017-08-21"
url: /framework/block-tab
---

<div class="b-tab">
    <div class="b-tab__header">
        <div class="b-tab__tab b-tab__tab_active" data-tab="first">
            First
        </div>
        <div class="b-tab__tab" data-tab="second">
            Second
        </div>
        <div class="b-tab__tab b-tab__tab_disabled" data-tab="disabled">
            Disabled
        </div>
    </div>
    <div data-tab="first" class="b-tab__content b-tab__content_active">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
    </div>
    <div data-tab="second" class="b-tab__content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
    </div>
    <div data-tab="disabled" class="b-tab__content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
    </div>
</div>

```html
<div class="b-tab">
    <div class="b-tab__header">
        <div class="b-tab__tab b-tab__tab_active" data-tab="first">
            First
        </div>
        <div class="b-tab__tab" data-tab="second">
            Second
        </div>
    </div>
    <div data-tab="first" class="b-tab__content b-tab__content_active">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
    </div>
    <div data-tab="second" class="b-tab__content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
    </div>
</div>
```

---

## JS компонент

```js
$(document)
.on('click', '.b-tab__tab', e => {
let $target = $(e.target),
$container = $target.closest('.b-tab'),
$tabs = $container.find('.b-tab__tab'),
$content = $container.find('.b-tab__content'),
$currentTab = $target.closest('.b-tab__tab'),
id = $currentTab.attr('data-tab');

if ($currentTab.hasClass('b-tab__tab_disabled')) {
return;
}

$tabs.removeClass('b-tab__tab_active');
$content.removeClass('b-tab__content_active');
$container
.find('.b-tab__content[data-tab="' + id + '"]')
.addClass('b-tab__content_active');

$currentTab.addClass('b-tab__tab_active');
});
```
