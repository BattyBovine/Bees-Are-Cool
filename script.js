//revision 2.3.1

//REPORT ISSUES IN https://github.com/SpiritAxolotl/Bees-Are-Cool/issues

//for use on https://ut-sao-special-prod.web.app/sex_basis_complaint2.html
//open the console by either F12 or ctrl alt i (or cmd opt i on macos). you can also right click and select "inspect"
//make sure "console" is selected from the top and paste all of this into the text box near the bottom (make sure to edit the "copypasta" variable on line 17 and the "repeat" variable on line 21)
//everything is commented so you can make sure it doesn't do anything malicious
//I still don't recommend running random code from strangers (me included) unless you trust them
//so yeah thank you for trusting me 🙏
//also you should probably do this on a vpn or something, just to be safe

//change this to true if you want the success page to redirect back to the form (WILL BE AN INFINITE LOOP)
let redirectsuccess = false;

//change this to false if you don't want it to autosubmit forms. if set to false, it will also autoscroll to the bottom of the page to make your life just a lil easier :]
let autosubmit = true;

const log = (...args) => {
  console.log(`BAC: ${args}`);
}

//number of times to repeat the copypasta
let repeat = 10;

//paste your copypasta in "copypasta" if you don't want to use the bee movie. alternatively, just replace copypastaurl with whatever copypasta link you have (so long as it's raw text)
let copypastaurl = "https://gist.githubusercontent.com/MattIPv4/045239bc27b16b2bcf7a3a9a4648c08a/raw/2411e31293a35f3e565f61e7490a806d4720ea7e/bee%2520movie%2520script";
let copypasta = ``;
let pastaRetrieved = false;
if (copypasta === "") {
  fetch(copypastaurl, {method: 'GET'})
    .then(response => {
      return response.text();
    })
    .then(data => {
      copypasta = data;
      pastaRetrieved = true;
    })
    .catch(error => {
      log("bazinga :(");
      console.error(error);
    });
} else pastaRetrieved = true;
//log("mama mia");

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
  //stats about how many characters you're submitting
  const totalchars = (editables.length+editables2.length)*copypasta.length*repeat;
  log(`total characters being submitted: ${totalchars.toLocaleString()}\n` +
  `(${(editables.length+editables2.length).toLocaleString()} text boxes, ${copypasta.length.toLocaleString()} copypasta characters, ${repeat.toLocaleString()} repeats)`);
  localStorage.setItem("totalChars", +(localStorage.getItem("totalChars") ?? 0) + totalchars);
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
    log("attempting to submit");
    if (
     document.querySelector("#spinner").hidden &&
     document.getElementById("00N1K00000fGn13") &&
     document.getElementById("00N1K00000fGn13").value === "") {
      randomSchool();
    }
    //log(cansubmit);
    submitbutton.disabled = null;
    if (document.getElementById("00N1K00000fGn13")?.value !== "")
      cansubmit = true;
    
    if (cansubmit) {
      submitbutton.onclick = (e) => {
        log("BUTTON CLICKED");
        //local stats to see how many times you've submitted :p
        if (cansubmit) {
          cansubmit = false;
          const start = Date.now()/1000;
          localStorage.setItem("startAvg", start);
          log(`stopwatch started`);
          localStorage.setItem("numberOfSubmissions", +(localStorage.getItem("numberOfSubmissions") ?? 0) + 1);
          log(`increased submission count to ${localStorage.getItem("numberOfSubmissions") ?? 0}`);
        }
      };
      if (autosubmit) {
        submitbutton.click();
        log("submitted!");
      } else {
        log("done!");
      }
      window.scrollTo(0, document.body.scrollHeight);
      clearInterval(s);
    } else log("failed...");
  }
  
  //comment out if you want a chance to read everything and manually submitting
  const s = setInterval(submit, 1000);
}

