/*
STYLES in styles.css
*/

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="header">           
            <div>
                <div id="bars" class="bars" onClick="openMenuLeft()">
                    <div></div>
                    <div></div>
                    <div></div>                                        
                </div>                
            </div>
            <div id="menuLeft" class="menuLeft">
              <span><a href="/pedromolina.github.io/index.html">home</a></span>
              <span><a href="/pedromolina.github.io/pages/about.html">about</a></span>
              <span><a href="/pedromolina.github.io/pages/portfolio.html">tutorials</a></span>
              <span><a href="/pedromolina.github.io/pages/blog.html">blog</a></span>
              <span><a href="/pedromolina.github.io/pages/contact.html">contact</a></span>
            </div>
            <div class="logo">
                <span>myProfile.</span>
            </div>
           <div id="menu" class="menu">
              <span><a href="/pedromolina.github.io/index.html">home</a></span>
              <span><a href="/pedromolina.github.io/pages/about.html">about</a></span>
              <span><a href="/pedromolina.github.io/pages/portfolio.html">tutorials</a></span>
              <span><a href="/pedromolina.github.io/pages/blog.html">blog</a></span>
              <span><a href="/pedromolina.github.io/pages/contact.html">contact</a></span>
            </div>
        </div>
      `;
  }
}

function openMenuLeft() {
  const menuLeft = document.getElementById('menuLeft');
  // get all rendered styles
  const styles = window.getComputedStyle(menuLeft); 
  if (styles.visibility == "hidden") {
    document.getElementById("menuLeft").style.visibility = "visible";
  }
  else {
    document.getElementById("menuLeft").style.visibility = "hidden";
  }
}

//CLICK AWAY LISTENER TO CLOSE THE MENU WHEN CLICK OUTSIDE
document.addEventListener("click", (evt) => {
  const menuLeft = document.getElementById("menuLeft");
  const bars = document.getElementById("bars");
  let targetEl = evt.target; // clicked element      
  do {
    if(targetEl == menuLeft || targetEl == bars ) {      
      return;
    }    
    targetEl = targetEl.parentNode;
  } while (targetEl);  
  menuLeft.style.visibility ="hidden";
});

customElements.define('header-component', Header);