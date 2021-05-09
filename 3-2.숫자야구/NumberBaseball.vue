// 컴포넌트 코딩하는 공간
<template>
    <div>
        <h1>{{result}}</h1>
        <form @submit.prevent="onSubmitForm"> <!-- v-on: 을 @로 퉁치기 가능 -->
            <input ref="answer" minlength="4" maxlength="4" v-model="value" />
            <button type="submit">입력!</button>
        </form>
        <div>시도:{{tries.length}}</div>
        <ul>
            <li v-for="T in tries" v-bind:key="T"> 
                <div>{{T.try}}</div>
                <div>{{T.result}}</div> 
            </li> <!--vue의 반복문-->
        </ul>
    </div>
</template>
<script>
    const getNumbers = () => {
        const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const array =[];
        for (let i = 0; i < 4; i += 1) {
            const chosen = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
            array.push(chosen);
        }
        return array;
    }; // 이 부분 메서드에 안 묶은 이유
       // data나 methods에는 현재 컴포넌트 화면과 밀접한 연관이 있는 애들만 엮어주면 됨

    //export default 에 있는 객체들이 main.js에서 import한 NumberBaseball임
    export default { // 전역 컴포넌트 한 부분임 
        data(){
            return{
                answer: getNumbers(), // 정답값
                tries : [], // 시도 횟수
                value : '', // 입력값
                result : '', // 결과값
            }
        },
        methods: {
            onSubmitForm(){
                //e.preventDefault(); -> 위에서 @submit.prevent로 바꿈
                //정답 맞추는 경우
                if(this.value === this.answer.join('')){// this.value(입력값)은 문자('1534'), this.answer은 배열(ex.[1,5,3,4]) -> join('')붙여주는이유
                    //tries에 입력값 추가
                    this.tries.push({
                        try: this.value, 
                        result: '홈런',
                    });
                    this.result = '홈런';
                    alert('게임을 다시 실행합니다.');
                    // 게임 초기화
                    this.answer = getNumbers();
                    this.value = '';
                    this.tries = [];
                    this.$refs.answer.focus();
                } else{ //정답을 틀렸을 때 
                    if (this.tries.length >= 9) { //10번째 시도
                        this.result = '10번을 넘게 틀렸습니다. 실패! 답은 ${this.answer.join()}였습니다!';
                        alert('게임을 다시 실행합니다.');
                        //게임 초기화
                        this.answer = getNumbers();
                        this.value = '';
                        this.tries = [];
                        this.$refs.answer.focus();
                    }
                    let strike = 0; // 데이터와 변수의 차이 -> 화면에 보여지면 데이터, 계산식 등 화면에 보이지 않으면 변수
                    let ball = 0;
                    const answerArray = this.value.split('').map(v => parseInt(v)); // 문자열을 숫자 배열로 바꾸는 코드
                    for (let i = 0; i < 4; i+= 1){
                        if(answerArray[i] === this.answer[i]){ //숫자 자리수 모두 정답
                            strike++;
                        } else if (this.answer.includes(answerArray[i])) { //숫자만 정답
                            ball++;
                        }
                    }
                    this.tries.push({
                        try: this.value,
                        result: `${strike} 스트라이크, ${ball} 볼입니다.`,
                    });
                    this.value = '';
                    this.$refs.answer.focus();
                }

                
                 
                this.value = '';
                this.$refs.answer.focus();
            }
        }
    };
</script>
<style>
</style>