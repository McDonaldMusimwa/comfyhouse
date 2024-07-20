const headerTemplate = document.createElement('template');
headerTemplate.innerHTML =
    `
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');

    @media screen and (max-width: 768px) {
:root {
  /* change the values below to your colors from your palette */
  --primary-color: #ffffff   ;
  --secondary-color:#e7e2dd ;
  --accent1-color: #f09d51;
  --accent2-color: #131313;

  /* change the values below to your chosen font(s) */
 
  --font: "Nunito", sans-serif;
}
     *{
  font-family: var(--font);
}
      
      .bar {
        display: block;
        width: 25px;
        height: 3px;
        margin: 5px auto;
        transition: all 0.3s ease-in-out;
        background-color: black;
      }
      
      .burger-menu {
        display: block;
        cursor: pointer;
      }
      
      .burger-menu.active .bar:nth-child(1) {
        transform: translateY(11px) rotate(45deg);
      }
      
      .burger-menu.active .bar:nth-child(2) {
        opacity: 0;
      }
      
      .burger-menu.active .bar:nth-child(3) {
        transform: translateY(-11px) rotate(-45deg);
      }
      
      .nav_menu {
        z-index: 100;
        display: flex;
        flex-direction: column;
        position: fixed;
        left: -110%;
        top: 60px;
        width: 90%;
        text-align: center;
        transition: 0.3s;
        background-color: #e7e2dd; /* Added background color for visibility */
        margin: 0 ;
        opacity: 100%;
      }
      
      .nav_item {
        margin: 16px 0;
      }
      
      .nav_menu.active {
        left: 0;
      }
      
      .topnav {
        display: flex;
        justify-content: space-between; /* Adjusted to space items between */
        align-items: center;
      }
      
      nav a,
      nav ul,
      nav ul li {
        text-decoration: none;
      }
      
      footer,
      header {
        background-color: var(--background);
        color: #0c0c0c;
        padding: 1rem;
        z-index: 100;
      }
      
      header > h2 {
        font-size: 1.5rem;
      }
      
      nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      
      nav a {
        color: #0c0c0c;
        padding: 0.5rem 1rem;
      }
      
      nav ul {
        list-style: none;
      }
      
      nav ul li {
        float: left;
        color: #f2f2f2;
        text-align: center;
        padding: 14px 16px;
        font-size: 17px;
     
      }
      
      nav ul li a:hover {
        background-color: var( --accent1-color);
        color: #000;
        border-radius: 12px;
      }
      
      nav ul li a.active {
        background-color:var( --accent1-color);
        color: #fff;
      }
    }

@media only screen and (min-width: 768px) {
 header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--background);
    color: #0c0c0c;
    padding: 1rem;
  }
  nav a,
  nav ul,
  nav ul li {
    text-decoration: none;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  nav a {
    color: #0c0c0c;
    padding: 0.5rem 1rem;
  }
  nav ul {
    list-style: none;
  }
  nav ul li {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    font-size: 17px;
  }
  nav ul li a:hover {
    background-color: #f09d51;
    color: #000;
    border-radius: 12px;
  }
  nav ul li a.active {
    background-color: #04aa6d;
    color: #fff;
  }


}










        </style>
       
      <header>
      <div class="topnav">
        
        <div id="burger-menu" class="burger-menu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </div>
      <nav class="topnav">
        <ul class="nav_menu">
          <li><a href="index.html">Shop</a></li>
          <li class="nav_item">
            <a
              class="nav_link"
              href="pickup-point.html"
              
              >Pickup Points</a
            >
          </li>
          <li class="nav_item">
            <a
              href="aboutus.html"
             
              class="nav_link"
              >About Us</a
            >
          </li>
          
        </ul>
      </nav>
    </header>

      `

      class Header extends HTMLElement {
        constructor() {
            super();
        }
    
        connectedCallback() {
            const shadowRoot = this.attachShadow({ mode: 'closed' });
            shadowRoot.appendChild(headerTemplate.content.cloneNode(true));
    
            /* Hamburger Menu */
            const hamburger = shadowRoot.querySelector("#burger-menu");
            const navMenu = shadowRoot.querySelector(".nav_menu");
    
            hamburger.addEventListener("click", () => {
                hamburger.classList.toggle("active");
                navMenu.classList.toggle("active");
            });
    
            shadowRoot.querySelectorAll(".nav_link").forEach((n) => {
                n.addEventListener("click", () => {
                    hamburger.classList.remove("active");
                    navMenu.classList.remove("active");
                });
            });
        }
    }
    
    customElements.define('header-component', Header);

export {Header}
