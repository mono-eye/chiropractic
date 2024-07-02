/*===========================================
script.js
========================================== */

/* ----------------------------------------
ハンバーガーメニュー
---------------------------------------- */
// DOMが完全に読み込まれた後に実行
	document.addEventListener('DOMContentLoaded', () => {
	// ハンバーガーメニューの要素を取得
	const hamburger = document.querySelector('.hamburger');
	// ナビゲーションリンクの要素を取得
	const navTop = document.querySelector('.nav-top');

	// ハンバーガーメニューがクリックされた時のイベントリスナーを追加
	hamburger.addEventListener('click', () => {
		// ナビゲーションリンクの表示・非表示を切り替え
		navTop.classList.toggle('active');
		// ハンバーガーアイコンの変化を切り替え
		hamburger.classList.toggle('active');
	});
});


/* ----------------------------------------
slick carousel
---------------------------------------- */
$('.carousel').slick({
    autoplay: true,
    dots: false,
    infinite: true,
    autoplaySpeed: 3000,
    arrows: false,
});

/* ----------------------------------------
戻るボタン
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