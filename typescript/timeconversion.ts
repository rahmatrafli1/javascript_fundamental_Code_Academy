const timeConversion = (str: string) => {
  try {
    const ampm = str.substring(8);
    let hourTime = str.substring(0, 2);
    let newstr = "";
    for (let i = 0; i < str.length; i++) {
      if (ampm === "AM") {
        if (hourTime === "12") {
          if (i === 0 || i === 1) {
            newstr += "0";
          } else {
            newstr += str[i];
          }
        } else {
          newstr += str[i];
        }
      }

      if (ampm === "PM") {
        let newHour = +hourTime;
        if (hourTime !== "12") {
          newHour = +hourTime + 12;
        }
        if (i === 1) {
          newstr += newHour;
        } else if (i > 1) {
          newstr += str[i];
        }
      }
    }
    console.log(newstr.substring(0, 8));
  } catch (error: any) {
    console.log(error);
  }
};
timeConversion("11:07:05AM");
