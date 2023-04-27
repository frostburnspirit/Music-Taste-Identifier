const testSections = document.querySelectorAll(".test-section");

for (let i = 0; i < testSections.length; i++) {
  const data = sectionData[i];

  let section = `
    <section class="
  
  
  `;

  const tsBar = document.createElement("div"); // Skriv ut alla ord
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

/*

För rad 3-> 21 kan du använda en for loop på testSections så här
*/

testSections.forEach((index) => {
  const data = sectionData[index];
  // Och mer kod
});

/*
Koden mellan 6 -> 9 kan man skapa elementet genom en sträng och gör det till en function
*/
