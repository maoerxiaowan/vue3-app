<template>
    <el-row class="tac">
        <el-menu default-active="2" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff"
            active-text-color="#ffd04b">
            <el-sub-menu index="1">
                <template #title>
                    <span>12314</span>
                </template>
                <el-menu-item-group class="demo-group">
                    <el-menu-item index="1-1">
                        <router-link to="">
                            <div>1-1</div>
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
    border: 1px solid black;
}

.el-menu-vertical-demo {
    height: 100%;
    width: 16vw;
    border: 1px solid black;
}

.demo-group {
    width: 16vw;
    border: 1px solid black;
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
