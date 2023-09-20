<template>
    <button @click="get">显示详细信息</button>
    <div>
        <h3 class="form-title">商品详情</h3>
    <div id="promoStartDateContainer" class="form-group">
        <label style="color:blue" id="promoStatus" class="control-label"></label>
        <div>
            <label style="color:red" class="control-label" id="promoStartDate" />
        </div>
    </div>
    <div class="form-group">
        <div>
            {{ title }}
        </div>
    </div>
    <div class="form-group">
        <div>
            <el-image style="width:200px; height:auto;" :src="imgUrl" />
        </div>
    </div>
    <div class="form-group">
        <label class="control-label">商品描述</label>
        <div>
            {{ description }}
        </div>
    </div>
    <div id="normalPriceContainer" class="form-group">
        <label class="control-label">商品价格</label>
        <div>
            {{ price }}
        </div>
    </div>
    <div id="promoPriceContainer" class="form-group">
        <label style="color:red" class="control-label">秒杀价格</label>
        <div>
            <label style="color:red" class="control-label" id="promoPrice" />
        </div>
    </div>
    <div class="form-group">
        <label class="control-label">商品库存</label>
        <div>
            {{ stock }}
        </div>
    </div>
    <div class="form-group">
        <label class="control-label">商品销量</label>
        <div>
            {{ sales }}
        </div>
    </div>
    <div class="form-actions">
        <button class="btn blue" id="createOrder" type="submit">
            立即购买
        </button>
    </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "",

    data(){
        return {
            title: '',
            imgUrl: '',
            description: '',
            price: '',
            stock: '',
            sales: '',
        }
    },

    methods: {
        get: function () {
            axios({
                withCredentials: true,
                method: "GET",
                url: "http://localhost:8000/item/get",
                params:{
                    id: "7",
                }
            }).then((response) => {
                console.log(response.data)
                this.title = response.data.data.title;
                this.imgUrl = response.data.data.imgUrl;
                this.description = response.data.data.description;
                this.price = response.data.data.price;
                this.stock = response.data.data.stock;
                this.sales = response.data.data.sales;
            });
        }
    }
}
</script>