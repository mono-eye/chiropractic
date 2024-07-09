/*===========================================
script.js
========================================== */

/* ----------------------------------------
ハンバーガーメニュー  style.css
---------------------------------------- */
function toggleNav() {
  var body = document.body;
  var hamburger = document.getElementById('js-hamburger');
  var blackBg = document.getElementById('js-black-bg');

  hamburger.addEventListener('click', function() {
    body.classList.toggle('nav-open');
  });
  blackBg.addEventListener('click', function() {
    body.classList.remove('nav-open');
  });
}
toggleNav();


/* ----------------------------------------
slick carousel  style.css
---------------------------------------- */
$('.carousel').slick({
    autoplay: true,
    dots: false,
    infinite: true,
    autoplaySpeed: 3000,
    arrows: false,
});

/* ----------------------------------------
スクロールしたらヘッダー背景色を変更  style.css
---------------------------------------- */
$(function () {
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 600) {
      $(".js-header").addClass("change-color");
    } else {
      $(".js-header").removeClass("change-color");
    }
  });
});

/* ----------------------------------------
フェードインアニメーション  reset.css
---------------------------------------- */
$(function(){
	$(window).on('load scroll',function (){
		$('.animate').each(function(){
			//ターゲットの位置を取得
			var target = $(this).offset().top;
			//スクロール量を取得
			var scroll = $(window).scrollTop();
			//ウィンドウの高さを取得
			var height = $(window).height();
			//ターゲットまでスクロールするとフェードインする
			if (scroll > target - height){
				//クラスを付与
				$(this).addClass('active');
			}
		});
	});
});

/* ----------------------------------------
戻るボタン  style.css
---------------------------------------- */
$(function(){
  var topBtn=$('#pageTop');
  topBtn.hide();

  //ボタンの表示設定
  $(window).scroll(function(){
  //120pxスクロールしたら
      if($(this).scrollTop()>120){
      topBtn.fadeIn();
      }else{
      topBtn.fadeOut();
      } 
  });
  // スムーススクロール
  topBtn.click(function(){
      $('body,html').animate({scrollTop: 0}, 1000);// 1000ミリ秒でスクロールする
      return false;
  });
});