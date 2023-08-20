// Home Pages
// Form Login or Create Mode
let createAccLink = document.querySelector("#createAccLink");
let loginLink = document.querySelector("#loginLink");
let loginFormContainer = document.querySelector(".loginForm");

createAccLink.addEventListener("click", function (e) {
  loginFormContainer.classList.remove("loginActive");
  loginFormContainer.classList.add("createActive");
});

loginLink.addEventListener("click", function (e) {
  loginFormContainer.classList.remove("createActive");
  loginFormContainer.classList.add("loginActive");
});

// Imagine this is Database Connection
let users = [
  {
    username: "Koumaa",
    password: "KOUMAA",
    rank: "Admin",
  },
  {
    username: "Alice",
    password: "KouAlice",
    rank: "Admin",
  },
];

// Login Data User
let currentUserUsername = "";
let currentUserPassword = "";
let currentEmail = "";

// Login Form Function
let loginForm = document.querySelector(".loginBox");
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let usernameLogin = document.querySelector("#usernameLogin");
  let usernameValue = usernameLogin.value;
  let passwordLogin = document.querySelector("#passwordLogin");
  let passwordValue = passwordLogin.value;

  // console Info element
  let consoleInfoContainer = document.querySelector(".consoleInfoContainer");
  let consoleInfo = document.querySelector(".consoleInfo");
  let dot = document.querySelectorAll(".dot");

  for (let i = 0; i < users.length; i++) {
    if (
      users[i].username == usernameValue &&
      users[i].password == passwordValue
    ) {
      consoleInfoContainer.style.display = "flex";
      setTimeout(() => {
        dot.forEach((d) => (d.style.display = "none"));
        consoleInfo.style.color = "var(--engineering-orange-light)";
        consoleInfo.innerHTML = `Log In Succes, Welcome ${users[i].username}`;

        // reset
        usernameLogin.value = "";
        passwordLogin.value = "";

        setTimeout(() => {
          consoleInfoContainer.style.display = "none";
          dot.forEach((d) => (d.style.display = "flex"));
          consoleInfo.style.color = "";
          consoleInfo.innerHTML = `Connecting to Database`;
        }, 5000);
      }, 5000);

      // Kalo admin yang login
      // Kalo user punya rank dan rank user = Admin
      if (users[i].rank && users[i].rank == "Admin") {
        currentUserUsername = `${users[i].username} <span class="adminUsername">(Admin)</span>`;
        currentUserPassword = users[i].password;
      } else {
        //Kalo user gk ada rank atau user rank != Admin
        currentUserUsername = users[i].username;
        currentUserPassword = users[i].password;
      }
      // return currentUserUsername && currentUserPassword;
    } else if (
      users[i].username == usernameValue &&
      users[i].password != passwordValue
    ) {
      consoleInfoContainer.style.display = "flex";
      setTimeout(() => {
        dot.forEach((d) => (d.style.display = "none"));
        consoleInfo.style.color = "var(--engineering-orange-light)";
        consoleInfo.innerHTML = `Wrong Password, try again!!!`;

        // reset
        passwordLogin.value = "";

        setTimeout(() => {
          consoleInfoContainer.style.display = "none";
          dot.forEach((d) => (d.style.display = "flex"));
          consoleInfo.style.color = "";
          consoleInfo.innerHTML = `Connecting to Database`;
        }, 5000);
      }, 5000);
      currentUserUsername = users[i].username; //biar bisa masuk ke if CUU != ""
      // console.log("Password Salah!!!");
    }
  }
  if (currentUserUsername != "" && currentUserPassword == "") {
    //Ini if CUU yang dimaksud
    return;
  } else if (currentUserUsername == "" && currentUserPassword == "") {
    consoleInfoContainer.style.display = "flex";
    setTimeout(() => {
      dot.forEach((d) => (d.style.display = "none"));
      consoleInfo.style.color = "var(--engineering-orange-light)";
      consoleInfo.innerHTML = `Account not Found, please Create Account first`;

      // reset
      usernameLogin.value = "";
      passwordLogin.value = "";

      setTimeout(() => {
        consoleInfoContainer.style.display = "none";
        dot.forEach((d) => (d.style.display = "flex"));
        consoleInfo.style.color = "";
        consoleInfo.innerHTML = `Connecting to Database`;
      }, 5000);
    }, 5000);
    // console.log("Akun tidak ada silahkan buat akun terlebih dahulu");
  }

  // setelah selesai diseleksi user nya dari username sampai rank maka diubah h3 nya
  let usernameCommentContainer = document.querySelectorAll(
    ".usernameCommentContainer"
  );
  usernameCommentContainer.forEach((userssname) => {
    let h3 = userssname.querySelector("h3");
    console.log(h3);
    if (h3.innerHTML == "Username") {
      h3.innerHTML = currentUserUsername; //jadi gini kalo admin nanti ada spannya kalo bukan admin gk ada
    }
  });
});

// Create User Form
let createUserForm = document.querySelector(".createAccBox");
let createUsername = document.querySelector("#usernameCreate");
let createEmail = document.querySelector("#emailCreate");
let createPassword = document.querySelector("#passwordCreate");

createUserForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let newUsernameValue = createUsername.value;
  let newPasswrodValue = createPassword.value;
  let newEmailValue = createEmail.value;

  for (let i = 0; i < users.length; i++) {
    if (users[i].username == newUsernameValue) {
      // info console
      let consoleInfoContainer = document.querySelector(
        ".consoleInfoContainer"
      );
      let consoleInfo = document.querySelector(".consoleInfo");
      let dot = document.querySelectorAll(".dot");
      consoleInfoContainer.style.display = "flex";
      setTimeout(() => {
        dot.forEach((d) => (d.style.display = "none"));
        consoleInfo.style.color = "var(--engineering-orange-light)";
        consoleInfo.innerHTML = `Create Account Failed, username already exists`;

        // reset
        createUsername.value = "";
        createPassword.value = "";
        createEmail.value = "";

        setTimeout(() => {
          consoleInfoContainer.style.display = "none";
          dot.forEach((d) => (d.style.display = "flex"));
          consoleInfo.style.color = "";
          consoleInfo.innerHTML = "Connecting to Database";
        }, 5000);
      }, 5000);
      return; //biar berenti disini
    }
  }

  let newUser = {
    username: newUsernameValue,
    password: newPasswrodValue,
    email: newEmailValue,
    rank: "Member",
  };
  users.push(newUser);
  currentUserUsername = newUsernameValue;
  currentUserPassword = newPasswrodValue;
  currentEmail = newEmailValue;

  // info console
  let consoleInfoContainer = document.querySelector(".consoleInfoContainer");
  let consoleInfo = document.querySelector(".consoleInfo");
  let dot = document.querySelectorAll(".dot");
  consoleInfoContainer.style.display = "flex";
  setTimeout(() => {
    dot.forEach((d) => (d.style.display = "none"));
    consoleInfo.style.color = "var(--engineering-orange-light)";
    consoleInfo.innerHTML = `Account Created Succes`;

    // reset
    createUsername.value = "";
    createPassword.value = "";
    createEmail.value = "";

    setTimeout(() => {
      consoleInfoContainer.style.display = "none";
      dot.forEach((d) => (d.style.display = "flex"));
      consoleInfo.style.color = "";
      consoleInfo.innerHTML = "Connecting to Database";
    }, 5000);
  }, 5000);

  // setelah selesai diseleksi user nya dari username sampai rank maka diubah h3 nya
  let usernameCommentContainer = document.querySelectorAll(
    ".usernameCommentContainer"
  );
  usernameCommentContainer.forEach((userssname) => {
    let h3 = userssname.querySelector("h3");
    console.log(h3);
    if (h3.innerHTML == "Username") {
      h3.innerHTML = currentUserUsername; //jadi gini kalo admin nanti ada spannya kalo bukan admin gk ada
    }
  });
});

// About Pages
function setCurrentContent(nameNav, navType, navDefault, navContent) {
  if (nameNav.classList.contains("active")) {
    resetActive(navType);
    setActive(navType[navDefault]);
    resetActive(navContent);
    setActive(navContent[navDefault]);
    navType.forEach((navi) =>
      navi.addEventListener("click", function (e) {
        let contentClass = navi.dataset.nav; //contoh manggil dataset | . setelah dataset adalah tipe dari data-xxx
        // console.log(contentClass);
        let activeContent = document.querySelector(`.${contentClass}`);
        resetActive(navType);
        resetActive(navContent);
        setActive(this);
        setActive(activeContent);
      })
    );
  } else if (!nameNav.classList.contains("active")) {
    resetActive(navType);
    resetActive(navContent);
  }
}

function resetActive(elements) {
  for (let element of elements) {
    if (element.classList.contains("active"))
      element.classList.remove("active");
  }
}

function setActive(element) {
  element.classList.add("active");
}

// About
let aboutContent = document.querySelectorAll(".subAboutInformation");
let aboutType = document.querySelectorAll(".listSubAbout");
let aboutNav = document.querySelector(".about");

// Lore
let loreType = document.querySelectorAll(".listLore");
let loreContent = document.querySelectorAll(".subLoreInformation");
let loreNav = document.querySelector(".lore");

// Quotes
let quotesType = document.querySelectorAll(".listSubQuotes");
let quotesContent = document.querySelectorAll(".subQuotesInformation");
let quotesNav = document.querySelector(".quotes");

setCurrentContent(aboutNav, aboutType, 0, aboutContent);
setCurrentContent(loreNav, loreType, 1, loreContent);
setCurrentContent(quotesNav, quotesType, 0, quotesContent);

// mainNav About
let mainNav = document.querySelectorAll(".navAbout");
mainNav.forEach((main) =>
  main.addEventListener("click", function (e) {
    let subNavigationContainer = document.querySelectorAll(".subMainNavAbout");
    resetActive(subNavigationContainer);
    resetActive(mainNav);
    setActive(main);
    let dataSubMain = main.dataset.submain; //peraturan manggil dataset jangan set name datanya subMain
    // console.log(dataSubMain);
    let subMain = document.querySelector(`.${dataSubMain}`);
    // console.log(subMain);
    setActive(subMain);

    setCurrentContent(aboutNav, aboutType, 0, aboutContent);
    setCurrentContent(loreNav, loreType, 1, loreContent);
    setCurrentContent(quotesNav, quotesType, 0, quotesContent);
  })
);

// Light Cones Page

// max text for every lightcones
// unreachable side
let baseHPUnreachableSideLow = "57";
let baseATKUnreachableSideLow = "27";
let baseDEFUnreachableSideLow = "15";

let baseHPUnreachableSideMax = "1,270";
let baseATKUnreachableSideMax = "582";
let baseDEFUnreachableSideMax = "330";

let R1UnreachableSide = `Increase the wearer's CRIT Rate and Max HP by
<span class="bold" data-statsRef="stats1">18%</span>. After the
wearer is attacked or consumes their own HP, increases the
wearer's DMG by
<span class="bold" data-statsRef="stats2">24%</span>. This
effect is dispelled after the user uses an attack.`;

let R2UnreachableSide = `Increase the wearer's CRIT Rate and Max HP by
<span class="bold" data-statsRef="stats1">21%</span>. After the
wearer is attacked or consumes their own HP, increases the
wearer's DMG by
<span class="bold" data-statsRef="stats2">28%</span>. This
effect is dispelled after the user uses an attack.`;

let R3UnreachableSide = `Increase the wearer's CRIT Rate and Max HP by
<span class="bold" data-statsRef="stats1">24%</span>. After the
wearer is attacked or consumes their own HP, increases the
wearer's DMG by
<span class="bold" data-statsRef="stats2">32%</span>. This
effect is dispelled after the user uses an attack.`;

let R4UnreachableSide = `Increase the wearer's CRIT Rate and Max HP by
<span class="bold" data-statsRef="stats1">27%</span>. After the
wearer is attacked or consumes their own HP, increases the
wearer's DMG by
<span class="bold" data-statsRef="stats2">36%</span>. This
effect is dispelled after the user uses an attack.`;

