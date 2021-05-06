// 컴포넌트 코딩하는 공간
<template>
    <div>
        <div id="screen" v-bind:class="state">{{message}}</div> <!--v-bind:를 :로 축약 가능 --> <!--class="state"이면 클래스 자체가 state가 되어버림 (waiting, ready, now로 바꾸고 싶자나)-->
        <div>
            <div>평균 시간: {{}} </div>
            <button @click="onReset">리셋</button>
        </div>
    </div>
</template>
<script>
    export default { // 전역 컴포넌트 한 부분임 
        data(){
            return{
                result: [],
                state: 'waiting',
                message: '클릭해서 시작하세요.',
            }
        },
        methods: {
            onReset() {

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