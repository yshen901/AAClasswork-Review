
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
  if (htmlElement.children.length > 0)
    htmlElement.innerHTML = "";
  htmlElement.innerHTML += `
    <p>${string}</p>
  `;
};

htmlGenerator('Party Time.', partyHeader);