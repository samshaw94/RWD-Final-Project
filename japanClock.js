

//Stores 13 hours as milliseconds. JavaScript measures time in milliseconds: 13 hours × 60 minutes × 60 seconds × 1,000 milliseconds.
   const THIRTEEN_HOURS_MS = 13 * 60 * 60 * 1000;
//Finds the HTML button whose id is "toggleButton"
    const button = document.getElementById("toggleButton");
    //Finds the HTML element containing both clocks
    const clocks = document.getElementById("clocks");
    //Finds the element where the local time will appear
    const localTime = document.getElementById("localTime");
    //Finds the element where the time 13 hours ahead will appear
    const countryTime = document.getElementById("countryTime");

    //starts a function that gets the current time and calculates the other time, and displays both
    function updateClocks() {
      //Creates a Date object representing the current date and time on the persons device
      const now = new Date();
      //Gets the current time in milliseconds, adds 13 hours, and creates a new Date object for that time
      const thirteenHoursAhead = new Date(now.getTime() + THIRTEEN_HOURS_MS);
      //this degines a function that can turn the date object 
      const formatTime = (date) =>
      //turns date into readable time   
        date.toLocaleTimeString([], {
          //formats the time
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit"
        });
      //Displays the formatted current time in the local-time element
      localTime.textContent = formatTime(now);
      //Displays the formatted time 13 hours ahead in the other element
      countryTime.textContent = formatTime(thirteenHoursAhead);
    }
    //tells it to run the code when the button is clicked
    button.addEventListener("click", () => {
      //toggle time visibility when you click button
      clocks.hidden = !clocks.hidden;

      //change button label...I think...yesss it worked!
      button.textContent = clocks.hidden ? "Show clocks" : "Hide clocks";
    });
    //run function
    updateClocks();
    //set to update clocks every 1000 milliseconds - can change later to longer??
    setInterval(updateClocks, 1000);