<template>
    <div class="m-2 px-3 px-sm-0 content-group">
        <template v-if="!store.loading">
            <Card style="height: calc(100vh - 16px); overflow: auto">
                <template #content>
                    <div class="pb-5">
                        <Accordion :value="'0'">
                            <AccordionPanel value="0">
                                <AccordionHeader>Home</AccordionHeader>
                                <AccordionContent>
                                    <ul>
                                        <li>
                                            Call to action:
                                            <InputText v-model="content.home.callToAction" autocomplete="off" />
                                        </li>
                                        <li>
                                            subText:
                                            <Textarea rows="3" v-model="content.home.subText" autocomplete="off" />
                                        </li>
                                    </ul>
                                </AccordionContent>
                            </AccordionPanel>

                            <AccordionPanel value="1">
                                <AccordionHeader>About</AccordionHeader>
                                <AccordionContent>
                                    <ul>
                                        <li v-for="(block, key) in content.about">
                                            {{ key }}:
                                            <div class="d-flex flex-column ms-4">
                                                Title:
                                                <InputText v-model="block.title" autocomplete="off" />
                                                Content:
                                                <Textarea rows="3" v-model="block.content" autocomplete="off" />
                                            </div>
                                        </li>
                                    </ul>
                                </AccordionContent>
                            </AccordionPanel>

                            <AccordionPanel value="2">
                                <AccordionHeader>Services</AccordionHeader>
                                <AccordionContent>
                                    <ul>
                                        <li v-for="(block, key) in content.services">
                                            {{ key }}:
                                            <div class="d-flex flex-column ms-4">
                                                Title:
                                                <InputText v-model="block.title" autocomplete="off" />
                                                Content:
                                                <Textarea rows="3" v-model="block.content" autocomplete="off" />
                                            </div>
                                        </li>
                                    </ul>
                                </AccordionContent>
                            </AccordionPanel>

                            <AccordionPanel value="3">
                                <AccordionHeader>FAQ</AccordionHeader>
                                <AccordionContent>
                                    <ul>
                                        <li v-for="(block, key) in content.faq">
                                            {{ key }}:
                                            <Textarea rows="3" v-model="content.faq[key]" autocomplete="off" />
                                        </li>
                                    </ul>
                                </AccordionContent>
                            </AccordionPanel>

                            <AccordionPanel value="4">
                                <AccordionHeader>Footer</AccordionHeader>
                                <AccordionContent>
                                    <ul>
                                        <li>
                                            Call to action:
                                            <InputText v-model="content.footer.callToAction" autocomplete="off" />
                                        </li>
                                        <li>
                                            Copyright:
                                            <InputText v-model="content.footer.copyright" autocomplete="off" />
                                        </li>
                                    </ul>
                                </AccordionContent>
                            </AccordionPanel>
                        </Accordion>
                    </div>

                </template>
            </Card>
        </template>
        <div v-if="!store.loading"
            class="d-flex justify-content-end gap-2 p-2 bg-white position-absolute actions border-top">
            <Button label="Cancel" severity="secondary" @click="confirmCancel" />
            <Button label="Save" @click="confirmSave" :loading />
        </div>
        <Transition>
            <div v-show="store.loading"
                class="position-absolute align-items-center justify-content-center top-50 start-50 translate-middle"
                style="display: flex">
                <div class="loading-indicator"></div>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import Accordion from 'primevue/accordion'
import AccordionPanel from 'primevue/accordionpanel'
import AccordionHeader from 'primevue/accordionheader'
import AccordionContent from 'primevue/accordioncontent'

import { onMounted, ref, reactive } from 'vue'
import { useConfirm } from 'primevue/useconfirm'
import { useLoadingStore } from '../../store/loading'
import { confirmAction } from '../../utils'
import { useHomeText } from '../../services/useHomeText'

const { textContent, getTextContent, setTextContent } = useHomeText()

const store = useLoadingStore()

const confirm = useConfirm()

