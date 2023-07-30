const form = document.querySelector("#search-form");
const usernameInput = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-btn");

addEventListenerToSearchBtn();

function addEventListenerToSearchBtn() {
  searchBtn.addEventListener("click", async (e) => {
    e.preventDefault();

      await fetchUser(usernameInput.value);
  });
}

async function fetchUser(usernameValue) {
  try {
    const resp = await fetch(`https://api.github.com/users/${usernameValue}`);
    const parsedResp = await resp.json();
    console.log("parsedResp: ", parsedResp);
  } catch (err) {
    console.error(err);
  }
}

function applyUserInfo(user) {
  updateProfileSection(user);
  updateBioSection(user);
}

function updateProfileSection(data) {
  const { avatar_url, name, html_url, login, created_at } = data;
  const externalUserImg = document.querySelector("#external-user-img");
  const internalUserImg = document.querySelector("#internal-user-img");
  const fullName = document.querySelector("#fullname");
  const username = document.querySelector("#username");
  const creationDate = document.querySelector("#creation-date");

  externalUserImg.src = avatar_url;
  internalUserImg.src = avatar_url;
  fullName.innerHTML = name;
  username.href = html_url;
  username.innerHTML = `@${login}`;
  creationDate.innerHTML = getFormattedDate(created_at);
}

function updateBioSection(data) {
  const { bio } = data;
  const bioInfo = document.querySelector("#bio-info");

  bioInfo.innerHTML = bio;
}

function getFormattedDate(date) {
  const parsedDate = new Date(date);

  return parsedDate.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
