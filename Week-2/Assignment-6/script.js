//--------------------Variables---------------------------//
const $banner = $(".banner");
const $ctaBtn = $(".cta-btn");
const $groupBoxHidden = $(".group-box-hidden");

//-------------------default loading-----------------------//

$groupBoxHidden.hide();

//-------------------action trigger-----------------------//

$banner.on("click", () => {
  $banner.html("<h1>Have a GoodTime!<h1/>");
});

$ctaBtn.on("click", () => {
  $groupBoxHidden.show();
});
