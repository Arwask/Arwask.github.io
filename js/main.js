$('#showMoreBtn').click(function() {
  let p = $('.hiddenP');
  let pDiv = $('#textDiv');
  pDiv.addClass('overflowScroll');
  pDiv.removeClass('overflowCtrl');
  p.removeClass('hidden');
  $('#showMoreBtn').addClass('hidden');
});