let R5UnreachableSide = `Increase the wearer's CRIT Rate and Max HP by
<span class="bold" data-statsRef="stats1">30%</span>. After the
wearer is attacked or consumes their own HP, increases the
wearer's DMG by
<span class="bold" data-statsRef="stats2">40%</span>. This
effect is dispelled after the user uses an attack.`;

let unreachableSideDesc = `He would come to this place every year, bringing new swords with him each time.
He had seen all the owners of the swords draw their last breath.
Every time he leaves, he would sorrowfully ponder...

When would his own blade be brought here by someone else?`;

// onTheFallAeon
let baseHPonTheFallAeonLow = "48";
let baseATKonTheFallAeonLow = "24";
let baseDEFonTheFallAeonLow = "18";

let baseHPonTheFallAeonMax = "1,058";
let baseATKonTheFallAeonMax = "529";
let baseDEFonTheFallAeonMax = "396";

let R1onTheFallAeon = `Whenever the wearer attacks, their ATK is increased by <span class="bold">8%</span> in this battle, 
up to 4 time(s). When the wearer inflicts Weakness Break on enemies, 
the wearer's DMG increases by <span class="bold">12%</span> for 2 turn(s).`;

let R2onTheFallAeon = `Whenever the wearer attacks, their ATK is increased by <span class="bold">10%</span> in this battle, 
up to 4 time(s). When the wearer inflicts Weakness Break on enemies, 
the wearer's DMG increases by <span class="bold">15%</span> for 2 turn(s).`;

let R3onTheFallAeon = `Whenever the wearer attacks, their ATK is increased by <span class="bold">12%</span> in this battle, 
up to 4 time(s). When the wearer inflicts Weakness Break on enemies, 
the wearer's DMG increases by <span class="bold">18%</span> for 2 turn(s).`;

let R4onTheFallAeon = `Whenever the wearer attacks, their ATK is increased by <span class="bold">14%</span> in this battle, 
up to 4 time(s). When the wearer inflicts Weakness Break on enemies, 
the wearer's DMG increases by <span class="bold">21%</span> for 2 turn(s).`;

let R5onTheFallAeon = `Whenever the wearer attacks, their ATK is increased by <span class="bold">16%</span> in this battle, 
up to 4 time(s). When the wearer inflicts Weakness Break on enemies, 
the wearer's DMG increases by <span class="bold">24%</span> for 2 turn(s).`;

let onTheFallAeonDesc = `It began with a flash of light.
One by one, they fell as the threat of expiration loomed over them.
They had to stop self-replicating and rushed to embrace each other, trying to offer the right to reproduce in exchange for a possibility of survival.
They held hands in a show of unprecedented unity.
…But the Paths met an abrupt end, and they were headed to a true death.`;

// Nowhere to Run
let baseHPnoWhereToRunLow = "57";
let baseATKnoWhereToRunLow = "27";
let baseDEFnoWhereToRunLow = "15";

let baseHPnoWhereToRunMax = "1,270";
let baseATKnoWhereToRunMax = "582";
let baseDEFnoWhereToRunMax = "330";

let R1noWhereToRun = `Increases the wearer's ATK by <span class="bold">24%</span>. Whenever the wearer defeats an enemy, 
they restore HP equal to <span class="bold">12%</span> of their ATK.`;

let R2noWhereToRun = `Increases the wearer's ATK by <span class="bold">30%</span>. Whenever the wearer defeats an enemy, 
they restore HP equal to <span class="bold">15%</span> of their ATK.`;

let R3noWhereToRun = `Increases the wearer's ATK by <span class="bold">36%</span>. Whenever the wearer defeats an enemy, 
they restore HP equal to <span class="bold">18%</span> of their ATK.`;

let R4noWhereToRun = `Increases the wearer's ATK by <span class="bold">42%</span>. Whenever the wearer defeats an enemy, 
they restore HP equal to <span class="bold">21%</span> of their ATK.`;

let R5noWhereToRun = `Increases the wearer's ATK by <span class="bold">48%</span>. Whenever the wearer defeats an enemy, 
they restore HP equal to <span class="bold">24%</span> of their ATK.`;

let noWhereToRunDesc = `This isn't the first time he's seen this man.
This man had become his own inseparable shadow.
No matter how many times he runs this man through with his spear, the man always comes back.

He can neither lose to this man, nor truly win.
Though he wants to run away, there is nowhere to run.`;

// light cone page func
let lightConesPage = document.querySelector(".lightConesContainer");
let lightConeTitleDesc = document.querySelector("#lightConeTitleDesc");
let lightConeName = document.querySelector("#lightConeNameList");
let lightConeDesc = document.querySelector("#lightConeDesc");
let PLightConeComment = document.querySelector(".PLightConeComment");

// stats
let levelStats = document.querySelectorAll(".levelStats");
let buttonMaxorLowStats = document.querySelector(".buttonMaxorLowStats");

// refinement
let RNum = document.querySelectorAll(".RNum");
let skillRefinementName = document.querySelector("#skillRefinementName");
let skillRefinementDesc = document.querySelector("#skillRefinementDesc");

function setLevelStats(levelElements, levelActive) {
  levelElements.forEach((level) => (level.innerHTML = `Level ${levelActive}`));
}

function setBaseHPATKDEF(numHP, numATK, numDEF) {
  let baseHP = document.querySelector("#baseHP");
  let baseATK = document.querySelector("#baseATK");
  let baseDEF = document.querySelector("#baseDEF");
  baseHP.innerHTML = numHP;
  baseATK.innerHTML = numATK;
  baseDEF.innerHTML = numDEF;
}

function resetBtnLoMActive(button) {
  if (button.classList.contains("LowActive")) {
    return;
  } else if (button.classList.contains("MaxActive")) {
    button.classList.remove("MaxActive");
    button.classList.add("LowActive");
  }
}

function setBtnLoMActive(classNameActivate, buttonElement) {
  buttonElement.classList.remove("LowActive", "MaxActive");
  buttonElement.classList.add(`${classNameActivate}`);
}

