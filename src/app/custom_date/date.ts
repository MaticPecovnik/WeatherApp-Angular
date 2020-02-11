export default class CustomDate {
  constructor() {}

  getFullDateArray(numOfDates: Number) {
    let dateArray = [];

    for (let i = 0; i < numOfDates; i++) {
      var today = new Date();
      var nextDay = new Date(today);
      nextDay.setDate(today.getDate() + i);
      var dd = String(nextDay.getDate()).padStart(2, "0");
      var mm = String(nextDay.getMonth() + 1).padStart(2, "0"); //January is 0!
      var yyyy = nextDay.getFullYear();

      dateArray.push(yyyy + "-" + mm + "-" + dd);
    }
    return dateArray;
  }

  getStandardDate(date: String) {
    let standDate;
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    const dateSplit = date.split("-");

    switch (dateSplit[2]) {
      case "1":
        standDate =
          dateSplit[2] +
          "st of " +
          months[Number(dateSplit[1]) - 1] +
          ", " +
          dateSplit[0];
        break;
      case "2":
        standDate =
          dateSplit[2] +
          "nd of " +
          months[Number(dateSplit[1]) - 1] +
          ", " +
          dateSplit[0];
        break;
      case "3":
        standDate =
          dateSplit[2] +
          "rd of " +
          months[Number(dateSplit[1]) - 1] +
          ", " +
          dateSplit[0];
        break;
      default:
        standDate =
          dateSplit[2] +
          "th of " +
          months[Number(dateSplit[1]) - 1] +
          ", " +
          dateSplit[0];
        break;
    }
    return standDate;
  }
}
