<template>
  <div class="slate-logos">
    <!-- sections added in subsequent tasks -->
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Testimonial {
  quote: string
  person: string
  title: string
}

interface School {
  name: string
  initials: string
  color: string
  logo?: string
  testimonial?: Testimonial
}

interface LogoSlot {
  id: number
  school: School
  visible: boolean
}

const VISIBLE_LOGOS = 5

const schools: School[] = [
  // --- Schools with testimonials ---
  {
    name: 'Ouachita Baptist University',
    initials: 'OBU',
    color: '#4A2572',
    testimonial: {
      quote: 'ReWorkflow has been an invaluable partner in optimizing our Slate environment. Their expertise and responsiveness have made a real difference in how our team operates.',
      person: 'Jane Smith',
      title: 'Director of Admissions'
    }
  },
  {
    name: 'Teachers College, Columbia University',
    initials: 'TC',
    color: '#003DA5',
    testimonial: {
      quote: 'Working with ReWorkflow has transformed how we use Slate. They understand higher ed operations deeply and deliver solutions that actually work for our team.',
      person: 'John Doe',
      title: 'Enrollment Systems Manager'
    }
  },
  {
    name: 'Brown University',
    initials: 'BRN',
    color: '#4E3629',
    testimonial: {
      quote: "The cycle prep support alone saved us weeks of work. ReWorkflow's team feels like a true extension of our staff — knowledgeable, reliable, and always a step ahead.",
      person: 'Sarah Lee',
      title: 'VP of Enrollment'
    }
  },
  {
    name: 'CUNY City Tech',
    initials: 'CCT',
    color: '#003478',
    testimonial: {
      quote: "ReWorkflow's Slate expertise is unmatched. From complex integrations to day-to-day support, they deliver fast, high-quality results every time.",
      person: 'Michael Chen',
      title: 'Senior Systems Analyst'
    }
  },
  {
    name: 'Moore College of Art & Design',
    initials: 'MCA',
    color: '#006B6B',
    testimonial: {
      quote: 'We trust ReWorkflow with our most critical Slate workflows. Their team is proactive, thorough, and genuinely invested in our success.',
      person: 'Emily Torres',
      title: 'Associate Director of Admissions'
    }
  },
  {
    name: 'University of Alabama in Huntsville',
    initials: 'UAH',
    color: '#003087',
    testimonial: {
      quote: 'Highly recommend ReWorkflow to any institution looking to get more out of Slate. They are true partners who understand our goals, not just vendors.',
      person: 'David Park',
      title: 'Director of Enrollment Management'
    }
  },
  // --- Logo strip only ---
  { name: 'Stanford University',      initials: 'SU',  color: '#8C1515' },
  { name: 'Georgetown University',    initials: 'GU',  color: '#041E42' },
  { name: 'University of Michigan',   initials: 'UM',  color: '#00274C' },
  { name: 'New York University',      initials: 'NYU', color: '#57068C' },
  { name: 'Northeastern University',  initials: 'NEU', color: '#C8102E' },
  { name: 'Loyola University Chicago',initials: 'LUC', color: '#832E2D' },
  { name: 'Fordham University',       initials: 'FU',  color: '#811B24' },
  { name: 'DePaul University',        initials: 'DPU', color: '#23417A' },
]
</script>

<style scoped>
.slate-logos {
  padding: 24px 0 8px;
}
</style>
