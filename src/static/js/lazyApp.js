class LazyApp extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    const { main } = await import(this.attributes.src.value);
    main(this);
  }
}

customElements.define('lazy-app', LazyApp);
