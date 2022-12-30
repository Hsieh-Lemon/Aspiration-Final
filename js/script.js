  $(document).ready(function(){

  
  // When the user scrolls the page, execute myFunction
  window.onscroll = function () { myFunction() };

  // Get the header
  var header = document.getElementById("myHeader");

  // Get the offset position of the navbar
  var sticky = header.offsetTop;

  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
      if (window.pageYOffset > sticky) {
          header.classList.add("sticky");
      } else {
          header.classList.remove("sticky");
      }
  }
  let openingAnimWindow = document.querySelector('#openingLottie');
  let openingAnimData = {
    container: openingAnimWindow,
    animType: 'svg',
    loop: true,
    prerender: true,
    autoplay: true,
    path: 'json/fly-gif-maker.mp4.lottie.json',
  };
  let openingAnim = bodymovin.loadAnimation(openingAnimData);

  let openingAnimWindow2 = document.querySelector('#openingLottie2');
  let openingAnimData2 = {
    container: openingAnimWindow2,
    animType: 'svg',
    loop: true,
    prerender: true,
    autoplay: true,
    path: 'json/power-gif-maker.mp4.lottie.json'
  };
  let openingAnim2 = bodymovin.loadAnimation(openingAnimData2);

  let openingAnimWindow3 = document.querySelector('#openingLottie3');
  let openingAnimData3 = {
    container: openingAnimWindow3,
    animType: 'svg',
    loop: true,
    prerender: true,
    autoplay: true,
    path: 'json/ezgif.com-gif-maker.mp4.lottie.json'
  };
  let openingAnim3 = bodymovin.loadAnimation(openingAnimData3);

  let openingAnimWindow4 = document.querySelector('#openingLottie4');
  let openingAnimData4 = {
    container: openingAnimWindow4,
    animType: 'svg',
    loop: true,
    prerender: true,
    autoplay: true,
    path: 'json/teleport-gif-maker.mp4.lottie.json'
  };
  let openingAnim4 = bodymovin.loadAnimation(openingAnimData4);

  let openingAnimWindow5 = document.querySelector('#openingLottie5');
  let openingAnimData5 = {
    container: openingAnimWindow5,
    animType: 'svg',
    loop: true,
    prerender: true,
    autoplay: true,
    path: 'json/pretty-gif-maker.mp4.lottie.json'
  };
  let openingAnim5 = bodymovin.loadAnimation(openingAnimData5);

  let openingAnimWindow6 = document.querySelector('#openingLottie6');
  let openingAnimData6 = {
    container: openingAnimWindow6,
    animType: 'svg',
    loop: true,
    prerender: true,
    autoplay: true,
    path: 'json/big-gif-maker.mp4.lottie.json'
  };
  let openingAnim6 = bodymovin.loadAnimation(openingAnimData6);

  let openingAnimWindow7 = document.querySelector('#openingLottie7');
  let openingAnimData7 = {
    container: openingAnimWindow7,
    animType: 'svg',
    loop: true,
    prerender: true,
    autoplay: true,
    path: 'json/friend-gif-maker.mp4.lottie.json'
  };
  let openingAnim7 = bodymovin.loadAnimation(openingAnimData7);

  let openingAnimWindow8 = document.querySelector('#openingLottie8');
  let openingAnimData8 = {
    container: openingAnimWindow8,
    animType: 'svg',
    loop: true,
    prerender: true,
    autoplay: true,
    path: 'json/dizzy-gif-maker.mp4.lottie.json'
  };
  let openingAnim8 = bodymovin.loadAnimation(openingAnimData8);

  let openingAnimWindow9 = document.querySelector('#openingLottie9');
  let openingAnimData9 = {
    container: openingAnimWindow9,
    animType: 'svg',
    loop: true,
    prerender: true,
    autoplay: true,
    path: 'json/head-gif-maker.mp4.lottie.json'
  };
  let openingAnim9 = bodymovin.loadAnimation(openingAnimData9);

  let openingAnimWindow10 = document.querySelector('#openingLottie10');
  let openingAnimData10 = {
    container: openingAnimWindow10,
    animType: 'svg',
    loop: true,
    prerender: true,
    autoplay: true,
    path: 'json/fire-gif-maker.mp4.lottie.json'
  };
  let openingAnim10 = bodymovin.loadAnimation(openingAnimData10);

  let openingAnimWindow11 = document.querySelector('#openingLottie11');
  let openingAnimData11 = {
    container: openingAnimWindow11,
    animType: 'svg',
    loop: true,
    prerender: true,
    autoplay: true,
    path: 'json/water-gif-maker.mp4.lottie.json'
  };
  let openingAnim11 = bodymovin.loadAnimation(openingAnimData11);

  let openingAnimWindow12 = document.querySelector('#openingLottie12');
  let openingAnimData12 = {
    container: openingAnimWindow12,
    animType: 'svg',
    loop: true,
    prerender: true,
    autoplay: true,
    path: 'json/electric-gif-maker.mp4.lottie.json'
  };
  let openingAnim12 = bodymovin.loadAnimation(openingAnimData12);

  let openingAnimWindow13 = document.querySelector('#openingLottie13');
  let openingAnimData13 = {
    container: openingAnimWindow13,
    animType: 'svg',
    loop: true,
    prerender: true,
    autoplay: true,
    path: 'json/smile-gif-maker.mp4.lottie.json'
  };
  let openingAnim13 = bodymovin.loadAnimation(openingAnimData13);

  let openingAnimWindow14 = document.querySelector('#openingLottie14');
  let openingAnimData14 = {
    container: openingAnimWindow14,
    animType: 'svg',
    loop: true,
    prerender: true,
    autoplay: true,
    path: 'json/hand-gif-maker.mp4.lottie.json'
  };
  let openingAnim14 = bodymovin.loadAnimation(openingAnimData14);

  let openingAnimWindow15 = document.querySelector('#openingLottie15');
  let openingAnimData15 = {
    container: openingAnimWindow15,
    animType: 'svg',
    loop: true,
    prerender: true,
    autoplay: true,
    path: 'json/wind-gif-maker.mp4.lottie.json'
  };
  let openingAnim15 = bodymovin.loadAnimation(openingAnimData15);
});
