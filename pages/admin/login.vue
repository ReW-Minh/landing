<template>
    <div class="flex items-center justify-center wrap">
        <form @submit.prevent="handleLogin">
            <Card style="width: 100%; max-width: 25rem; margin: 0 12px; overflow: hidden" class="shadow">
                <template #header>
                    <div class="px-4 pt-4 pb-3">
                        <img alt="reworkflow" src="/img/main-logo.svg" class="img-fluid" />
                    </div>
                </template>
                <template #title>
                    Admin Login
                </template>
                <template #content>
                    <div>
                        <label>Username:</label>
                        <InputText class="w-full h-[42px]" size="large" v-model="dataModel.username" required name="username" />
                    </div>
                    <div class="mt-2">
                        <label>Password:</label>
                        <Password class="w-full" size="large" inputClass="w-full" :feedback="false"
                            v-model="dataModel.password" toggleMask required name="password" />
                    </div>
                </template>
                <template #footer>
                    <Button type="submit" label="Login" class="w-full mt-3" :loading />
                </template>
            </Card>
        </form>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'empty'
})

checkAdminLoggedIn()

const dataModel = reactive({
    username: '',
    password: ''
})

const loading = ref(false)
const handleLogin = async () => {
    loading.value = true
    const res = await adminLogin(dataModel)
    loading.value = false

    if (!res?.success)
        return

    navigateTo('/admin')
}
</script>

<style scoped lang="scss">
.wrap {
    min-height: 100vh;
    background-image: linear-gradient(to left bottom, #4e6c3c, #587249, #617857, #6c7e64, #768471);
}
</style>