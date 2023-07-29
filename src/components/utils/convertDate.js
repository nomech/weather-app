

function convertDate(date) {
    const inputDate = date;
    const dateParts = inputDate.split("-"); // Split the date string into parts

    // Create a new Date object with the given parts
    const formattedDate = new Date(
      dateParts[0],
      parseInt(dateParts[1]) - 1,
      dateParts[2]
    );

    // Extract the day and month from the formattedDate
    const day = formattedDate.getDate();
    const month = formattedDate.getMonth() + 1;

    // Create the desired format "dd.mm"
    const formattedDateString = `${day.toString().padStart(2, "0")}.${month
      .toString()
      .padStart(2, "0")}`;

    return formattedDateString;
  }

function getDay(date){
  
const inputDate =  date 
const dateParts = inputDate.split("-");
const formattedDate = new Date(dateParts[0], parseInt(dateParts[1]) - 1, dateParts[2]);

// Get the day of the week (0-6)
const dayOfWeek = formattedDate.getDay();

// Define an array of weekday names
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Get the weekday name based on the dayOfWeek
const weekdayName = weekdays[dayOfWeek];

return(weekdayName); // Output: "Wednesday"
}


export { convertDate, getDay };

  