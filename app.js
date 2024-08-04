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
const buttonAutorizRegistr = document.querySelector(".regAutorize");
const buttonRegistrAutorize = document.querySelector(".registrAutorize");

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

    // const existingUser = arr.find((item) => {
    //   item.nameRegist === nameRegist.value;
    // });
    // if (existingUser) {
    //   alert("Такой пользователь уже существует!");
    //   return;
    // }

    if (nameRegist.value.includes("@") == false) {
      alert("Введите e-mail корректно!");
      return;
    }

    const objInf = {
      nameRegist: nameRegist.value,
      emailRegist: emailRegist.value,
    };
    arr.push(objInf);
    console.log(arr);
    nameRegist.value = "";
    emailRegist.value = "";
    wrongDataText.classList.add("none");
    alert(`Новый аккаунт создан!`);
    formPage.classList.add("none");
    checkRegistr.classList.remove("none");
  });

  buttonAutorizRegistr.addEventListener("click", (e) => {
    e.preventDefault();
    formPage.classList.add("none");
    checkRegistr.classList.remove("none");
  });

  buttonAutorizPage.addEventListener("click", (e) => {
    e.preventDefault();

    if (nameAutor.value === "" || emailAutor.value === "") {
      wrongDataTextAut.classList.remove("none");
      return;
    }
    const users = arr.find((item) => {
      return (
        item.nameRegist === nameAutor.value &&
        item.emailRegist === emailAutor.value
      );
    });
    if (users) {
      alert(`Вы вошли в свою учётную запись!`);
    } else {
      alert(`Такой учётной записи нет`);
      return;
    }
    checkRegistr.classList.add("none");
    homePage.classList.remove("none");
  });

  buttonRegistrAutorize.addEventListener("click", (e) => {
    e.preventDefault();
    checkRegistr.classList.add("none");
    formPage.classList.remove("none");
  });
}

globalLogic();

// const obj = {
//   name: "Ihor",
//   age: 26,
//   city: "Minsk",
// };

// localStorage.setItem("user", JSON.stringify(obj));
// console.log(JSON.parse(localStorage.getItem("user")));
