// ? Display the current day at the top of the calendar when a user opens the planner.
let currentDate = moment().format("dddd, Do [of] MMMM");
let dateDisplay = $("#currentDay");

// * Display current date
dateDisplay.append(currentDate);

// ? Present timeblocks for standard business hours when the user scrolls down.
$(function () {
  for (let i = 9; i < 18; i++) {
    let mainContainer = $(".container");
    let hoursRow = $("<div>");
    let hour = $("<p>");
    let currentHour = moment().format("H");
    let textContainer = $("<textarea>");
    let saveButton = $("<button>");
    let saveIcon = $("<i>");

    // * Classes
    hoursRow.addClass("time-block row");
    hour.addClass("hour col-1");
    textContainer.addClass("textarea col-10");
    saveIcon.addClass("fa-solid fa-floppy-disk");
    saveButton.addClass("saveBtn col-1");

    // * Create 'row' container
    mainContainer.append(hoursRow);

    // * Add hours
    if (i < 13) {
      hour.text(i + "AM");
    } else {
      hour.text(i - 12 + "PM");
    }
    hoursRow.append(hour);

    // * Add input textarea
    hoursRow.append(textContainer);

    // * Add button
    saveButton.append(saveIcon);
    hoursRow.append(saveButton);

    // ? Color-code each timeblock based on past, present, and future when the timeblock is viewed.
    if (i < currentHour) {
      textContainer.addClass("past");
    } else if (i == currentHour) {
      textContainer.addClass("present");
    } else {
      textContainer.addClass("future");
    }
  }
});

// ? Allow a user to enter an event when they click a timeblock.

// ? Save the event in local storage when the save button is clicked in that timeblock.

// ? Persist events between refreshes of a page.
