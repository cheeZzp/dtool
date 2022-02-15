<template>
    <div class="dt-header">
        <div class="left">
            <img src="@/assets/dt_logo.png" alt="logo">
            <span>dtool系统</span>

        </div>
        <div class="right">
            <span>注册</span>
            <span>|</span>
            <span>返回首页</span>
        </div>
    </div>
</template>
<script lang="ts">
    import { defineComponent } from "vue";
    export default defineComponent({
        name: 'dtHeader',
    });
</script>
<style lang="less">
    @import "_index";
</style>
