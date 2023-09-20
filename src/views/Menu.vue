<template>
    <el-row class="tac">
        <el-menu default-active="2" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff"
            active-text-color="#ffd04b">
            <el-sub-menu index="1">
                <template #title>
                    <span>信息管理</span>
                </template>
                <el-menu-item-group class="demo-group">
                    <el-menu-item index="1-1">
                        <router-link to="">
                            <div>个人信息</div>
                        </router-link>
                    </el-menu-item>
                    <el-menu-item index="1-2">
                        <router-link to="">
                        <div>1-2</div>
                        </router-link>
                    </el-menu-item>
                    <el-menu-item index="1-3">
                        <div>1-3</div>
                    </el-menu-item>
                    <el-menu-item index="1-4">
                        <div>1-4</div>
                    </el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>
            <el-sub-menu index="2">
                <template #title>
                    <span>信息管理</span>
                </template>
                <el-menu-item-group class="demo-group">
                    <el-menu-item index="2-1">
                        <router-link to="/home/information">
                            <div>个人信息</div>
                        </router-link>
                    </el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>
            <el-sub-menu index="10">
                <template #title>
                    <span>秒杀商城页面</span>
                </template>
                <el-menu-item-group class="demo-group">
                    <el-menu-item index="create">
                        <router-link to="/home/shop/create">
                            <div>商品添加页面</div>
                        </router-link>
                    </el-menu-item>
                    <el-menu-item index="list">
                        <router-link to="/home/shop/list">
                            <div>秒杀商城商品页面</div>
                        </router-link>
                    </el-menu-item>
                    <el-menu-item index="detail">
                        <router-link to="/home/shop/detail">
                            <div>商品详情页面</div>
                        </router-link>
                    </el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>
            <el-sub-menu index="99">
                <template #title>
                    <span>功能测试</span>
                </template>
                <el-menu-item-group class="demo-group">
                    <el-menu-item index="T-1">
                        <router-link to="">
                            <div>测试页面</div>
                        </router-link>
                    </el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>
        </el-menu>
    </el-row>
</template>

<script>
export default {
    name: "Menu"

}
</script>

<style scoped>
.tac {
    width: calc(16vw);
    height: calc(100vh - 100px);
    /* border: 1px solid black; */
}

.el-menu-vertical-demo {
    height: 100%;
    width: 16vw;
    /* border: 1px solid black; */
}

.demo-group {
    width: 16vw;
    /* border: 1px solid black; */
}

/* .router-link-active {
  text-decoration: none;
  color: white;
} */

a{
  text-decoration: none;
  color: white;
}
</style>
