# \<paper-chip\>

[![Build Status](https://travis-ci.org/ThomasCybulski/paper-chip.svg?branch=master)](https://travis-ci.org/ThomasCybulski/paper-chip) [![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg?style=flat-square)](https://www.webcomponents.org/element/ThomasCybulski/paper-chip) [![Dependency Status](https://gemnasium.com/badges/github.com/ThomasCybulski/paper-chip.svg)](https://gemnasium.com/github.com/ThomasCybulski/paper-chip)

[DEMO](https://thomascybulski.github.io/paper-chip/demo/index.html)

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
  <img class="chip-image" slot="avatar" src="demo/avatar.png" alt="Contact Person">
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

<paper-chip label="No hover effect" no-hover></paper-chip>

<paper-chip label="Custom Avatar Background Color" class="custom-avatar-background">
  <span class="chip-background" slot="avatar">
    <span>T</span>
  </span>
</paper-chip>

<paper-chip label="Custom avatar font-size and icon/font color" class="custom-avatar-font-color-and-size">
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

 paper-chip.custom-avatar-font-color-and-size {
  --paper-chip-avatar-font-color: red;
  --paper-chip-font-size: 16px;
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

	<script>

    function validate() {
        document.getElementById('inputForValidation').validate();
	}
	
	</script>
  </template>
</custom-element-demo>
```
-->
```html
<paper-chip-input label="+Add (Enter) -Delete (Backspace)" items='["one", "two", "three"]' closable></paper-chip-input>

<paper-chip-input label="Input is readonly" items='["one", "two"]' readonly></paper-chip-input>

<paper-chip-input always-float-label label="+Add (Enter) -Delete (Backspace)">
  <paper-chip label="Default Tag" slot="input"></paper-chip>
  <paper-chip label="Default Tag Closbale" closable slot="input"></paper-chip>
</paper-chip-input>

<paper-chip-input disabled label="+Add (Enter) -Delete (Backspace)" items='["one", "two", "three"]' closable></paper-chip-input>

<paper-chip-input label="paper-chip-input cannot be empty" required auto-validate error-message="needs some text!" closable></paper-chip-input>

<paper-chip-input label="this input will only let you type letters" auto-validate allowed-pattern="[a-zA-Z]" closable></paper-chip-input>

<paper-chip-input style="display: inline-block; width: calc(100% - 75px);" id="inputForValidation" required label="this input is manually validated" pattern="[a-zA-Z]*" error-message="letters only!"></paper-chip-input>
<button onclick="validate()">Validate</button>

```

## Example: Autocomplete field with tags

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <script src="../polymer/polymer.js"></script>
    
    <link rel="import" href="paper-chip-input-autocomplete.html">
    <next-code-block></next-code-block>
  </template>

<script>
    var states = [{
        "text": "Alabama",
        "value": "AL"
      },
      {
        "text": "Alaska",
        "value": "AK"
      },
      {
        "text": "American Samoa",
        "value": "AS"
      },
      {
        "text": "Arizona",
        "value": "AZ"
      },
      {
        "text": "Arkansas",
        "value": "AR"
      },
      {
        "text": "California",
        "value": "CA"
      },
      {
        "text": "Colorado",
        "value": "CO"
      },
      {
        "text": "Connecticut",
        "value": "CT"
      },
      {
        "text": "Delaware",
        "value": "DE"
      },
      {
        "text": "District Of Columbia",
        "value": "DC"
      },
      {
        "text": "Federated States Of Micronesia",
        "value": "FM"
      },
      {
        "text": "Florida",
        "value": "FL"
      },
      {
        "text": "Georgia",
        "value": "GA"
      },
      {
        "text": "Guam",
        "value": "GU"
      },
      {
        "text": "Hawaii",
        "value": "HI"
      },
      {
        "text": "Idaho",
        "value": "ID"
      },
      {
        "text": "Illinois",
        "value": "IL"
      },
      {
        "text": "Indiana",
        "value": "IN"
      },
      {
        "text": "Iowa",
        "value": "IA"
      },
      {
        "text": "Kansas",
        "value": "KS"
      },
      {
        "text": "Kentucky",
        "value": "KY"
      },
      {
        "text": "Louisiana",
        "value": "LA"
      },
      {
        "text": "Maine",
        "value": "ME"
      },
      {
        "text": "Marshall Islands",
        "value": "MH"
      },
      {
        "text": "Maryland",
        "value": "MD"
      },
      {
        "text": "Massachusetts",
        "value": "MA"
      },
      {
        "text": "Michigan",
        "value": "MI"
      },
      {
        "text": "Minnesota",
        "value": "MN"
      },
      {
        "text": "Mississippi",
        "value": "MS"
      },
      {
        "text": "Missouri",
        "value": "MO"
      },
      {
        "text": "Montana",
        "value": "MT"
      },
      {
        "text": "Nebraska",
        "value": "NE"
      },
      {
        "text": "Nevada",
        "value": "NV"
      },
      {
        "text": "New Hampshire",
        "value": "NH"
      },
      {
        "text": "New Jersey",
        "value": "NJ"
      },
      {
        "text": "New Mexico",
        "value": "NM"
      },
      {
        "text": "New York",
        "value": "NY"
      },
      {
        "text": "North Carolina",
        "value": "NC"
      },
      {
        "text": "North Dakota",
        "value": "ND"
      },
      {
        "text": "Northern Mariana Islands",
        "value": "MP"
      },
      {
        "text": "Ohio",
        "value": "OH"
      },
      {
        "text": "Oklahoma",
        "value": "OK"
      },
      {
        "text": "Oregon",
        "value": "OR"
      },
      {
        "text": "Palau",
        "value": "PW"
      },
      {
        "text": "Pennsylvania",
        "value": "PA"
      },
      {
        "text": "Puerto Rico",
        "value": "PR"
      },
      {
        "text": "Rhode Island",
        "value": "RI"
      },
      {
        "text": "South Carolina",
        "value": "SC"
      },
      {
        "text": "South Dakota",
        "value": "SD"
      },
      {
        "text": "Tennessee",
        "value": "TN"
      },
      {
        "text": "Texas",
        "value": "TX"
      },
      {
        "text": "Utah",
        "value": "UT"
      },
      {
        "text": "Vermont",
        "value": "VT"
      },
      {
        "text": "Virgin Islands",
        "value": "VI"
      },
      {
        "text": "Virginia",
        "value": "VA"
      },
      {
        "text": "Washington",
        "value": "WA"
      },
      {
        "text": "West Virginia",
        "value": "WV"
      },
      {
        "text": "Wisconsin",
        "value": "WI"
      },
      {
        "text": "Wyoming",
        "value": "WY"
      }
    ];
    var element = document.querySelector('paper-chip-input-autocomplete');
    element.source = states;
  </script>

</custom-element-demo>
```
-->
```html
<paper-chip-input-autocomplete id="paper-chip-input-autocomplete"  
  label="+Add (Enter) -Delete (Backspace)" 
  closable></paper-chip-input-autocomplete>
```

## Browser Support

![Edge](https://thomascybulski.github.io/browsers/edge_48x48.png) | ![Chrome](https://thomascybulski.github.io/browsers/chrome_48x48.png) | ![Firefox](https://thomascybulski.github.io/browsers/firefox_48x48.png) | ![Opera](https://thomascybulski.github.io/browsers/opera_48x48.png) | ![Safari](https://thomascybulski.github.io/browsers/safari-ios_48x48.png)
--- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request 🤓

