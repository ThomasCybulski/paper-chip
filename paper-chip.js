/**

Material design:
[Chips](https://material.io/guidelines/components/chips.html#chips-specs)

`paper-chip`
Paper-chip's represent complex entities in small blocks, such as a contact.

### Styling
The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-chip-label-color` | The paper-chip label-color | `rgba(0, 0, 0, 0.6)`
`--paper-chip-active-background-color` | The paper-chip active background-color
| `#d6d6d6`
`--paper-chip-background-color` | The paper-chip background-color | `#e4e4e4`
`--paper-chip-avatar-background-color` | The paper-chip avatar background-color
| `#757575`
`--paper-chip-avatar-font-color` | The paper-chip avatar font and icon color |
`#ffffff`
`--paper-chip-close-color` | The paper-chip close icon color | `#a6a6a6`
`--paper-chip-font-size` | The paper-chip font size | `13px`
`--paper-chip-font-family` | The paper-chip font size | `"Roboto", sans-serif`
`--paper-chip-close-label` | Mixin for the paper-chip close label | `{}`
`--paper-chip` | Mixin for the paper-chip | `{}`

@element paper-chip
@demo demo/index.html
*/
import '@polymer/paper-styles/paper-styles.js';
import '@polymer/iron-icons/iron-icons.js';

import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

class PaperChip extends PolymerElement {
  static get template() {
    return html`
        <style>
          .chip {
            font-family: var(--paper-chip-font-family, "Roboto", sans-serif);
            display: inline-block;
            height: 32px;
            font-size: var(--paper-chip-font-size, 13px);
            font-weight: 500;
            color: var(--paper-chip-label-color, rgba(0, 0, 0, 0.6));
            line-height: 32px;
            padding: 0 4px 0 12px;
            border-radius: 16px;
            background-color: var(--paper-chip-background-color, #E0E0E0);
            margin-bottom: 5px;
            margin-right: 5px;
            @apply --paper-chip;
          }
          .chip:active {
            background: var(--paper-chip-active-background-color, #D6D6D6);
          }
          .chip .closeIcon {
            margin-left: 4px;
            cursor: pointer;
            float: right;
            width: 12px;
          }
          .chip .inline {
            display: -webkit-inline-box;
          }
          .hoverEffect:hover {
            @apply --shadow-elevation-2dp;
            cursor: default;
          }
          .unselectable {
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
          .close {
            top: -1px;
            @apply --paper-chip-close-label;
          }
          iron-icon {
            --iron-icon-height: 16px;
            --iron-icon-width: 16px;
            position: relative;
            right: 8px;
            color: var(--paper-chip-background-color, #E0E0E0);
            background-color: var(--paper-chip-close-color, #A6A6A6);
            border-radius: 50%;
          }
          .label {
            margin-right: 12px;
          }
          .avatar ::slotted(.chip-image) {
            float: left;
            margin: 0 8px 0 -12px;
            height: 32px;
            width: 32px;
            border-radius: 50%;
          }
          .avatar ::slotted(.chip-background) {
            --iron-icon-height: 19px;
            --iron-icon-width: 19px;
            background: var(--paper-chip-avatar-background-color, #989898);
            border-radius: 50%;
            color: var(--paper-chip-avatar-font-color, #ffffff);
            float: left;
            font-weight: bold;
            font-size: 16px;
            height: 32px;
            margin: 0 8px 0 -12px;
            text-align: center;
            width: 32px;
          }
          [hidden] {
            display: none;
          }
        </style>

        <div class$="[[_computePaperChipClass(noHover)]]">
          <span class="label">[[label]]</span>
          <span class="avatar"><slot name="avatar"></slot></span>
          <div hidden$="[[!closable]]" class="closeIcon" on-click="_remove">
            <iron-icon class="close" icon="icons:clear"></iron-icon>
          </div>
        </div>
      `;
  }

  static get is() {
    return 'paper-chip';
  }

  static get properties() {
    return {

      /**
       * The label for this paper-chip. The default value is 'Default Label'.
       */
      label: {type: String, value: 'Default Label'},

      /**
       * If true, the paper-chips can be closed.
       */
      closable: {type: Boolean, value: false},

      /**
       * If true, the element will not produce a hover effect.
       */
      noHover: {type: Boolean, value: false}
    };
  }

  _computePaperChipClass(noHover) {
    if (noHover == true) {
      return 'chip unselectable';
    } else {
      return 'chip unselectable hoverEffect';
    }
  }

  _remove(event) {
    this.dispatchEvent(new CustomEvent(
        'chip-removed',
        {detail: {'chipLabel': this.label}, composed: true, bubbles: true}));
    if (this.parentNode.id != 'slot2' &&
        this.parentNode.querySelector('dom-repeat') === null) {
      this.parentNode.removeChild(this);
    }
  }
}
window.customElements.define(PaperChip.is, PaperChip);
