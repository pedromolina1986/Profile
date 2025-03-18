class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="header">           
            <div>
                <div class="bars" onClick="openMenuLeft()">
                    <div></div>
                    <div></div>
                    <div></div>                                        
                </div>                
            </div>
            <div id="menuLeft" class="menuLeft">
              <span><a href="/pedromolina.github.io/index.html">HOME</a></span>
              <span><a href="/pedromolina.github.io/pages/about.html">RESUME</a></span>
              <span><a href="/pedromolina.github.io/pages/portfolio.html">CHEAT SHEETS</a></span>
              <span><a href="/pedromolina.github.io/pages/blog.html">BLOG</a></span>
              <span><a href="/pedromolina.github.io/pages/contact.html">CONTACT</a></span>
            </div>
            <div class="logo">
                <span>myProfile.</span>
            </div>
           <div id="menu" class="menu">
              <span><a href="/pedromolina.github.io/index.html">HOME</a></span>
              <span><a href="/pedromolina.github.io/pages/about.html">RESUME</a></span>
              <span><a href="/pedromolina.github.io/pages/portfolio.html">CHEAT SHEETS</a></span>
              <span><a href="/pedromolina.github.io/pages/blog.html">BLOG</a></span>
              <span><a href="/pedromolina.github.io/pages/contact.html">CONTACT</a></span>
            </div>
        </div>
      `;
  }
}

function openMenuLeft() {
  const menuLeft = document.getElementById('menuLeft')
  // get all rendered styles
  const styles = window.getComputedStyle(menuLeft)
  if (styles.visibility == "hidden") {
    document.getElementById("menuLeft").style.visibility = "visible";    
  }
  else {
    document.getElementById("menuLeft").style.visibility = "hidden";    
  }
}

customElements.define('header-component', Header);