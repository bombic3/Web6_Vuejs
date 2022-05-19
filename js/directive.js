const vm1 = new Vue({
  el: '#vm1',
  data: {
    msgStyle: '<a href="http://naver.com" target="_blank">네이버</a>'
  }
});

const vm2 = new Vue({
  el: '#vm2',
  data: {n1:1},
  methods: {
    up: function(){
      this.n1++;
    }
  }
})

const vm3 = new Vue({
  el: '#vm3',
  data: {
    people:[
      {id:1, name:'홍길동',age:20},
      {id:2, name:'김철수',age:30},
      {id:3, name:'안동수',age:25},
      {id:4, name:'이영희',age:40},
      {id:5, name:'김봄비',age:54},
      {id:6, name:'박현진',age:32},
      {id:7, name:'조은', age:21},
      {id:8, name:'최승혁',age:23},
      {id:9, name:'아무개',age:26}
    ]
  }
});

const vm4 = new Vue({
  el: '#vm4',
  data: {
    person:
      {id:1, student:'홍길동',age:20}
  }
});


const vm5 = new Vue({
  el: '#vm5',
  data: {
    url1: 'http://naver.com',
    url2: 'http://daum.net',
    newTab: '_blank'
  }
});

const vm6 = new Vue({
  el: '#vm6',
  data: {
    a: 'dotblue',
    // b: 'dotred'
    check: true
  },
  methods: {
    cl: function(){
      if(this.a === 'dash'){
        this.a = 'dotblue';
        this.check = true;
      }else {
      this.a = 'dash';
      this.check = false;
      }
    }
  }
});


const vm7 = new Vue({
  el: '#vm7',
  data: {
      msgModel: '입력창'
  }
});


const vm8 = new Vue({
  el: '#vm8',
  data: {
      cRed : 'color:red',
      fBold : 'font-weight:bold',
      warning : 'red',
      highlight : 'bold'
  }
});


const vm9 = new Vue({
  el: '#vm9',
  data: {
    dotClass: 'dotblue',
    dashClass: 'dash',
    redClass: 'red'
  }
});


const vm10 = new Vue({
  el: '#vm10',
  data: {
    // userName: '내이름'
    userName: ''
  }
});


const vm11 = new Vue({
  el: '#vm11',
  data: {
    userSuggestion: ''
  }
});


const vm12 = new Vue({
  el: '#vm12',
  data: {
    check: false
  }
});


const vm13 = new Vue({
  el: '#vm13',
  data: {
    course: []
  }
});


const vm14 = new Vue({
  el: '#vm14',
  data: {
    colorBg: 'red'
  }
});


const vm15 = new Vue({
  el: '#vm15',
  data: {
    imgCh: 'img/favorite_black_24dp.svg'
  }
});


const vm16 = new Vue({
  el: '#vm16',
  data: {
    myAgree: false
  }
});


const vm17 = new Vue({
  el: '#vm17',
  data: {
    mySelect: ''
  }
});


const vm18 = new Vue({
  el: '#vm18',
  data: {
    mySelectC: 'green'
  }
});


const vm19 = new Vue({
  el: '#vm19',
  data: {
    myNumber: 0
  }
});


const vm20 = new Vue({
  el: '#vm20',
  data: {
    userId: ''
  }
});


const vm21 = new Vue({
  el: '#vm21',
  data: {
    userRivew: ''
  }
});


const vm22 = new Vue({
  el: '#vm22',
  data: {
    userSubject: '',
    options: [
      {text:'HTML+CSS 기초', value:'web1'},
      {text:'HTML+CSS 고급', value:'web2'},
      {text:'HTML+CSS 활용', value:'web3'},
      {text:'jQuery', value:'web4'},
      {text:'ECMAScript 6', value:'web5'},
      {text:'Wordpress', value:'WebTamplate'},
      {text:'Cafe24 쇼핑몰', value:'WebTamplate'}
    ]
  }
});


const vm23 = new Vue({
  el: '#vm23',
  data: {
    clicked: false
  },
  methods: {
    userClick: function(){
      this.clicked = true;
      alert('클릭되었습니다.');
    }
  }
});


const vm24 = new Vue({
  el: '#vm24',
  data: {
    counter1: 0
  }
});


const vm25 = new Vue({
  el: '#vm25',
  data: {
    counter2: 1
  },
  methods: {
    multiply: function(n){
      this.counter2 *= n;
    }
  }
});


const vm26 = new Vue({
  el: '#vm26',
  data: {
    enterText: ''
  },
  methods: {
    enterAlert: function(n){
      alert('쉬프트와 엔터키를 눌렀습니다');
    }
  }
});


const vm27 = new Vue({
  el: '#vm27',
  data: {
    n1: 0,
    n2: 0,
    nResult: 0
  },
  methods: {
    nSum: function(){
      this.nResult = this.n1 + this.n2;
    },
    nM: function(){
      this.nResult = this.n1 - this.n2;
    },
    nMul: function(){
      this.nResult = this.n1 * this.n2;
    },
    nV: function(){
      this.nResult = this.n1 / this.n2;
    }
  }
});


const vm28 = new Vue({
  el: '#vm28',
  data: {
    text1: ''
  },
  methods: {
    textAlert: function(){
      alert('안녕하세요. '+ this.text1 +'님');
    }
  }
});


const vm29 = new Vue({
  el: '#vm29',
  data: {
    text2: '',
    hovered: false
  },
  methods: {
    overText: function(){
      this.hovered = true;
      this.text2 = '올렸';
    },
    outText: function(){
      this.hovered = true;
      this.text2 = '벗어났';
    }
  }
});


const vm30 = new Vue({
  el: '#vm30',
  data: {
    text3: '',
    tabbed: false
  },
  methods: {
    focusText: function(){
     this.tabbed = true;
     this.text3 = 'focus';
    },
    blurText: function(){
      this.tabbed = true;
      this.text3 = 'blur';
    },
    tabreset: function(){
      this.tabbed = false;
    }
  }
});


const vm31 = new Vue({
  el: '#vm31',
  data: {
    text4: '',
    clicked: false
  },
  methods: {
    clickLeft: function(){
      this.clicked = true;
      this.text4 = '왼쪽';
      
    },
    clickContextmenu: function(){
      this.clicked = true;
      this.text4 = '오른쪽';
    },
    clickReset: function(){
      this.clicked = false;
    }
  }
});



const vm32 = new Vue({
  el: '#vm32',
  data: {
    objClass:[
      {id:1, ObjectName:'웹1',objCon:'HTML+CSS 기초'},
      {id:2, ObjectName:'웹2',objCon:'HTML+CSS 고급'},
      {id:3, ObjectName:'웹3',objCon:'HTML+CSS 활용'},
      {id:4, ObjectName:'웹4',objCon:'jQuery'},
      {id:5, ObjectName:'웹5',objCon:'ECMAScript6'},
      {id:6, ObjectName:'WebTamplate',objCon:'Wordpress'},
      {id:7, ObjectName:'WebTamplate',objCon:'Cafe24 쇼핑몰'}
    ]
  }
});