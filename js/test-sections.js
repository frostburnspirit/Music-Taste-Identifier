let sectionData = [
  {
    title: "Intro",
    content: `
    <h1>Welcome</h1>
    <img src="images/Mimic.png" />
    <h1>bbb</h1>`,
  },
  {
    title: "Options",
    content: `
    <h1>Welcome</h1>
    <img src="images/Mimic.png" />
    <h1>bbb</h1>`,
  },
  {
    title: "Genre Sliders",
    content: `
    <div class="range-container">
      <label for="acoustic-electronic">Acoustic vs Electronic</label>
      <input type="range" min="0" max="10" id="acoustic-electronic" name="acoustic-electronic">
      <label for="major-minor">Major vs Minor</label>
      <input type="range" min="0" max="10" id="major-minor" name="major-minor">
      <label for="instrumental-acapella">Instrumental vs Acapella</label>
      <input type="range" min="0" max="10" id="instrumental-acapella" name="instrumental-acapella">
      <div class="flex-br"></div>
      <label for="pure-chaotic">Pure vs Chaotic</label>
      <input type="range" min="0" max="10" id="pure-chaotic" name="pure-chaotic">
      <label for="calm-energetic">Calm vs Energetic</label>
      <input type="range" min="0" max="10" id="calm-energetic" name="calm-energetic">
      <label for="deep-bright">Deep vs Bright</label>
      <input type="range" min="0" max="10" id="deep-bright" name="deep-bright">
    </div>`,
  },
  {
    title: "Listening 1",
    content: `
    <h3>Listen to this music..</h3>
    <div class="flex-br"></div>
    <img class="flex-center" src="images/Mimic.png" />
    <div class="flex-br"></div>
    <div class="button-container flex-center">
      <p>opinion</p>
      <input type="hidden" name="buttons-l1" id="buttons-l1" value="">
      <button onclick="select(this); nextSection(this)">button1</button>
      <button onclick="select(this); nextSection(this)">button1</button>
      <button onclick="select(this); nextSection(this)">button1</button>
    <div>
`,
  },
  {
    title: "Intro",
    content: `
    <h1>Welcome</h1>
    <img src="images/Mimic.png" />
    <h1>bbb</h1>
    <input type="submit">`,
  },
  {
    title: "Intro",
    content: `
    <h1>Welcome</h1>
    <img src="images/Mimic.png" />
    <h1>bbb</h1>`,
  },
  {
    title: "Intro",
    content: `
    <h1>Welcome</h1>
    <img src="images/Mimic.png" />
    <h1>bbb</h1>`,
  },
  {
    title: "Intro",
    content: `
    <h1>Welcome</h1>
    <img src="images/Mimic.png" />
    <h1>bbb</h1>`,
  },
  {
    title: "Intro",
    content: `
    <h1>Welcome</h1>
    <img src="images/Mimic.png" />
    <h1>bbb</h1>`,
  },
];

/*
THE TEST
1. intro
2. options
3. genre sliders (optional) (e.g acoustic vs electronic)
4. listening + rating (repeat a few times, different sections anyway?)
*/
