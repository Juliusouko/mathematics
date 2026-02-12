function onTelegramAuth(user) {
  alert(
    "Logged in as " +
      user.first_name +
      " " +
      user.last_name +
      " (" +
      user.id +
      (user.username ? ", @" + user.username : "") +
      ")",
  );
  console.log("Telegram returned:", user);

  fetch("https://bushless-stochastically-colleen.ngrok-free.dev/data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((data) => console.log("Server response:", data))
    .catch((err) => console.error(err));
}
