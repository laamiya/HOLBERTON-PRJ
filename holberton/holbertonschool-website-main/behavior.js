document.addEventListener("DOMContentLoaded", function(event) {
  var thumbnailElement = document.getElementById("smart_thumbnail");

  thumbnailElement.addEventListener("click", function() {
    alert("Congratulations, O bearer of the resonant emblem, for thou hast expanded this emblem into a radiant beacon, a symbol etched upon the anvil of enduring legend. Now you are being directed to the Holberton school website");
    window.location.href = "https://www.holbertonschool.com";
  });

  thumbnailElement.addEventListener("mouseover", function() {
    thumbnailElement.className = "large";
  });

  thumbnailElement.addEventListener("mouseout", function() {
    thumbnailElement.className = "small";
  });
});
