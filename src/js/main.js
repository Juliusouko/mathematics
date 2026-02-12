function onTelegramAuth(user) {
  console.log("Function triggered");

  alert("Logged in as " + user.first_name);

  fetch("https://bushless-stochastically-colleen.ngrok-free.dev/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => {
      console.log("Fetch response received");
      return res.json();
    })
    .then((data) => {
      console.log("Server response:", data);
    })
    .catch((err) => {
      console.error("Fetch error:", err);
    });
}
