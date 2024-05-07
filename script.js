const a = document.getElementById("user-input");
document.querySelectorAll(".operations").forEach(function (item) {
  item.addEventListener("click", function (e) {
    const b = a.innerText.trim().slice(-1);
    if (!isNaN(b) && e.target.innerText === "=") {
      a.innerText = eval(a.innerText);
    }
    else if (e.target.innerText === "AC") {
      a.innerText = "0";
    }
    else if (e.target.innerText === "DEL") {
      a.innerText = a.innerText.slice(0, -1);
      
      if (a.innerText.length === 0) {
        a.innerText = "0";
      }
    }
    else {
      if (!isNaN(b)) {
        a.innerText += e.target.innerText;
      }
    }
  });
});
const number=document.querySelectorAll(".numbers").forEach(function (item) {
  item.addEventListener("click", function (e) {
    if (a.innerText === "0") {
      a.innerText = "";
    }
    a.innerText += e.target.innerText.trim();
  });
});
