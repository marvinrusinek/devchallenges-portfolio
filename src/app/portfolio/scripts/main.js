/* replace email link to avoid spam bots */
function setEmail() {
  let emailName = 'marvinrusinek';
  let at = '@';
  let domain = 'gmail.com';

  let email = document.getElementById("email");
  email.innerHTML = emailName + at + domain;
  email.setAttribute('href', 'mailto:' + emailName + at + domain);
}

window.onload = function() {
  setEmail();
}

/* testimonials slick-carousel */
$(document).ready(function() {
  $(".my-testimonials").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: 'ease',
    autoplay: true,
    autoplaySpeed: 4000,
    centerMode: true
  });
});
