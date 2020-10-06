const stringToHTML = (s) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(s, "text/html");
  return doc.body.firstChild;
};

const renderItem = (item) => {
  const element = stringToHTML(`<li data-id="${item._id}">${item.name}</li>`);

  element.addEventListener("click", () => {
    const mealsList = document.getElementById("meals-list");
    array
      .from(mealsList.children)
      .forEach((x) => x.classList.remove("selected"));
    element.classList.add("selected");
    const mealsIdInput = document.getElementById("meals-id");
    mealsIdInput.value = item._id;
  });

  return element;
};

window.onload = () => {
  const orderForm = document.getElementById("order");
  orderForm.onsubmit = (e) => {
    e.preventDefault();
    const mealId = document.getElementById("meals-id");
    const mealIdValue = mealId.value;
    if (!mealsIdvalue) {
      alert("Debes seleccionar un dato");
      return;
    }

    const order = {
      meal_id: mealIdValue,
      user_id: "Puma",
    };
  };
  fetch(
    "https://serverless.pedrothejoker.vercel.app/api/meals" /* {
    method: "GET", // POST, PUT, DELETE
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "content-type": "application/json",
    },
    redirect: "follow",
    body: JSON.stringify({ user: "lala", password: "1234" }),
   }*/
  )
    .then((response) => response.json())
    .then((data) => {
      const mealsList = document.getElementById("meals-list");
      const submit = document.getElementById("submit");
      const listItems = data.map(renderItem);
      mealsList.removeChild(mealsList.firstElementChild);
      listItems.forEach((element) => mealsList.appendChild(element));
      submit.removeAttribute("disabled");
    });
};
