/*
$.get("https://ssl.geoplugin.net/json.gp?k=292af9fb00c1353d", function (resp) {
    var data = JSON.parse(resp);
    alert('chegou aqui')
    $("#location").html(data.geoplugin_city);
});*/

$(document).ready(function () {
  // if (jQuery(window).width() < 480){
  // $('.hero').parallax({
  // imageSrc: 'https://atracaosecreta.com/main/img/bg-top-mobile.png',
  // naturalWidth: 600,
  // naturalHeight: 400
  // });
  // }

  // if (jQuery(window).width() > 480){
  // $('.hero').parallax({
  // imageSrc: 'https://atracaosecreta.com/main/img/bg-top.png',
  // naturalWidth: 600,
  // naturalHeight: 400
  // });
  // }

  setTimeout(function () {
    $("#button_chechout_hero").show();
    $("#button_chechout_final").show();
    $("#c-container").show();
    $("#perguntas_recentes").show();
  }, 1584 * 1000);
});

//1750
