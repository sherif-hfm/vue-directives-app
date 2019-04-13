import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
/*Vue.directive('hightlight',{
  bind:function(el, binding, vnode){
    console.log('bind');
    console.log(binding.value);
    console.log(binding.arg);
    var delayed=1;
    if(binding.modifiers['delayed'])
    {
      delayed=1000;
    }
    //binding.value.Color='red';
    console.log(el);
    
    el.onmouseover  =function(e)
    {
      setTimeout(() => {
        el.style.backgroundColor =  binding.value.Color;  
      }, delayed);
    }
    el.onmouseout  =function(e)
    {
      setTimeout(() => {
        el.style.backgroundColor = 'white';
      }, delayed);
    }
  },
  inserted:function(el, binding, vnode){
    console.log('inserted');
    console.log(vnode);
  },
  update:function(el, binding, vnode,oldVnode){
    console.log('update');
  },
  componentUpdated:function(el, binding, vnode,oldVnode){
    console.log('componentUpdated');
  },
  unbind:function(el, binding, vnode){
    console.log('unbind');
  },
});*/
new Vue({
  render: h => h(App),
}).$mount('#app')
