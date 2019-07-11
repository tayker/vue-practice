<template>
    <div>
        <Header />
        <el-container>
            <el-aside>
                <control-panel></control-panel>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import Header from './components/Header';
import ControlPanel from './components/ControlPanel';

export default {
    name: 'App',
    components: {
        Header,
        ControlPanel
    }
}
</script>

<style>
    body{
        font-family: 'Literata', serif;
    }
</style>
