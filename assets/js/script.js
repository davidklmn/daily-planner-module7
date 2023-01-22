// ? Display the current day at the top of the calendar when a user opens the planner.
let currentDate = moment().format("dddd, Do [of] MMMM");
let dateDisplay = $("#currentDay");
dateDisplay.append(currentDate);

// ? Present timeblocks for standard business hours when the user scrolls down.
let mainContainer = $(".container");
let hoursRow = $("<div>");
let hour = $("<p>");
let textContainer = $("<textarea>");
let saveButton = $("<button>");
let saveIcon = $("<i>");

// * Create 'row' container
hoursRow.addClass("time-block row");
mainContainer.append(hoursRow);

// * Add hours
hour.addClass("hour col-1");
hour.text("1pm");
hoursRow.append(hour);

// * Add input textarea
textContainer.addClass("textarea col-10");
hoursRow.append(textContainer);

// * Add button
saveIcon.addClass("fa-solid fa-floppy-disk");
saveButton.append(saveIcon);
saveButton.addClass("saveBtn col-1");
hoursRow.append(saveButton);

// ? Color-code each timeblock based on past, present, and future when the timeblock is viewed.

// ? Allow a user to enter an event when they click a timeblock.

// ? Save the event in local storage when the save button is clicked in that timeblock.

// ? Persist events between refreshes of a page.
