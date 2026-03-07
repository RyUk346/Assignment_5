const allBtn = document.getElementById("allBtn");
const openBtn = document.getElementById("openBtn");
const closedBtn = document.getElementById("closedBtn");
const cardContainer = document.getElementById("cardContainer");
const labelStyles = {
  bug: {
    color: "bg-[#FEECEC] border-[#FECACA] text-[#EF4444]",
    icon: "assets/BugDroid.png",
  },
  "help wanted": {
    color: "bg-[#FFF8DB] border-[#FDE68A] text-[#D97706]",
    icon: "assets/Lifebuoy.png",
  },
  enhancement: {
    color: "bg-[#DEFCE8] border-[#BBF7D0] text-[#00A96E]",
    icon: "assets/Sparkle.png",
  },
  "good first issue": {
    color: "bg-[#b1faca] border-[#8bb59a] text-[#25a14e]",
    icon: "assets/Sparkle.png",
  },
  documentation: {
    color: "bg-[#c3f6f7] border-[#71bebf] text-[#0e9496]",
    icon: "assets/document.svg",
  },
};

const createElements = (arr) => {
  const htmlElements = arr.map((el) => {
    const style = labelStyles[el] || {
      color: "bg-[#FEECEC] border-[#FECACA] text-[#EF4444]",
      icon: "fa-solid fa-bug",
    };
    return `<div
                class="${style.color} h-6 text-center flex rounded-2xl border "
              >
                <h1
                  class="text-xs flex justify-center items-center gap-1 px-3 whitespace-nowrap"
                >
                  <img src="${style.icon}" alt="">${el.toUpperCase()}
                </h1>
              </div>`;
  });
  return htmlElements.join(" ");
};

async function loadIssues() {
  const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
  const res = await fetch(url);
  const data = await res.json();
  displayIssues(data.data);
}
Array.to;

displayIssues = (issues) => {
  issues.forEach((issue) => {
    const card = document.createElement("div");
    card.className = "bg-white rounded-lg shadow-sm";
    card.innerHTML = `
        <div class="">
          <div class="space-y-3 p-4">
            <div class="flex justify-between">
              <img src="assets/Open-Status.png" alt="" />
              <div class="bg-[#FEECEC] w-20 h-6 text-center rounded-2xl">
                <h1 class="text-[#EF4444]">${issue.priority.toUpperCase()}</h1>
              </div>
            </div>
            <div class="space-y-2">
              <h1 class="text-sm font-semibold">
                ${issue.title}
              </h1>
              <p class="line-clamp-2 text-xs">
                ${issue.description.split(" ").slice(0, 9).join(" ") + "..."}
              </p>
            </div>
            <div>
              <div
                class="flex gap-2 flex-wrap"
              >
                ${createElements(issue.labels)}
                </div>
              </div>
            </div>
          </div>
          <div class="text-[#64748B] text-xs p-4 border-t border-[#E4E4E7]">
            <h1>${issue.author}</h1>
            <h1>${issue.updatedAt}</h1>
          </div>
        </div>
    `;
    cardContainer.appendChild(card);
  });
};
loadIssues();