function resetRNum(RNumElements) {
  for (let RNumElement of RNumElements) {
    if (RNumElement.classList.contains("active")) {
      RNumElement.classList.remove("active");
    }
  }
  RNumElements[0].classList.add("active");
}

function setRNum(RNumElements, RNumIndexActive, RNumElementActive) {
  for (let RNumElement of RNumElements) {
    RNumElement.classList.remove("active");
  }
  if (RNumIndexActive >= 0)
    return RNumElements[RNumIndexActive].classList.add("active"); //kalo dia >0 maka selesai disini

  RNumElementActive.classList.add("active"); //kalo numActive disetting < 0 maka elementnya yg dipilih
}

function scanLCP(container) {
  if (container.classList.contains("unreachableSideActive")) {
    // Reset
    lightConeTitleDesc.innerHTML = `UNREACHABLE SIDE`;
    lightConeName.innerHTML = `Unreachable Side (5 Stars)`;
    lightConeDesc.innerHTML = unreachableSideDesc;

    // reset stats
    resetBtnLoMActive(buttonMaxorLowStats);
    levelStats.innerHTML = `1`;
    baseHP.innerHTML = baseHPUnreachableSideLow;
    baseATK.innerHTML = baseATKUnreachableSideLow;
    baseDEF.innerHTML = baseDEFUnreachableSideLow;

    // reset refinement
    resetRNum(RNum);
    skillRefinementDesc.innerHTML = R1UnreachableSide;
    skillRefinementName.innerHTML = `Unfulfilled Yearning`;
    PLightConeComment.innerHTML = `Ini Lightcones nya OP bangat cuyy gk ada obat dijamin gk nyesel,
    mau Blade kalian gk mati-mati?, mau Blade kalian Damagenya
    gede?, mau Blade kalian bisa goreng-goreng Kafka?, tenang
    Unreachable Side solusinya!`;
  } else if (container.classList.contains("onTheFallAeonActive")) {
    lightConeTitleDesc.innerHTML = `ON THE FALL AEON`;
    lightConeName.innerHTML = `On The Fall Aeon (5 Stars)`;
    lightConeDesc.innerHTML = onTheFallAeonDesc;

    // reset stats
    resetBtnLoMActive(buttonMaxorLowStats);
    levelStats.innerHTML = `1`;
    baseHP.innerHTML = baseHPonTheFallAeonLow;
    baseATK.innerHTML = baseATKonTheFallAeonLow;
    baseDEF.innerHTML = baseDEFonTheFallAeonLow;

    // reset refinement
    resetRNum(RNum);
    skillRefinementDesc.innerHTML = R1onTheFallAeon;
    skillRefinementName.innerHTML = `Moth To Flames`;
    PLightConeComment.innerHTML = `Make on The Fall Aeon berasa jadi Dewa yang jatuh
    kayak God of War tapi ini HSR, dh gitu rasanya kayak beli Pocky Coklat tapi rasa BBQ`;
  } else if (container.classList.contains("nowhereToRunActive")) {
    lightConeTitleDesc.innerHTML = `NOWHERE TO RUN`;
    lightConeName.innerHTML = `Nowhere To Run (4 Stars)`;
    lightConeDesc.innerHTML = noWhereToRunDesc;

    // reset stats
    resetBtnLoMActive(buttonMaxorLowStats);
    levelStats.innerHTML = `1`;
    baseHP.innerHTML = baseHPnoWhereToRunLow;
    baseATK.innerHTML = baseATKnoWhereToRunLow;
    baseDEF.innerHTML = baseDEFnoWhereToRunLow;

    // reset refinement
    resetRNum(RNum);
    skillRefinementDesc.innerHTML = R1noWhereToRun;
    skillRefinementName.innerHTML = `Desperate Times`;
    PLightConeComment.innerHTML = `Make ini Light Cone dijamin musuh gk bisa lari
    sangat sesuai dengan namanya tak ada tempat bagi musuh untuk berlari,
    kalo terbang beda cerita ya ges ya`;
  }
}

scanLCP(lightConesPage);

// button List function
let lightConeIcon = document.querySelectorAll(".lightConeIcon");
let lightCone = document.querySelector(".lightCone");

lightConeIcon.forEach((LCIBtn) =>
  LCIBtn.addEventListener("click", function (e) {
    for (let btn of lightConeIcon) {
      if (btn.classList.contains("active")) {
        btn.classList.remove("active");
      }
    }
    lightConesPage.classList.remove(
      "unreachableSideActive",
      "onTheFallAeonActive",
      "nowhereToRunActive"
    );
    this.classList.add("active");

    if (this.classList.contains("icon1")) {
      lightCone.style.transform = "translate(-300px)";
      setTimeout(() => {
        lightCone.innerHTML = `          
        <img
        src="https://drive.google.com/uc?export=view&id=1vz52JA8Ylaf_2E-eEo37lnxRdlt0TkVM"
        alt=""
      />`;
        lightCone.style.transform = "translate(0px)";
      }, 1000);
      setTimeout(() => {
        lightConesPage.classList.add("unreachableSideActive");
      }, 2000);
    } else if (this.classList.contains("icon2")) {
      lightCone.style.transform = "translate(-300px)";
      setTimeout(() => {
        // lightCone.innerHTML = `<img src="images/On the Fall Aeon.png" alt="" />`;
        lightCone.innerHTML = `
        <img
        src="https://drive.google.com/uc?export=view&id=1QaOBzTt5Y0dR2qogKUwROP0a6X0yAcpe"
        alt=""
      />`;
        lightCone.style.transform = "translate(0px)";
      }, 1000);
      setTimeout(() => {
        lightConesPage.classList.add("onTheFallAeonActive");
      }, 2000);
    } else if (this.classList.contains("icon3")) {
      lightCone.style.transform = "translate(-300px)";
      setTimeout(() => {
        // lightCone.innerHTML = `<img src="images/nowhere to run.png" alt="" />`;
        lightCone.innerHTML = `
        <img
        src="https://drive.google.com/uc?export=view&id=1pc-hzJHznmXmUMaEoIcfuRRzkyJqAt2d"
        alt=""
      />`;
        lightCone.style.transform = "translate(0px)";
      }, 1000);
      setTimeout(() => {
        lightConesPage.classList.add("nowhereToRunActive");
      }, 2000);
    }
    setTimeout(() => scanLCP(lightConesPage), 2001); //biar bisa baca class setelah semua if else jalan
  })
);

