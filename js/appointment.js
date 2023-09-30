const calendarBody = document.getElementById("calendarBody");
const currentMonthElement = document.getElementById("currentMonth");
const prevMonthButton = document.getElementById("prevMonth");
const nextMonthButton = document.getElementById("nextMonth");

const today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

function updateCalendar() {
  calendarBody.innerHTML = "";
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();
  const startingDay = firstDayOfMonth.getDay();

  currentMonthElement.textContent = `${new Intl.DateTimeFormat("en-US", {
    month: "long",
  }).format(firstDayOfMonth)} ${currentYear}`;

  for (let i = 0; i < startingDay; i++) {
    const dayElement = document.createElement("div");
    dayElement.className = "day";
    calendarBody.appendChild(dayElement);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const dayElement = document.createElement("div");

    dayElement.className = "day";
    dayElement.textContent = i;

    dayElement.addEventListener("click", () => {
      // Handle date selection here
      const text_append = document.getElementById("text_append");
      // Create a <p> element

      // Set the text content of the <p> element

      //   current Date Here
      text_append.textContent = ` ${i}/${currentMonth + 1}/${currentYear}`;

      // Get the container element where you want to append the <p> element

      console.log(` ${i}/${currentMonth + 1}/${currentYear}`);

      //   current Date Here

      // You can replace the above console.log with your own logic to handle the

      //   selected date.
      // For example, you can highlight the selected date by adding a CSS class.
      // Remove the highlight from previously selected date.
      const selectedDate = document.querySelector(".day.selected");

      if (selectedDate) {
        selectedDate.classList.remove("selected");
      }
      // Add the highlight to the clicked date.
      dayElement.classList.add("selected");
    });

    calendarBody.appendChild(dayElement);
  }
}

prevMonthButton.addEventListener("click", () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  updateCalendar();
});

nextMonthButton.addEventListener("click", () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  updateCalendar();
});

updateCalendar();
