const form = document.querySelector("form");
const toast = document.getElementById("toast");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const email = form.email.value;
  const button = form.querySelector("button");
  button.disabled = true;

  try {
    const response = await fetch(
      "https://api.aswito.com/subscribe",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
        credentials: "include"
      },
    );

    const data = await response.json();

    toast.innerText = data.message;
    toast.style.backgroundColor = "#4CAF50";
    toast.classList.add("show");

    form.reset();

    setTimeout(() => toast.classList.remove("show"), 3000);
  } catch (error) {
    console.error(error);
    toast.innerText = "Something went wrong. Please try again.";
    toast.style.backgroundColor = "f44336";
    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  } finally {
    button.disabled = false;
  }
});
