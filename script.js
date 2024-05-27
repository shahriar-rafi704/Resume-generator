
function addNewEdField() {
  const newNode = document.createElement("textarea");
  newNode.classList.add("form-control", "edField", "mt-2");
  newNode.setAttribute("placeholder", "Enter here");
  document.getElementById("educationField").parentNode.appendChild(newNode);
}
function addNewLanField() {
  const newNode = document.createElement("input");
  newNode.classList.add("form-control", "laField", "mt-2");
  newNode.setAttribute("placeholder", "Enter here");
  document.getElementById("languageField").parentNode.appendChild(newNode);
}
function addNewWEField() {
  const newNode = document.createElement("textarea");
  newNode.classList.add("form-control", "weField", "mt-2");
  newNode.setAttribute("placeholder", "Enter Experience");
  document.getElementById("workExperienceField").parentNode.appendChild(newNode);
}
function addNewAQField() {
  const newNode = document.createElement("input");
  newNode.classList.add("form-control", "skField", "mt-2");
  newNode.setAttribute("placeholder", "Enter here");
  document.getElementById("skillsField").parentNode.appendChild(newNode);
}
function generateCV() {
  document.getElementById("cv-form").style.display = "none";
  document.getElementById("cv-template").style.display = "block";

  document.getElementById("nName").innerText = document.getElementById("nameField").value;
  document.getElementById("jJob").innerText = document.getElementById("jobField").value;
  document.getElementById("cContact").innerText = document.getElementById("contactField").value;
  document.getElementById("gGmail").innerText = document.getElementById("gmailField").value;
  document.getElementById("fFacebook").innerText = document.getElementById("addressField").value;
  document.getElementById("lLinkedin").innerText = document.getElementById("birthdateField").value;
  document.getElementById("objectiveT").innerText = document.getElementById("objectiveField").value;

  const file = document.getElementById("imgField").files[0];
  const reader = new FileReader();
  reader.onloadend = function () {
    document.getElementById("imgTemplate").src = reader.result;
  };
  if (file) {
    reader.readAsDataURL(file);
  } else {
    document.getElementById("imgTemplate").src = "";
  }
  const eduFields = document.querySelectorAll(".edField");
  const eduList = document.getElementById("edu");
  eduList.innerHTML = "";
  eduFields.forEach(field => {
    const li = document.createElement("li");
    li.innerText = field.value;
    eduList.appendChild(li);
  });
  const lanFields = document.querySelectorAll(".laField");
  const lanList = document.getElementById("lan");
  lanList.innerHTML = "";
  lanFields.forEach(field => {
    const li = document.createElement("li");
    li.innerText = field.value;
    lanList.appendChild(li);
  });
  const weFields = document.querySelectorAll(".weField");
  const weList = document.getElementById("weT");
  weList.innerHTML = "";
  weFields.forEach(field => {
    const li = document.createElement("li");
    li.innerText = field.value;
    weList.appendChild(li);
  });
  const skFields = document.querySelectorAll(".skField");
  const skList = document.getElementById("skills");
  skList.innerHTML = "";
  skFields.forEach(field => {
    const li = document.createElement("li");
    li.innerText = field.value;
    skList.appendChild(li);
  });
}

