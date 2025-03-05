class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <div class="header">
            <div>
                <div class="bars">
                    <div></div>
                     <div></div>
                    <div></div>
                </div>
            </div>
            <div class="logo">
                <span>myProfile.</span>
            </div>
            <div class="menu">
                <span>HOME</span>
                <span><a href="#about">ABOUT</a></span>
                <span><a href="./pages/portfolio.html">PORTFOLIO</a></span>
                <span><a href="./pages/blog.html">BLOG</a></span>
                <span><a href="./pages/contact.html">CONTACT</a></span>
            </div>

        </div>
      `;
    }
  }
  
  customElements.define('header-component', Header);