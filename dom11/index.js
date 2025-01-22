document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const fruitInput = document.getElementById("fruit-to-add");
    const descriptionInput = document.createElement("input");
    descriptionInput.placeholder = "Enter fruit description";
    descriptionInput.id = "fruit-description"; // Added a unique ID for description input
    form.insertBefore(descriptionInput, form.querySelector("button"));
  
    const fruitList = document.querySelector(".fruits");
    const filterInput = document.getElementById("filter");
  
    form.addEventListener("submit", function(e) {
      e.preventDefault();
  
      const fruitName = fruitInput.value.trim();
      const fruitDescription = descriptionInput.value.trim();
  
      if (fruitName) {
        const fruitItem = document.createElement("li");
        fruitItem.classList.add("fruit");
  
        // Add fruit name and description with an <em> tag
        fruitItem.innerHTML = `${fruitName} <em>${fruitDescription}</em><button class="delete-btn">x</button>`;
  
        const deleteBtn = fruitItem.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", function() {
          fruitItem.remove();
        });
  
        fruitList.appendChild(fruitItem);
  
        // Clear inputs
        fruitInput.value = "";
        descriptionInput.value = "";
      }
    });
  
    // Filter functionality
    filterInput.addEventListener("input", function() {
      const filterValue = filterInput.value.toLowerCase();
      const fruits = document.querySelectorAll(".fruit");
  
      fruits.forEach(fruit => {
        // Get the fruit name
        const fruitName = fruit.firstChild.textContent.trim().toLowerCase();
  
        // Safely check for the description (em tag)
        const fruitDescriptionElement = fruit.querySelector("em");
        const fruitDescription = fruitDescriptionElement ? fruitDescriptionElement.textContent.trim().toLowerCase() : "";
  
        // Log values for debugging
        console.log("Filter Value: ", filterValue);
        console.log("Fruit Name: ", fruitName);
        console.log("Fruit Description: ", fruitDescription);
  
        // Check if either name or description matches the filter value
        if (fruitName.includes(filterValue) || fruitDescription.includes(filterValue)) {
          fruit.style.display = "block"; // Show the fruit
        } else {
          fruit.style.display = "none"; // Hide the fruit
        }
      });
    });
  });
  