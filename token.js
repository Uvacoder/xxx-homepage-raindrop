// 💧 Enter Your Raindrop Token here 👇 //
let raindropToken = "6a1a087d-9e47-4cbe-9b5c-bd4b94fbe6f0";

let token;

if (raindropToken == "6a1a087d-9e47-4cbe-9b5c-bd4b94fbe6f0") {
  if (
    localStorage.token == "null" ||
    localStorage.token == "undefined" ||
    localStorage.token == undefined
  ) {
    const localToken = prompt(
      "🏠 Welcome to Raindrop HomePage\n\nplease enter your test-token\nif you dont know how to do it, please visit the url below\n\nℹ️ https://github.com/Virgile-fr/Raindrop-HomePage"
    );
    localStorage.setItem("token", localToken);
    token = localStorage.token;
  } else {
    token = localStorage.token;
  }
} else {
  token = raindropToken;
}
