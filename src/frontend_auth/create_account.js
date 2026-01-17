document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("button");

  const firstName = document.getElementById("first_name");
  const lastName = document.getElementById("last_name");
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  button.addEventListener("click", async () => {
    const form = document.querySelector("form");

    const formData = new FormData(form);
    const formObject = Object.fromEntries(formData);
    console.log(formObject);

    fetch("http://localhost:3000/api/")
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then(data => {
        console.log('Retrieved text:', data);
      })

    form.reset();
  });
});
