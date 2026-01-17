// aswito home
document.getElementById("btn-home").onclick = () => {
  mainContent.style.display = "block";
  stories.style.display = "none";
  logIn.style.display = "none";
};
// DOM variables
let signIn = document.getElementById("signin-icon");
let mainContent = document.getElementById("main-content");
let stories = document.getElementById("stories");
let logIn = document.getElementById("login-page");

signIn.onclick = () => {
  mainContent.style.display = "none";
  stories.style.display = "none";
  logIn.style.display = "block";
};
// go back
document.getElementById("go-back").onclick = () => {
  logIn.style.display = "none";
  stories.style.display = "none";
  mainContent.style.display = "block";
};
// stories
document.getElementById("btn-stories").onclick = () => {
  mainContent.style.display = "none";
  logIn.style.display = "none";
  stories.style.display = "block";
};
// dark & light mode
function updateThemeIcon() {
  document.querySelector(".theme").innerText = document.body.classList.contains(
    "dark"
  )
    ? "☀️"
    : "☀️";
}
function toggleTheme() {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");

  updateThemeIcon();
}
// Load dark mode on start
if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark");
}
updateThemeIcon();
// telegram-auth
function onTelegramAuth(user) {
  console.log("Telegram Login Data:", user);

  // Save session
  localStorage.setItem("telegramUser", JSON.stringify(user));

  showUser(user);
}
// show user profile
function showUser(user) {
  document.getElementById("loginContainer").style.display = "none";
  document.getElementById("userBox").style.display = "block";

  document.getElementById("userPic").src =
    user.photo_url || "https://via.placeholder.com/100";

  document.getElementById("userName").innerText =
    user.first_name + (user.last_name ? " " + user.last_name : "");

  document.getElementById("userUsername").innerText = user.username
    ? "@" + user.username
    : "(No username)";
}
const savedUser = localStorage.getItem("telegramUser");
if (savedUser) {
  showUser(JSON.parse(savedUser));
}
// logout
function logout() {
  localStorage.removeItem("telegramUser");
  location.reload();
}
