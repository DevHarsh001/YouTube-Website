document.addEventListener("contextmenu", function(event) {
    if (event.target.tagName.toLowerCase() === 'img') {
      event.preventDefault(); 
    }
  });
  