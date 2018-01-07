---
title: Form
date: "2017-08-21"
url: /framework/block-form
---

## Теги

<a href="javascript:void(0)" class="b-button">Ссылка</a>
<button class="b-button">Кнопка</button>

```html
<a href="javascript:void(0)" class="b-button">Ссылка</a>
<button class="b-button">Кнопка</button>
```

---

## Размеры

<button class="b-button m-size_xsmall">Кнопка</button>
<button class="b-button m-size_small">Кнопка</button>
<button class="b-button m-size_medium">Кнопка</button>
<button class="b-button m-size_large">Кнопка</button>
<button class="b-button m-size_xlarge">Кнопка</button>
<button class="b-button m-size_xxlarge">Кнопка</button>

```html
<button class="b-button m-size_xsmall">Кнопка</button>
<button class="b-button m-size_small">Кнопка</button>
<button class="b-button m-size_medium">Кнопка</button>
<button class="b-button m-size_large">Кнопка</button>
<button class="b-button m-size_xlarge">Кнопка</button>
<button class="b-button m-size_xxlarge">Кнопка</button>
```

---

## Цвета

<button class="b-button">Hello world</button>
<button class="b-button b-button_success">Hello world</button>
<button class="b-button b-button_error">Hello world</button>

```html
<button class="b-button">Hello world</button>
<button class="b-button b-button_success">Hello world</button>
<button class="b-button b-button_error">Hello world</button>
```

---

## Группы элементов

<div class="b-input-group">
    <a href="javascript:void(0)" class="b-button">button</a>
    <a href="javascript:void(0)" class="b-button">button</a>
    <a href="javascript:void(0)" class="b-button">button</a>
    <input type="text" placeholder="Hello world" class="b-input" />
    <select class="b-input b-input_select">
        <option>Hello world 1</option>
        <option>Hello world 2</option>
        <option>Hello world 3</option>
        <option>Hello world 4</option>
        <option>Hello world 5</option>
    </select>
</div>

```html
<div class="b-input-group">
    <a href="javascript:void(0)" class="b-button">button</a>
    <a href="javascript:void(0)" class="b-button">button</a>
    <a href="javascript:void(0)" class="b-button">button</a>
    <input type="text" placeholder="Hello world" class="b-input" />
    <select class="b-input b-input_select">
        <option>Hello world 1</option>
        <option>Hello world 2</option>
        <option>Hello world 3</option>
        <option>Hello world 4</option>
        <option>Hello world 5</option>
    </select>
</div>
```

---

## Группы

<div class="b-group">
    <div class="b-input-group">
        <a href="javascript:void(0)" role="button" class="b-button">button</a>
        <a href="javascript:void(0)" role="button" class="b-button">button</a>
        <a href="javascript:void(0)" role="button" class="b-button">button</a>
    </div>
    <div class="b-input-group">
        <input type="text" placeholder="Hello world" class="b-input" />
        <select class="b-input b-input_select">
            <option>Hello world 1</option>
            <option>Hello world 2</option>
            <option>Hello world 3</option>
            <option>Hello world 4</option>
            <option>Hello world 5</option>
        </select>
    </div>
    <div class="b-input-group">
        <input type="search" placeholder="Hello world" class="b-input" />
        <a href="javascript:void(0)" role="button" class="b-button b-button_icon b-button_primary">
            <i class="b-icon">search</i>
        </a>
    </div>
    <div class="b-input-group">
        <input type="search" placeholder="Hello world" class="b-input" />
        <a href="javascript:void(0)" role="button" class="b-button b-button_primary">
            Search
        </a>
    </div>
</div>

```html
<div class="b-group">
    <div class="b-input-group">
        <a href="javascript:void(0)" role="button" class="b-button">button</a>
        <a href="javascript:void(0)" role="button" class="b-button">button</a>
        <a href="javascript:void(0)" role="button" class="b-button">button</a>
    </div>
    <div class="b-input-group">
        <input type="text" placeholder="Hello world" class="b-input" />
        <select class="b-input b-input_select">
            <option>Hello world 1</option>
            <option>Hello world 2</option>
            <option>Hello world 3</option>
            <option>Hello world 4</option>
            <option>Hello world 5</option>
        </select>
    </div>
    <div class="b-input-group">
        <input type="search" placeholder="Hello world" class="b-input" />
        <a href="javascript:void(0)" role="button" class="b-button b-button_icon b-button_primary">
            <i class="b-icon">search</i>
        </a>
    </div>
    <div class="b-input-group">
        <input type="search" placeholder="Hello world" class="b-input" />
        <a href="javascript:void(0)" role="button" class="b-button b-button_primary">
            Search
        </a>
    </div>
</div>
```

<div class="b-form__row">
    <label for="input1" class="b-label">Text</label>
    <input id="input1" type="text" class="b-input" placeholder="Hello world" />
</div>
<div class="b-form__row">
    <label for="input2" class="b-label">Textarea</label>
    <textarea id="input2" class="b-input b-input_textarea" placeholder="Hello world"></textarea>
</div>
<div class="b-form__row">
    <input type="checkbox" class="b-input b-input_choice" id="checkbox1" />
    <label class="b-label" for="checkbox1">Checkbox</label>
</div>
<div class="b-form__row">
    <input type="radio" class="b-input b-input_choice" name="radio" id="radio1" />
    <label class="b-label" for="radio1">Radio 1</label>
</div>
<div class="b-form__row">
    <input type="radio" class="b-input b-input_choice" name="radio" id="radio2" />
    <label class="b-label" for="radio2">Radio 2</label>
</div>
<div class="b-form__row">
    <label for="select1" class="b-label">Select</label>
    <select id="select1" class="b-input b-input_select">
        <option value="foo">foo</option>
        <option value="bar">bar</option>
    </select>
</div>

```html
<div class="b-form__row">
    <label for="input1" class="b-label">Text</label>
    <input id="input1" type="text" class="b-input" placeholder="Hello world" />
</div>
<div class="b-form__row">
    <label for="input2" class="b-label">Textarea</label>
    <textarea id="input2" class="b-input b-input_textarea" placeholder="Hello world"></textarea>
</div>
<div class="b-form__row">
    <input type="checkbox" class="b-input b-input_choice" id="checkbox1" />
    <label class="b-label" for="checkbox1">Checkbox</label>
</div>
<div class="b-form__row">
    <input type="radio" class="b-input b-input_choice" name="radio" id="radio1" />
    <label class="b-label" for="radio1">Radio 1</label>
</div>
<div class="b-form__row">
    <input type="radio" class="b-input b-input_choice" name="radio" id="radio2" />
    <label class="b-label" for="radio2">Radio 2</label>
</div>
<div class="b-form__row">
    <label for="select1" class="b-label">Select</label>
    <select id="select1" class="b-input b-input_select">
        <option value="foo">foo</option>
        <option value="bar">bar</option>
    </select>
</div>
```
