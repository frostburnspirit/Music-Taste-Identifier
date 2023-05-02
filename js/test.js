const testSections = document.querySelectorAll(".test-section");

for (let i = 0; i < testSections.length; i++) {
  const DATA = sectionData[i];

  const TEST_SECTION = `
    <div class="section-bar">
      <h2>
        ${DATA.title}
      </h2>
      <a class="section-bar-arrow fa-solid fa-angle-left"></a>
    </div>
    <div class="section-content">
      ${DATA.text}
    </div>`;

  testSections[i].insertAdjacentHTML("beforeend", TEST_SECTION);
}

for (const iterator of document.getElementsByClassName("section-bar-arrow")) {
  iterator.addEventListener("click", function (e) {
    iterator.classList.toggle("section-arrow-open");
    iterator.parentElement.nextElementSibling.classList.toggle(
      "section-content-open"
    );
  });
}
