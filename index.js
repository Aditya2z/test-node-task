import moment from "moment";

console.log(
  moment().format("MMMM Do YYYY, h:mm:ss a"), // May 4th 2023, 2:17:29 pm
  moment().format("dddd"), // Thursday
  moment().format("MMM Do YY"), // May 4th 23
  moment().format("YYYY [escaped] YYYY"), // 2023 escaped 2023
  moment().format(),
);

console.log(
  moment().format("MMMM Do YYYY, h:mm:ss a"), // May 4th 2023, 2:17:29 pm
  moment().format("dddd"), // Thursday
  moment().format("MMM Do YY"), // May 4th 23
  moment().format("YYYY [escaped] YYYY"), // 2023 escaped 2023
  moment().format(),
);
