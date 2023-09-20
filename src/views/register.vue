<template>
    <div class="content">
        <h3 class="form-title">用户注册</h3>
        <div class="form-group">
            <label class="control-label">手机号</label>
            <div>
                <input v-model="phone" class="form-control" type="text" placeholder="手机号" name="telphone" id="telphone" />
            </div>
        </div>
        <div class="form-group">
            <label class="control-label">验证码</label>
            <div>
                <input v-model="otpCode" class="form-control" type="text" placeholder="验证码" name="otpCode" id="otpCode" />
            </div>
        </div>
        <div class="form-group">
            <label class="control-label">用户昵称</label>
            <div>
                <input v-model="name" class="form-control" type="text" placeholder="用户昵称" name="name" id="name" />
            </div>
        </div>
        <div class="form-group">
            <label class="control-label">性别</label>
            <div>
                <input v-model="gender" class="form-control" type="text" placeholder="性别" name="gender" id="gender" />
            </div>
        </div>
        <div class="form-group">
            <label class="control-label">年龄</label>
            <div>
                <input v-model="age" class="form-control" type="text" placeholder="年龄" name="age" id="age" />
            </div>
        </div>
        <div class="form-group">
            <label class="control-label">密码</label>
            <div>
                <input v-model="password" class="form-control" type="password" placeholder="密码" name="password"
                    id="password" />
            </div>
        </div>
        <div class="form-actions">
            <button @click="register">
                提交注册
            </button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            phone: "",
            otpCode: "",
            name: "",
            gender: "",
            age: "",
            password: "",
        }

    },

    methods: {      
        register: function () {
            axios({
                // headers: {
                //     'Content-Type':'application/x-www-form-urlencoded',
                    
                // },
                withCredentials: true,
                method: "POST",
                url: "http://localhost:8000/user/register",
                params: {
                    telphone: this.phone,
                    otpCode: this.otpCode,
                    name: this.name,
                    gender: this.gender,
                    age: this.age,
                    password: this.password,
                },
            }).then((response) =>{
                console.log(response.data)
            });
        },

    }


};
</script>
