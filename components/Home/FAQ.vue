<template>
    <section class="pt-4 overflow-hidden" id="faq">
        <div class="container-fluid">
            <h2 class="rew-text-brown section-title !text-[30px]">
                <span class="rew-text-green">Frequently asked</span>
                questions
            </h2>
            <h4 class="text-center section-sub-title !mb-3 lg:!mb-12 !text-[20px] !font-normal" style="color: var(--rew-primary-brown)">
                In a quandary of not knowing what you don’t know about Slate? You’re not alone! Here are some of the questions that we help Slate schools answer:
            </h4>
            <div class="faq-content mx-auto">
                <div data-aos="fade-down" class="accordion accordion-flush" id="rew-faq">
                    <div v-for="item in faqs" class="accordion-item">
                        <h2 class="accordion-header" :id="item.btnid">
                            <div class="accordion-button collapsed block shadow-md py-4 px-5" v-html="item.title" />
                        </h2>
                    </div>
                </div>
            </div>
        </div>
        <div class="p-4 text-center">
            <CallToAction size="lg"/>
        </div>
    </section>
</template>

<script setup>
const faqs = ref([
    {
        id: 'faq1',
        btnid: 'faqbtn1',
        title: 'My staff spends a significant amount of time/effort on completing manual operations processes and serving as human bridges for data integrations. How can we automate?',
    },
    {
        id: 'faq2',
        btnid: 'faqbtn2',
        title: 'Our admission office is overwhelmed by a NeverEnding Story of internal Slate requests from campus stakeholders. How can we optimize our in-house Slate Support and get ahead?',
    },
    {
        id: 'faq3',
        btnid: 'faqbtn3',
        title: 'We are ready to take our Slate systems and operations documentation to the next level. Where do we start?',
    },
    {
        id: 'faq4',
        btnid: 'faqbtn4',
        title: 'I watched a webinar where a Slater showcased an awesome portal their school has. How can we build something similar?',
    },
    {
        id: 'faq5',
        btnid: 'faqbtn5',
        title: 'We are hiring for a Slate position, but we continue to have failed searches. What more can we do?',
    },
    {
        id: 'faq6',
        btnid: 'faqbtn6',
        title: 'Our Slate reports and other systems of record are not playing nicely. How can find and keep the data truth?'
    }
]) 
</script>

<style>
.accordion-button {
    font-weight: 400;
}

.accordion-button::after {
    display: none;
}
</style>