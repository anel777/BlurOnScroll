// Create a new style element
var style = document.createElement('style');

// Define the CSS for the blur effect
style.innerHTML = `
  body {
    overflow-y: scroll;
    position: relative;
    z-index: 0;
  }
  body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: inherit;
    filter: blur(10px);
  }
`;

// Inject the style element into the page
document.head.appendChild(style);

// Add a scroll event listener to the window
window.addEventListener('scroll', function() {
  // Calculate the percentage of the page that has been scrolled
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = scrollTop / scrollHeight * 100;

  // Update the blur effect based on the scroll percentage
  style.innerHTML = `
    body {
      overflow-y: scroll;
      position: relative;
      z-index: 0;
    }
    body::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      background: inherit;
      filter: blur(${scrolled / 10}px);
    }
  `;
});
