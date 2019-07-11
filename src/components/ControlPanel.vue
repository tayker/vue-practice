<template>
    <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :router="true"
    >
        <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>User Management</span>
            </template>
            <el-menu-item-group title="User">
                <el-menu-item index="1-1" route="/user/list">Users list</el-menu-item>
                <el-menu-item index="1-2" route="/user/add">Add user</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>Products Management</span>
            </template>
            <el-menu-item-group title="Product">
                <el-menu-item index="2-1" route="/product/list">Product list</el-menu-item>
                <el-menu-item index="2-2" route="/product/add">Add product</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="3" route="/info">
            <i class="el-icon-document"></i>
            <span>Info</span>
        </el-menu-item>
        <el-menu-item index="4" route="/help">
            <i class="el-icon-setting"></i>
            <span>Help</span>
        </el-menu-item>
    </el-menu>
</template>

<script>
export default {
    name: 'ControlPanel',
    data() {
        return {

        }
    }
}
</script>

<style>

</style>
