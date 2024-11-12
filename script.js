const button = document.getElementById("toggleButton")
const listItems = document.querySelectorAll ("#list li")
let isExpanded = false; 
button.addEventListener('click', () => {
    isExpanded = !isExpanded;
  
    listItems.forEach((item, index) => {
      if (index !== 0) { 
        item.style.display = isExpanded ? 'list-item' : 'none';
      }
    });
  
    button.textContent = isExpanded ? 'Hide' : 'Show';
  });