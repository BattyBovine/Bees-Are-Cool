//revision 1.4

//REPORT ANY ISSUES IN THE COMMENTS

//for use on https://ut-sao-special-prod.web.app/sex_basis_complaint2.html
//open the console by either F12 or ctrl alt i (or cmd opt i on macos). you can also right click and select "inspect"
//make sure "console" is selected from the top and paste all of this into the text box near the bottom (make sure to edit the "copypasta" variable on line 17 and the "repeat" variable on line 21)
//everything is commented so you can make sure it doesn't do anything malicious
//I still don't recommend running random code from strangers (me included) unless you trust them
//so yeah thank you for trusting me 🙏
//also you should probably do this on a vpn or something, just to be safe

//paste your copypasta here
//here's the bee movie script (close to 50k characters total): https://gist.githubusercontent.com/MattIPv4/045239bc27b16b2bcf7a3a9a4648c08a/raw/2411e31293a35f3e565f61e7490a806d4720ea7e/bee%2520movie%2520script
//tip for gen alpha: use ctrl A (or cmd A on mac) to select all text easily
//paste the contents of that link (or your preferred copypasta) in between the ``s
const copypasta = ``;
//might make that an xmp request or whatever but we'll see

//number of times to repeat the script
const repeat = 10;

//css edits that will make your scrolling experience better
styles = document.createElement("style");
styles.innerHTML = `
  /*clamps text boxes*/
  .ql-editor {
    max-height: 200px;
  }
  /*fixes the word wrap*/
  #form-row > form {
    max-width: 100%;
  }
`;
document.head.appendChild(styles);

//chooses random "school"
const selectschool = document.getElementById("00N1K00000fGn13");
const randomschool = selectschool.children[Math.floor(Math.random()*selectschool.children.length)].value;
const selectedschoolbutton = document.querySelector(`[data-id="00N1K00000fGn13"] .filter-option-inner-inner`);
selectschool.value = randomschool;
selectschool.title = randomschool;
selectedschoolbutton.title = randomschool;
selectedschoolbutton.innerHTML = randomschool;

//list of boxes to check based on their ID
//might make this more customizable for non-programmers in the future
const checkids = [
  "cb1",
  "cb8",
  "00N1K00000fXXY0",
  "may-not-disclose-to-third-party",
  "check_certify",
  "check_certify_2"
];
//checks them
for (const checkbox of checkids)
  document.getElementById(checkbox).checked = true;
//unchecks the rest
const allSelects = Array.from(document.querySelectorAll(`input[type="checkbox"], input[type="radio"]`));
for (const checkbox of allSelects)
  if (!checkids.includes(checkbox.id))
    checkbox.checked = false;

//sets the input boxes to the copypastas (repeating for the number specified)
const editables = Array.from(document.querySelectorAll(`[contenteditable="true"]`));
const editables2 = Array.from(document.querySelectorAll(`:not(.ql-hidden) > input[type="text"]`));
for (const input of editables)
  input.innerHTML = `<p>${copypasta.repeat(repeat)}</p>`;
for (const input of editables2)
  input.value = copypasta.repeat(repeat);

//scrolls to bottom of the page (to make it easier to just click the captcha)
//commented out for reasons you will read below
//window.scrollTo(0, document.body.scrollHeight);

//uncomment if you want it to auto-click the captcha. will most likely make you do the infamous click the boxes test so I don't recommend it
//UPDATE: this gets blocked anyways cuz of cors so i HIGHLY recommend not using it. keeping it for tech nerds to see how you would otherwise do it
//document.querySelector(`iframe[title="reCAPTCHA"]`).contentWindow.document.querySelector(".rc-anchor-content").click();

//LMAOOOOOO YOU CAN JUST ENABLE THE BUTTON AND YOU CAN SKIP THE CAPTCHA
const submitbutton = document.querySelector("#btn-submit-complaint2");
submitbutton.disabled = null;
//hiding the captcha since you actually don't need it now
document.querySelector(`.g-recaptcha`).style.display = "none";

//comment out if you want a chance to read everything and then manually submitting
submitbutton.click();

//prevents the console output value from being whatever your copypasta was lmfao
console.log("real");