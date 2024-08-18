<template>
    <div class="d-flex align-items-center justify-content-center wrap">
        <form @submit.prevent="handleLogin">
            <Card style="width: 100%; max-width: 25rem; margin: 0 12px; overflow: hidden" class="shadow">
                <template #header>
                    <div class="px-4 pt-4 pb-3">
                        <img alt="logi" src="/src/assets/img/main-logo.svg" class="img-fluid" />
                    </div>
                </template>
                <template #title>
                    Admin Login
                </template>
                <template #content>
                    <div>
                        <label>Username:</label>
                        <InputText class="w-100" v-model="dataModel.username" />
                    </div>
                    <div class="mt-2">
                        <label>Password:</label>
                        <Password class="w-100" inputClass="w-100" :feedback="false" v-model="dataModel.password"
                            toggleMask />
                    </div>
                </template>
                <template #footer>
                    <Button type="submit" label="Login" class="w-100 mt-2" :loading />
                </template>
            </Card>
        </form>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useAuth } from '../../services/useAuth'
import { useRouter } from 'vue-router'

const { login } = useAuth()

const router = useRouter()

const dataModel = reactive({
    username: '',
    password: ''
})

const loading = ref(false)
const handleLogin = async () => {
    loading.value = true
    const res = await login(dataModel)
    loading.value = false

    if (!res?.success)
        return

    router.push({ name: 'AdminBio' })
}

if (sessionStorage.getItem('accessToken')) {
    router.push({ name: 'AdminBio' })
}

</script>

<style scoped lang="scss">
.wrap {
    min-height: 100vh;
    background-image: linear-gradient(to left bottom, #4e6c3c, #587249, #617857, #6c7e64, #768471);
}
</style>