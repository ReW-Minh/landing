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

<style scoped lang="scss">
:deep(.p-datatable) {
  --p-datatable-header-cell-background: var(--rew-primary-green);
  --p-datatable-header-cell-color: white;
  --p-datatable-sort-icon-color: white;
  --p-datatable-sort-icon-hover-color: white;
  --p-datatable-header-cell-hover-color: white;
  --p-datatable-header-cell-selected-color: white;
  --p-datatable-header-cell-hover-background: var(--rew-secondary-green);
  --p-datatable-header-cell-selected-background: var(--rew-primary-brown);
}
</style>