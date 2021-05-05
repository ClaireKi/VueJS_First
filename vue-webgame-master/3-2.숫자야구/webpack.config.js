const path = require('path'); // path.join import하려고 씀
                              // 절대경로로 쓰려고

Module.exports = {
    entry: {
        app: path.join(__dirname,'main.js'), // entry의 app = 나중에 하나로 합쳐질 파일의 이름 app.js

    },
    module: {   // webpack의 핵심부분

    },
    plugins: [

    ],
    output: {
        filename: '[name].js', // app이 알아서 [name] 에 들어감
        path: path.join(__dirname,'dist'), // path : 폴더 경로 -> dist라는 폴더 안에 app.js가 생김

    },
}; //webpack 왜 씀? : 스크립트 같은게 너무 많아져서 하나로 합쳐버리려고