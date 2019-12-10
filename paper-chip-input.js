/**

Material design: [Chips](https://material.io/guidelines/components/chips.html)

`paper-chip-input`
paper-chip's combined with a paper-input element.

### Styling
The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-chip-input-height | Height applied to the input field | `auto`
`--paper-chip-input-focus-color` | Label and underline color when the input is
focused | `--primary-color`
`--paper-chip-input-font-size` | Fontsize applied to input field | `13px`
`--paper-chip-input-label-font-size` | Fontsize applied to input label | `13px`

@element paper-chip-input
@demo demo/index.html
*/
import '@polymer/iron-a11y-keys/iron-a11y-keys.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-styles/default-theme.js';
import './paper-chip.js';

import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

class PaperChipInput extends PolymerElement {
  static get template() {
    return html`
					<style>
						paper-input {
							height:  var(--paper-chip-input-height, auto);
							--paper-input-container-focus-color: var(--paper-chip-input-focus-color, var(--primary-color));
							--paper-input-container-input: {
								font-family: 'Roboto', sans-serif;
								-webkit-font-smoothing: antialiased;
								font-size: var(--paper-chip-input-font-size, 13px);
							}
							--paper-input-container-label: {
								font-family: 'Roboto', sans-serif;
								-webkit-font-smoothing: antialiased;
								font-size: var(--paper-chip-input-label-font-size, 13px);
							}
						}
					</style>

					<iron-a11y-keys target="[[_paperInputElement]]" keys="enter" on-keys-pressed="_onKeyEnter"></iron-a11y-keys>
					<iron-a11y-keys target="[[_paperInputElement]]" keys="backspace" on-keys-pressed="_onKeyBackspace"></iron-a11y-keys>

					<paper-input id="paperInput"
								 always-float-label$="[[alwaysFloatLabel]]"
								 auto-validate$="[[autoValidate]]"
								 no-label-float$="[[noLabelFloat]]"
								 disabled$="[[disabled]]"
								 readonly$="[[readonly]]"
								 required$="[[required]]"
								 value="{{_value}}"
								 label="[[label]]"
								 allowed-pattern="[[allowedPattern]]"
								 pattern="[[pattern]]"
								 error-message="[[errorMessage]]">
								 <slot id="slot" name="input" slot="prefix"></slot>
								 <div id="slot2" slot="prefix">
									<dom-repeat items="[[items]]">
										<template>
											[[item.name]]
											<paper-chip id="paper-chip-[[item]]-[[index]]" 
														label="[[item]]" 
														closable$="[[closable]]" 
														on-chip-removed="_removeChip">
											</paper-chip>
										</template>
									</dom-repeat>
								</div>
					</paper-input>
      `;
  }

  static get is() {
    return 'paper-chip-input';
  }

  static get properties() {
    return {

      /**
       * Set to true to always float the floating label.
       */
      alwaysFloatLabel: {type: Boolean, value: false},

      /**
       * If true, the paper-chips can be closed.
       */
      closable: {type: Boolean, value: false},

      /**
       * Set to true to disable this input.
       */
      disabled: {
        type: Boolean,
        value: false,
      },

      /**
       * The list of items, which will be set as paper-chips.
       */
      items: {
        type: Array,
        value: function() {
          return [];
        }
      },

      /**
       * The label for this paper-chip-input.
       */
      label: {type: String, value: ''},

      /**
       * Set to true to disable the floating label. The label disappears when
       * the input value is not null.
       */
      noLabelFloat: {type: Boolean, value: false},

      /**
       * Set to true to mark the input as required.
       */
      required: {type: Boolean, value: false},

      /**
       * Set to true to auto-validate the input value when it changes.
       */
      autoValidate: {type: Boolean, value: false},
      _autoValidate: {type: Boolean, value: false},
      _required: {type: Boolean, value: false},
      /**
       * The error message to display when the input is invalid.
       */
      errorMessage: {type: String},

      /**
       * A pattern to validate the input with.
       */
      pattern: {type: String},

      /**
       * Set this to specify the pattern.
       */
      allowedPattern: {type: String},

      /**
       * Set to true to prevent to change the input value.
       */
      readonly: {type: Boolean, value: false},
      _value: {type: String},
      _paperInputElement: {type: Object}
    };
  }

  /**
   * Validates the input element and sets an error style if needed.
   *
   * @return {boolean}
   */
  validate() {
    if (this.items.length == 0) {
      return this.$.paperInput.validate();
    }
  }

  connectedCallback() {
    super.connectedCallback();
    this._autoValidate = this.autoValidate;
    this._required = this.required;
    this._paperInputElement = this.$.paperInput;
  }

  _onKeyEnter() {
    if (this._value != '' && this._value != undefined) {
      this._saveTag(this._value);
      this.dispatchEvent(
          new CustomEvent('chip-created', {detail: {chipLabel: this._value}}));
      this.required = false;
      this.autoValidate = false;
      this._value = '';
    }
  }

  _onKeyBackspace() {
    if (this.items.length != 0 &&
        (this._value == '' || this._value == undefined)) {
      this._removeLastItem();
    } else if (
        this.$.slot.assignedNodes().length > 0 &&
        (this._value == '' || this._value == undefined)) {
      let distributedNodes = this.$.slot.assignedNodes({flatten: true})
      let lastPaperChipIndex = 0;
      for (var i = 0; i < this.childNodes.length; i++) {
        if (this.childNodes[i].tagName == 'PAPER-CHIP') {
          lastPaperChipIndex = i;
        }
      }
      this._throwChipRemovedEvent(this.childNodes[lastPaperChipIndex].label);
      this.removeChild(this.childNodes[lastPaperChipIndex]);
    }

    if (this.items.length == 0 && this.$.slot.assignedNodes().length == 0) {
      this.autoValidate = this._autoValidate;
      this.required = this._required;
    }
  }

  _saveTag(name) {
    if (this.items.indexOf(name) == -1) {
      this.push('items', name);
    }
  }

  _removeChip(event) {
    const index = this.items.indexOf(event.detail.chipLabel);
    if (index != -1) {
      this.splice('items', index, 1);
    }
  }

  _removeLastItem() {
    if (this.items.length != 0) {
      this._throwChipRemovedEvent(this.items[this.items.length - 1]);
      this.splice('items', -1, 1);
    }
  }

  _getLastPaperChipPosition(childNodes) {
    let lastPaperChipIndex = 0;
    for (var i = 0; i < childNodes.length; i++) {
      if (childNodes[i].tagName == 'PAPER-CHIP') {
        lastPaperChipIndex = i;
      }
    }
    return lastPaperChipIndex;
  }

  _throwChipRemovedEvent(chipLabel) {
    this.dispatchEvent(new CustomEvent(
        'chip-removed',
        {detail: {'chipLabel': chipLabel}, composed: true, bubbles: true}));
  }
}
window.customElements.define(PaperChipInput.is, PaperChipInput);
