$(function() {
  // ボタンアニメーション
  $('.button-more').on('mouseover', function() {
    $(this).animate({
      opacity: 0.5,
      marginLeft: 20
    }, 100);
  });
  $('.button-more').on('mouseout', function() {
    $(this).animate({
      opacity: 1.0,
      marginLeft: 0
    },100);
  });

  // カルーセル
  $('.carousel').slick({
    autoplay: true,
    dots: true,
    infinate: true,
    autoplaySpeed: 5000,
    arrows: false
  });

  // ajaxでSTATIC FORMSにデータを送信
  $('#sabmit').on('click', function(event) {
    // formタグによる送信を拒否
    event.preventDefault();

    // 入力チェックをした結果、エラーがあるかないか判定
    let result = inputCheck();
  });

  // フォーカスが外れたとき（blue）にフォームの入力チェックをする
  $('#name').blur(function() {
    inputCheck();
  });
  $('#furigana').blur(function() {
    inputCheck();
  });
  $('#email').blur(function() {
    inputCheck();
  });
  $('#tel').blur(function() {
    inputCheck();
  });
  $('#message').blur(function() {
    inputCheck();
  });
  $('#agree').blur(function() {
    inputCheck();
  });

  // お問い合わせフォームの入力チェック
  function inputCheck() {
    console.log('input関数の呼び出し');
  }
});