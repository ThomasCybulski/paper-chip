# \<paper-chip\>

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg?style=flat-square)](https://www.webcomponents.org/element/ThomasCybulski/paper-chip) [![Dependency Status](https://gemnasium.com/badges/github.com/ThomasCybulski/paper-chip.svg)](https://gemnasium.com/github.com/ThomasCybulski/paper-chip)

Polymer 2.x Chips represent complex entities in small blocks, such as a contact.

## Install the Polymer-CLI for Polymer 2

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `polymer serve` to serve your application locally.

## Viewing Your Application

```
$ polymer serve
```

## Example: Basic paper-chip's

<!---
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
-->
```html
<paper-chip label="Basic"></paper-chip>

<paper-chip label="Basic with Avatar Text">
  <span class="chip-background" slot="avatar">
    <span>T</span>
  </span>
</paper-chip>

<paper-chip label="Closable" closable></paper-chip>

<paper-chip label="Closable and image" closable>
  <img class="chip-image" slot="avatar" src="demo/images/avatar.png" alt="Contact Person">
</paper-chip>

<paper-chip label="Closable and icon" closable>
  <span class="chip-background" slot="avatar">
    <iron-icon icon="icons:favorite"></iron-icon>
  </span>
</paper-chip>
```

## Example: paper-chip's with custom styles

<!---
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
-->
```html
<paper-chip label="Custom Label Color" class="custom-label-color"></paper-chip>

<paper-chip label="Custom Background Color" class="custom-background"></paper-chip>

<paper-chip label="Custom Avatar Background Color" class="custom-avatar-background">
  <span class="chip-background" slot="avatar">
    <span>T</span>
  </span>
</paper-chip>

<paper-chip label="Custom Avatar Font and Icon Color" class="custom-avatar-font-color">
  <span class="chip-background" slot="avatar">
    <iron-icon icon="icons:favorite"></iron-icon>
  </span>
</paper-chip>

<style is="custom-style">
  paper-chip.custom-label-color {
    --paper-chip-label-color: #4db6ac;
  }

  paper-chip.custom-background {
    --paper-chip-background-color: #64b5f6;
  }

  paper-chip.custom-avatar-background {
    --paper-chip-avatar-background-color: #64b5f6;
  }

  paper-chip.custom-avatar-font-color {
    --paper-chip-avatar-font-color: red;
  }
</style>
```

## Example: Use tags in an input field

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <script src="../polymer/polymer.js"></script>
    
    <link rel="import" href="paper-chip-input.html">
    <link rel="import" href="paper-chip.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<paper-chip-input label="+Tag (Enter)" items='["one", "two", "three"]' closable></paper-chip-input>

<paper-chip-input label="+Tag (Enter)">
    <paper-chip label="Default Tag" slot="input"></paper-chip>
    <paper-chip label="Default Tag Closbale" closable slot="input"></paper-chip>
</paper-chip-input>
```


