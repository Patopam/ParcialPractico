// <button></button>
class Button extends HTMLElement {
    static get observeAttribute (){
        
    }


  constructor() {
    super(); 
    this.shadowRoot ({mode:"open"})
  }

  connectedCallback() {
    this.mount();
    
  }
    
  attributeChangedCallback(attrName, oldVal, newVal) {
    this[attrName] = newVal;
    this.mount;
  }
}

this.attachShadow({
})


document.createElement ()





window.customElements.define('button', Button);
export default Button;