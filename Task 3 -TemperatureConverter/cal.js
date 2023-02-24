$(document).ready(function() {

// Change the label color of the selected radio button on page load
$(".radio-group input[type='radio']:checked").parent().addClass("selected");

// Listen for changes to the radio buttons
$(".radio-group input[type='radio']").on("change", function() {
  // Remove the "selected" class from all labels
  $(this).parents(".radio-group").find("label").removeClass("selected");
  
  // Add the "selected" class to the label of the selected radio button
  $(this).parent().addClass("selected");
});


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
  $('input[name="unit-from"]').click(function() {
    fromUnit = $('input[name="unit-from"]:checked').val();
    
  });
  
  // Event handler for convert to unit buttons
  $('input[name="unit-to"]').click(function() {
    toUnit = $('input[name="unit-to"]:checked').val();
  });


  // clear selection
  $('.clear-button').on('click', function() {
    $("#temp").val("");
    $('#result').html('Answer');
    $("input[type='radio']").prop('checked', false);

  });

  // Listen to submit events on the form and prevent the default form submission behavior
  $("#converter").submit(function(event) {
    event.preventDefault();
      
    // Get the temperature value from the input field
    var tempVal = $("#temp").val();
    var parsedTemp = parseFloat(tempVal);

    // Get the selected radio buttons
    var fromUnit = $("input[name='unit-from']:checked").val();
    var toUnit = $("input[name='unit-to']:checked").val();

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
    else if (fromUnit === "celsius" && toUnit === "fahrenheit") {
      convertedTemp = (parsedTemp * 9/5) + 32;
    }
    else if (fromUnit === "celsius" && toUnit === "kelvin") {
      convertedTemp = parsedTemp + 273.15;
    }
    else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
      convertedTemp = (parsedTemp - 32) * 5/9;
    }
    else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
      convertedTemp = (parsedTemp + 459.67) * 5/9;
    }
    else if (fromUnit === "kelvin" && toUnit === "celsius") {
      convertedTemp = parsedTemp - 273.15;
    }
    else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
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


