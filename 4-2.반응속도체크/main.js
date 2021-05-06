import Vue from 'vue'; // package.json에 설치했던 vue를 가져옴 
                       // vue 환경에서는 import(ex.main.js), node 환경에서는 require(ex. webpack)
import  ResponseCheck from './ResponseCheck' ;

new Vue(ResponseCheck).$mount('#root'); // el 역할이라고 생각하면 될듯


//main.js가 main.js, vue.js, ResponseCheck.vue(=script) 
//셋을 모두 import로 연결