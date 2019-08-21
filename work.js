var ph = new Vue(
  {
    el: '#app',
    data: {
      suffix: true,
      dpr: 3,
      url: 'via.placeholder.com',
      width: null,
      height: null
    }
  }
)

new ClipboardJS('.clipboard__grid');
