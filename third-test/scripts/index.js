const form = document.querySelector("#search-form");
const usernameInput = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-btn");

addEventListenerToSearchBtn();
populateDomWithDefaultData();

function populateDomWithDefaultData() {
  document.addEventListener("DOMContentLoaded", () => {
    fetchUser("pedrohamoura-git");
  });
}

function addEventListenerToSearchBtn() {
  searchBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    if (!isUsernameValid(usernameInput.value)) {
      showErrorMessage();
    } else {
      await fetchUser(usernameInput.value);
    }
  });
}

function isUsernameValid(username) {
  if (!username.length) return false;
  return !hasWhiteSpace(username);
}

function hasWhiteSpace(username) {
  // looking for spaces, tabs and line breakers
  return /\s/.test(username);
}

async function fetchUser(usernameValue) {
  try {
    const response = await fetch(
      `https://api.github.com/users/${usernameValue}`
    );
    const result = await response.json();

    if (!response.ok) {
      throw new Error(response);
    }

    applyUserInfo(result);
  } catch (error) {
    console.error(error);
    return showErrorMessage();
  }
}

function showErrorMessage(
  msg = "Unable to fetch data. Please, check the username and try again."
) {
  const errorWrapper = document.querySelector("#error-wrapper");
  const errorMsg = document.querySelector("#error-msg");
  errorMsg.innerHTML = msg;

  errorWrapper.setAttribute("class", "scale-in");
  setTimeout(() => {
    errorWrapper.setAttribute("class", "scale-out");
  }, 3500);
}

function applyUserInfo(user) {
  updateProfileSection(user);
  updateBioSection(user);
  updateActivitySection(user);
  updateContactSection(user);
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

function updateActivitySection(data) {
  const { public_repos, followers, following } = data;
  const reposQuant = document.querySelector("#repos-quant");
  const followersQuant = document.querySelector("#followers-quant");
  const followingQuant = document.querySelector("#following-quant");

  reposQuant.innerHTML = public_repos;
  followersQuant.innerHTML = followers;
  followingQuant.innerHTML = following;
}

function updateContactSection(data) {
  const { location, twitter_username, blog, company } = data;
  const locationName = document.querySelector("#location-name");
  const twitter = document.querySelector("#twitter-link");
  const personalSite = document.querySelector("#personal-site");
  const companyName = document.querySelector("#company");

  locationName.innerHTML = location;
  removeElementDisabledClass(location);

  twitter.href = `https://twitter.com/${twitter_username}`;
  twitter.innerHTML = `@${twitter_username}`;
  removeElementDisabledClass(twitter);

  personalSite.href = blog;
  personalSite.innerHTML = blog;
  removeElementDisabledClass(personalSite);

  companyName.href = blog;
  companyName.innerHTML = company;
  removeElementDisabledClass(company);
}

function getFormattedDate(date) {
  const parsedDate = new Date(date);

  return parsedDate.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function removeElementDisabledClass(el) {
  el.classList.remove("disabled");
}
