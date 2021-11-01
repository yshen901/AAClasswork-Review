document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  // --- your code here!
  const input = document.getElementsByClassName("list-container");
  input[0].addEventListener("submit", (e) => {
    e.preventDefault();

    let place = e.target.children[0].value;
    document.getElementById("sf-places").innerHTML += `
      <li>${place}</li>
    `;

    e.target.children[0].value="";
  });



  // adding new photos

  // --- your code here!
  const togglePhotoForm = () => {
    const form = document.getElementsByClassName('photo-form-container')[0];
    if (form.classList.contains("hidden"))
      form.classList.remove("hidden");
    else
      form.classList.add("hidden");
  };

  const photoButton = document.getElementsByClassName('photo-show-button')[0];
  photoButton.addEventListener("click", e => {
    e.preventDefault();
    togglePhotoForm();
  });

  const photoForm = document.getElementsByClassName("photo-form-container")[0];
  photoForm.addEventListener("submit", e => {
    e.preventDefault();

    let url = e.target.children[0].value;
    e.target.children[0].value = "";

    document.getElementsByClassName("dog-photos")[0].innerHTML += `
      <li>
        <img src="${url}"></img>
      </li>
    `;
  });
});
