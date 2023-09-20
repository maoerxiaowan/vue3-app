<template>
    <div class="content">
        <h3 class="form-title">商品列表浏览</h3>
        <button @click="getlist">获取商品信息</button>
        <div class="table-responsive">
            <el-table :data="item" class="table">
                <el-table-column prop="title" label="商品名" width="200" />
                <el-table-column prop="imgUrl" label="商品图片" width="200">
                    <template v-slot:default="scope">
                      <el-image :src="scope.row.imgUrl" />  
                    </template>
                </el-table-column>
                <el-table-column prop="description" label="商品描述" width="200" />
                <el-table-column prop="price" label="商品价格" width="200" />
                <el-table-column prop="stock" label="商品库存" width="200" />
                <el-table-column prop="sales" label="商品销量" width="200" />
            </el-table>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "shopList",

    data() {
        return {
            item: [
                {
                    title: "",
                    imgUrl: "",
                    description: "",
                    price: "",
                    stock: "",
                    sales: "",
                },

            ]

        }
    },

    methods: {
        getlist: function () {
            axios({
                withCredentials: true,
                method: "GET",
                url: "http://localhost:8000/item/list",
            }).then((response) => {
                console.log(response.data);
                this.item = response.data.data;
            });
        }
    },

}


</script>