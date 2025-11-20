import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('side-by-side-component')
export class SideBySideComponent extends LitElement {
  @property({ type: String }) image = '';
  @property({ type: String }) imageAlt = 'Side by side image';
  @property({ type: String }) heading = 'Our Story';
  @property({ type: String }) text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  @property({ type: String }) layout = 'media-first'; // 'media-first' or 'media-second'
  @property({ type: String }) bgColor = '#ffffff';

  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .container {
      display: flex;
      flex-direction: column;
      width: 100%;
      background-color: var(--bg-color, #ffffff);
    }

    .content-wrapper {
      display: flex;
      flex-direction: row;
      max-width: 1200px;
      margin: 0 auto;
      width: 100%;
    }

    .media-second .content-wrapper {
      flex-direction: row-reverse;
    }

    .image-container {
      flex: 1;
      min-width: 0;
      overflow: hidden;
    }

    .image-container img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .text-container {
      flex: 1;
      padding: 3rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-width: 0;
    }

    .heading {
      font-size: clamp(1.75rem, 3vw, 2.5rem);
      font-weight: 700;
      margin: 0 0 1.5rem 0;
      color: #1a202c;
      line-height: 1.3;
    }

    .text {
      font-size: clamp(1rem, 1.5vw, 1.125rem);
      line-height: 1.8;
      color: #4a5568;
      margin: 0;
    }

    /* Mobile: always image first */
    @media (max-width: 768px) {
      .content-wrapper,
      .media-second .content-wrapper {
        flex-direction: column !important;
      }

      .text-container {
        padding: 2rem 1.5rem;
      }

      .image-container {
        min-height: 250px;
      }
    }

    @media (min-width: 769px) {
      .image-container {
        min-height: 400px;
      }
    }
  `;

  render() {
    const layoutClass = this.layout === 'media-second' ? 'media-second' : 'media-first';

    return html`
      <div class="container ${layoutClass}" style="--bg-color: ${this.bgColor}">
        <div class="content-wrapper">
          <div class="image-container">
            ${this.image
              ? html`<img src="${this.image}" alt="${this.imageAlt}" />`
              : html`<div style="width: 100%; height: 100%; background: #e2e8f0; display: flex; align-items: center; justify-content: center; color: #718096;">
                      <span>Image placeholder</span>
                    </div>`}
          </div>
          <div class="text-container">
            <h2 class="heading">${this.heading}</h2>
            <p class="text">${this.text}</p>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'side-by-side-component': SideBySideComponent;
  }
}
