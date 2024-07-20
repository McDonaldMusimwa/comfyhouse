function aboutUs(data){
    const about= data[0].aboutus
    const aboutus = document.querySelector(".aboutus-area");
    
    const span = document.createElement("span")
    span.className = 'card'
    span.textContent = about
    aboutus.appendChild(span)
   
    
}

export {aboutUs}