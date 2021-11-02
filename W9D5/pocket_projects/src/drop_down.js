
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

dogLinkCreator = (obj) => {
  const dogElements = [];
  
  let a, li;
  for (const [key, val] of Object.entries(obj)) {
    a = document.createElement("a");
    a.innerHTML = key;
    a.setAttribute("href", val);
  
    li = document.createElement("li");
    li.classList.add("dog-link");
    li.append(a);
  
    dogElements.push(li);
  }

  return dogElements;
}

attachDogLinks = (obj) => {
  const dogLinks = dogLinkCreator(obj);

  const dogListElement = document.getElementsByClassName("drop-down-dog-list")[0];
  for (let i = 0; i < dogLinks.length; i++)
    dogListElement.append(dogLinks[i]);
  dogListElement.classList.add("hidden");

  const dogListNav = document.getElementsByClassName("drop-down-dog-nav")[0];
  dogListNav.addEventListener("mouseenter", e => {
    dogListElement.classList.remove("hidden");
  });
  dogListNav.addEventListener("mouseleave", e => {
    dogListElement.classList.add("hidden");
  });
}

attachDogLinks(dogs);
