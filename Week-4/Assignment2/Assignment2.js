function ajax(src, callback) {
  const xhr = new XMLHttpRequest();
  const SUCCESS = 4;
  xhr.onreadystatechange = () => {
    if (xhr.readyState == SUCCESS) {
      callback(JSON.parse(xhr.responseText));
    }
  };
  xhr.open("GET", src);
  xhr.send();
}

function render(data) {
  const htmlData = document.querySelector("main");
  let newList = document.createElement("div");
  for (i = 0; i < data.length; i++) {
    let newName = document.createElement("h1");
    newName.innerHTML = data[i].name;
    let newPrice = document.createElement("p");
    newPrice.innerHTML = data[i].price;
    let newDescription = document.createElement("p");
    newDescription.innerHTML = data[i].description;

    newList.appendChild(newName);
    newList.appendChild(newPrice);
    newList.appendChild(newDescription);
  }
  htmlData.appendChild(newList);
}

//following is for testing
ajax(
  "https://appworks-school.github.io/Remote-Assignment-Data/products",
  function (response) {
    render(response);
  }
);
// you should get product information in JSON format and render data in the page
