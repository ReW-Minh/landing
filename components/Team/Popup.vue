<template>
    <Dialog v-model:visible="visible" modal style="width: 100%; max-width: 850px; margin: 0 12px; border: none"
        :closable="false" :header="' '" class="view-bio" @hide="visible = false" :dismissableMask="true">

        <img src="/img/logo-bg.svg" alt="rew" class="bg-logo hidden md:block inset-0 !opacity-[0.05]">

        <div class="flex flex-col md:flex-row items-center gap-4 mb-4 relative mt-1 overflow-hidden">
            <img class="profile-img rounded shadow-lg" :src="bio.picture" />
            <div>
                <div class="text-3xl rew-text-green font-bold tracking-wide text-center md:text-start"> {{ bio.name }}
                </div>
                <div class="rew-text-brown tracking-wider"> {{ bio.title }}</div>
            </div>
            <button @click="visible = false" class="absolute -top-[22px] -right-[22px] p-6">
                <i class="pi pi-times" />
            </button>
        </div>

        <div class="whitespace-pre-line" v-html="bio.content"></div>

        <div class="flex flex-col items-start md:flex-row md:items-center  gap-x-4 mt-4 mb-7">
            <div class="font-bold italic rew-text-brown text-lg">
                Let's connect!
            </div>
            <div class="flex items-center gap-x-4 mt-2 md:mt-0">
                <template v-for="item in bio.contact" :key="item.type">
                    <a v-if="item.link" :href="renderLink(item)"
                        v-tooltip.top="{ value: renderTooltip(item), autoHide: false }" @click="handleCopy(item)"
                        target="_blank" class="btn-connect">
                        <IconLinkedIn v-if="item.type === CONTACT_TYPE.LINKEDIN" />
                        <IconSlateCommunity v-if="item.type === CONTACT_TYPE.SLATE_COMMUNITY" />
                        <IconReSource v-if="item.type === CONTACT_TYPE.RESOURCE" />
                        <IconGitHub v-if="item.type === CONTACT_TYPE.GITHUB" />
                        <IconEmail v-if="item.type === CONTACT_TYPE.EMAIL" />
                    </a>
                </template>
            </div>
        </div>
    </Dialog>
</template>

<script setup>
const props = defineProps(['bio'])

const visible = defineModel()

const renderTooltip = data => {
    let str = ''

    switch (data.type) {
        case CONTACT_TYPE.LINKEDIN:
            str = 'LinkedIn'
            break
        case CONTACT_TYPE.SLATE_COMMUNITY:
            str = 'Slate Community'
            break
        case CONTACT_TYPE.RESOURCE:
            str = 'ReSource'
            break
        case CONTACT_TYPE.EMAIL:
            str = data.link
            break
        case CONTACT_TYPE.GITHUB:
            str = 'GitHub'
    }

    return str
}

const renderLink = data => {
    if (data.type === CONTACT_TYPE.EMAIL)
        return `mailto:${data.link}`

    return data.link
}

const handleCopy = data => {
    if (data.type !== CONTACT_TYPE.EMAIL)
        return

    navigator.clipboard.writeText(data.link)
}
</script>

<style scoped lang="scss">
.profile-img {
    height: 230px;
}

.links {
    padding: 0;
    margin: 0;
    list-style: none;

    &:not(.d-flex) {
        li {
            &::after {
                display: none;
            }
        }
    }

    li {
        margin-right: 10px;

        &:not(:last-child) {
            position: relative;

            &::after {
                content: '';
                height: 60%;
                width: 2px;
                top: 54%;
                right: -6px;
                transform: translateY(-50%);
                background-color: var(--rew-secondary-green);
                position: absolute;
            }
        }

        a {
            font-size: 14px;
            color: var(--rew-primary-green)
        }
    }
}
</style>

<style lang="scss">
.view-bio {
    .p-dialog-header {
        padding-top: 8px;
        padding-bottom: 8px;
    }
}

.btn-connect {
    @apply shadow-md;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 46px;
    height: 46px;
    border-radius: 12px;
    background-color: var(--rew-primary-green);
    border-color: transparent;
    padding: 8px;
    color: white
}
</style>