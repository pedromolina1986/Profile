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
                <span><a href="/pedromolina.github.io/index.html">HOME</a></span>
                <span><a href="/pedromolina.github.io/pages/about.html">ABOUT</a></span>
                <span><a href="/pedromolina.github.io/pages/portfolio.html">PORTFOLIO</a></span>
                <span><a href="/pedromolina.github.io/pages/blog.html">BLOG</a></span>
                <span><a href="/pedromolina.github.io/pages/contact.html">CONTACT</a></span>
            </div>

        </div>
      `;
    }
  }
  
  customElements.define('header-component', Header);