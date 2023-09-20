<template>
    <div class="background" id="app">
        <form action="">
            <div class="foreground">
                <h3>XX后端管理</h3>
                <div class="from-input">
                    <input type="text" class="input" placeholder="  用户名" v-model="phone"/>
                    <input type="password" class="input" placeholder="  密  码" v-model="password"/>
                </div>
                <div class="from-button">
                    <input type="button" value="登录" @click="login"/>
                    <input type="button" value="注册" />
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "Login",

    data(){
        return{
            phone: '',
            password: '',
        }
    },

    methods: {
        login: function () {
            axios({
                withCredentials: true,
                method: "POST",
                url: "http://localhost:8000/user/login",
                params: {
                    telphone: this.phone,
                    password: this.password,
                }
            }).then((response) => {
                console.log(response.data)
            });
        },
    }
}

</script>

<style scoped>
.background {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    background-color: #2b6995;
}

.foreground {
    width: 346px;
    height: 300px;
    background-color: #fff;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    box-shadow: 7px 8px 81px #71c4e5;
}

.input {
    width: 283px;
    height: 34px;
    border: 1px solid black;
    border-radius: 5px;
    margin: 10px;
}

.from-input {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
}

.from-button {
    margin-top: 20px;
}

.login-button,
.register-button {
    width: 111px;
    height: 36px;
    background-color: #71c4e5;
    border: 0px;
    border-radius: 5px;
}

.login-button {
    margin-right: 40px;
}

.login-button,
.register-button:hover {
    cursor: pointer;
}
</style>