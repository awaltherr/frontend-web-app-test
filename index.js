fetch("https://backend-web-app-test.onrender.com/", {
  method: "GET",
})
  .then((res) => res.json())
  .then((data) => {
    document.getElementById(
      "root"
    ).textContent = `Data från backend:  ${data.hejsan}`;
  })
  .catch((error) => {
    console.log("Ett fel uppstod", error);
  });
