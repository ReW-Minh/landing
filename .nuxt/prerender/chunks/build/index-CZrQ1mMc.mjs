import { u as useState } from './state-tqLlnwND.mjs';
import { R as RESOURCE_LINK } from './constant-fHB-VGeE.mjs';
import { useSSRContext, mergeProps, unref, ref } from 'file:///Users/minh/Developer/REWORKFLOW/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'file:///Users/minh/Developer/REWORKFLOW/node_modules/vue/server-renderer/index.mjs';
import { p as publicAssetsURL } from '../_/renderer.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { _ as _imports_0$1 } from './virtual_public-BK0XIxuq.mjs';
import { register } from 'file:///Users/minh/Developer/REWORKFLOW/node_modules/swiper/element/swiper-element-bundle.js';
import './server.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/hookable/dist/index.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/unctx/dist/index.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/h3/dist/index.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/unhead/dist/index.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/radix3/dist/index.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/defu/dist/defu.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/ufo/dist/index.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/@primeuix/utils/eventbus/index.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/@primeuix/styled/index.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/@primeuix/utils/object/index.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/@primeuix/utils/dom/index.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/@primeuix/utils/index.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/@primeuix/utils/zindex/index.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/@primeuix/utils/uuid/index.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/devalue/index.js';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/destr/dist/index.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/klona/dist/index.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/scule/dist/index.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/ohash/dist/index.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/@primevue/core/base/style/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/pathe/dist/index.mjs';

const _imports_0 = publicAssetsURL("/img/hero-img-sm.webp");
const _imports_1$1 = publicAssetsURL("/img/slate-logo.webp");
const _imports_2 = publicAssetsURL("/img/brainstorm.svg");
const _imports_3 = publicAssetsURL("/img/hero-img-lg.webp");
const _sfc_main$4 = {
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    useState("visible");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "pt-3",
        id: "home"
      }, _attrs))} data-v-014d95e4><div class="container-fluid" data-v-014d95e4><div class="grid grid-cols-12 gap-1" data-v-014d95e4><div class="lg:col-span-8 md:col-span-7 col-span-6" data-v-014d95e4><div class="flex flex-col h-full" data-v-014d95e4><div data-aos="fade-right" data-aos-duration="700" data-aos-delay="100" class="left-home-block position-relative mt-2 md:mt-12 relative" data-v-014d95e4><h1 class="hero-title rew-text-green leading-tight" data-v-014d95e4>Slate Support and Staffing Solutions <span class="rew-text-brown" data-v-014d95e4> without the <br data-v-014d95e4> Difficulties of <br class="hidden lg:block" data-v-014d95e4></span><span class="rew-font" data-v-014d95e4>Re</span><span class="rew-text-brown" data-v-014d95e4>Hiring</span></h1><button title="Contact Us" class="rew-main-btn rew-box-shadow flex items-center relative bottom-0 right-0 mt-3 lg:!absolute lg:-right-3 lg:mt-0" data-v-014d95e4><span data-v-014d95e4>Let&#39;s Get Started</span><span class="md:ml-3 ml-1 flex" data-v-014d95e4><svg class="button-arrow" width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-014d95e4><path d="M4.16671 27.75L0.958374 24.5417L11.4427 14L0.958374 3.45833L4.16671 0.25L17.9167 14L4.16671 27.75ZM19.2917 27.75L16.0834 24.5417L26.5677 14L16.0834 3.45833L19.2917 0.25L33.0417 14L19.2917 27.75Z" fill="white" data-v-014d95e4></path></svg></span></button></div><div data-aos="fade-right" data-aos-duration="700" data-aos-delay="200" class="left-home-block flex items-center mt-4" data-v-014d95e4><span class="small-image rew-box-shadow rew-bg-gradient hidden lg:block" data-v-014d95e4><img${ssrRenderAttr("src", _imports_0)} alt="rew small mainboard" class="img-fluid" data-v-014d95e4></span><span class="rew-text-brown fs-24 fs-sm-10 lg:ml-6 ml-0 font-light" data-v-014d95e4> We team up with higher education institutions to cultivate evergreen enrollment systems, operations, and processes for their Slate CRM instances. </span></div><div data-aos="fade-right" data-aos-duration="700" data-aos-delay="400" data-aos-offset="-500" class="left-home-block my-auto" data-v-014d95e4><div class="grid grid-cols-12" data-v-014d95e4><div class="col-span-12 lg:col-span-6" data-v-014d95e4><a target="_blank" href="https://technolutions.com/community/slate-preferred-partners" class="clickable flex items-center h-full" data-v-014d95e4><span class="flex items-center justify-center max-width-sm" data-v-014d95e4><img${ssrRenderAttr("src", _imports_1$1)} alt="slate" class="slate-partner-logo pl-0 lg:pl-2" data-v-014d95e4></span><span class="ml-1 md:ml-4 fs-36 fs-sm-10 fs-md-26 font-bold capitalize rew-text-brown" data-v-014d95e4><span class="rew-text-green" data-v-014d95e4> Slate </span> Preferred <br data-v-014d95e4> Partner </span><span class="more-info hidden lg:block" data-v-014d95e4>More info</span></a></div><div class="col-span-12 lg:col-span-6" data-v-014d95e4><a target="_blank"${ssrRenderAttr("href", "RESOURCE_LINK" in _ctx ? _ctx.RESOURCE_LINK : unref(RESOURCE_LINK))} class="clickable flex items-center h-full" data-v-014d95e4><span class="flex items-center justify-center max-width-sm" data-v-014d95e4><img${ssrRenderAttr("src", _imports_2)} alt="brainstorm" class="pl-0 lg:pl-2" data-v-014d95e4></span><span class="ml-1 md:ml-4 fs-36 fs-sm-10 fs-md-26 font-bold capitalize rew-text-brown" data-v-014d95e4><span style="${ssrRenderStyle({ "white-space": "nowrap" })}" data-v-014d95e4><span class="rew-text-green ms-sm-n2 rew-font" style="${ssrRenderStyle({ "margin-right": "-7px" })}" data-v-014d95e4> Re </span><span style="${ssrRenderStyle({ "text-transform": "none !important" })}" data-v-014d95e4> Source: </span></span><br data-v-014d95e4> A Slaters <br class="hidden lg:block" data-v-014d95e4> Wiki </span><span class="more-info hidden lg:block" data-v-014d95e4>More info</span></a></div></div></div></div></div><div class="lg:col-span-4 md:col-span-5 col-span-6 flex items-center justify-end" data-aos="zoom-in" data-aos-duration="700" data-v-014d95e4><img class="img-fluid"${ssrRenderAttr("src", _imports_3)} alt="rew mainboard" data-v-014d95e4></div></div></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/Index.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-014d95e4"]]);
