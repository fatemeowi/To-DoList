document.addEventListener("DOMContentLoaded", function () {

  const buttons = document.querySelectorAll(".add-task-btn");

  const todayPaper = document.querySelector(".today-paper");
  const tomorrowPaper = document.querySelector(".tomorrow-paper");
  const importantPaper = document.querySelector(".important-paper");

  function createTask(type) {

    const task = document.createElement("div");
    task.classList.add("task");

    if (type === "important") {

      const input = document.createElement("input");

      input.type = "text";
      input.placeholder = "Write your note . . . ˙ᵕ˙✦";

      task.appendChild(input);

    } else {

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";

      const input = document.createElement("input");

      input.type = "text";
      input.placeholder = "Write your task . . . ˙ᵕ˙✦";

      checkbox.addEventListener("change", function () {

        if (checkbox.checked) {
          task.classList.add("done");
        } else {
          task.classList.remove("done");
        }

        updateTracker();

      });

      task.appendChild(checkbox);
      task.appendChild(input);
    }

    return task;
  }

  buttons.forEach(btn => {

    btn.addEventListener("click", function () {

      const type = btn.dataset.type;

      const task = createTask(type);

      if (type === "today") {
        todayPaper.appendChild(task);
      }

      if (type === "tomorrow") {
        tomorrowPaper.appendChild(task);
      }

      if (type === "important") {
        importantPaper.appendChild(task);
      }

      updateTracker();

    });

  });

  function updateTracker() {

    const tasks =
      document.querySelectorAll(".today-paper .task");

    let total = tasks.length;
    let done = 0;

    tasks.forEach(task => {

      if (task.classList.contains("done")) {
        done++;
      }

    });

    const percent =
      total === 0
        ? 0
        : (done / total) * 100;

    const bar = document.querySelector(".bar");
    const barText = document.querySelector(".bar-text");
    const stats = document.querySelector(".tracker-stats");

    bar.style.width = percent + "%";
    barText.textContent = `${Math.round(percent)}%`;
    stats.textContent = `${done} / ${total} tasks`;

  }

  updateTracker();

});