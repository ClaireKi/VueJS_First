const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path'); // path.join import하려고 씀
                             // 절대경로로 쓰려고
//노드의 모듈 시스템에서는 import 대신에 require, 
//export default 대신에 module.exports 씀

module.exports = {
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.js','.vue'],
    },
    entry: {
        app: path.join(__dirname,'main.js'), // entry의 app = 나중에 하나로 합쳐질 파일의 이름 app.js
    },
    module: {   // webpack의 핵심부분
        rules: [{
            //vue-loader가 vue파일을 발견시 자바스크립트 파일로 내부적으로 전환해줌
            test: /\.vue$/, //파일명이 .vue로 끝나는 파일은
            loader: 'vue-loader', // vue-loader가 처리한다, loader = use랑 같은 역할 바꿔줘도 됨
        }],
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    output: {
        filename: '[name].js', // app이 알아서 [name] 에 들어감
        path: path.join(__dirname,'dist'), // path : 폴더 경로 -> dist라는 폴더 안에 app.js가 생김
    },
}; 
//webpack 왜 씀? : 스크립트 같은게 너무 많아져서 하나로 합쳐버리려고
//webpack 특장점 : 프로젝트 시 각각에 맞는 로더를 사용하면 다 자바스크립트 파일 하나로 합치기 가능
/*
   webpack 과정) 
        1. entry부터 시작해서 순서대로 처리
        2. 희한한 거 나오면 module의 rules(=loader들)가 대신 처리해줌
        3. module들이 처리하다가 output 나오기 직전에 plugin들이 다시 적용되어 한 번 더 가공
        -> entry / module / plugins / output 4개가 핵심옵션
    cf
        mode : '' // development(개발 중일 때), 'production(배포할 때)'
        devtool : '' // eval(개발 중일 때 -> 웹팩 빌드 속도 빠름), 'hidden-source-map(배포할 때)'
        resolve : {
            extensions: ['.js','.vue'] // extension에 넣어주면 main.js에 .vue 부분 없애줘도 알아서 함
        }
        
*/