(function () {
  let rotateY = 0;
  let rotateX = 0;

  document.onkeydown = function (e) {
    if (e.keyCode === 37) {
      rotateY -= 50;
    } else if (e.keyCode === 38) {
      rotateX += 50;
    } else if (e.keyCode === 39) {
      rotateY += 50;
    } else if (e.keyCode === 40) {
      rotateX -= 50;
    }

    document.querySelector(".cube").style.transform = "rotateY(" + rotateY + "deg)" + "rotateX(" + rotateX + "deg)";
  };
})();
