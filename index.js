fetch("https://backend-web-app-test.onrender.com/", {
  method: "GET",
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("Ett fel uppstod", error);
  });
