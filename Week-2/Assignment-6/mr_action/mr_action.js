//--------------------Variables---------------------------//
const $mrActionWrapper = "<div class = mr-action-wrapper></div>";
const $mrActionTitle = "<h3 class = mr-action-title >Mr Action :</h3>";
const $mrActionSay1 =
  "<p id = mr-action-say1 class = mr-action-say>Calling.......</p>";
const $mrActionSay2 =
  "<p id = mr-action-say2 class = mr-action-say>Hi! Mister Action Here!</p>";
const $mrActionSay3 =
  "<p id = mr-action-say3 class = mr-action-say>What?! Wrong Number?</p>";
const $mrActionSay4 =
  "<p id = mr-action-say4 class = mr-action-say>..........................</p>";
const $mrActionSay5 =
  "<p id = mr-action-say5 class = mr-action-say>Bye then!</p>";
const $mrActionCall =
  "<img class = mr-action-call src=mr_action/call.png width=100%  alt= calling> </img>";
const $mrActionPic =
  "<img class = mr-action-pic src=mr_action/Mister_Action_01.webp width=100%  alt= Mr_Action_in_DC_comics> </img>";

//-------------------default loading-----------------------//

$("body").append($mrActionWrapper);
$(".mr-action-wrapper").append(
  $mrActionTitle,
  $mrActionCall,
  $mrActionPic,
  $mrActionSay1,
  $mrActionSay2,
  $mrActionSay3,
  $mrActionSay4,
  $mrActionSay5
);

//-------------------action trigger-----------------------//

$ctaBtn.on("click", () => {
  $(".mr-action-wrapper").fadeIn(1000);
  $(".mr-action-call")
    .fadeOut("fast")
    .fadeIn("fast")
    .fadeOut("fast")
    .fadeIn("fast")
    .fadeOut("fast")
    .fadeIn("fast")
    .fadeOut("fast");
  $(".mr-action-pic").delay(1400).fadeIn("fast");
  $("#mr-action-say1").fadeIn(200).delay(1000).fadeOut(200);
  $("#mr-action-say2").delay(1400).fadeIn(500).delay(2000).fadeOut(500);
  $("#mr-action-say3").delay(4400).fadeIn(500).delay(2000).fadeOut(500);
  $("#mr-action-say4").delay(7400).fadeIn(500).delay(2000).fadeOut(500);
  $("#mr-action-say5").delay(10400).fadeIn(500).delay(2000);
  $(".mr-action-wrapper")
    .delay(12500)
    .animate({ right: "-500px" })
    .fadeOut(10)
    .animate({ right: "20px" });
});
