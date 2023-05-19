let sectionData = [
  {
    title: "Intro",
    content: `
    <article>
      <h3>Welcome to Spotifry's Music Taste Identifier</h3>
      <p>Here you will be able to find out what kinds of music you
      really like (or rather, would be, if the functionality
        if the site was actually completed unlike the one 
        of a school assignment).
      </p>
    </article>
    <img src="images/piano.jpg" alt="a piano" />
    <div class="flex-br"></div>
    <button onclick="changeSection(this, 'next'); return false;">continue</button>`,
  },
  {
    title: "Options",
    content: `
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Ut convallis egestas tortor, eget condimentum ipsum fringilla sed.
    Proin mollis et urna tincidunt ultricies. Proin id lorem euismod,
    dapibus lacus non, facilisis urna. Nullam dignissim aliquet urna,
    id gravida ligula interdum suscipit.
    </p>
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
    <article>
      <h3>Listen to this music..</h3>
      <p>(hint: there is no music)</p>
    </article>
    <img src="images/piano.jpg" alt="a piano" />
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
    <article>
      <h3>The End</h3>
      <p>I hoped you enjoyed this.. well.. incomplete mess..</p>
    </article>
    <table>
      <thead>
        <tr>
          <th>---------</th>
          <th>---------</th>
          <th>---------</th>
          <th>---------</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>I was</td>
          <td>required</td>
          <td>to put a</td>
          <td>table here</td>
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
