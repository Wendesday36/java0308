window.addEventListener("load", init);
function init() {
  const articleElem = document.querySelectorAll("article");

  articleElem[0].innerHTML = "<button>Katt ide!</button>";
  const gombElem = document.querySelector("article button");
  gombElem.addEventListener("click", function () {
    console.log("A gombra kattintottak!");
  });
  kepek(articleElem);
}

function kepek(articleElem) {
  articleElem[0].innerHTML +=
    '<div><img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Fnature.html&psig=AOvVaw305LougQ_YVOqHSBu1yRyW&ust=1678349953478000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNDF2Pfyy_0CFQAAAAAdAAAAABAa" alt="" ></div>';
}
