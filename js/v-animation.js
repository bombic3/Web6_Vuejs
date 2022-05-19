const vm1 = new Vue({
  el: '#vm1',
  data: {
    show: true
  }
});

const vm2 = new Vue({
  el: '#vm2',
  data: {
    show: false
  }
});

const vm3 = new Vue({
  el: '#vm3',
  data: {
    isChecked: false
  }
});

const vm4 = new Vue({
  el: '#vm4',
  data: {
    colorName : ['빨강','파랑','초록','주황'],
    addColor: ''
  },
  methods: {
    addList: function(){
      this.colorName.push(this.addColor);
      this.addColor = '';
    }
  }
});