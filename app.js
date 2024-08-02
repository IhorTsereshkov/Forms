const homePage = document.querySelector(".homePage");
const wrongDataText = document.querySelector(".wrongDataText");
const { registrForm, autorizForm } = document.forms;
const { nameRegist, emailRegist } = registrForm.elements;
const { nameAutor, emailAutor } = autorizForm.elements;
const buttonRegistr = document.querySelector(".registration");
const buttonAutoriz = document.querySelector(".authorizations");
const formPage = document.querySelector(".form");
const checkRegistr = document.querySelector(".checkRegistr");
const buttonRegistrPage = document.querySelector(".registr");
const buttonAutorizPage = document.querySelector(".autorizeButton");
const wrongDataTextAut = document.querySelector(".wrongDataTextAut");

homePage.addEventListener("click", (e) => {
  const clickElement = e.target;
  if (clickElement.matches("button.registration")) {
    e.preventDefault();
    formPage.classList.remove("none");
    homePage.classList.add("none");
  } else if (clickElement.matches("button.authorization")) {
    e.preventDefault();
    checkRegistr.classList.remove("none");
    homePage.classList.add("none");
  }
});

function globalLogic() {
  let arr = [];

  buttonRegistrPage.addEventListener("click", (e) => {
    e.preventDefault();
    if (nameRegist.value === "" || emailRegist.value === "") {
      wrongDataText.classList.remove("none");
      return;
    }
    const objInf = {
      nameRegist: nameRegist.value,
      emailRegist: emailRegist.value,
    };
    let nameUser = nameRegist.value;
    arr.push(objInf);
    console.log(arr);
    nameRegist.value = "";
    emailRegist.value = "";
    wrongDataText.classList.add("none");
    alert(`Добро пожаловать ${nameUser}!`);
    formPage.classList.add("none");
    checkRegistr.classList.remove("none");
  });

  buttonAutorizPage.addEventListener("click", (e) => {
    e.preventDefault();
    let nameUser = nameAutor.value;

    if (nameAutor.value === "" || emailAutor.value === "") {
      wrongDataTextAut.classList.remove("none");
      return;
    }
    arr.forEach((item) => {
      if (
        item.nameRegist === nameAutor.value &&
        item.emailRegist === emailAutor.value
      ) {
        alert(`Вы вошли в свою учётную запись, ${nameUser}`);
      } else {
        alert(`Такой учётной записи нет`);
      }
    });
    checkRegistr.classList.add("none");
    homePage.classList.remove("none");
  });
}

globalLogic();
