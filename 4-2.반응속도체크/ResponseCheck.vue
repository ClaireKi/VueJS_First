// 컴포넌트 코딩하는 공간
<template>
    <div>
        <div id="screen" v-bind:class="state" @click="onClickScreen">{{message}}</div> <!--v-bind:를 :로 축약 가능 --> <!--class="state"이면 클래스 자체가 state가 되어버림 (waiting, ready, now로 바꾸고 싶자나)-->
        <div>
            <div>평균 시간: {{result.reduce((a,c) => a + c, 0) / result.length || 0}}ms </div> <!--다 더한 값 개수로 나눔 = 평균-->
            <div>{{result}}</div>
            <button @click="onReset">리셋</button>
        </div>
    </div>
</template>
<script>
    let startTime = 0; // 데이터에 안 넣고 변수 선언 하는 이유 = 화면에 직접적으로 띄우는 데이터가 아니기 때문에
    let endTime = 0;
    let timeout = null;
    export default { // 전역 컴포넌트 한 부분임 
        data(){
            return{
                result: [], // 반응속도 시간
                state: 'waiting',
                message: '클릭해서 시작하세요.',
            }
        },
        methods: {
            onReset() {

            },
            onClickScreen() {
                if(this.state === 'waiting'){
                    this.state = 'ready';
                    this.message = '초록색이 되면 클릭하세요';
                    timeout = setTimeout(() => {
                        this.state = 'now';
                        this.message = '지금 클릭!';
                        startTime = new Date();
                    }, Math.floor(Math.random()*1000) + 2000); // 2~3초 후에 바뀜
                } else if (this.state === 'ready'){
                    clearTimeout(timeout);
                    this.state = 'waiting';
                    this.message = '너무 성급하시군요! 초록색이 된 후에 클릭하세요'
                } else if(this.state === 'now'){
                    endTime = new Date();
                    this.state = 'waiting';
                    this.message = '클릭해서 시작하세요';
                    this.result.push(endTime - startTime);
                }
            }
        }
    };
</script>
<style scoped> /* scoped 붙여주면 이 파일 내에서만 css먹음 -> 각 태그에 random한 속성이 붙어서 그럼 */
    #screen{
        width: 300px;
        height: 200px;
        text-align: center;
        user-select: none;
    }
    /*클래스에 따라 색 바뀜 */
    #screen.waiting{ 
        background-color: aqua;
    }
    #screen.ready{
        background-color: red;
        color: white;
    }
    #screen.now{
        background-color: greenyellow;
    }
</style>