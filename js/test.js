const sectionContainer = document.getElementById("the-test");

function changeSection(sectionChild, direction) {
  if (LAYOUT === "phone") {
    if (direction === "next") {
      sectionContainer.getElementsByClassName("test-filler")[0].remove();
    } else {
      sectionContainer.insertAdjacentHTML(
        "afterbegin",
        `<div class="test-filler"></div>`
      );
    }
  } else if (LAYOUT === "regular") {
    let currentElement = sectionChild;
    for (let i = 0; i < 100; i++) {
      if (currentElement.classList.contains("test-section")) {
        currentElement
          .getElementsByClassName("section-content")[0]
          .classList.remove("content-open");
        if (direction === "next") {
          currentElement.nextElementSibling
            .getElementsByClassName("section-content")[0]
            .classList.add("content-open");
        } else {
          currentElement.previousElementSibling
            .getElementsByClassName("section-content")[0]
            .classList.add("content-open");
        }
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
      </div>
      <div class="section-content">
        ${DATA.content}
      </div>
    </section>`;
  sectionContainer.insertAdjacentHTML("beforeend", TEST_SECTION);
}

function updateLayout2() {
  if (LAYOUT === "phone") {
    sectionContainer.style.right = sectionData.length * 100 + "vw";
    for (let i = 0; i < sectionData.length; i++) {
      const FILLER_DIV = `
      <div class="test-filler">
      </div>`;
      sectionContainer.insertAdjacentHTML("afterbegin", FILLER_DIV);
    }
    [...sectionContainer.getElementsByClassName("section-content")].forEach(
      (element) => {
        if (!element.classList.contains("content-open")) {
          element.classList.add("content-open");
        }
      }
    );
    [...sectionContainer.getElementsByClassName("section-bar-arrow")].forEach(
      (element) => element.remove()
    );
  } else if (LAYOUT === "regular") {
    sectionContainer.style.right = 0;
    [...sectionContainer.getElementsByClassName("test-filler")].forEach(
      (element) => element.remove()
    );
    [...sectionContainer.getElementsByClassName("content-open")].forEach(
      (element) => {
        element.classList.remove("content-open");
      }
    );
    document
      .getElementById("section-1")
      .getElementsByClassName("section-content")[0]
      .classList.add("content-open");
    [...sectionContainer.getElementsByClassName("section-bar")].forEach(
      (element) =>
        element.insertAdjacentHTML(
          "beforeend",
          `<div class="section-bar-arrow fa-solid fa-angle-left">
          </div>`
        )
    );
    document
      .getElementById("section-1")
      .getElementsByClassName("section-bar")[0]
      .getElementsByClassName("section-bar-arrow")[0]
      .classList.add("rotate");
  }
}

for (const iterator of document.getElementsByClassName("section-bar")) {
  iterator.addEventListener("click", function (e) {
    if (LAYOUT === "regular") {
      iterator
        .getElementsByClassName("section-bar-arrow")[0]
        .classList.toggle("rotate");
      iterator.nextElementSibling.classList.toggle("content-open");
    }
  });
}
