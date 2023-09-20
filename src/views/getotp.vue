<template>
    <div class="content">
        <h3 class="form-title">获取otp信息</h3>
        <div class="form-group">
            <label class="control-label">手机号</label>
            <div>
                <input v-model="phone" class="form-control" type="text" placeholder="手机号"/>
            </div>
        </div>
        <div class="form-actions">
            <button class="btn blue" id="getotp" @click="getotp">
                获取otp短信
            </button>
        </div>
    </div>

</template>

<script>
import axios from 'axios'

export default{
    
    data() {
        return {
            phone: "",
        }
    },

    methods: {
        getotp: function () {
            axios({
                // headers: {
                //     'Content-Type':'application/json',
                // },
                withCredentials: true,
                method: "POST",
                url: "http://localhost:8000/user/getotp",
                params: {
                    telphone: this.phone,
                }
            }).then((response) => {
                console.log(response.data)
            });
        },
    }
}
</script>