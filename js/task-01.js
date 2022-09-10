const itemsList = document.querySelectorAll(".item");
console.log(`
Number of categories: ${itemsList.length}`);

itemsList.forEach((item) => {
  const titleRef = item.querySelector("h2");
  const elementsRef = item.querySelectorAll("li");
  console.log(`
Category: ${titleRef.textContent}
Elements: ${elementsRef.length}`);
});
