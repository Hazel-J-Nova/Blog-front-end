import dateTime from "date-and-time";

const getAmountofTime = (date1, date2) => {
  const numberOfDays = dateTime.subtract(date1, date2).toDays();
  if (numberOfDays < 1) {
    return ["Today", ""];
  }

  if (numberOfDays < 30) {
    return [Math.ceil(numberOfDays), "Days Ago"];
  }
  if (numberOfDays <= 365 && numberOfDays >= 30) {
    return [numberOfDays % 30, "Months Ago"];
  }
  return [numberOfDays % 365, "Years Ago"];
};

export default getAmountofTime;
