// <product></product>
class Product extends HTMLElement {
    static get observeAttribute (){
        return 'title', 'description', 'value';
    }

  constructor() {
    super(); 
    this.shadowRoot ({mode:"open"})
  }
  
  connectedCallback() {
    this.render();
}

attributeChangedCallback(attrName, oldVal, newVal) {
    this[attrName] = newVal;
    this.render;
}

  render(){
    this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="./src/components/products/product.css">

    <h1>${this.title}</h1>
    <p>${this.description}</p>
    <h2>${this.value}</h2>
    `
  }


}

window.customElements.define('product', Product);
export default Product;