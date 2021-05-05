import Vue from 'vue'; // package.json에 설치했던 vue를 가져옴
import  NumberBaseball from './NumberBaseball.vue' ;

new Vue().$mount('#root'); // el 역할이라고 생각하면 될듯


//main.js가 main.js, vue.js, NumberBaseball.vue(=script) 
//셋을 모두 import로 연결