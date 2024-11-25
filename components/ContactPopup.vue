<template>
    <Dialog v-model:visible="visible" modal :closable="false" :dismissableMask="true" id="contact-popup"
        :style="{ width: '100vw', maxWidth: '789px', margin: '0 20px' }">
        <div class="modal-content py-4 px-4 md:px-12">
            <div class="modal-header text-white justify-content-center border-bottom-0 pb-0">
                <h2 class="modal-title text-center" id="contactModalLabel">CONTACT US</h2>
            </div>

            <form ref="form" @submit.prevent="sendEmail">
                <div class="space-y-3 mb-3">
                    <InputGroup>
                        <InputText placeholder="NAME" name="inputName" required />
                        <InputGroupAddon>
                            <img src="/img/name.svg" alt="name" />
                        </InputGroupAddon>
                    </InputGroup>

                    <InputGroup>
                        <InputText placeholder="INSTITUTION" name="inputInstitution" required />
                        <InputGroupAddon>
                            <img src="/img/institution.svg" alt="institution">
                        </InputGroupAddon>
                    </InputGroup>

                    <InputGroup>
                        <InputText placeholder="EMAIL" name="inputEmail" required type="email" />
                        <InputGroupAddon>
                            <img src="/img/mail.svg" alt="mail">
                        </InputGroupAddon>
                    </InputGroup>

                    <InputGroup>
                        <InputText placeholder="MESSAGE" name="inputMessage" />
                        <InputGroupAddon>
                            <img src="/img/message.svg" alt="message">
                        </InputGroupAddon>
                    </InputGroup>
                </div>
                <div class="grid grid-cols-3 gap-3">
                    <Button @click="clearData"
                        class="col-span-1 btn form-btn form-btn-secondary font-bold h-10 !rounded-xl">Back</Button>
                    <Button type="submit" :loading
                        class="col-span-2 btn form-btn form-btn-primary font-bold h-10 !rounded-xl">
                        <i v-if="loading" class="pi pi-spin pi-spinner" />
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    </Dialog>

    <Transition>
        <div v-if="message.show" class="fixed z-[10000] bottom-[16px] right-[16px]">
            <Message :severity="message.severity">{{ message.text }}</Message>
        </div>
    </Transition>
</template>

<script setup>
import emailjs from '@emailjs/browser'

const visible = useState('visible', () => false)

const loading = ref(false)
const form = ref(null)

const message = reactive({
    text: '',
    severity: 'error',
    show: false
})
const handleMessage = (str, severity) => {
    message.text = str
    message.show = true

    if (severity)
        message.severity = severity

    setTimeout(() => {
        message.show = false
        message.text = ''
        message.severity = 'success'
    }, 3000)
}

const clearData = () => {
    form.value.reset()
    visible.value = false
}

const sendEmail = async () => {
    loading.value = true
    try {
        await emailjs.sendForm('service_mgq832c', 'template_rrsrn8n', form.value, 'XWnBPQ5zs66M-d5nI')

        handleMessage('Thank you for contacting us, we will get back to you soon.')

        setTimeout(() => {
            clearData()
        }, 1000)

    } catch (error) {
        handleMessage('Oops, something went wrong, please try again later.', 'error')
    } finally {
        loading.value = false
    }
}
</script>

<style scoped lang="scss">
:deep(.p-inputgroup) {
    height: 53px;

    * {
        --p-inputgroup-addon-border-radius: 15px
    }

    .p-inputtext {
        padding-left: 20px;
    }
}
</style>

<style lang="scss">
:root {
    --p-message-success-background: var(--rew-primary-green);
    --p-message-success-border-color: var(--rew-primary-green);
    --p-message-success-color: white;
    --p-message-success-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;

    --p-message-error-background: var(--rew-active-brown);
    --p-message-error-border-color: var(--rew-active-brown);
    --p-message-error-color: white;
    --p-message-error-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
}

#contact-popup {
    &.p-dialog {
        border-radius: 35px !important;

        .p-dialog-header {
            display: none !important;
        }

        .p-dialog-content {
            padding: 0 !important;
        }

        .p-inputtext {
            border: none !important
        }

        .p-inputgroupaddon {
            border: none;
            background: white;
        }

    }
}
</style>