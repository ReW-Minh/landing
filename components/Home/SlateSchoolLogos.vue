<template>
  <div class="slate-logos">

    <!-- Row 1: static header + logo+name pill ticker -->
    <div class="row1-header text-2xl">
      <span class="count">60+</span> Slate Schools and Counting!
    </div>
    <div class="ticker-wrap">
      <div class="ticker-track row1-track">
        <template v-for="n in 2">
          <div v-for="school in schools" class="pill">
            <div v-if="!school.logo" class="logo-circle" :style="{ background: school.color }">
              {{ school.initials }}
            </div>
            <img v-else :src="school.logo" :alt="school.name" class="logo-img-sm" />
            <span>{{ school.name }}</span>
          </div>
        </template>
      </div>
    </div>

    <div class="mt-20"></div>

    <!-- Row 2: logo-only ticker with inline "60+" badge -->
    <div class="ticker-wrap ticker-wrap--row2">
      <div class="ticker-track row2-track">
        <template v-for="n in 2">
          <div class="count-badge">
            <span class="num">60+</span> Slate Schools and Counting!
          </div>
          <div class="divider"></div>
          <div v-for="school in schools" class="logo-only" :style="!school.logo ? { background: school.color } : {}">
            <img v-if="school.logo" :src="school.logo" :alt="school.name" class="logo-img-lg" />
            <span v-else>{{ school.initials }}</span>
          </div>
          <div class="divider"></div>
        </template>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
interface School {
  name: string
  initials: string
  color: string
  logo?: string
}

const schools: School[] = [
  { name: 'University 1', initials: 'U1', color: '#4E6C3C' },
  { name: 'University 2', initials: 'U2', color: '#00669E' },
  { name: 'University 3', initials: 'U3', color: '#8F4A2C' },
  { name: 'University 4', initials: 'U4', color: '#768471' },
  { name: 'University 5', initials: 'U5', color: '#433129' },
  { name: 'University 6', initials: 'U6', color: '#4E6C3C' },
  { name: 'University 7', initials: 'U7', color: '#00669E' },
  { name: 'University 8', initials: 'U8', color: '#8F4A2C' },
  { name: 'University 9', initials: 'U9', color: '#768471' },
  { name: 'University 10', initials: 'U10', color: '#433129' },
]
</script>

<style scoped>
/* ── Layout ── */
.slate-logos {
  padding: 24px 0 8px;
  overflow: hidden;
}

.row1-header {
  text-align: center;
  font-weight: 700;
  color: #433129;
  letter-spacing: 0.02em;
  margin-bottom: 14px;
}
.row1-header .count {
  color: #4E6C3C;
}

/* ── Ticker wrapper (clips + fades edges) ── */
.ticker-wrap {
  overflow: hidden;
  width: 100%;
  mask-image: linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%);
  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%);
  margin-bottom: 18px;
}
.ticker-wrap--row2 {
  margin-bottom: 0;
}

/* ── Scrolling track ── */
.ticker-track {
  display: flex;
  align-items: center;
  width: max-content;
}
.row1-track {
  animation: ticker 22s linear infinite;
}
.row2-track {
  animation: ticker 26s linear infinite;
}
@keyframes ticker {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* ── Row 1: pill ── */
.pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: white;
  border-radius: 40px;
  padding: 8px 18px 8px 8px;
  border: 1px solid rgba(0, 0, 0, 0.09);
  font-size: 12px;
  font-weight: 700;
  color: #433129;
  white-space: nowrap;
  flex-shrink: 0;
  margin-right: 14px;
}
.logo-circle {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 900;
  color: white;
  flex-shrink: 0;
  letter-spacing: -0.5px;
}
.logo-img-sm {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  object-fit: contain;
  flex-shrink: 0;
}

/* ── Row 2: logo-only circle ── */
.logo-only {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 900;
  color: white;
  flex-shrink: 0;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.13);
  margin-right: 20px;
  letter-spacing: -0.5px;
}
.logo-img-lg {
  width: 32px;
  height: 32px;
  object-fit: contain;
}

/* ── Row 2: inline count badge ── */
.count-badge {
  display: inline-flex;
  align-items: center;
  background: #4E6C3C;
  color: white;
  border-radius: 40px;
  padding: 9px 22px;
  font-size: 13px;
  font-weight: 700;
  white-space: nowrap;
  flex-shrink: 0;
  margin-right: 20px;
}
.count-badge .num {
  font-size: 16px;
  font-weight: 900;
  margin-right: 6px;
}

/* ── Divider between badge and logos ── */
.divider {
  width: 1px;
  height: 32px;
  background: #C8CEC6;
  margin-right: 20px;
  flex-shrink: 0;
}

/* ── Responsive ── */
@media screen and (max-width: 767px) {
  .ticker-wrap {
    mask-image: linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%);
    -webkit-mask-image: linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%);
  }
  .logo-circle {
    width: 22px;
    height: 22px;
    font-size: 8px;
  }
  .logo-img-sm {
    width: 22px;
    height: 22px;
  }
  .pill {
    font-size: 10px;
    padding: 6px 14px 6px 6px;
    margin-right: 10px;
  }
  .logo-only {
    width: 34px;
    height: 34px;
    font-size: 9px;
    margin-right: 14px;
  }
  .logo-img-lg {
    width: 24px;
    height: 24px;
  }
}

/* ── Accessibility: stop animation for users who prefer reduced motion ── */
@media (prefers-reduced-motion: reduce) {
  .ticker-wrap {
    mask-image: none;
    -webkit-mask-image: none;
  }
  .ticker-track {
    animation: none;
    flex-wrap: wrap;
    width: 100%;
    gap: 8px;
    padding: 4px 0;
  }
  .row1-track > *:nth-child(n + 11) { display: none; }
  .row2-track > *:nth-child(n + 14) { display: none; }
}
</style>
