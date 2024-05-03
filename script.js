//revision 1.6.2

//REPORT ISSUES IN https://github.com/SpiritAxolotl/Bees-Are-Cool/issues

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
let copypastaurl = "https://gist.githubusercontent.com/MattIPv4/045239bc27b16b2bcf7a3a9a4648c08a/raw/2411e31293a35f3e565f61e7490a806d4720ea7e/bee%2520movie%2520script";
let copypasta = ``;
let pastaRetrieved = false;
fetch(copypastaurl, {method: 'GET'})
  .then(response => {
    return response.text();
  })
  .then(data => {
    copypasta = data;
    pastaRetrieved = true;
  })
  .catch(error => {
    console.log("bazinga :(");
    console.error(error);
  });

console.log("mama mia");

//number of times to repeat the copypasta
let repeat = 10;

const copyThePasta = () => {
  //css edits that will make your scrolling experience better
  const styles = document.createElement("style");
  styles.innerHTML =
    `/*clamps text boxes*/
    .ql-editor {
      max-height: 200px;
    }
    /*fixes the word wrap*/
    #form-row > form {
      max-width: 100%;
    }
  `.replaceAll(/(?<=\n)\s{2}/g, "");
  //that last .replaceAll just removes the leading two spaces for each line
  document.head.appendChild(styles);
  
  randomSchool();
  
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
  //submitbutton.disabled = null;
  //hiding the captcha since you actually don't need it now
  document.querySelector(`.g-recaptcha`).style.display = "none";
  
  //the random school stuff is weird (I don't think it loads immediately) so this is a hacky fix
  let cansubmit = false;
  const submit = () => {
    console.log("attempting to submit");
    if (
     document.querySelector("#spinner").hidden &&
     document.getElementById("00N1K00000fGn13") &&
     document.getElementById("00N1K00000fGn13").value === "") {
      randomSchool();
    }
    console.log(cansubmit);
    submitbutton.disabled = null;
    if (cansubmit) {
      submitbutton.click();
      //console.log("done!");
      clearInterval(s);
    } else {
      console.log("failed...");
      if (!document.getElementById("00N1K00000fGn13")?.value !== "")
        cansubmit = true;
    }
  }
  
  //comment out if you want a chance to read everything and manually submitting
  const s = setInterval(submit, 1000);
}

const check = () => {
  if (window.location.href.match(/https?:\/\/ut-sao-special-prod.web.app\/sex_basis_complaint2\.html/g))
    if (pastaRetrieved) {
      clearInterval(g);
      copyThePasta();
    }
  //else if (window.location.href.match(/https?:\/\/ut-sao-special-prod.web.app\/success\.html/g))
  //  window.location.href = "https://ut-sao-special-prod.web.app/sex_basis_complaint2.html";
}

const g = setInterval(check, 1000);

const randomSchool = () => {
  //chooses random "school"
  const selectschool = document.getElementById("00N1K00000fGn13");
  const randomschool = selectschool.children[Math.floor(Math.random()*selectschool.children.length)].value;
  const selectedschoolbutton = document.querySelector(`[data-id="00N1K00000fGn13"] .filter-option-inner-inner`);
  selectschool.value = randomschool;
  selectschool.title = randomschool;
  selectedschoolbutton.title = randomschool;
  selectedschoolbutton.innerHTML = randomschool;
}

//prevents the console output value from being whatever your copypasta was lmfao (update: it probably doesn't do that anymore but it's too funny to remove now)
console.log("real");