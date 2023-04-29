class Q5Canvas extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    const [{ setup, draw }, { q5 }] = await Promise.all([
      import(this.attributes.src.value),
      import('/js/vendor/q5.js'),
    ]);

    q5({
      parent: this,
      width: this.clientWidth,
      height: this.clientHeight,
    }, { setup, draw });
  }
}

customElements.define('q5-canvas', Q5Canvas);
