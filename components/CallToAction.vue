<template>
    <button title="Contact us" class="rew-main-btn rew-box-shadow inline-flex items-center"
        :class="{ 'h-10 !text-base': size === 'md', 'footer': footer }" @click="handleClick">
        <span v-if="label">{{ label }}</span>
        <span v-else>Contact Us</span>
        <span class="md:ml-3 ml-1">
            <IconDoubleArrow />
        </span>
    </button>
</template>

<script setup>
const props = defineProps({
    label: {
        type: String,
    },
    size: {
        type: String,
        default: 'md',
    },
    link: {
        type: String,
    },
    footer: {
        type: Boolean
    }
})

const visible = useState('visible')

const handleClick = () => {
    if (props.link) {
        window.open(props.link, '_blank').focus()
        return
    }

    visible.value = true
}
defineExpose({ handleClick })
</script>