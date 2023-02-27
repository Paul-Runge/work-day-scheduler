// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//
//

// Current day
var today = dayjs();
// Reference timeblock elements
var timeBlockContainer = $('#time-blocks');


//
var saveBtnEl = $('.saveBtn');
// TODO: Add code to display the current date in the header of the page.

// Display current day and date 
$('#currentDay').text(today.format('dddd, MMM DD hh:mmA'));

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
// Event listener locally stores user input from hour-block textarea when the associated saveBtn is clicked.  If textarea is empty, nothing is saved.
$(saveBtnEl).on('click', function () {
  //why does a previously set variable work in place of .description and att('id)?

  // Textarea value for this hour block
  var task = $(this).siblings('.description').val();
  // Id for this hour block
  var hour = $(this).parent().attr('id');

  // Save key/value pair to local storage
  localStorage.setItem(hour, task);
})

// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
// Check current time against each timeblock and add conditional classes to apply associated CSS (i.e. change colors if block is in past, present, or future).
function editTimeBlock () {
  // Current hour in 24-hour format
  var currentHour = dayjs().format('HH');
  // Loop over each time-block and apply function
  $('.time-block').each(function() {
    // Target time-block by id and get only the integer of that id
    var timeBlockId = parseInt($(this).attr('id').split("hour-")[1]);
    // Add classes based on conditionals
    if (timeBlockId < currentHour) {
      $(this).addClass('past');
    }
    else if (timeBlockId == currentHour) {
      $(this).addClass('present');
    }
    else {
      $(this).addClass('future');
    }
    //console.log(timeBlockId);
    //console.log(currentHour);
    //console.log('--------');
  })
};
// Call Function
editTimeBlock();
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?