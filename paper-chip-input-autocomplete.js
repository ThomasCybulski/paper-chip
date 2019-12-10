/**

Material design: [Chips](https://material.io/guidelines/components/chips.html)

`paper-chip-input-autocomplete`
An element with a lightweight completion suggester. The selected item will be
displayed as an paper-chip.

### Styling
The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-chip-autocomplete-focus-color` | Label and underline color when the
input is focused | `--primary-color`
`--paper-chip-input-autocomplete-font-size` | Fontsize applied to input field |
`13px`
`--paper-chip-input-autocomplete-label-font-size` | Fontsize applied to input
label | `13px`
`--paper-chip-autocomplete-width` | Width of the suggestion field | `100%`
`--paper-chip-autocomplete-suggestion-background` | Background color of the
autocomplete suggestion field | `--primary-background-color`
`--paper-chip-autocomplete-suggestion-text-color` | Text color of the
autocomplete suggestion field | `--primary-text-color`
`--paper-chip-autocomplete-item-font-size` | Fontsize of the autocomplete
suggestion field | `13px`
`--paper-chip-autocomplete-item-height` | Minimum height of the item | `48px`

@element paper-chip-input-autocomplete
@demo demo/index.html
*/
import '@polymer/iron-a11y-keys/iron-a11y-keys.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-material/paper-material.js';
import '@polymer/paper-ripple/paper-ripple.js';
import '@polymer/paper-styles/default-theme.js';
import './paper-chip-input.js';

import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

class PaperChipInputAutocomplete extends PolymerElement {
  static get template() {
    return html`
						<style>
							:host {
								display: block;
								position: relative;
							}
							paper-item:hover {
								background: #eee;
								color: #333;
								cursor: pointer;
							}
							paper-item.active,
							:host ::content paper-item.active {
								background: #eee;
								color: #333;
							}
							paper-item {
								height: 0px;
								--paper-item-selected-weight: normal;
								--paper-item-min-height: var(--paper-chip-autocomplete-item-height, 48px);
								--paper-item: {
									font-family: 'Roboto', sans-serif;
									-webkit-font-smoothing: antialiased;
									font-size: var(--paper-chip-autocomplete-item-font-size, 13px);
								}
							}
							.hide {
								display: none;
							}
							.autocomplete {
								width: var(--paper-chip-autocomplete-width, 100%);
								position: absolute;
								z-index: 1;
							}
							paper-listbox {
								--paper-listbox-background-color: var(--paper-chip-autocomplete-suggestion-background, var(--primary-background-color));
								--paper-listbox-color: var(--paper-chip-autocomplete-suggestion-text-color, var(--primary-text-color));
							}
							paper-input {
								--paper-input-container-focus-color: var(--paper-chip-autocomplete-focus-color, var(--primary-color));
								--paper-input-container-input: {
									font-family: 'Roboto', sans-serif;
									-webkit-font-smoothing: antialiased;
									font-size: var(--paper-chip-input-autocomplete-font-size, 13px);
								}
								--paper-input-container-label: {
									font-family: 'Roboto', sans-serif;
									-webkit-font-smoothing: antialiased;
									font-size: var(--paper-chip-input-autocomplete-label-font-size, 13px);
								}
							}
							paper-chip {
								@apply --paper-chip-close-label;
							}
						</style>

						<iron-a11y-keys target="[[_paperInputElement]]" keys="enter" on-keys-pressed="_onKeyEnter"></iron-a11y-keys>
						<iron-a11y-keys target="[[_paperInputElement]]" keys="backspace" on-keys-pressed="_onKeyBackspace"></iron-a11y-keys>
						<iron-a11y-keys target="[[_paperInputElement]]" keys="esc" on-keys-pressed="_onKeyEsc"></iron-a11y-keys>

						<iron-a11y-keys target="[[_paperInputElement]]" keys="down" on-keys-pressed="_onKeyUpOrDown"></iron-a11y-keys>
						<iron-a11y-keys target="[[_paperInputElement]]" keys="up" on-keys-pressed="_onKeyUpOrDown"></iron-a11y-keys>

						<div>
							<paper-input id="paperInput"
										 disabled$="[[disabled]]"
										 readonly$="[[readonly]]"
										 label="[[label]]"
										 on-keyup="_findItems"
										 value="{{_inputValue}}"
										 autofocus="{{autofocus}}"
										 allowed-pattern="[[allowedPattern]]"
										 pattern="[[pattern]]"
										 required$="[[required]]"
										 auto-validate$="[[autoValidate]]"
										 error-message="[[errorMessage]]">
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
						</div>

						<dom-if if="[[_isEmpty(_filteredSource)]]">
							<template>
								<paper-material class$="[[_autocompleteClass]]" elevation="1">
									<paper-listbox id="listbox">
										<dom-repeat items="[[_filteredSource]]">
												<template>
													<paper-item id="paperItemAutocomplete" on-tap="_selectPaperItem" closable$="[[closable]]">[[item.text]]
														<paper-ripple></paper-ripple>
													</paper-item>
												</template>
											</dom-repeat>
									</paper-listbox>
								</paper-material>
							</template>
						</dom-if>
      `;
  }

  static get is() {
    return 'paper-chip-input-autocomplete';
  }

