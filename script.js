const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const progressBar = document.getElementById("progress");
const progressNumber = document.getElementById("numbers");

const updateProgress = (checkCompletion = true) => {
  const totalTasks = listContainer.children.length;
  const completedTasks = listContainer.querySelectorAll(".checked").length;
  const progressPercent =
    totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);
  progressBar.style.width = totalTasks
    ? `${(completedTasks / totalTasks) * 100}%`
    : "0%";
  progressNumber.textContent = `${completedTasks} / ${totalTasks}`;
  if (progressPercent === 100 && totalTasks > 0 && checkCompletion) {
    Confetti();
  }
};

function addTask() {
  if (inputBox.value === "") {
    alert("Vui lòng nhập Task!");
  } else {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(inputBox.value));
    listContainer.appendChild(li);
    let editSpan = document.createElement("span");
    editSpan.innerHTML = "\u270E";
    editSpan.className = "edit";
    li.appendChild(editSpan);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    span.className = "close";
    li.appendChild(span);
    checkCompletion = true;
    updateProgress();
  }
  inputBox.value = "";
  saveData();
}
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      checkCompletion = true;
      saveData();
      updateProgress(true);
    } else if (
      e.target.classList.contains("close") ||
      e.target.innerHTML === "\u00d7"
    ) {
      e.target.parentElement.remove();
      saveData();
      updateProgress();
    } else if (e.target.classList.contains("edit")) {
      let li = e.target.parentElement;
      let currentText = li.childNodes[0].nodeValue;
      let newText = prompt("Chỉnh sửa task của bạn:", currentText);
      if (newText !== null && newText.trim() !== "") {
        li.childNodes[0].nodeValue = newText;
        saveData();
      }
    }
  },
  false
);
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
  updateProgress(false);
}
showTask();
const Confetti = () => {
  const count = 200,
    defaults = {
      origin: { y: 0.7 },
    };

  function fire(particleRatio, opts) {
    confetti(
      Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio),
      })
    );
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });

  fire(0.2, {
    spread: 60,
  });

  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
};