buttonMaxorLowStats.addEventListener("click", function (e) {
  if (buttonMaxorLowStats.classList.contains("LowActive")) {
    setBtnLoMActive("MaxActive", buttonMaxorLowStats);
    // berdasarkan kondisi LCP
    if (lightConesPage.classList.contains("unreachableSideActive")) {
      setRNum(RNum, 4);
      skillRefinementDesc.innerHTML = R5UnreachableSide;
      setLevelStats(levelStats, 80);
      setBaseHPATKDEF(
        baseHPUnreachableSideMax,
        baseATKUnreachableSideMax,
        baseDEFUnreachableSideMax
      );
    } else if (lightConesPage.classList.contains("onTheFallAeonActive")) {
      setRNum(RNum, 4);
      skillRefinementDesc.innerHTML = R5onTheFallAeon;
      setLevelStats(levelStats, 80);
      setBaseHPATKDEF(
        baseHPonTheFallAeonMax,
        baseATKonTheFallAeonMax,
        baseDEFonTheFallAeonMax
      );
    } else if (lightConesPage.classList.contains("nowhereToRunActive")) {
      setRNum(RNum, 4);
      skillRefinementDesc.innerHTML = R5noWhereToRun;
      setLevelStats(levelStats, 80);
      setBaseHPATKDEF(
        baseHPnoWhereToRunMax,
        baseATKnoWhereToRunMax,
        baseDEFnoWhereToRunMax
      );
    }
  } else if (buttonMaxorLowStats.classList.contains("MaxActive")) {
    setBtnLoMActive("LowActive", buttonMaxorLowStats);
    // berdasarkan kondisi LCP
    if (lightConesPage.classList.contains("unreachableSideActive")) {
      setRNum(RNum, 0);
      skillRefinementDesc.innerHTML = R1UnreachableSide;
      setLevelStats(levelStats, 1);
      setBaseHPATKDEF(
        baseHPUnreachableSideLow,
        baseATKUnreachableSideLow,
        baseDEFUnreachableSideLow
      );
    } else if (lightConesPage.classList.contains("onTheFallAeonActive")) {
      setRNum(RNum, 0);
      skillRefinementDesc.innerHTML = R1onTheFallAeon;
      setLevelStats(levelStats, 1);
      setBaseHPATKDEF(
        baseHPonTheFallAeonLow,
        baseATKonTheFallAeonLow,
        baseDEFonTheFallAeonLow
      );
    } else if (lightConesPage.classList.contains("nowhereToRunActive")) {
      setRNum(RNum, 0);
      skillRefinementDesc.innerHTML = R1noWhereToRun;
      setLevelStats(levelStats, 1);
      setBaseHPATKDEF(
        baseHPnoWhereToRunLow,
        baseATKnoWhereToRunLow,
        baseDEFnoWhereToRunLow
      );
    }
  }
});

RNum.forEach((RN) =>
  RN.addEventListener("click", function (e) {
    setRNum(RNum, -1, this);
    if (lightConesPage.classList.contains("unreachableSideActive")) {
      if (this.classList.contains("R1")) {
        skillRefinementDesc.innerHTML = R1UnreachableSide;
      } else if (this.classList.contains("R2")) {
        skillRefinementDesc.innerHTML = R2UnreachableSide;
      } else if (this.classList.contains("R3")) {
        skillRefinementDesc.innerHTML = R3UnreachableSide;
      } else if (this.classList.contains("R4")) {
        skillRefinementDesc.innerHTML = R4UnreachableSide;
      } else if (this.classList.contains("R5")) {
        skillRefinementDesc.innerHTML = R5UnreachableSide;
      }
    } else if (lightConesPage.classList.contains("onTheFallAeonActive")) {
      if (this.classList.contains("R1")) {
        skillRefinementDesc.innerHTML = R1onTheFallAeon;
      } else if (this.classList.contains("R2")) {
        skillRefinementDesc.innerHTML = R2onTheFallAeon;
      } else if (this.classList.contains("R3")) {
        skillRefinementDesc.innerHTML = R3onTheFallAeon;
      } else if (this.classList.contains("R4")) {
        skillRefinementDesc.innerHTML = R4onTheFallAeon;
      } else if (this.classList.contains("R5")) {
        skillRefinementDesc.innerHTML = R5onTheFallAeon;
      }
    } else if (lightConesPage.classList.contains("nowhereToRunActive")) {
      if (this.classList.contains("R1")) {
        skillRefinementDesc.innerHTML = R1noWhereToRun;
      } else if (this.classList.contains("R2")) {
        skillRefinementDesc.innerHTML = R2noWhereToRun;
      } else if (this.classList.contains("R3")) {
        skillRefinementDesc.innerHTML = R3noWhereToRun;
      } else if (this.classList.contains("R4")) {
        skillRefinementDesc.innerHTML = R4noWhereToRun;
      } else if (this.classList.contains("R5")) {
        skillRefinementDesc.innerHTML = R5noWhereToRun;
      }
    }
  })
);

//fungsi animasi kalo nyentuh scrollY target
function elementAnimationOnScrollByY(element, YAxis, animationName) {
  let currentScrollY = window.scrollY; //ini ngambil scrollY user
  const targetScrollY = YAxis;

  if (currentScrollY >= targetScrollY) {
    element.style.animation = animationName;
  } else {
    return;
  }
}

