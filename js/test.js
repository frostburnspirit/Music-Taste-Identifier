const sectionContainer = document.getElementById("the-test");

function nextSection(sectionChild) {
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

for (const iterator of document.getElementsByClassName("section-bar")) {
  iterator.addEventListener("click", function (e) {
    iterator
      .getElementsByClassName("section-bar-arrow")[0]
      .classList.toggle("section-arrow-open");
    iterator.nextElementSibling.classList.toggle("section-content-open");
  });
}
