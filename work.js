var ph = new Vue(
  {
    el: '#app',
    data: {
      suffix: true,
      url: 'via.placeholder.com',
      width: null,
      height: null
    }
  }
)

new ClipboardJS('.clipboard__grid');
