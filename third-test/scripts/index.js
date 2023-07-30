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
