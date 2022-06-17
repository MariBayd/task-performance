const contacts = document.getElementsByClassName("contacts")[0];
const stickyHeader = document.getElementsByClassName("stickyHeader")[0];
const contactHeight = 18;

function addContacts(indexStart, n) {
  const fragment = document.createDocumentFragment();
  for (let i = indexStart; i < n; i++) {
    const child = document.createElement("div");
    child.textContent = i;
    child.classList.add("contact");
    fragment.appendChild(child);
  }
  contacts.appendChild(fragment);
}


contacts.addEventListener("scroll", () => {
  const items = contacts.getElementsByClassName("contact").length;
  const topItemIndex = Math.floor(contacts.scrollTop / contactHeight);

  if (topItemIndex + 18 > items) {
    addContacts(18, items);
  }
  stickyHeader.textContent = topItemIndex;
});

addContacts(0, 100);
