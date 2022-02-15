<template>
    <dtHeader></dtHeader>
    <dtBody>
        <a-form layout="horizontal" :model="state.formInline" @submit.prevent="submit">
            <a-form-item>
                <a-input v-model:value="state.formInline.name" size="large" placeholder="admin">
                    <template #prefix><user-outlined type="user" /></template>
                </a-input>
            </a-form-item>
            <a-form-item>
                <a-input
                        v-model:value="state.formInline.password"
                        size="large"
                        type="password"
                        placeholder="123456"
                        autocomplete="new-password"
                >
                    <template #prefix><lock-outlined type="user" /></template>
                </a-input>
            </a-form-item>

            <a-form-item>
                <a-button  type="primary" html-type="submit" size="large" :loading="state.loading" block>
                    登录
                </a-button>
            </a-form-item>
        </a-form>
    </dtBody>
    <dtFooter></dtFooter>
</template>

<script setup lang="ts">
    import { reactive,} from 'vue'
    import { userLogin }  from "../../service/login/index"
    import dtHeader from '@/components/dtHeader/index.vue'
    import dtBody from '@/components/dtBody/index.vue'
    import dtFooter from '@/components/dtFooter/index.vue'
    import {message as $message} from "ant-design-vue";
    import { UserOutlined, LockOutlined, SafetyOutlined } from '@ant-design/icons-vue';
    // import { useRoute, useRouter } from 'vue-router';

    const state = reactive({
        loading: false,
        formInline: {
            name: '',
            password: '',
        },
    });

    const submit = async () => {
        await userLogin(state.formInline).then(res => {
            console.log(res)
            if(res.data.result){
                $message.success("登录成功");
                //路由跳转 router
            }
        })
    }
</script>
