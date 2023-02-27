// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// Current day
var today = dayjs();
// Save button
var saveBtnEl = $('.saveBtn');

// Display current day and date 
$('#currentDay').text(today.format('dddd, MMM DD hh:mmA'));

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

// Displays the local storage keys to their respective time-block textareas.
// Would like to iterate through rather than individually match.  See comments after code block for example.
$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));



// Attempting to condense the previous code block into a single function that loops through localStorage, matches the keys to the html textarea element id, and prints the key value to that textarea.
/*const displayTasks = () => {
  var description = $('.description').attr('id');
  for (let i = 0; i < localStorage.length; i++) {
    if(description == localStorage.key(i)) {
      $('.description').val(localStorage.getItem(localStorage.key(i)));
    }
  }
}*/
// Check current time against each timeblock and add conditional classes to apply associated CSS (i.e. change colors if block is in past, present, or future).
function editTimeBlock() {
  // Current hour in 24-hour format
  var currentHour = dayjs().format('HH');
  // Loop over each time-block and apply function
  $('.time-block').each(function () {
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
  });
}
// Call Function
editTimeBlock();
displayTasks();
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
