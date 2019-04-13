import Vue from 'vue';

// Initialize the hightlight directive.
export const hightlight = {
    bind:function(el, binding, vnode){
      console.log('bind');
      console.log(binding.value);
      console.log(binding.arg);
      var delayed=1;
      if(binding.modifiers['delayed'])
      {
        delayed=1000;
      }
      if(binding.modifiers['blink'])
      {

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
  }

// You can also make it available globally.
//Vue.directive('hightlight', hightlight)
