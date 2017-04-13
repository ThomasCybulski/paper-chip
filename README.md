# \<paper-chip\>

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg?style=flat-square)](https://www.webcomponents.org/element/ThomasCybulski/paper-chip)

Polymer 2.x Chips represent complex entities in small blocks, such as a contact.

## Install the Polymer-CLI for Polymer 2

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `polymer serve` to serve your application locally.

## Viewing Your Application

```
$ polymer serve
```

## Example: Basic paper-chip's

```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <script src="../polymer/polymer.js"></script>
    
    <link rel="import" href="paper-chip.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
```html
<paper-chip>Simple</paper-chip>
<paper-chip closable>Closable</paper-chip>
<paper-chip img="demo/images/avatar.png" closable>Closable and image</paper-chip>
```

## Example: paper-chip's with custom styles

```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <script src="../polymer/polymer.js"></script>
    
    <link rel="import" href="paper-chip.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
```html
    <paper-chip class="custom-text">Custom Text Color</paper-chip>
    <paper-chip class="custom-background">Custom Background Color</paper-chip>

    <style is="custom-style">
      paper-chip.custom-text {
        --paper-chip-text-color: #4db6ac;
    }

    paper-chip.custom-background {
      --paper-chip-background-color: #64b5f6;
    }
```


