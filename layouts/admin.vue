<template>
    <div class="grid grid-cols-12 gap-2 p-2" style="min-height: 100vh">
        <div class="col-span-2">
            <AdminSidebar />
        </div>
        <div class="col-span-10">
            <slot />
        </div>
    </div>
</template>

<script setup>
checkAdminLoggedIn()
</script>