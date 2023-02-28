// Current day
var today = dayjs();
// Save button
var saveBtnEl = $('.saveBtn');

// Display current day and date 
$('#currentDay').text(today.format('dddd, MMM DD'));

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

// Displays the local storage items to their respective time-block textareas.
$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));



// Would like to iterate through rather than individually match.
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
    // Add CSS classes based on conditionals
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