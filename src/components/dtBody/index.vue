<template>
    <div class="dt-body">
        <div class="body-left" :style="styleData">

            <img class="logo-lg" src="@/assets/dt_logo_lg.png" alt="logo"><span>开发工具管理系统</span>
            <span class="span-en">Development tools manage system</span>
        </div>
        <div class="body-right">
            <div class="body-login">登录</div>
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
    import {defineComponent, ref } from 'vue'

    export default defineComponent({
        name: "dtBody",
        setup() {
            const bgImg = new URL("../../assets/body_left.png", import.meta.url).href
            const styleData = ref('background-image : url("' + bgImg + '")')
            return {styleData}
        }
    })

</script>

<style lang="less">
    @import "_index";
</style>