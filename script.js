document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    var clockdiv = document.getElementsByClassName("clockdiv");
    var countDownDate = new Array();
    for (var i = 0; i < clockdiv.length; i++) {
      countDownDate[i] = new Array();
      countDownDate[i]["el"] = clockdiv[i];
      countDownDate[i]["time"] = new Date(
        clockdiv[i].getAttribute("data-date")
      ).getTime();
      countDownDate[i]["days"] = 0;
      countDownDate[i]["hours"] = 0;
      countDownDate[i]["seconds"] = 0;
      countDownDate[i]["minutes"] = 0;
    }

    var countdownfunction = setInterval(function () {
      for (var i = 0; i < countDownDate.length; i++) {
        var now = new Date().getTime();
        var distance = countDownDate[i]["time"] - now;
        countDownDate[i]["days"] = Math.floor(distance / (1000 * 60 * 60 * 24));
        countDownDate[i]["hours"] = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        countDownDate[i]["minutes"] = Math.floor(
          (distance % (1000 * 60 * 60)) / (1000 * 60)
        );
        countDownDate[i]["seconds"] = Math.floor(
          (distance % (1000 * 60)) / 1000
        );

        if (distance < 0) {
          countDownDate[i]["el"].querySelector(".days").innerHTML = 0;
          countDownDate[i]["el"].querySelector(".hours").innerHTML = 0;
          countDownDate[i]["el"].querySelector(".minutes").innerHTML = 0;
          countDownDate[i]["el"].querySelector(".seconds").innerHTML = 0;
        } else {
          countDownDate[i]["el"].querySelector(".days").innerHTML =
            countDownDate[i]["days"];
          countDownDate[i]["el"].querySelector(".hours").innerHTML =
            countDownDate[i]["hours"];
          countDownDate[i]["el"].querySelector(".minutes").innerHTML =
            countDownDate[i]["minutes"];
          countDownDate[i]["el"].querySelector(".seconds").innerHTML =
            countDownDate[i]["seconds"];
        }
      }
    }, 1000);
  }
});


const btn = document.getElementById("btn");
const path = "./img/";


let getBackground = () => {
  // Generating a random number between 1 and 150 

  let id = Math.floor(Math.random() * 7) + 1;

  const finalUrl = path + id + ".jpg";
  
  console.log(finalUrl);
  var element = document.getElementById("body")
element.style.backgroundImage = "url(" + finalUrl + ")";
  
};

btn.addEventListener("click", getBackground);
getBackground()
