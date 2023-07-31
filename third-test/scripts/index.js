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
  const reposQuantityElement = document.querySelector("#repos-quantity");
  const followersQuantityElement = document.querySelector("#followers-quantity");
  const followingQuantityElement = document.querySelector("#following-quantity");

  reposQuantityElement.innerHTML = public_repos;
  followersQuantityElement.innerHTML = followers;
  followingQuantityElement.innerHTML = following;
}

function updateContactSection(data) {
  const { location, twitter_username, blog, company } = data;
  const locationElement = document.querySelector("#location-name");
  const twitterElement = document.querySelector("#twitter-link");
  const personalSiteElement = document.querySelector("#personal-site");
  const companyNameElement = document.querySelector("#company");

  locationElement.innerHTML = location;
  removeElementDisabledClass(locationElement);

  twitterElement.href = `https://twitter.com/${twitter_username}`;
  twitterElement.innerHTML = `@${twitter_username}`;
  removeElementDisabledClass(twitterElement);

  personalSiteElement.href = blog;
  personalSiteElement.innerHTML = blog;
  removeElementDisabledClass(personalSiteElement);

  companyNameElement.href = blog;
  companyNameElement.innerHTML = company;
  removeElementDisabledClass(companyNameElement);
}

function getFormattedDate(date) {
  const parsedDate = new Date(date);

  return parsedDate.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function removeElementDisabledClass(element) {
  element.classList.remove("disabled");
}
