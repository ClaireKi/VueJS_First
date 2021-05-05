// 컴포넌트 코딩하는 공간
<template>
    <div>
        <h1>{{result}}</h1>
        <form v-on:submit="onSubmitForm">
            <input type="text" ref="answer" maxlength="4" v-model="value" />
            <button type="submit">입력!</button>
        </form>
    </div>
</template>
<script>
    export default { // 전역 컴포넌트 한 부분임 
        data(){
            return{
                value : '',
                result : '',
            }
        },
        methods: {
            onSubmitForm(e){
                e.preventDefault();
            }
        }
    };
</script>
<style>
</style>