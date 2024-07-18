document.addEventListener("DOMContentLoaded", function() {
  function getRandomColor() {
    // Define a set of suitable colors that aren't too light
    var colors = [
      '#028063', 
      // '#778a9d', 
      // '#345B63', 
      // '#152D35', 
      '#112A46',
      '#4985c0',
      '#377b40',
      '#9b411b',
    ];
    // Select a random color from the array
    return colors[Math.floor(Math.random() * colors.length)];
  }

  var randomColor = getRandomColor();  // Store the random color in a variable

  // Apply to .md-header
  var headers = document.querySelectorAll('.md-header');
  headers.forEach(function(header) {
    header.style.backgroundColor = randomColor;
  });

  // Apply to tabbed labels
  var labels = document.querySelectorAll('div.tabbed-set div.tabbed-labels label');
  labels.forEach(function(label) {
    label.style.backgroundColor = randomColor;
  });
});