//setiap kali window di scroll fungsi akan berjalan
window.addEventListener("scroll", function () {
  let skillContainerEvens = document.querySelectorAll(".SCeven"); //ganjil
  let skillContainerOdds = document.querySelectorAll(".SCodd"); //genap

  // console.log(window.scrollY);

  //.clientHeight = tinggi masing-masing container tergantung device jadi udah responsif
  let loginContainerHeight = document.querySelector(".leftSide").clientHeight;
  let aboutContainerHeight =
    document.querySelector(".aboutContainer").clientHeight;
  let lightConesContainerHeight = document.querySelector(
    ".lightConesContainer"
  ).clientHeight;
  let skillContainerHeight =
    document.querySelector(".skillContainer").clientHeight;

  //make for Loop dibanding for Each biar bisa di set manual indexnya tergantung i
  for (let i = 0; i < skillContainerEvens.length; i++) {
    let totalYAxis =
      loginContainerHeight +
      aboutContainerHeight +
      lightConesContainerHeight -
      skillContainerHeight;
    // console.log("Total Y Axis", totalYAxis);
    // console.log("i = ", i);
    if (i <= 1) {
      //ini buat container yang 3 diawal
      elementAnimationOnScrollByY(
        skillContainerEvens[i],
        totalYAxis,
        "FadeInRight 2s ease 0s forwards"
      );
    } else {
      //ini buat container yang 3 diakhir
      totalYAxis += skillContainerHeight * 3;
      elementAnimationOnScrollByY(
        skillContainerEvens[i],
        totalYAxis,
        "FadeInRight 2s ease 0s forwards"
      );
    }
  }

  //sama aja bedanya di i nya aja soalnya ini yang genap
  for (let i = 0; i < skillContainerOdds.length; i++) {
    let totalYAxis =
      loginContainerHeight +
      aboutContainerHeight +
      lightConesContainerHeight -
      skillContainerHeight;
    if (i == 0) {
      elementAnimationOnScrollByY(
        skillContainerOdds[i],
        totalYAxis,
        "FadeInLeft 2s ease 0s forwards"
      );
    } else {
      totalYAxis += skillContainerHeight * 3;
      elementAnimationOnScrollByY(
        skillContainerOdds[i],
        totalYAxis,
        "FadeInLeft 2s ease 0s forwards"
      );
    }
  }
});

// --------------------------------------COMMENT SECTION----------------------------------------------------
// Saatnya bermain dengan comment siapin dulu alurnya gmn
//Jadi gw mau si Comment pas di pencet reply nah cuman yang berkaitan ama si Comment yang replynya dipencet aja
// Caranya gmn? pertama butuh id si comment, kedua butuh data-comment buat sih subMain
// Jadi kita tiap kali kita klik reply nah replyComment container yang data-comment = id comment yang diklik
//Maka hanya yang data-comment = id comment yang diklik aja yang nongol dengan class opened
let idNumber = 0;

let mainCommentContainers = document.querySelectorAll(".mainCommentContainer");
let replyBtn = document.querySelectorAll(".replyBtn");
let bodyCommentContainer = document.querySelector(".bodyCommentContainer");

