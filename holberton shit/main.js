const spotName = document.querySelector(".spot");
const pic1 = document.querySelector(".pic1");
const pic2 = document.querySelector(".pic2");
const spotInfo = document.querySelector(".spot-info");
const day = document.querySelector(".day");
const day1Btn = document.querySelector(".day1-btn");
const day2Btn = document.querySelector(".day2-btn");
const day3Btn = document.querySelector(".day3-btn");
const backGr = document.querySelector(".bg-yellow");

day1Btn.addEventListener("click", () => {
  backGr.style.backgroundColor = "#f0c038";
  spotName.innerText = "Kotor";
  day.innerText = "Day 1";
  day2Btn.style.fontWeight = "normal";
  day3Btn.style.fontWeight = "normal";
  day1Btn.style.fontWeight = "bold";
  spotInfo.innerText =
    "Kotor is situated on Montenegro's coastline and boasts of a fortified town overlooking the magnificent Mt. Lovćen limestone cliffs. Its medieval old town has numerous Romanesque churches, including Kotor Cathedral, and the Maritime Museum that delves into local seafaring history. The town is bustling with tourists who come to experience its stunning scenery and winding streets lined with squares.";
  pic1.src = "./imgs/kotor1.jpg";
  pic2.src = "./imgs/kotor2.jpg";
});

day2Btn.addEventListener("click", () => {
  // Function here

  backGr.style.backgroundColor = "red";
  spotName.innerText = "Petrovac";
  day.innerText = "Day 2";
  day2Btn.style.fontWeight = "bold";
  day3Btn.style.fontWeight = "normal";
  day1Btn.style.fontWeight = "normal";
  spotInfo.innerText =
    "Petrovac, also referred to as Petrovac na Moru, is a charming coastal town situated in Montenegro and falls under the Budva Municipality. It lies between Bar and Budva on the coast and can be reached by an old mountain road from Podgorica. This place is famous for its 600 m long sandy beach which attracts many tourists each year.";
  pic1.src = "./imgs/petrovac1.jpeg";
  pic2.src = "./imgs/petrovac2.jpeg";
});

day3Btn.addEventListener("click", () => {
  // Function here
  backGr.style.backgroundColor = "green";
  spotName.innerText = "Budva";
  day.innerText = "Day 3";
  day3Btn.style.fontWeight = "bold";
  day2Btn.style.fontWeight = "normal";
  day1Btn.style.fontWeight = "normal";
  spotInfo.innerText =
    "Budva is a Montenegrin town located on the Adriatic Sea, famous for its sandy beaches and vibrant nightlife. The historical center of Budva, known as Stari Grad, is surrounded by Venetian-built stone walls that enclose narrow streets. The area features a seaside citadel and religious sites such as the Church of Santa Maria in Punta dating back to the 9th century.";
  pic1.src = "./imgs/budva1.jpeg";
  pic2.src = "./imgs/budva2.jpeg";
});