const check = () => {
  if (window.location.href.match(/https?:\/\/ut-sao-special-prod.web.app\/sex_basis_complaint2\.html/g)) {
    if (pastaRetrieved) {
      clearInterval(g);
      copyThePasta();
    }
  } else if (window.location.href.match(/https?:\/\/ut-sao-special-prod.web.app\/success\.html/g)) {
    //replaces the button with one that goes back to the form
    const button = document.querySelector(`a.btn[href="https://auditor.utah.gov/hotline/"]`);
    if (button) {
      button.innerHTML = "Back to form submission";
      button.href = "https://ut-sao-special-prod.web.app/sex_basis_complaint2.html";
    }
    //displays how many complaints you've submitted so far
    if (!document.querySelector(`#numberOfSubmissions`)) {
      const h2 = document.createElement("h2");
      h2.id = "numberOfSubmissions";
      const submissions = +(localStorage.getItem("numberOfSubmissions") ?? 0);
      h2.innerHTML = `(${submissions.toLocaleString()} complaint${submissions!==1?"s":""} submitted so far)`;
      document.querySelector(".col-12 > h1")?.append(h2);
    }
    //displays how many total characters you've submitted so far
    if (!document.querySelector(`#totalChars`)) {
      const h3 = document.createElement("h3");
      h3.id = "totalChars";
      const chars = +(localStorage.getItem("totalChars") ?? 0);
      h3.innerHTML = `(and ${chars.toLocaleString()} character${chars!==1?"s":""} submitted so far)`;
      document.querySelector("#numberOfSubmissions")?.append(h3);
    }
    //calculates and shows the average time it takes to submit each form
    if (!document.querySelector(`#avgTimeToSubmit`)) {
      const end = Date.now()/1000;
      const start = +(localStorage.getItem("startAvg") ?? 0);
      if (start) {
        localStorage.removeItem("startAvg");
        log(`stopwatch stopped at ${end-start}`);
        const oldavg = +(localStorage.getItem("avgTimeToSubmit") ?? 0);
        const submissions = +(localStorage.getItem("numberOfSubmissions") ?? 0);
        if (oldavg) {
          localStorage.setItem("avgTimeToSubmit",
            ((end - start) + (oldavg * (submissions-1)))/submissions
          );
        } else {
          localStorage.setItem("avgTimeToSubmit",
            (end - start) / submissions
          );
        }
      }
      const h4 = document.createElement("h4");
      h4.id = "avgTimeToSubmit";
      const avg = Math.round(+(localStorage.getItem("avgTimeToSubmit") ?? 0));
      h4.innerHTML = `(with ${avg>=60 ? `${Math.floor(avg/60)} minute${Math.floor(avg/60)!==1?"s":""} and ` : ""}${avg%60} second${avg%60!==1?"s":""} on average to submit)`;
      document.querySelector("#totalChars")?.append(h4);
    }
    
    if (redirectsuccess && !(new URLSearchParams(window.location.search)).has("noredirect"))
      window.location.href = "https://ut-sao-special-prod.web.app/sex_basis_complaint2.html";
  } else if (window.location.href.match(/https?:\/\/webto.salesforce.com\/servlet\/servlet.WebToCase/g)) {
    window.location.href = "https://ut-sao-special-prod.web.app/sex_basis_complaint2.html";
  }
}

check();
const g = setInterval(check, 1000);

const randomSchool = () => {
  log("choosing random school...");
  //chooses random "school"
  const selectschool = document.getElementById("00N1K00000fGn13");
  const selectedschoolbutton = document.querySelector(`[data-id="00N1K00000fGn13"] .filter-option-inner-inner`);
  if (!selectschool || !selectedschoolbutton) {
    log("dropdown doesn't exist yet");
    return;
  }
  const randomschool = selectschool.children[Math.floor(Math.random()*selectschool.children.length)].value;
  selectschool.value = randomschool;
  selectschool.title = randomschool;
  selectedschoolbutton.title = randomschool;
  selectedschoolbutton.innerHTML = randomschool;
}

//prevents the console output value from being whatever your copypasta was lmfao (update: it probably doesn't do that anymore but it's too funny to remove now)
log("real");