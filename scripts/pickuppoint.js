function pickUpPoints(array) {
 
    const pickuparea = document.getElementById("Pickup-area");
   
    array.forEach(point => {
    
  
      // Create card element
      const card = document.createElement("div");
      card.className = "card";
  
      // Create and append image
      const img = document.createElement("img");
      img.src = point.picture;
      img.alt = point.locationName;
      img.className = "card-img";
      card.appendChild(img);
  
      // Create and append card content
      const cardContent = document.createElement("div");
      cardContent.className = "card-content";
  
      const locationName = document.createElement("h3");
      locationName.textContent = point.locationName;
      cardContent.appendChild(locationName);

        const br = document.createElement("hr")
        cardContent.appendChild(br)

      const city = document.createElement("p");
      city.innerHTML = `<strong>City:</strong> ${point.city}`;
      cardContent.appendChild(city);
  
      const address = document.createElement("p");
      address.innerHTML = `<strong>Address:</strong> ${point.address}`;
      cardContent.appendChild(address);
  
      const directions = document.createElement("p");
      directions.innerHTML = `<strong>Directions:</strong> ${point.directions}`;
      cardContent.appendChild(directions);
  
      const phone = document.createElement("p");
      phone.innerHTML = `<strong>Phone:</strong> ${point.phone}`;
      cardContent.appendChild(phone);
  
      card.appendChild(cardContent);
      pickuparea.appendChild(card);
    });
  }
  
  export { pickUpPoints };
  