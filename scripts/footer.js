// footer.js
const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200..1000&display=swap');

        :root {
            --primary-color: #ffffff;
            --secondary-color: #e7e2dd;
            --accent1-color: #f09d51;
            --accent2-color: #131313;
            --font: "Nunito", sans-serif;
        }

        * {
            font-family: var(--font);
        }

        footer {
            background-color: #e7e2dd;
            color: #0c0c0c;
            padding: 1rem;
            z-index: 100;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
        }
    </style>

    <footer>
        <p>
            ©<span id="currentyear"></span> 🤖 McDonald Musimwa 🤖 Cape Town 🤖 South Africa
        </p>
        <p id="lastmodified"></p>
    </footer>
`;

class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'closed' });
        shadowRoot.appendChild(footerTemplate.content.cloneNode(true));

        /* Update footer content */
        const currentYear = new Date().getFullYear();
        shadowRoot.getElementById("currentyear").innerHTML = currentYear;
        
        const lastModified = document.lastModified;
        shadowRoot.getElementById("lastmodified").innerHTML =
            "Last Modification: " + lastModified; // No need for Date() here
    }
}

customElements.define('footer-component', Footer);

export { Footer };
