const d = {msg:'안뇽', n:0}

const subject = {
  webs: [
    {name:'웹1', content:'HTML5+CSS3 기초'},
    {name:'웹2', content:'HTML5+CSS3 고급'},
    {name:'웹3', content:'HTML5+CSS3 활용'},
    {name:'웹4', content:'jQuery'},
    {name:'웹5', content:'ECMAScript 6'}
  ],
  dtps: [
    {name:'일러스트', content:'일러스트레이터 기초'},
    {name:'포토샵', content:'포토샵 기초'},
    {name:'디일러', content:'일러스트레이터 활용'},
    {name:'포토웍스', content:'포토샵 활용'}
  ],
  arts: [
    {name:'디지털 드로잉',content:'모든 디자인 작업의 기본 바탕이자 SKILL UP을 위한 ARTWORK 제작'},
    {name:'발상과표현',content:'다양한 재료를 이용한 실습위주의 수업으로 디자인의 기초를 습득'},
    {name:'색채학',content:'색에 대한 이해를 바탕으로 한 실습을 통해 색에 대한 활용과 응용'},
    {name:'해부학',content:'드로잉실습을 통해 인체의 비례와 특징, 골격과 근육의 구조 등을 습득하고 묘사'},
    {name:'조소',content:'인체의 골격과 근육 형태를 익히고 조소 재료를 이용하여 직접 제작하는 수업'}
  ]
}

// const depart = ['웹학과','광고편집학과']
const depart = {web:'웹학과', dtp:'광고편집학과', artw:'기초아트웍학과'}

// vm8 props
const compcont1 = {
  template: '<div>첫번째 지역</div>'
}
const compcont2 = {
  template: '<div>두번째 지역</div>'
}




Vue.component('mycomp',{
  template: '<div>안녕하세요???</div>'
});
// component 안의 data는 함수여야 한다
Vue.component('call-data',{
  template: '<div>{{msg}}</div>',
  data: function(){ return d }
});

Vue.component('counter',{
  template: '<button v-on:click="n++">{{n}}</button>',
  data: function(){ return d }
});

Vue.component('colored',{
  template: '<p>{{msg}}</p>',
  data: function(){ return d }
});


Vue.component('web',{
  template: `
    <ul>
      <li v-for="s in webs">{{s.name}} : {{s.content}}</li>
    </ul>
  `,
  data: function(){
    return subject;
  }
});
Vue.component('dtp',{
  template: `
    <ul>
      <li v-for="s in dtps">{{s.name}} : {{s.content}}</li>
    </ul>
  `,
  data: function(){
    return subject;
  }
});
Vue.component('artw',{
  template: `
    <ul>
      <li v-for="s in arts">{{s.name}} : {{s.content}}</li>
    </ul>
  `,
  data: function(){ return subject }
});

// vm8 props : 우리가 만든 컴포넌트의 속성명을 만드는 것(attribute name)
Vue.component('mycomp1',{
  template: '<div>{{compAtt}}</div>',
  props: ['compAtt']
});
Vue.component('mycomp2',{
  template: '<div>첫번째 지역 : {{comp1Num}}</div>',
  props: ['comp1Num']
});
Vue.component('mycomp3',{
  template: '<div>두번째 지역 : {{comp2Num}}</div>',
  props: ['comp2Num']
});

// vm10 props for
Vue.component('web-props',{
  props: ['websub'],
  template: '<li>{{websub.name}} : {{websub.content}}</li>'
});

// vm11 props v-model
Vue.component('comp-input',{
  props: ['compInputText'],
  template: `<div><p>{{compInputText}}</p><input v-model="compInputText" type="text" placeholder="컴포넌트텍스트"><div>`
});

new Vue({
  el: '#vm1'
})

new Vue({
  el: '#vm2'
})

new Vue({
  el: '#vm3',
  components: {
    'local-comp': {
      template: '<div>지역 안녕하세요?</div>'
    }
  }
})

new Vue({
  el: '#vm4'
})

new Vue({
  el: '#vm5'
})

new Vue({
  el: '#vm6'
})

new Vue({
  el: '#vm7',
  data: {
    // web: depart[0],
    // dtp: depart[1]
    // 직관적으로 알 수 있게 배열대신 객체로 키:값
    web: depart.web,
    dtp: depart.dtp,
    artw: depart.artw
  }
});

new Vue({
  el: '#vm8'
});

new Vue({
  el: '#vm9',
  data: {num1:100, num2:200}
});

new Vue({
  el: '#vm10',
  data: subject
});

new Vue({
  el: '#vm11',
  data: {
    inputText: ''
  }
});