// Alur = (Alur)
// (Alur) pertama biar element yang baru kebikin bisa kena click juga jadinya si universal container yang dikasih
// (Alur) event listener click nya
bodyCommentContainer.addEventListener("click", function (e) {
  // (Alur) biasanya yang kena click itu lgsg element dalemnya bukan divnya jadi make code dibawah ini (closestDiv)
  // console.dir(e.target); //pake ini kalo mau cek apa yang kena pencet
  let closestDiv = e.target.closest("div"); //ini buat cek div mana yang kena soalnya biasanya yang kena lgsg h3

  // Hide or Show Button function
  if (closestDiv.classList.contains("hideOrShowBtn")) {
    // (Alur) nah karena kita yakin yang kena div dengan class hideOrShowBtn jadi set target sebagai dia
    let target = closestDiv; //set target
    let thisMainComment = target.closest(".mainCommentContainer");
    console.dir(thisMainComment); // (Alur) ini buat cek siapa sih mainComment saat ini
    let idMainComment = thisMainComment.id;
    let replyCommentContainer = thisMainComment.querySelectorAll(
      `[data-comment=${idMainComment}]`
    ); // (Alur) karena kita ngeset setiap reply comment punya data-comment = id si comment utama
    // (Alur) Jadi harapannya si replyCommentContainer itu isinya semua element replyComment yang berkaitan
    // (Alur) dengan thisMainComment, maksudnya berkaitan si reply itu punya si Main
    replyCommentContainer.forEach((reply) => reply.classList.toggle("opened")); //(Alur) kasih toggle biar kebuka

    // console.dir(replyCommentContainer); //hasilnya array
    // replyCommentContainer.classList.toggle("opened"); // ini salah karena hasilnya array jadi make index dulu

    if (e.target.innerHTML == "Show")
      e.target.innerHTML = "Hide"; //nah ini biar enak diliat
    else if (e.target.innerHTML == "Hide") e.target.innerHTML = "Show"; //ingat e.target = h3
  }
  // Reply Button Function
  else if (closestDiv.classList.contains("replyBtn")) {
    // Mirip kayak hide or show BTN lah ini konsepnya
    let target = closestDiv;
    let thisMainComment = target.closest(".mainCommentContainer");
    // console.dir(thisMainComment);
    let idMainComment = thisMainComment.id;
    let replyCommentContainer = thisMainComment.querySelectorAll(
      `[data-comment=${idMainComment}]`
    );
    // console.dir(replyCommentContainer); //hasilnya array
    // replyCommentContainer.classList.toggle("opened"); // ini salah karena hasilnya array jadi make index dulu
    replyCommentContainer.forEach((reply) => reply.classList.add("opened"));
    let closesHideOrShowBtn = thisMainComment.querySelector(".hideOrShowBtn");
    // console.dir(closesHideOrShowBtn);
    closesHideOrShowBtn.querySelector("h3").innerHTML = "Hide";

    // (Alur) kalo form comment container udah ada maka gk perlu buat lagi penjelasan kode dibawah ini vvvv
    if (thisMainComment.querySelector(".replyFormCommentContainer")) return;
    else {
      let newCommentForm = document.createElement("DIV");
      newCommentForm.classList.add("mainCommentContainer");
      newCommentForm.classList.add("replyFormCommentContainer");
      newCommentForm.classList.add("replyComment");
      newCommentForm.classList.add("opened");
      newCommentForm.dataset.comment = idMainComment; //ngebikin data-comment dengan isinya = idMainComment biar bisa di show or hide
      newCommentForm.innerHTML = `
      <div class="commentContainer mainComment">
            <!-- box accesoris -->
            <div class="boxAccesorisSkillContainer BAS1 BAC BACF"></div>
            <div class="boxAccesorisSkillContainer BAS2 BAC BACF"></div>
            <div class="boxAccesorisSkillContainer BAS3 BAC BACF"></div>
            <div class="boxAccesorisSkillContainer BAS4 BAC BACF"></div>
  
            <!-- line accesoris -->
            <div class="lineAccesorisSkillContainer LAS1 LAC"></div>
            <div class="lineAccesorisSkillContainer LAS2 LAC"></div>
            <div class="lineAccesorisSkillContainer LAS3 LAC"></div>
            <div class="lineAccesorisSkillContainer LAS4 LAC"></div>
  
            <!-- acsesoris photo profile -->
            <div class="APP APP1"></div>
            <div class="APP APP2"></div>
            <!-- Photo Profile -->
            <div class="photoProfileCommentContainer">
              <div class="imgContainer">
                <img class="images" src="images/Ahya.jpg" alt="" />
              </div>
            </div>
  
            <!-- Username -->
            <div class="usernameCommentContainer">
              <h3>${currentUserUsername}</h3>
            </div>
  
            <!-- Text -->
            <div class="textCommentContainer">
              <form action="" class="commentForm replyForm">
                <input type="text" required class="textInputCommentForm" />
                <button type="submit" class="submitButtonComment">Submit</button>
              </form>
            </div>
          </div>
      `;
      thisMainComment.appendChild(newCommentForm); //trus dimasukin kedalam thisMainComment
    }
    // Ini comment reply container kalo atas form reply container ^^^^
    let thisReplyForm = thisMainComment.querySelector(".replyForm");
    // (Alur) kalo form reply disubmit maka bikin subMainComment baru dan ditempel di thisMainComment
    thisReplyForm.addEventListener("submit", function (e) {
      e.preventDefault();
      let textInputCommentForm = this.querySelector(".textInputCommentForm"); //this merujuk pada commentForm
      let inputValue = textInputCommentForm.value;

      let newMainCommentContainer = document.createElement("DIV");
      newMainCommentContainer.classList.add("mainCommentContainer");
      newMainCommentContainer.classList.add("subMainCommentContainer");
      newMainCommentContainer.classList.add("replyComment");
      newMainCommentContainer.classList.add("opened");
      idNumber += 1;
      newMainCommentContainer.id = `reply-${idNumber}`;
      newMainCommentContainer.dataset.comment = idMainComment;
      newMainCommentContainer.innerHTML = `
        <div class="commentContainer">
          <!-- box accesoris -->
          <div class="boxAccesorisSkillContainer BAS1 BAC"></div>
          <div class="boxAccesorisSkillContainer BAS2 BAC"></div>
          <div class="boxAccesorisSkillContainer BAS3 BAC"></div>
          <div class="boxAccesorisSkillContainer BAS4 BAC"></div>

          <!-- line accesoris -->
          <div class="lineAccesorisSkillContainer LAS1 LAC"></div>
          <div class="lineAccesorisSkillContainer LAS2 LAC"></div>
          <div class="lineAccesorisSkillContainer LAS3 LAC"></div>
          <div class="lineAccesorisSkillContainer LAS4 LAC"></div>

          <!-- acsesoris photo profile -->
          <div class="APP APP1"></div>
          <div class="APP APP2"></div>
          <!-- Photo Profile -->
          <div class="photoProfileCommentContainer">
            <div class="imgContainer">
              <img class="images" src="images/Ahya.jpg" alt="" />
            </div>
          </div>

          <!-- Username -->
          <div class="usernameCommentContainer">
            <h3>${currentUserUsername}</h3>
          </div>

          <!-- Text -->
          <div class="textCommentContainer">
            <p>
            "${inputValue}" <br>
            <br>
            12 08 2023
            </p>
          </div>

          <!-- footer -->
          <div class="footerComment">
            <div class="like likeBtn footer">
              <h3>Like 9999</h3>
            </div>
            <div class="reply replyBtn footer">
              <h3>Reply</h3>
            </div>
            <div class="hideOrShowBtn footer">
              <h3>Show</h3>
            </div>
          </div>
  `;
      textInputCommentForm.value = "";
      thisMainComment.appendChild(newMainCommentContainer);
      let newCommentForm = thisMainComment.querySelector(
        ".replyFormCommentContainer"
      );
      thisMainComment.removeChild(newCommentForm);
    });
  } else return;
});

// kenapa ini salah karena dia gk berfungsi buat element yang baru dibuat jadi lebih baik make yang atas
// replyBtn.forEach((reply) =>
//   reply.addEventListener("click", function (e) {
//     let target = e.target.classList.contains("replyBtn");
//     let thisMainComment = target.closest(".mainCommentContainer");
//     let idMainComment = thisMainComment.id;
//     let replyCommentContainer = thisMainComment.querySelectorAll(
//       `[data-comment=${idMainComment}]`
//     );
//     // console.dir(replyCommentContainer); //hasilnya array
//     // replyCommentContainer.classList.toggle("opened"); // ini salah karena hasilnya array jadi make index dulu
//     replyCommentContainer.forEach((reply) => reply.classList.toggle("opened"));
//     if (thisMainComment.querySelector(".replyFormCommentContainer")) return;
//     else {
//       let newCommentForm = document.createElement("DIV");
//       newCommentForm.classList.add("mainCommentContainer");
//       newCommentForm.classList.add("replyFormCommentContainer");
//       newCommentForm.classList.add("opened");
//       newCommentForm.dataset.comment = idMainComment;
//       newCommentForm.innerHTML = `
//       <div class="commentContainer mainComment">
//             <!-- box accesoris -->
//             <div class="boxAccesorisSkillContainer BAS1 BAC BACF"></div>
//             <div class="boxAccesorisSkillContainer BAS2 BAC BACF"></div>
//             <div class="boxAccesorisSkillContainer BAS3 BAC BACF"></div>
//             <div class="boxAccesorisSkillContainer BAS4 BAC BACF"></div>

