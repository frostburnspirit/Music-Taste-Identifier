const testSections = document.querySelectorAll(".test-section");
for (let i = 0; i < testSections.length; i++) {
  const data = sectionData[i];
  const tsBar = document.createElement("div");
  const tsBarTitle = document.createElement("h2");
  const tsBarButton = document.createElement("button");
  const tsContent = document.createElement("div");

  tsBar.classList.add("section-bar");
  tsBarTitle.innerHTML = data.title;
  tsBarButton.type = "button";
  tsBar.append(tsBarTitle, tsBarButton);

  tsContent.classList.add("section-content");
  tsContent.innerHTML = data.text;
  tsContent.style.color = "white";

  testSections[i].append(tsBar, tsContent);
}