const _imports_1 = publicAssetsURL("/img/tree.svg");
const _sfc_main$3 = {
  __name: "About",
  __ssrInlineRender: true,
  setup(__props) {
    const calculateNewScale = () => {
      const el = (void 0).querySelector(".about-content");
      if (!el)
        return;
      let percentage = (void 0).innerWidth / 1270;
      if (percentage > 1)
        percentage = 1;
      el.setAttribute("style", `-moz-transform: scale(${percentage}); -webkit-transform: scale(${percentage}); transform: scale(${percentage});`);
    };
    (void 0).addEventListener("resize", calculateNewScale);
    const blockItems = ref([
      {
        class: "block-1 block-w-arrow",
        title: "Putting Down Roots",
        content: "Whether serving temporary Slater coverage or as an ongoing Slate Captain, ReW\u2019s sustainable solutions remain the same. Our work stands the test of time."
      },
      {
        class: "block-2 block-w-arrow",
        title: "Slate Support to the Core",
        content: "The acreage of ReW\u2019s higher education expertise is vast. However, our mission focuses on providing Slate support tailored for enrollment management systems and operations."
      },
      {
        class: "block-3 block-w-arrow",
        title: "Great Oaks from Little Acorns Grow",
        content: "ReW is a lean collaborative of Slaters from diverse higher education backgrounds who hold the shared belief that no Slate instance is too small to make a mighty impact."
      },
      {
        class: "block-4",
        title: "Into the SIS Weeds",
        content: "Our team has extensive experience administering student information systems. We thrive on challenges to optimize Slate with data integrations and business processes."
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "pt-4",
        id: "about"
      }, _attrs))}><img${ssrRenderAttr("src", _imports_0$1)} alt="rew" class="bg-logo hidden md:block"><h2 class="rew-text-brown section-title block-w-arrow"><span class="bg-grey-pill"> The <span class="rew-text-green text-capitalize me-sm-0 rew-font" style="${ssrRenderStyle({ "margin-right": "-3px" })}">Re</span><span class="rew-font">W</span> Difference </span></h2><div class="about-content relative mx-auto hidden md:block"><img${ssrRenderAttr("src", _imports_1)} alt="rew tree" class="mx-auto block"><!--[-->`);
      ssrRenderList(unref(blockItems), (item) => {
        var _a;
        _push(`<div data-aos="zoom-in" class="${ssrRenderClass([item.class, "about-block"])}"><div class="about-block-title">${ssrInterpolate(item.title)}</div><div class="about-block-body">${(_a = item.content) != null ? _a : ""}</div></div>`);
      });
      _push(`<!--]--></div><div class="about-content-mobile relative mx-auto block md:hidden"><div class="container-fluid"><!--[-->`);
      ssrRenderList(unref(blockItems), (item) => {
        var _a;
        _push(`<div data-aos="zoom-in-down" data-aos-offset="50" class="${ssrRenderClass([item.class, "about-block"])}"><div class="about-block-title">${ssrInterpolate(item.title)}</div><div class="about-block-body">${(_a = item.content) != null ? _a : ""}</div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/About.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const role01Url = publicAssetsURL("/img/role01.svg");
const role01MobileUrl = publicAssetsURL("/img/role01.webp");
const role02Url = publicAssetsURL("/img/role02.svg");
const role02MobileUrl = publicAssetsURL("/img/role02.webp");
const role03Url = publicAssetsURL("/img/role03.svg");
const role03MobileUrl = publicAssetsURL("/img/role03.webp");
const role04Url = publicAssetsURL("/img/role04.svg");
const role04MobileUrl = publicAssetsURL("/img/role04.webp");
const _sfc_main$2 = {
  __name: "Services",
  __ssrInlineRender: true,
  setup(__props) {
    register();
    const slaterRoles = ref([
      {
        imgSrc: role01Url,
        imgSrcMobile: role01MobileUrl,
        title: "Captaining",
        content: "Team up with our Slate subject matter experts to have embedded project management, cycle prep, and strategic advisement at the ready."
      },
      {
        imgSrc: role02Url,
        imgSrcMobile: role02MobileUrl,
        title: "Engineering",
        content: "Let\u2019s dream big together for implementing next-level Slate enhancements from portals and dashboards to workflow automations and system integrations."
      },
      {
        imgSrc: role03Url,
        imgSrcMobile: role03MobileUrl,
        title: "Operationalizing",
        content: "Troubleshooting, routine maintenance, querying, data integrity, you name it! ReW\u2019s operations specialists take on daily tasks so that your team is free to focus on student-facing priorities."
      },
      {
        imgSrc: role04Url,
        imgSrcMobile: role04MobileUrl,
        title: "ReInforcing",
        content: "Looking for Slate-skilled seasonal readers and/or application processors? In need of temporary coverage for a key Slater going on leave? Unexpected turnover putting you in a bind? Call on ReW to bridge the gap."
      }
    ]);
    const decorateText = (str) => {
      if (!str)
        return;
      return str.replaceAll(/ReW/g, `<span class="rew-font"><span class="rew-text-green">Re</span>W</span>`);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "pt-4",
        id: "service"
      }, _attrs))} data-v-c0f9aee2><img${ssrRenderAttr("src", _imports_0$1)} alt="rew" class="bg-logo block md:hidden" data-v-c0f9aee2><h2 class="rew-text-brown section-title" data-v-c0f9aee2><span class="rew-text-green" data-v-c0f9aee2>Slaters</span> at your Service </h2><div class="max-w-[960px] mx-auto hidden md:block px-4" data-v-c0f9aee2><div class="grid grid-cols-2 gap-10" data-v-c0f9aee2><!--[-->`);
      ssrRenderList(unref(slaterRoles), (item, index2) => {
        var _a, _b;
        _push(`<div class="my-n3" data-v-c0f9aee2><div data-aos="zoom-out"${ssrRenderAttr("data-aos-delay", index2 * 100)} class="card" data-v-c0f9aee2><div class="card-img" data-v-c0f9aee2><img${ssrRenderAttr("src", item.imgSrc)}${ssrRenderAttr("alt", item.title)} class="mx-auto" data-v-c0f9aee2></div><div class="card-title nowrap" data-v-c0f9aee2>${(_a = item.title) != null ? _a : ""}</div><div class="card-content" data-v-c0f9aee2>${(_b = decorateText(item.content)) != null ? _b : ""}</div></div></div>`);
      });
      _push(`<!--]--></div></div><div data-aos="fade-left" class="block md:hidden" data-v-c0f9aee2><swiper-container slides-per-view="1.4" centered-slides="true" space-between="7" data-v-c0f9aee2><!--[-->`);
      ssrRenderList(unref(slaterRoles), (item) => {
        var _a, _b;
        _push(`<swiper-slide data-v-c0f9aee2><div class="card" data-v-c0f9aee2><div class="card-img" data-v-c0f9aee2><img${ssrRenderAttr("src", item.imgSrcMobile)}${ssrRenderAttr("alt", item.title)} data-v-c0f9aee2></div><div class="card-title" data-v-c0f9aee2>${(_a = item.title) != null ? _a : ""}</div><div class="card-content" data-v-c0f9aee2>${(_b = decorateText(item.content)) != null ? _b : ""}</div></div></swiper-slide>`);
      });
      _push(`<!--]--></swiper-container></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/Services.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-c0f9aee2"]]);
const _sfc_main$1 = {
  __name: "FAQ",
  __ssrInlineRender: true,
  setup(__props) {
    const faqs = ref([
      {
        id: "faq1",
        btnid: "faqbtn1",
        title: "My staff spends a significant amount of time/effort on completing manual operations processes and serving as human bridges for data integrations. How can we automate?"
      },
      {
        id: "faq2",
        btnid: "faqbtn2",
        title: "Our Admission Office is overwhelmed by a NeverEnding Story of internal Slate requests from campus stakeholders. How can we optimize our in-house Slate Support and get ahead?"
      },
      {
        id: "faq3",
        btnid: "faqbtn3",
        title: "We are ready to take our Slate systems and operations documentation to the next level. Where do we start?"
      },
      {
        id: "faq4",
        btnid: "faqbtn4",
        title: "I watched a webinar where a Slater showcased an awesome portal their school has. How can we build something similar?"
      },
      {
        id: "faq5",
        btnid: "faqbtn5",
        title: "We are hiring for a Slate position, but we continue to have failed searches. What more can we do?"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "pt-4",
        id: "faq"
      }, _attrs))}><div class="container-fluid"><img${ssrRenderAttr("src", _imports_0$1)} alt="rew" class="bg-logo"><h2 class="rew-text-brown section-title"><span class="rew-text-green">Frequently asked</span> questions </h2><h4 class="text-center section-sub-title !mb-3 lg:!mb-12"> In a quandary of not knowing what you don\u2019t know about Slate? You\u2019re not alone! Here are some of the questions that we help Slate schools answer: </h4><div class="faq-content mx-auto"><div data-aos="fade-down" class="accordion accordion-flush" id="rew-faq"><!--[-->`);
      ssrRenderList(unref(faqs), (item) => {
        var _a;
        _push(`<div class="accordion-item"><h2 class="accordion-header"${ssrRenderAttr("id", item.btnid)}><div class="accordion-button collapsed block py-4 px-5">${(_a = item.title) != null ? _a : ""}</div></h2></div>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/FAQ.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Home = __nuxt_component_0;
  const _component_HomeAbout = _sfc_main$3;
  const _component_HomeServices = __nuxt_component_2;
  const _component_HomeFAQ = _sfc_main$1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Home, null, null, _parent));
  _push(ssrRenderComponent(_component_HomeAbout, null, null, _parent));
  _push(ssrRenderComponent(_component_HomeServices, null, null, _parent));
  _push(ssrRenderComponent(_component_HomeFAQ, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-CZrQ1mMc.mjs.map
