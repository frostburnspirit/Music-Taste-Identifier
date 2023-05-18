const sectionContainer = document.getElementById("the-test");

sectionContainer.style.right = sectionData.length * 100 + "vw";

function nextSection(sectionChild) {
  if (LAYOUT == "phone") {
    sectionContainer.getElementsByClassName("test-filler")[0].remove();
  } else if (LAYOUT == "regular") {
    let currentElement = sectionChild;
    for (let i = 0; i < 100; i++) {
      if (currentElement.classList.contains("test-section")) {
        currentElement
          .getElementsByClassName("section-content")[0]
          .classList.remove("section-content-open");
        currentElement.nextElementSibling
          .getElementsByClassName("section-content")[0]
          .classList.add("section-content-open");

        return;
      } else {
        currentElement = currentElement.parentElement;
      }
    }
    throw new Error("No test section found");
  }
}

function select(button) {
  button.parentElement.querySelectorAll("input[type=hidden]")[0].value =
    button.id;
}

for (let i = 0; i < sectionData.length; i++) {
  const DATA = sectionData[i];

  const TEST_SECTION = `
    <section id="section-${i + 1}" class="test-section">
      <div class="section-bar">
        <h3>
          ${DATA.title}
        </h3>
        <div class="section-bar-arrow fa-solid fa-angle-left"></div>
      </div>
      <div class="section-content">
        ${DATA.content}
      </div>
    </section>`;
  sectionContainer.insertAdjacentHTML("beforeend", TEST_SECTION);
}

function updateLayout2() {
  if (LAYOUT === "phone") {
    for (let i = 0; i < sectionData.length; i++) {
      const FILLER_DIV = `
      <div class="test-filler">
      </div>`;
      sectionContainer.insertAdjacentHTML("afterbegin", FILLER_DIV);
    }
    [...sectionContainer.getElementsByClassName("section-content")].forEach(
      (element) => {
        if (!element.classList.contains("section-content-open")) {
          element.classList.add("section-content-open");
        }
      }
    );
  } else if (LAYOUT === "regular") {
    [...sectionContainer.getElementsByClassName("test-filler")].forEach(
      (element) => {
        element.remove();
      }
    );
  }
}

for (const iterator of document.getElementsByClassName("section-bar")) {
  iterator.addEventListener("click", function (e) {
    if (LAYOUT === "regular") {
      iterator
        .getElementsByClassName("section-bar-arrow")[0]
        .classList.toggle("section-arrow-open");
      iterator.nextElementSibling.classList.toggle("section-content-open");
    }
  });
}
