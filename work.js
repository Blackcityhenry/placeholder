var ph = new Vue(
  {
    el: '#app',
    data: {
      cdn: true,
      suffix: false,
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
        if ( this.cdn ){
          return 'https://cdn.statically.io/img/' + this.display(i).replace('https://', '') + (this.suffix ? (i == 1 ? "" : " " + i + "x") : "")          
        } else {
          return this.display(i) + (this.suffix ? (i == 1 ? "" : " " + i + "x") : "")
        }
      }
    }
  }
)

new ClipboardJS('.clipboard__grid');
