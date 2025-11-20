import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('hero-component')
export class HeroComponent extends LitElement {
  @property({ type: String }) backgroundImage = '';
  @property({ type: String }) heading = 'Welcome to Our Site';
  @property({ type: String }) description = 'Discover amazing content and explore what we have to offer';
  @property({ type: String }) overlayOpacity = '0.5';
  @property({ type: String }) textAlign = 'center';
  @property({ type: String }) minHeight = '500px';

  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .hero-container {
      position: relative;
      width: 100%;
      min-height: var(--hero-min-height, 500px);
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      background-color: var(--hero-bg-color, #1a202c);
    }

    .hero-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 0;
    }

    .hero-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, var(--overlay-opacity, 0.5));
      z-index: 1;
    }

    .hero-content {
      position: relative;
      z-index: 2;
      padding: 4rem 2rem;
      max-width: 1200px;
      width: 100%;
      text-align: var(--text-align, center);
      color: white;
    }

    .hero-heading {
      font-size: clamp(2rem, 5vw, 4rem);
      font-weight: 800;
      margin: 0 0 1.5rem 0;
      line-height: 1.2;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    }

    .hero-description {
      font-size: clamp(1rem, 2vw, 1.5rem);
      margin: 0;
      line-height: 1.6;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    }

    @media (max-width: 768px) {
      .hero-content {
        padding: 3rem 1.5rem;
      }
    }
  `;

  render() {
    return html`
      <div class="hero-container" style="--hero-min-height: ${this.minHeight}; --overlay-opacity: ${this.overlayOpacity}; --text-align: ${this.textAlign}">
        ${this.backgroundImage
          ? html`<img class="hero-background" src="${this.backgroundImage}" alt="Hero background" />`
          : null}
        <div class="hero-overlay"></div>
        <div class="hero-content">
          <h1 class="hero-heading">${this.heading}</h1>
          <p class="hero-description">${this.description}</p>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hero-component': HeroComponent;
  }
}
