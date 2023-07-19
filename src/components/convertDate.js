

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



  export { convertDate };