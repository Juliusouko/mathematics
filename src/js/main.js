function onTelegramAuth(user) {
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
