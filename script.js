const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  const prices = document.querySelectorAll(".prices");
  let total = 0;

  prices.forEach((item) => {
    total += Number(item.textContent);
  });

  // Remove old total row if it exists
  const old = document.getElementById("ans");
  if (old) {
    old.parentElement.remove();
  }

  const tr = document.createElement("tr");
  const td = document.createElement("td");

  td.id = "ans";
  td.colSpan = "2";
  td.textContent = total;

  tr.appendChild(td);
  document.querySelector("table").appendChild(tr);
};

getSumBtn.addEventListener("click", getSum);

