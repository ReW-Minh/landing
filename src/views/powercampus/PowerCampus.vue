<template>
    <div v-if="powerCampusContent" class="container">
        <div data-aos="fade-down" data-aos-duration="700" data-aos-offset="-500" class="pt-5">
            <Card>
                <template #content>
                    <div class="ql-editor">
                        <div v-html="powerCampusContent"></div>
                    </div>
                </template>
            </Card>
        </div>
    </div>
    <ComingSoon v-else />
</template>

<script setup>
import { usePowerCampus } from '../../services/usePowerCampus'

const { powerCampusContent } = usePowerCampus()
</script>

<style scoped lang="scss">
.ql-editor {
    min-height: calc(100vh - 638px);
}
</style>