let sectionData = [
  {
    title: "Intro",
    content: `
    <h1>Welcome</h1>
    <img src="images/Mimic.png" />
    <h2>bbb</h2>
    <div class="flex-br"></div>
    <button onclick="changeSection(this, 'next'); return false;">continue</button>`,
  },
  {
    title: "Options",
    content: `
    <h1>Welcome</h1>
    <img src="images/Mimic.png" />
    <h1>bbb</h1>
    <div class="flex-br"></div>
    <button onclick="changeSection(this, 'previous'); return false;">previous</button>
    <button onclick="changeSection(this, 'next'); return false;">continue</button>`,
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
    </div>
    <button onclick="changeSection(this, 'previous'); return false;">previous</button>
    <button onclick="changeSection(this, 'next'); return false;">continue</button>`,
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
      <button onclick="changeSection(this, 'previous'); return false;">previous</button>
      <input type="hidden" name="buttons-l1" id="buttons-l1" value="">
      <button onclick="select(this); changeSection(this, 'next'); return false;" id="button1">button1</button>
      <button onclick="select(this); changeSection(this, 'next'); return false;" id="button2">button2</button>
      <button onclick="select(this); changeSection(this, 'next'); return false;" id="button3">button3</button>
    <div>
`,
  },
  {
    title: "End",
    content: `
    <h1>Welcome</h1>
    <img src="images/Mimic.png" />
    <h1>bbb</h1>
    <div class="flex-br"></div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Name</th>
          <th>Name</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Name</td>
          <td>Name</td>
          <td>Name</td>
        </tr>
        <tr>
          <td>Name</td>
          <td>Name</td>
          <td>Name</td>
          <td>Name</td>
        </tr>
        <tr>
          <td>Name</td>
          <td>Name</td>
          <td>Name</td>
          <td>Name</td>
        </tr>
        <tr>
          <td>Name</td>
          <td>Name</td>
          <td>Name</td>
          <td>Name</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>aa</td>
          <td>aa</td>
          <td>aa</td>
          <td>aa</td>
        </tr>
      </tfoot>
    </table>
    <div class="flex-br"></div>
    <button onclick="changeSection(this, 'previous'); return false;">previous</button>
    <input type="submit">`,
  },
];

/*
THE TEST
1. intro
2. options
3. genre sliders (optional) (e.g acoustic vs electronic)
4. listening + rating (repeat a few times, different sections anyway?)
*/
