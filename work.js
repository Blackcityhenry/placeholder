var ph = new Vue(
  {
    el: '#app',
    data: {
      suffix: true,
      dpr: 3,
      url: 'via.placeholder.com',
      width: null,
      height: null,
      isx: null
    },
    computed: {
      junction: function() {
        var temp = '';
        if ( this.url == 'via.placeholder.com' ) {
          temp = 'x';
        } else if ( this.url == 'image-p17.dev.theorigo.com' ) {
          temp = 'c'
        } else {
          temp = '/'
        }
        return temp;
      }
    },
    methods: {
      display: function(i) {
        return 'https://' + this.url + '/' + (this.width * i || "") + this.junction + (this.height * i || "" )
      },
      hidden: function(i) {
        return this.display(i) + (this.suffix ? (i == 1 ? "" : " " + i + "x") : "")
      }
    }
  }
)

new ClipboardJS('.clipboard__grid');
