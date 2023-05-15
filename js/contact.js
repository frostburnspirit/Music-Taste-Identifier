let formSection = document.getElementsByTagName("section")[0];

let contactForm = `
<form id="contact-form">
    <div class="section-bar">
        <h2>Contact</h2>
    </div>
    <label for="email">Your Email Address:</label>
    <input type="email" name="email" id="email" placeholder="musictaste@spotifry.com">
    <label for="subject">Subject:</label>
    <div id="subject-container">
        <select name="subject" id="subject">
            <option value="choose">Choose a subject</option>
            <option value="feedback">Feedback</option>
            <option value="bug">Bug Report</option>
            <option value="support">Support Request</option>
            <option value="other">Other</option>
        </select>
    </div>
    <label for="mail-content">Your Message:</label>
    <textarea id="mail-content" name="mail-content" rows="10" cols="50" placeholder="Write your message here..."></textarea>
    <label for="send">Send Mail</label>
    <input type="submit" name="send" id="send" value="Send">
 </form>`;

formSection.insertAdjacentHTML("beforeend", contactForm);

document.getElementById("subject").addEventListener("change", function () {
  if (this.value === "other") {
    editHtml(
      "subject",
      '<input type="text" name="other-subject" id="other-subject">',
      "after"
    );
  } else {
    editHtml("other-subject", "", "delete");
  }
});
