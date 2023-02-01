data = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 0,
        previous: 0,
      },
      weekly: {
        current: 0,
        previous: 0,
      },
      monthly: {
        current: 0,
        previous: 0,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 2,
        previous: 3,
      },
      weekly: {
        current: 12,
        previous: 21,
      },
      monthly: {
        current: 79,
        previous: 90,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 2,
        previous: 5,
      },
      weekly: {
        current: 7,
        previous: 4,
      },
      monthly: {
        current: 19,
        previous: 35,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

const buttons = document.querySelectorAll(".time-option");

const activateClickedButton = (button) => {
  buttons.forEach((b) => b.classList.remove("active"));
  button.classList.add("active");
};

const clearActivities = () => {
  const activities = document.querySelectorAll(".activity-tracker");
  activities.forEach((activity) => activity.remove());
};

const renderCards = (clickedOption) => {
  clearActivities();
  const card = document.querySelector('div.card');
  const calcTimeframe = (option) => {
    if (option === "daily") {
      return "Yesterday";
    }

    if (option === "weekly") {
      return "Last Week";
    }

    if (option === "monthly") {
      return "Last Month";
    }
  };

  data.forEach((activity) => {
    const title = activity.title;
    const activityClass = title.toLowerCase().replace(" ", "-");
    const timeframe = activity.timeframes[clickedOption];
    const previousTimeframe = calcTimeframe(clickedOption);
    const div = document.createElement("div");
    div.classList.add("activity-tracker", activityClass);
    const strToInject = `
        <div class="background">
          <img src="./images/icon-${activityClass}.svg" alt="" />
        </div>
        <div class="activity-info">
          <header class="activity-header">
            <h2 class="activity-name">${title}</h2>
            <div width="21" height="5" class="activity-option">
              <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                fill="#BBC0FF" fill-rule="evenodd"></path>
              </svg>
            </div>
          </header>
          <div class="activity-time">
            <h3 class="activity-current_time">${timeframe.current}hrs</h3>
            <div class="activity-previous_time">
              <p class="time-window">${previousTimeframe}</p>
              <p>&nbsp-&nbsp</p>
              <p class="time">${timeframe.previous}hrs</p>
            </div>
          </div>
        </div>
        `;
    div.innerHTML = strToInject;
    card.append(div);
  });
};
buttons.forEach((button) => {
  const clickedOption = button.dataset.option;
  button.addEventListener("click", () => {
    activateClickedButton(button);
    renderCards(clickedOption);
  });
});
