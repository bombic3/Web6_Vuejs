const vm1 = new Vue({
  el: '#vm1',
  data: {
    msgMain: 'Have a good day',
    msgSub: 'Click the button!!'
  },
  methods: {
    newMSG: function(){
      this.msgMain = '버튼이 클릭되었습니다';
      this.msgSub = 'Reset을 누르세요'
    },
    resetMSG: function(){
      this.msgMain = 'Have a good day';
      this.msgSub = 'Click the button!!';
    }
  }
});

console.log(vm1.msgMain);
// Vue의 인스턴스는 객체구조지만 객체라고 생각하면 안 됨
// Vue.바로 data의 키값 넣어주기

// function newMsg() {
//   vm1.msgMain = '버튼이 클릭되었습니다';
//   vm1.msgSub = 'Reset을 누르세요';
// }

// function resetMsg() {
//   vm1.msgMain = 'Have a good day';
//   vm1.msgSub = 'Click the button!!';
// }


// -------- 과제 --------------
const vm2 = new Vue({
  el: '#vm2',
  data: { greeting: 'Day'},
  methods: {
    morning: function(){this.greeting = 'Morning-M';},
    afternoon: function(){this.greeting = 'Afternoon-M';},
    evening: function(){this.greeting = 'Evening-M';}
  }
});

// function mor() {
//   vm2.msg = 'Morning';
// }
// function aft() {
//   vm2.msg = 'Afternoon';
// }
// function eve() {
//   vm2.msg = 'Evening';
// }



// ----------- Template VS Data -------------
const vm3 = new Vue({
  el: '#vm3',
  data: {
    msgT: '안녕하세요 data'
  },
  template: '<div>반값습니다 template</div>'
});

// 쓰면 data 값은 없어져 버림
// 꼭 태그요소와 같이 써야 함




//----------- methods 함수 -----------
const vm4 = new Vue({
  el: '#vm4',
  data: {n1: 1},
  methods: {
    plus: function(){this.n1++}
  }
});
vm4.plus();

// 모든 메서드는 자동으로 this를 인자로 받음
// 화살표 함수 쓰면 안 됨



//----------- methods 함수실행 -----------
const vm5 = new Vue({
  el: '#vm5',
  data: {msgN: '안녕하세요5'},
  methods: {
    msgPrint: function(){
      return '반값습니다.5';
      // 함수실행의 반환값 = return
    }
  }
});



// ----------- 증감버튼 만들기 -----------
const vm6 = new Vue({
  el: '#vm6',
  data: {n2:0},
  methods: {
    up: function(){this.n2++;},
    down: function(){this.n2--;}
  }
})