//             <!-- line accesoris -->
//             <div class="lineAccesorisSkillContainer LAS1 LAC"></div>
//             <div class="lineAccesorisSkillContainer LAS2 LAC"></div>
//             <div class="lineAccesorisSkillContainer LAS3 LAC"></div>
//             <div class="lineAccesorisSkillContainer LAS4 LAC"></div>

//             <!-- acsesoris photo profile -->
//             <div class="APP APP1"></div>
//             <div class="APP APP2"></div>
//             <!-- Photo Profile -->
//             <div class="photoProfileCommentContainer">
//               <div class="imgContainer">
//                 <img class="images" src="images/Ahya.jpg" alt="" />
//               </div>
//             </div>

//             <!-- Username -->
//             <div class="usernameCommentContainer">
//               <h3>Username</h3>
//             </div>

//             <!-- Text -->
//             <div class="textCommentContainer">
//               <form action="" class="commentForm">
//                 <input type="text" required class="textInputCommentForm" />
//                 <button type="submit" class="submitButtonComment">Submit</button>
//               </form>
//             </div>
//           </div>
//       `;
//       thisMainComment.appendChild(newCommentForm);
//     }
//   })
// );

// Sekarang cara bikin comment baru berdasarkan form comment yang ada dipaling luar
//Jadi gw mau nih comment kebikin dari hasil text yang diinput dari si form trus pas disubmit
// langsung bikin element-element baru dari mainCommentContainer sampe abis tuh footer segala macam
// trus di append ke bodyCommmentContainer

// Ini buat bikin MainComment baru dari hasil form Comment yang paling luar
let commentForm = document.querySelector(".commentForm");
let bodyCommmentContainer = document.querySelector(".bodyCommentContainer");
commentForm.addEventListener("submit", function (e) {
  e.preventDefault(); //biar gk kemana-mana usernya jadi stay diweb itu aja
  let textInputCommentForm = this.querySelector(".textInputCommentForm"); //this merujuk pada commentForm
  let inputValue = textInputCommentForm.value;

  let newMainCommentContainer = document.createElement("DIV");
  newMainCommentContainer.classList.add("mainCommentContainer");
  newMainCommentContainer.classList.add("mainComment");
  newMainCommentContainer.classList.add("opened");
  idNumber += 1;
  newMainCommentContainer.id = `comment-${idNumber}`;
  newMainCommentContainer.innerHTML = `
        <div class="commentContainer">
          <!-- box accesoris -->
          <div class="boxAccesorisSkillContainer BAS1 BAC"></div>
          <div class="boxAccesorisSkillContainer BAS2 BAC"></div>
          <div class="boxAccesorisSkillContainer BAS3 BAC"></div>
          <div class="boxAccesorisSkillContainer BAS4 BAC"></div>

          <!-- line accesoris -->
          <div class="lineAccesorisSkillContainer LAS1 LAC"></div>
          <div class="lineAccesorisSkillContainer LAS2 LAC"></div>
          <div class="lineAccesorisSkillContainer LAS3 LAC"></div>
          <div class="lineAccesorisSkillContainer LAS4 LAC"></div>

          <!-- acsesoris photo profile -->
          <div class="APP APP1"></div>
          <div class="APP APP2"></div>
          <!-- Photo Profile -->
          <div class="photoProfileCommentContainer">
            <div class="imgContainer">
              <img class="images" src="images/Ahya.jpg" alt="" />
            </div>
          </div>

          <!-- Username -->
          <div class="usernameCommentContainer">
            <h3>${currentUserUsername}</h3>
          </div>

          <!-- Text -->
          <div class="textCommentContainer">
            <p>
            "${inputValue}" <br>
            <br>
            12 08 2023
            </p>
          </div>

          <!-- footer -->
          <div class="footerComment">
            <div class="like likeBtn footer">
              <h3>Like 9999</h3>
            </div>
            <div class="reply replyBtn footer">
              <h3>Reply</h3>
            </div>
            <div class="hideOrShowBtn footer">
              <h3>Show</h3>
            </div>
          </div>
  `;
  textInputCommentForm.value = "";
  bodyCommmentContainer.appendChild(newMainCommentContainer);
});

window.addEventListener("scroll", function (e) {
  let loginContainerHeight = document.querySelector(".leftSide").clientHeight;
  let aboutContainerHeight =
    document.querySelector(".aboutContainer").clientHeight;
  let lightConesContainerHeight = document.querySelector(
    ".lightConesContainer"
  ).clientHeight;
  let currentWindowScrollY = window.scrollY;
  // console.log(currentWindowScrollY);
  let targetWindowScrollY =
    loginContainerHeight + aboutContainerHeight + lightConesContainerHeight;
  // console.log(targetWindowScrollY);
  if (currentWindowScrollY >= targetWindowScrollY) {
    if (currentUserUsername == "" && currentUserPassword == "") {
      let textInputCommentForm = this.document.querySelectorAll(
        ".textInputCommentForm"
      );
      textInputCommentForm.forEach((textInput) => {
        textInput.placeholder =
          "You are not logged in, Log In or Create Account to make new Comment";
        textInput.disabled = true;
      });
      let submitButtonComment = this.document.querySelectorAll(
        ".submitButtonComment"
      );
      submitButtonComment.forEach((submitBtn) => (submitBtn.disabled = true));
    } else if (currentUserUsername != "" && currentUserPassword != "") {
      let textInputCommentForm = this.document.querySelectorAll(
        ".textInputCommentForm"
      );
      textInputCommentForm.forEach((textInput) => {
        textInput.placeholder = "Write your comment.....";
        textInput.disabled = false;
      });
      let submitButtonComment = this.document.querySelectorAll(
        ".submitButtonComment"
      );
      submitButtonComment.forEach((submitBtn) => (submitBtn.disabled = false));
    }
  }
});
