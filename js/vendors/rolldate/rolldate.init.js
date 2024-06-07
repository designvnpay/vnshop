//====================LIGHT GALLERY INIT=================//

var today = new Date();
var rd = [];

[].forEach.call(document.querySelectorAll('.rolldate'), function (el, i, a) {
  rd[i] = new Rolldate({
    el: el,
    format: 'DD/MM/YYYY',
    beginYear: today.getFullYear() - 100,
    endYear: today.getFullYear(),
    minStep: 1,
    lang: { title: el.getAttribute('header-text'), year: '',  month: '<span>Tháng</span>', day: '', cancel: '', confirm: 'Xác nhận' },
    trigger: 'tap',
    init: function () {
      console.log(this)
      BNS.on();
    },
    confirm: function (date) {
      BNS.off();
    },
    cancel: function () {
      BNS.off();
    }
  })
})


//====================END LIGHT GALLERY INIT=================//