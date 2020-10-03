window.onload = () => {
  fetch("https://serverless.pedrothejoker.vercel.app/api/meals")
    .then((response) => response.json())
    .then((data) => console.log(data));
};