  static get properties() {
    return {

      /**
       * The minimum lengt to trigger the autocomplete.
       */
      minSearchStringLength: {type: Number, value: 2},

      /**
       * An array containing the items.
       */
      source: {
        type: Array,
        value: function() {
          return [];
        }
      },

      /**
       * If true, the paper-chips can be closed.
       */
      closable: {type: Boolean, value: false},

      /**
       * The label for this paper-chip-input-autocomplete.
       */
      label: {type: String, value: ''},

      /**
       * If true, the paper-chip-input-autocomplete is focused.
       */
      autofocus: {type: Boolean, value: false},

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
       * Set to true to disable this input.
       */
      disabled: {
        type: Boolean,
        value: false,
      },

      /**
       * True, to add additional items.
       */
      additionalItems: {type: Boolean, value: false},

      /**
       * True, when duplicates are allowed in combination with additionalItems.
       */
      allowDuplicates: {type: Boolean, value: false},

      /**
       * Set to true to mark the input as required.
       */
      required: {type: Boolean, value: false},

      /**
       * Set to true to auto-validate the input value when it changes.
       */
      autoValidate: {type: Boolean, value: false},

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
      _autoValidate: {type: Boolean, value: false},
      _required: {type: Boolean, value: false},
      _selectedSuggestionId: {type: Object, observer: '_selectPaperItem'},
      _filteredSource: {
        type: Array,
        value: function() {
          return [];
        }
      },
      _inputValue: {type: String, value: ''},
      _autocompleteClass: {type: String, value: 'hide'},
      _paperInputWidth: {type: Number},
      _paperInputElement: {type: Object}
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this._autoValidate = this.autoValidate;
    this._required = this.required;
    this._paperInputElement = this.$.paperInput;
  }

  _isEmpty(item) {
    return item.length > 0;
  }

  _onKeyEnter() {
    if (this.additionalItems &&
        (this._inputValue != '' && this._inputValue != undefined)) {
      this._saveTag(this._inputValue);
      this.required = false;
      this.autoValidate = false;
      this._inputValue = '';
    }
  }

  _onKeyBackspace(event) {
    if (this.items.length != 0 &&
        (this._inputValue == '' || this._inputValue == undefined)) {
      this._removeLastItem();
    }

    if (this.items.length == 0) {
      this.autoValidate = this._autoValidate;
      this.required = this._required;
    }
  }

  _onKeyEsc(event) {
    this._inputValue = '';
    this._hideAutocomplete();
    this.$.paperInput.focus;
  }

  _onKeyUpOrDown(event) {
    let lb = this.shadowRoot.querySelector('#listbox');

    if (lb) {
      lb.focus();
    }
  }

  _removeLastItem() {
    if (this.items.length != 0) {
      let lastItemIndex = this.items.length - 1;
      let lastItemname = this.items[lastItemIndex];

      this.splice('items', -1, 1);
      this._throwChipRemovedEvent(lastItemname);
    }
  }

  _findItems(event) {
    if (this._inputValue.length == 0) {
      this._autocompleteClass = 'hide';
    }

    if (this._inputValue.length >= this.minSearchStringLength) {
      this._updatePaperListboxWidth();
      this._filterItems();
      this._autocompleteClass = 'autocomplete';
    } else {
      this._autocompleteClass = 'hide';
    }
  }

  _updatePaperListboxWidth() {
    this.updateStyles({
      '--paper-chip-input-autocomplete-width':
          this.$.paperInput.offsetWidth + 'px',
    });
  }

  _filterItems() {
    let filteredByString =
        this.source.filter(element => this._filterBySearchString(element));

    if (filteredByString.length > 0 && this.items.length) {
      this._filteredSource = filteredByString.filter(
          element => this._filterByExistingPaperChip(element));
    } else {
      this._filteredSource = filteredByString;
    }
  }

  _filterByExistingPaperChip(element) {
    return this.items.indexOf(element.text) == -1;
  }

  _filterBySearchString(element) {
    return element.text.toLowerCase().indexOf(this._inputValue.toLowerCase()) >=
        0;
  }

  _selectPaperItem(event) {
    this._saveTag(event.model.item.text);
    this.required = false;
    this.autoValidate = false;
    this._inputValue = '';
    this._autocompleteClass = 'hide';
    this.$.paperInput.focus();
  }

  _saveTag(name) {
    if (this.allowDuplicates) {
      this.push('items', name);
      this._throwChipCreatedEvent(name);
    } else if (this.items.indexOf(name) == -1) {
      this.push('items', name);
      this._throwChipCreatedEvent(name);
    }
  }

  _throwChipCreatedEvent(name) {
    this.dispatchEvent(new CustomEvent(
        'chip-created',
        {detail: {'chipLabel': name}, composed: true, bubbles: true}));
  }

  _hideAutocomplete() {
    this._autocompleteClass = 'hide';
  }

  _removeChip(event) {
    const index = this.items.indexOf(event.detail.chipLabel);
    if (index != -1) {
      this.splice('items', index, 1);
    }
  }

  _throwChipRemovedEvent(chipLabel) {
    this.dispatchEvent(new CustomEvent(
        'chip-removed',
        {detail: {'chipLabel': chipLabel}, composed: true, bubbles: true}));
  }
}
window.customElements.define(
    PaperChipInputAutocomplete.is, PaperChipInputAutocomplete);
