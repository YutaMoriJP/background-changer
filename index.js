const btn1 = document.getElementById("one");
const btn2 = document.getElementById("two");

btn1.addEventListener("click", () => {
  import("./module/all_modules").then((Module) => {
    const left = document.querySelector(".left");
    left.style.backgroundColor = Module.colorGenerator(Module.randomNumber);
  });
});

btn2.addEventListener("click", () => {
  import("./module/all_modules").then((Module) => {
    const right = document.querySelector(".right");
    right.style.backgroundColor = Module.colorGenerator(Module.randomNumber);
  });
});
