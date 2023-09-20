<template>
    <div>商品添加</div>
    <div class="form-group">
        <label class="control-label">商品名</label>
        <div>
            <input class="form-control" type="text" name="title" v-model="title" />
        </div>
    </div>
    <div class="form-group">
        <label class="control-label">商品描述</label>
        <div>
            <input class="form-control" type="text" name="description" v-model="description" />
        </div>
    </div>
    <div class="form-group">
        <label class="control-label">价格</label>
        <div>
            <input class="form-control" type="text" name="price" v-model="price" />
        </div>
    </div>
    <div class="form-group">
        <label class="control-label">图片</label>
        <div>
            <input class="form-control" type="text" name="imgUrl" v-model="imgUrl" />
        </div>
    </div>
    <div class="form-group">
        <label class="control-label">库存</label>
        <div>
            <input class="form-control" type="text" name="stock" v-model="stock" />
        </div>
    </div>
    <div class="form-actions">
        <button class="btn blue" id="create" @click="add">
            提交商品信息
        </button>
    </div>
</template>

<script>
import axios from 'axios'


export default {
    data() {
        return {
            title: "",
            description: "",
            price: "",
            imgUrl: "",
            stock: "",
        }
    },

    methods: {
        add: function () {
            axios({
                withCredentials: true,
                method: "POST",
                url: "http://localhost:8000/item/create",
                params: {
                    title: this.title,
                    description: this.description,
                    price: this.price,
                    imgUrl: this.imgUrl,
                    stock: this.stock,
                }
            }).then((response) => {
                console.log(response.data)
            });

        },
    },
}
</script>