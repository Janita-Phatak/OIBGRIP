$(document).ready(function() {

  // Define fromUnit and toUnit variables
  let fromUnit = null;
  let toUnit = null;

  // Listen to click events on the number buttons and update the temperature input field accordingly
  $(".num-button").click(function() {
    var tempInput = $("#temp");
    var tempVal = tempInput.val();
    var clickedNum = $(this).text();
  
    if (clickedNum === '-') {
      // if "-" button is clicked, add "-" to the beginning of the input value
      tempInput.val('-' + tempVal);
    } else if (clickedNum === 'Back') {
      // if "Back" button is clicked, remove the last character from the input value
      tempInput.val(tempVal.slice(0, -1));
    } else {
      // if any other number button is clicked, add the clicked number to the input value
      tempInput.val(tempVal + clickedNum);
    }
  });

  // Event handler for convert from unit buttons
  $('.convert-from-container .unit-button').click(function() {
    $('.convert-from-container .unit-button').removeClass('active');
    $(this).addClass('active');
  });

  // Event handler for convert to unit buttons
  $('.convert-to-container .unit-button').click(function() {
    $('.convert-to-container .unit-button').removeClass('active');
    $(this).addClass('active');
  });

  // clear selection
  $('.clear-button').on('click', function() {
    $("#temp").val("");
    $('.unit-button').removeClass('active');
    $('#result').html('Answer');
    fromUnit = null;
    toUnit = null;
  });

  // Listen to click events on the unit buttons and update from/to units accordingly
  $(".unit-button").click(function() {
    if ($(this).parent().hasClass("convert-from-container")) {
      fromUnit = $(this).text();
    } else {
      toUnit = $(this).text();
    }
  });

  // Listen to submit events on the form and prevent the default form submission behavior
  $("#converter").submit(function(event) {
    event.preventDefault();
    
    // Get the temperature value from the input field
    var tempVal = $("#temp").val();
    var parsedTemp = parseFloat(tempVal);

    // Check if both "Convert from" and "Convert to" units are selected
    if (!fromUnit || !toUnit) {
      $('#popup').show();
      return;
    }
    
    // Convert the temperature value to the target unit
    let convertedTemp;
    if (fromUnit === toUnit) {
      convertedTemp = parsedTemp;
    }
    else if (fromUnit === "Celsius" && toUnit === "Fahrenheit") {
      convertedTemp = (parsedTemp * 9/5) + 32;
    }
    else if (fromUnit === "Celsius" && toUnit === "Kelvin") {
      convertedTemp = parsedTemp + 273.15;
    }
    else if (fromUnit === "Fahrenheit" && toUnit === "Celsius") {
      convertedTemp = (parsedTemp - 32) * 5/9;
    }
    else if (fromUnit === "Fahrenheit" && toUnit === "Kelvin") {
      convertedTemp = (parsedTemp + 459.67) * 5/9;
    }
    else if (fromUnit === "Kelvin" && toUnit === "Celsius") {
      convertedTemp = parsedTemp - 273.15;
    }
    else if (fromUnit === "Kelvin" && toUnit === "Fahrenheit") {
      convertedTemp = (parsedTemp * 9/5) - 459.67;
    }

    // Display the converted temperature value
$("#result").html(convertedTemp.toFixed(2) + " " + toUnit);

});

// Hide the popup when the close button is clicked
$('#popup .close').click(function() {
  $('#popup').hide();
});

});


