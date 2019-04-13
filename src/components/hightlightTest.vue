<template>
    <div>
        <h2>hightlightTest</h2>
         <div v-hightlight:myData.delayed.blink="directiveData"><strong>{{directiveData.Color}}</strong></div>
    </div>
</template>
<script>
import {hightlight } from '../directives/hightlight.js';

export default {
     name: 'hightlightTest',
     data:function(){
         return{
             directiveData:{Color:'green'}
         }
     },
     directives:{hightlight}
}
</script>