const content = reactive({
    home: {
        callToAction: `Let's Get Started`,
        subText: `We team up with higher education institutions to cultivate evergreen enrollment systems, operations, and processes for their Slate CRM instances.`
    },
    about: {
        block1: {
            title: `Putting Down Roots`,
            content: `Whether serving temporary Slater coverage or as an ongoing Slate Captain, ReW’s sustainable solutions remain the same. Our work stands the test of time.`
        },
        block2: {
            title: `Slate Support to the Core`,
            content: `The acreage of ReW’s higher education expertise is vast. However, our mission focuses on providing Slate support tailored for enrollment management systems and operations.`
        },
        block3: {
            title: `Great Oaks from Little Acorns Grow`,
            content: `ReW is a lean collaborative of Slaters from diverse higher education backgrounds who hold the shared belief that no Slate instance is too small to make a mighty impact.`
        },
        block4: {
            title: `Into the SIS Weeds`,
            content: `Our team has extensive experience administering student information systems. We thrive on challenges to optimize Slate with data integrations and business processes.`
        }
    },
    services: {
        block1: {
            title: `Captaining`,
            content: `Team up with our Slate subject matter experts to have embedded project management, cycle prep, and strategic advisement at the ready.`
        },
        block2: {
            title: `Engineering`,
            content: `Let’s dream big together for implementing next-level Slate enhancements from portals and dashboards to workflow automations and system integrations.`
        },
        block3: {
            title: `Operationalizing`,
            content: `Troubleshooting, routine maintenance, querying, data integrity, you name it! ReW’s operations specialists take on daily tasks so that your team is free to focus on student-facing priorities.`
        },
        block4: {
            title: `ReInforcing`,
            content: `Looking for Slate-skilled seasonal readers and/or application processors? In need of temporary coverage for a key Slater going on leave? Unexpected turnover putting you in a bind? Call on ReW to bridge the gap.`
        }
    },
    faq: {
        subText: `In a quandary of not knowing what you don’t know about Slate? You’re not alone! Here are some of the questions that we help Slate schools answer:`,
        block1: `My staff spends a significant amount of time/effort on completing manual operations processes and serving as human bridges for data integrations. How can we automate?`,
        block2: `Our Admission Office is overwhelmed by a NeverEnding Story of internal Slate requests from campus stakeholders. How can we optimize our in-house Slate Support and get ahead?`,
        block3: `We are ready to take our Slate systems and operations documentation to the next level. Where do we start?`,
        block4: `I watched a webinar where a Slater showcased an awesome portal their school has. How can we build something similar?`,
        block5: `We are hiring for a Slate position, but we continue to have failed searches. What more can we do?`
    },
    footer: {
        callToAction: `Contact Us`,
        copyright: `ReWorkflow, LLC. All Rights Reserved ©, 2024.`
    }
})

const loading = ref(false)
const handleSave = async () => {
    loading.value = true
    const res = await setTextContent(content)
    loading.value = false

    if (!res?.success)
        return

    textContent.value = content.value
}

const confirmCancel = () => {
    const obj = {
        message: 'Do you want to cancel?',
        accept: () => { content.value = textContent.value }
    }
    confirmAction(confirm, obj)
}
const confirmSave = () => {
    const obj = {
        message: 'Do you want to save changes?',
        accept: handleSave
    }
    confirmAction(confirm, obj)
}


onMounted(async () => {
    await getTextContent()
    content.value = textContent.value
})
</script>

<style lang="scss">
.content-group {
    position: relative;

    ul {
        margin-bottom: 0;
    }

    li {
        display: flex;
        flex-direction: column;
        font-weight: bold;

        &:first-child {
            margin-top: 0.5rem;
        }

        &:not(:first-child) {
            margin-top: .5rem;
        }
    }

    .actions {
        bottom: 0;
        right: 0;
        left: 0;
        border-radius: 0 0 var(--p-card-border-radius) var(--p-card-border-radius);
    }
}
</style>