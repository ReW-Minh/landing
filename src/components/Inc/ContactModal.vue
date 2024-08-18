<template>
    <div class="modal fade" id="contactModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="contactModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header text-white justify-content-center border-bottom-0 pb-0">
                    <h2 class="modal-title text-center" id="contactModalLabel">CONTACT US</h2>
                </div>
                <form ref="form" @submit.prevent="sendEmail">
                    <div class="modal-body px-md-5 px-2">
                        <div :class="{ disabled: disableSubmit }" class="form-floating mb-3">
                            <input required type="text" class="form-control" id="inputName" name="inputName"
                                placeholder=" ">
                            <label class="form-label" for="inputName">NAME</label>
                            <span class="form-icon">
                                <img src="/src/assets/img/name.svg" alt="name">
                            </span>
                        </div>
                        <div :class="{ disabled: disableSubmit }" class="form-floating mb-3">
                            <input required type="text" class="form-control" id="inputInstitution" name="inputInstitution"
                                placeholder=" ">
                            <label class="form-label" for="inputInstitution">INSTITUTION</label>
                            <span class="form-icon">
                                <img src="/src/assets/img/institution.svg" alt="institution">
                            </span>
                        </div>
                        <div :class="{ disabled: disableSubmit }" class="form-floating mb-3">
                            <input required type="email" class="form-control" id="inputEmail" name="inputEmail"
                                placeholder=" ">
                            <label class="form-label" for="inputEmail">EMAIL</label>
                            <span class="form-icon">
                                <img src="/src/assets/img/mail.svg" alt="mail">
                            </span>
                        </div>
                        <div :class="{ disabled: disableSubmit }" class="form-floating">
                            <input type="text" class="form-control" id="inputMessage" name="inputMessage" placeholder=" ">
                            <label class="form-label" for="inputMessage">MESSAGE</label>
                            <span class="form-icon">
                                <img src="/src/assets/img/message.svg" alt="message">
                            </span>
                        </div>
                    </div>
                    <div class="modal-footer border-top-0 pt-0 justify-content-center">
                        <button @click="clearData" ref="closePopup" type="button"
                            class="btn form-btn form-btn-secondary fw-700" data-bs-dismiss="modal">Back</button>
                        <input :disabled="disableSubmit" type="submit" :value="btnText"
                            class="btn form-btn form-btn-primary fw-700" />
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import emailjs from '@emailjs/browser'

import { ref } from 'vue'
import { notiToast } from '../../utils'

const btnText = ref('Submit')
const disableSubmit = ref(false)

const form = ref(null)
const closePopup = ref(null)

const clearData = () => {
    form.value.reset()
    btnText.value = 'Submit'
    disableSubmit.value = false
}

const sendEmail = () => {
    btnText.value = 'Submitting...'
    disableSubmit.value = true
    emailjs.sendForm('service_mgq832c', 'template_rrsrn8n', form.value, 'XWnBPQ5zs66M-d5nI')
        .then(() => {
            btnText.value = 'Submitted!';
            notiToast('Thank you for contacting us!')
            setTimeout(() => {
                closePopup.value.click()
            }, 1000)
        }, error => {
            btnText.value = 'There was an error!'
            setTimeout(() => {
                btnText.value = 'Submit'
                disableSubmit.value = false
            }, 2000)
            console.log('FAILED...', error.text);
        });
}
</script>