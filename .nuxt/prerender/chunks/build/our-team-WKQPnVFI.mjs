import { useSSRContext, ref, mergeProps, unref, mergeModels, useModel, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, withDirectives, createCommentVNode, createTextVNode, createElementBlock, renderSlot, createElementVNode } from 'file:///Users/minh/Developer/REWORKFLOW/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrGetDirectiveProps, ssrRenderClass } from 'file:///Users/minh/Developer/REWORKFLOW/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { C as CONTACT_TYPE } from './constant-fHB-VGeE.mjs';
import { B as BaseStyle, T as Tooltip } from './server.mjs';
import { _ as _imports_0$1, s as script$3, a as script$a } from './virtual_public-BI6ygVgY.mjs';
import { _ as _imports_0 } from './virtual_public-BK0XIxuq.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/h3/dist/index.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/devalue/index.js';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/ufo/dist/index.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/destr/dist/index.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/hookable/dist/index.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/klona/dist/index.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/scule/dist/index.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/defu/dist/defu.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/ohash/dist/index.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/radix3/dist/index.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/@primevue/core/base/style/index.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/@primeuix/styled/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/pathe/dist/index.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/unhead/dist/index.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/unctx/dist/index.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/@primeuix/utils/eventbus/index.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/@primeuix/utils/object/index.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/@primeuix/utils/dom/index.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/@primeuix/utils/index.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/@primeuix/utils/zindex/index.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/@primeuix/utils/uuid/index.mjs';

const _sfc_main$6 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512",
    width: "30",
    height: "30"
  }, _attrs))}><path fill="white" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icon/LinkedIn.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    class: "slate-connect",
    width: "100",
    height: "100",
    version: "1.1",
    id: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 120 120",
    style: { "enable-background": "new 0 0 120 120" },
    "xml:space": "preserve"
  }, _attrs))} data-v-83cc75d6><path class="st0" d="M91.4,39.1c-6.5,0-11.8,5.3-11.8,11.8s5.3,11.8,11.8,11.8l0,0c6.5,0,11.8-5.3,11.8-11.8S97.9,39.1,91.4,39.1z" data-v-83cc75d6></path><path class="st1" d="M91.4,40.4c5.8,0,10.5,4.7,10.5,10.5s-4.7,10.5-10.5,10.5s-10.5-4.7-10.5-10.5S85.6,40.4,91.4,40.4 M91.4,37.8
	c-7.2,0-13.1,5.9-13.1,13.1S84.2,64,91.4,64s13.1-5.9,13.1-13.1S98.6,37.8,91.4,37.8C91.4,37.8,91.4,37.8,91.4,37.8z" data-v-83cc75d6></path><path class="st2" d="M71.8,91.4v-1.3c0-10.8,8.8-19.6,19.6-19.6S111,79.3,111,90.1v1.3H71.8z" data-v-83cc75d6></path><path class="st1" d="M91.4,71.8c10.1,0,18.3,8.2,18.3,18.3H73.1C73.1,80,81.3,71.8,91.4,71.8 M91.4,69.1c-11.5,0-20.9,9.4-20.9,20.9
	v2.6h41.8V90C112.3,78.5,102.9,69.1,91.4,69.1L91.4,69.1z" data-v-83cc75d6></path><path class="st0" d="M28.6,39.1c-6.5,0-11.8,5.3-11.8,11.8s5.3,11.8,11.8,11.8s11.8-5.3,11.8-11.8S35.1,39.1,28.6,39.1z" data-v-83cc75d6></path><path class="st1" d="M28.6,40.4c5.8,0,10.5,4.7,10.5,10.5s-4.7,10.5-10.5,10.5s-10.5-4.7-10.5-10.5S22.8,40.4,28.6,40.4 M28.6,37.8
	c-7.2,0-13.1,5.9-13.1,13.1S21.4,64,28.6,64s13.1-5.9,13.1-13.1S35.8,37.8,28.6,37.8C28.6,37.8,28.6,37.8,28.6,37.8z" data-v-83cc75d6></path><path class="st0" d="M45.6,15.6c-5.8,0-10.5,4.7-10.5,10.5s4.7,10.5,10.5,10.5s10.5-4.7,10.5-10.5S51.4,15.6,45.6,15.6z" data-v-83cc75d6></path><path class="st1" d="M45.6,16.9c5,0,9.1,4.1,9.1,9.1s-4.1,9.2-9.1,9.2s-9.2-4.1-9.2-9.2S40.5,16.9,45.6,16.9 M45.6,14.2
	c-6.5,0-11.8,5.3-11.8,11.8s5.3,11.8,11.8,11.8S57.4,32.5,57.4,26S52.1,14.2,45.6,14.2L45.6,14.2z" data-v-83cc75d6></path><g data-v-83cc75d6><path class="st3" d="M74.4,15.6c-5.8,0-10.5,4.7-10.5,10.5s4.7,10.5,10.5,10.5s10.5-4.7,10.5-10.5S80.2,15.6,74.4,15.6z" data-v-83cc75d6></path><path class="st1" d="M74.4,16.9c5,0,9.2,4.1,9.2,9.1s-4.1,9.2-9.2,9.2s-9.1-4.1-9.1-9.2S69.4,16.9,74.4,16.9 M74.4,14.2
		c-6.5,0-11.8,5.3-11.8,11.8s5.3,11.8,11.8,11.8S86.2,32.5,86.2,26S80.9,14.2,74.4,14.2L74.4,14.2z" data-v-83cc75d6></path></g><g data-v-83cc75d6><path class="st4" d="M9,91.4v-1.3c0-10.8,8.8-19.6,19.6-19.6s19.6,8.8,19.6,19.6v1.3H9z" data-v-83cc75d6></path><path class="st1" d="M28.6,71.8c10.1,0,18.3,8.2,18.3,18.3H10.3C10.3,80,18.5,71.8,28.6,71.8 M28.6,69.1C17.1,69.1,7.7,78.5,7.7,90
		v2.6h41.8V90C49.5,78.5,40.1,69.1,28.6,69.1L28.6,69.1z" data-v-83cc75d6></path></g><g data-v-83cc75d6><path class="st3" d="M60,52.2c-6.5,0-11.8,5.3-11.8,11.8S53.5,75.8,60,75.8S71.8,70.5,71.8,64S66.5,52.2,60,52.2z" data-v-83cc75d6></path><path class="st1" d="M60,53.5c5.8,0,10.5,4.7,10.5,10.5S65.8,74.5,60,74.5S49.5,69.8,49.5,64S54.2,53.5,60,53.5 M60,50.9
		c-7.2,0-13.1,5.9-13.1,13.1S52.8,77.1,60,77.1S73.1,71.2,73.1,64S67.2,50.9,60,50.9L60,50.9z" data-v-83cc75d6></path></g><g data-v-83cc75d6><path class="st5" d="M40.4,104.4v-1.3c0-10.8,8.8-19.6,19.6-19.6s19.6,8.8,19.6,19.6v1.3C79.6,104.4,40.4,104.4,40.4,104.4z" data-v-83cc75d6></path><path class="st1" d="M60,84.8c10.1,0,18.3,8.2,18.3,18.3H41.7C41.7,93,49.9,84.8,60,84.8 M60,82.2c-11.5,0-20.9,9.4-20.9,20.9v2.6
		h41.8v-2.6C80.9,91.6,71.5,82.2,60,82.2C60,82.2,60,82.2,60,82.2z" data-v-83cc75d6></path></g></svg>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icon/SlateCommunity.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-83cc75d6"]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    class: "resource",
    width: "142",
    height: "142",
    viewBox: "0 0 142 142",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M20.0714 94.7329C16.1316 92.8362 12.7262 89.9884 10.1625 86.4464C7.59869 82.9044 5.95725 78.7797 5.3863 74.4446C4.81535 70.1096 5.33285 65.7006 6.89209 61.6155C8.45134 57.5305 11.0033 53.898 14.3175 51.0459M14.515 50.5127C12.356 47.2819 11.4097 43.3914 11.8436 39.5299C12.2776 35.6684 14.0639 32.085 16.8862 29.4141C19.7085 26.7431 23.3848 25.1569 27.2644 24.9362C31.1439 24.7156 34.9764 25.8747 38.0834 28.2084M39.6502 28.6363C38.6 26.4048 38.0647 23.9659 38.0839 21.4997C38.103 19.0335 38.6762 16.6032 39.761 14.3883C40.8458 12.1735 42.4145 10.2308 44.3511 8.70373C46.2878 7.1767 48.5428 6.10442 50.9496 5.56615C53.3564 5.02788 55.8534 5.03739 58.256 5.59397C60.6586 6.15055 62.9054 7.23997 64.8304 8.7817C66.7553 10.3234 68.3092 12.2781 69.3771 14.5011C70.445 16.7242 70.9996 19.1588 71 21.625M71 21.625V123.667M71 21.625C71.0004 19.1588 71.5551 16.7242 72.623 14.5011C73.6909 12.2781 75.2447 10.3234 77.1697 8.7817C79.0946 7.23997 81.3414 6.15055 83.7441 5.59397C86.1467 5.03739 88.6437 5.02788 91.0504 5.56615C93.4572 6.10442 95.7123 7.1767 97.6489 8.70373C99.5855 10.2308 101.154 12.1735 102.239 14.3883C103.324 16.6032 103.897 19.0335 103.916 21.4997C103.935 23.9659 103.4 26.4048 102.35 28.6363M71 123.667C71 127.159 69.6128 130.508 67.1436 132.977C64.6744 135.446 61.3254 136.833 57.8334 136.833C54.3413 136.833 50.9923 135.446 48.5231 132.977C46.0539 130.508 44.6667 127.159 44.6667 123.667M71 123.667C71 127.159 72.3872 130.508 74.8565 132.977C77.3257 135.446 80.6747 136.833 84.1667 136.833M71 38.0834C71 43.3214 73.0808 48.3449 76.7847 52.0487C80.4885 55.7526 85.512 57.8334 90.75 57.8334M127.683 51.0459C130.557 53.5151 132.863 56.5769 134.442 60.0212C136.022 63.4655 136.838 67.2108 136.833 71C136.833 75.6281 135.642 79.9797 133.542 83.7585M127.485 50.5127C129.644 47.2819 130.59 43.3914 130.156 39.5299C129.722 35.6684 127.936 32.085 125.114 29.4141C122.292 26.7431 118.615 25.1569 114.736 24.9362C110.856 24.7156 107.024 25.8747 103.917 28.2084M114.891 97.3334L103.917 117.083H130.25L119.276 136.833" stroke="white" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icon/ReSource.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "30",
    height: "30",
    viewBox: "0 0 512 512"
  }, _attrs))}><path fill="white" d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"></path></svg>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icon/Email.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = {
  __name: "Popup",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels(["bio"], {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const visible = useModel(__props, "modelValue");
    const renderTooltip = (data) => {
      let str = "";
      switch (data.type) {
        case CONTACT_TYPE.LINKEDIN:
          str = "LinkedIn";
          break;
        case CONTACT_TYPE.SLATE_COMMUNITY:
          str = "Slate Community";
          break;
        case CONTACT_TYPE.RESOURCE:
          str = "ReSource";
          break;
        case CONTACT_TYPE.EMAIL:
          str = data.link;
      }
      return str;
    };
    const renderLink = (data) => {
      if (data.type === CONTACT_TYPE.EMAIL)
        return `mailto:${data.link}`;
      return data.link;
    };
    const handleCopy = (data) => {
      if (data.type !== CONTACT_TYPE.EMAIL)
        return;
      (void 0).clipboard.writeText(data.link);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Dialog = script$3;
      const _component_IconLinkedIn = __nuxt_component_0$1;
      const _component_IconSlateCommunity = __nuxt_component_1;
      const _component_IconReSource = __nuxt_component_2;
      const _component_IconEmail = __nuxt_component_3;
      const _directive_tooltip = Tooltip;
      _push(ssrRenderComponent(_component_Dialog, mergeProps({
        visible: visible.value,
        "onUpdate:visible": ($event) => visible.value = $event,
        modal: "",
        style: { "width": "100%", "max-width": "850px", "margin": "0 12px", "border": "none" },
        closable: false,
        header: " ",
        class: "view-bio",
        onHide: ($event) => visible.value = false
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a;
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="rew" class="bg-logo hidden md:block inset-0 !opacity-[0.05]" data-v-c79ecf53${_scopeId}><div class="flex flex-col md:flex-row items-center gap-4 mb-4 relative mt-1" data-v-c79ecf53${_scopeId}><img class="profile-img rounded"${ssrRenderAttr("src", __props.bio.picture)} data-v-c79ecf53${_scopeId}><div data-v-c79ecf53${_scopeId}><div class="text-3xl rew-text-green font-bold tracking-wide text-center md:text-start" data-v-c79ecf53${_scopeId}>${ssrInterpolate(__props.bio.name)}</div><div class="rew-text-brown tracking-wider" data-v-c79ecf53${_scopeId}>${ssrInterpolate(__props.bio.title)}</div></div><button class="absolute top-0 right-0" data-v-c79ecf53${_scopeId}><i class="pi pi-times" data-v-c79ecf53${_scopeId}></i></button></div><div class="whitespace-pre-line" data-v-c79ecf53${_scopeId}>${(_a = __props.bio.content) != null ? _a : ""}</div><div class="flex flex-col items-start md:flex-row md:items-center gap-x-4 mt-4 mb-7" data-v-c79ecf53${_scopeId}><div class="font-bold italic rew-text-brown text-lg" data-v-c79ecf53${_scopeId}> Let&#39;s connect! </div><div class="flex items-center gap-x-4 mt-2 md:mt-0" data-v-c79ecf53${_scopeId}><!--[-->`);
            ssrRenderList(__props.bio.contact, (item) => {
              _push2(`<!--[-->`);
              if (item.link) {
                _push2(`<a${ssrRenderAttrs(mergeProps({
                  href: renderLink(item),
                  target: "_blank",
                  class: "btn-connect"
                }, ssrGetDirectiveProps(_ctx, _directive_tooltip, { value: renderTooltip(item), autoHide: false }, void 0, { top: true })))} data-v-c79ecf53${_scopeId}>`);
                if (item.type === ("CONTACT_TYPE" in _ctx ? _ctx.CONTACT_TYPE : unref(CONTACT_TYPE)).LINKEDIN) {
                  _push2(ssrRenderComponent(_component_IconLinkedIn, null, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                if (item.type === ("CONTACT_TYPE" in _ctx ? _ctx.CONTACT_TYPE : unref(CONTACT_TYPE)).SLATE_COMMUNITY) {
                  _push2(ssrRenderComponent(_component_IconSlateCommunity, null, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                if (item.type === ("CONTACT_TYPE" in _ctx ? _ctx.CONTACT_TYPE : unref(CONTACT_TYPE)).RESOURCE) {
                  _push2(ssrRenderComponent(_component_IconReSource, null, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                if (item.type === ("CONTACT_TYPE" in _ctx ? _ctx.CONTACT_TYPE : unref(CONTACT_TYPE)).EMAIL) {
                  _push2(ssrRenderComponent(_component_IconEmail, null, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</a>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            });
            _push2(`<!--]--></div></div>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "rew",
                class: "bg-logo hidden md:block inset-0 !opacity-[0.05]"
              }),
              createVNode("div", { class: "flex flex-col md:flex-row items-center gap-4 mb-4 relative mt-1" }, [
                createVNode("img", {
                  class: "profile-img rounded",
                  src: __props.bio.picture
                }, null, 8, ["src"]),
                createVNode("div", null, [
                  createVNode("div", { class: "text-3xl rew-text-green font-bold tracking-wide text-center md:text-start" }, toDisplayString(__props.bio.name), 1),
                  createVNode("div", { class: "rew-text-brown tracking-wider" }, toDisplayString(__props.bio.title), 1)
                ]),
                createVNode("button", {
                  onClick: ($event) => visible.value = false,
                  class: "absolute top-0 right-0"
                }, [
                  createVNode("i", { class: "pi pi-times" })
                ], 8, ["onClick"])
              ]),
              createVNode("div", {
                class: "whitespace-pre-line",
                innerHTML: __props.bio.content
              }, null, 8, ["innerHTML"]),
              createVNode("div", { class: "flex flex-col items-start md:flex-row md:items-center gap-x-4 mt-4 mb-7" }, [
                createVNode("div", { class: "font-bold italic rew-text-brown text-lg" }, " Let's connect! "),
                createVNode("div", { class: "flex items-center gap-x-4 mt-2 md:mt-0" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.bio.contact, (item) => {
                    return openBlock(), createBlock(Fragment, {
                      key: item.type
                    }, [
                      item.link ? withDirectives((openBlock(), createBlock("a", {
                        key: 0,
                        href: renderLink(item),
                        onClick: ($event) => handleCopy(item),
                        target: "_blank",
                        class: "btn-connect"
                      }, [
                        item.type === ("CONTACT_TYPE" in _ctx ? _ctx.CONTACT_TYPE : unref(CONTACT_TYPE)).LINKEDIN ? (openBlock(), createBlock(_component_IconLinkedIn, { key: 0 })) : createCommentVNode("", true),
                        item.type === ("CONTACT_TYPE" in _ctx ? _ctx.CONTACT_TYPE : unref(CONTACT_TYPE)).SLATE_COMMUNITY ? (openBlock(), createBlock(_component_IconSlateCommunity, { key: 1 })) : createCommentVNode("", true),
                        item.type === ("CONTACT_TYPE" in _ctx ? _ctx.CONTACT_TYPE : unref(CONTACT_TYPE)).RESOURCE ? (openBlock(), createBlock(_component_IconReSource, { key: 2 })) : createCommentVNode("", true),
                        item.type === ("CONTACT_TYPE" in _ctx ? _ctx.CONTACT_TYPE : unref(CONTACT_TYPE)).EMAIL ? (openBlock(), createBlock(_component_IconEmail, { key: 3 })) : createCommentVNode("", true)
                      ], 8, ["href", "onClick"])), [
                        [
                          _directive_tooltip,
                          { value: renderTooltip(item), autoHide: false },
                          void 0,
                          { top: true }
                        ]
                      ]) : createCommentVNode("", true)
                    ], 64);
                  }), 128))
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Team/Popup.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-c79ecf53"]]);
var theme$1 = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-skeleton {\n    overflow: hidden;\n    background: ".concat(dt("skeleton.background"), ";\n    border-radius: ").concat(dt("skeleton.border.radius"), ';\n}\n\n.p-skeleton::after {\n    content: "";\n    animation: p-skeleton-animation 1.2s infinite;\n    height: 100%;\n    left: 0;\n    position: absolute;\n    right: 0;\n    top: 0;\n    transform: translateX(-100%);\n    z-index: 1;\n    background: linear-gradient( 90deg, rgba(255, 255, 255, 0), ').concat(dt("skeleton.animation.background"), ", rgba(255, 255, 255, 0) );\n}\n\n.p-skeleton-circle {\n    border-radius: 50%;\n}\n\n.p-skeleton-animation-none::after {\n    animation: none;\n}\n\n@keyframes p-skeleton-animation {\n    from {\n        transform: translateX(-100%);\n    }\n    to {\n        transform: translateX(100%);\n    }\n}\n");
};
var inlineStyles = {
  root: {
    position: "relative"
  }
};
var classes$1 = {
  root: function root(_ref2) {
    var props = _ref2.props;
    return ["p-skeleton p-component", {
      "p-skeleton-circle": props.shape === "circle",
      "p-skeleton-animation-none": props.animation === "none"
    }];
  }
};
var SkeletonStyle = BaseStyle.extend({
  name: "skeleton",
  theme: theme$1,
  classes: classes$1,
  inlineStyles
});
var script$1$1 = {
  name: "BaseSkeleton",
  "extends": script$a,
  props: {
    shape: {
      type: String,
      "default": "rectangle"
    },
    size: {
      type: String,
      "default": null
    },
    width: {
      type: String,
      "default": "100%"
    },
    height: {
      type: String,
      "default": "1rem"
    },
    borderRadius: {
      type: String,
      "default": null
    },
    animation: {
      type: String,
      "default": "wave"
    }
  },
  style: SkeletonStyle,
  provide: function provide() {
    return {
      $pcSkeleton: this,
      $parentInstance: this
    };
  }
};
var script$2 = {
  name: "Skeleton",
  "extends": script$1$1,
  inheritAttrs: false,
  computed: {
    containerStyle: function containerStyle() {
      if (this.size)
        return {
          width: this.size,
          height: this.size,
          borderRadius: this.borderRadius
        };
      else
        return {
          width: this.width,
          height: this.height,
          borderRadius: this.borderRadius
        };
    }
  }
};
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root"),
    style: [_ctx.sx("root"), $options.containerStyle],
    "aria-hidden": "true"
  }, _ctx.ptmi("root")), null, 16);
}
script$2.render = render$1;
var theme2 = function theme3(_ref) {
  var dt = _ref.dt;
  return "\n.p-card {\n    background: ".concat(dt("card.background"), ";\n    color: ").concat(dt("card.color"), ";\n    box-shadow: ").concat(dt("card.shadow"), ";\n    border-radius: ").concat(dt("card.border.radius"), ";\n    display: flex;\n    flex-direction: column;\n}\n\n.p-card-caption {\n    display: flex;\n    flex-direction: column;\n    gap: ").concat(dt("card.caption.gap"), ";\n}\n\n.p-card-body {\n    padding: ").concat(dt("card.body.padding"), ";\n    display: flex;\n    flex-direction: column;\n    gap: ").concat(dt("card.body.gap"), ";\n}\n\n.p-card-title {\n    font-size: ").concat(dt("card.title.font.size"), ";\n    font-weight: ").concat(dt("card.title.font.weight"), ";\n}\n\n.p-card-subtitle {\n    color: ").concat(dt("card.subtitle.color"), ";\n}\n");
};
var classes = {
  root: "p-card p-component",
  header: "p-card-header",
  body: "p-card-body",
  caption: "p-card-caption",
  title: "p-card-title",
  subtitle: "p-card-subtitle",
  content: "p-card-content",
  footer: "p-card-footer"
};
var CardStyle = BaseStyle.extend({
  name: "card",
  theme: theme2,
  classes
});
var script$1 = {
  name: "BaseCard",
  "extends": script$a,
  style: CardStyle,
  provide: function provide2() {
    return {
      $pcCard: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "Card",
  "extends": script$1,
  inheritAttrs: false
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [_ctx.$slots.header ? (openBlock(), createElementBlock("div", mergeProps({
    key: 0,
    "class": _ctx.cx("header")
  }, _ctx.ptm("header")), [renderSlot(_ctx.$slots, "header")], 16)) : createCommentVNode("", true), createElementVNode("div", mergeProps({
    "class": _ctx.cx("body")
  }, _ctx.ptm("body")), [_ctx.$slots.title || _ctx.$slots.subtitle ? (openBlock(), createElementBlock("div", mergeProps({
    key: 0,
    "class": _ctx.cx("caption")
  }, _ctx.ptm("caption")), [_ctx.$slots.title ? (openBlock(), createElementBlock("div", mergeProps({
    key: 0,
    "class": _ctx.cx("title")
  }, _ctx.ptm("title")), [renderSlot(_ctx.$slots, "title")], 16)) : createCommentVNode("", true), _ctx.$slots.subtitle ? (openBlock(), createElementBlock("div", mergeProps({
    key: 1,
    "class": _ctx.cx("subtitle")
  }, _ctx.ptm("subtitle")), [renderSlot(_ctx.$slots, "subtitle")], 16)) : createCommentVNode("", true)], 16)) : createCommentVNode("", true), createElementVNode("div", mergeProps({
    "class": _ctx.cx("content")
  }, _ctx.ptm("content")), [renderSlot(_ctx.$slots, "content")], 16), _ctx.$slots.footer ? (openBlock(), createElementBlock("div", mergeProps({
    key: 1,
    "class": _ctx.cx("footer")
  }, _ctx.ptm("footer")), [renderSlot(_ctx.$slots, "footer")], 16)) : createCommentVNode("", true)], 16)], 16);
}
script.render = render;
const _sfc_main$1 = {
  __name: "Bio",
  __ssrInlineRender: true,
  props: ["bio"],
  setup(__props) {
    const loading = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = script;
      const _component_Skeleton = script$2;
      const _component_TeamPopup = __nuxt_component_0;
      _push(ssrRenderComponent(_component_Card, mergeProps({
        class: "card-clickable bio-card w-full h-full overflow-hidden relative",
        onClick: ($event) => __props.bio.visible = true
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full h-[280px] overflow-hidden"${_scopeId}><img alt="user picture"${ssrRenderAttr("src", __props.bio.picture)} class="${ssrRenderClass([{ hidden: unref(loading) }, "bio-picture"])}"${_scopeId}>`);
            if (unref(loading)) {
              _push2(ssrRenderComponent(_component_Skeleton, {
                height: "280px",
                borderRadius: "0px"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "w-full h-[280px] overflow-hidden" }, [
                createVNode("img", {
                  onLoad: ($event) => loading.value = false,
                  alt: "user picture",
                  src: __props.bio.picture,
                  class: ["bio-picture", { hidden: unref(loading) }]
                }, null, 42, ["onLoad", "src"]),
                unref(loading) ? (openBlock(), createBlock(_component_Skeleton, {
                  key: 0,
                  height: "280px",
                  borderRadius: "0px"
                })) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.bio.name)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.bio.name), 1)
            ];
          }
        }),
        subtitle: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-line max-line-2 fs-7"${_scopeId}><div${_scopeId}>${ssrInterpolate(__props.bio.title)}</div></div>`);
            _push2(ssrRenderComponent(_component_TeamPopup, {
              bio: __props.bio,
              modelValue: __props.bio.visible,
              "onUpdate:modelValue": ($event) => __props.bio.visible = $event
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "max-line max-line-2 fs-7" }, [
                createVNode("div", null, toDisplayString(__props.bio.title), 1)
              ]),
              createVNode(_component_TeamPopup, {
                bio: __props.bio,
                modelValue: __props.bio.visible,
                "onUpdate:modelValue": ($event) => __props.bio.visible = $event
              }, null, 8, ["bio", "modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Team/Bio.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "our-team",
  __ssrInlineRender: true,
  setup(__props) {
    const bios = ref([
      {
        content: `I'm all about puzzles.

            Most definitely of the jigsaw kind (picture proofs upon request \u{1F9E9}\u{1F604}), but also those that take us down rabbit holes for improved office efficiencies and technical difficulties troubleshooting. To a greater extent, each phase of the project management process is energizing from ideation to iteration with research, testing, and evaluation being where I particularly thrive. In particular, learning about colleagues\u2019 operational needs, orchestrating a solution, and then our growing excitement together as light bulb moments spur our next collaborations.

            I am blessed that my 20+ year career in international higher education has taken me around the world and provided me with invaluable opportunities to wear a kaleidoscope of hats. English teacher --> university lecturer --> consultant --> senior administrator --> service provider. Each step along the way continues to fuel my passion for lifelong learning and actively giving back to the Slater community.

            Outside of work and my amazing family adventures, we may cross paths in the great outdoors. You can also find me binging on podcasts and audiobooks at 2x speed (I just can\u2019t slow down! \u{1F606}) \u{1F3A7} as well as listening to an eclectic expanse of music on real-time (open to all recommendations!), and/or enjoying a local craft beer while watching all things sports. \u{1F37B}`,
        id: 1,
        name: "Jon Rowand",
        picture: "https://mharew.pythonanywhere.com/uploads/JMRowandSquare2024_-_Edited_1.jpg",
        title: "Chief Executive Officer",
        contact: [
          {
            type: CONTACT_TYPE.LINKEDIN,
            link: "https://www.linkedin.com/in/jonmaesrowand/"
          },
          {
            type: CONTACT_TYPE.RESOURCE,
            link: "https://resource.reworkflow.com/search?term=%7Bcreated_by%3Ajon-rowand%7D+%7Btype%3Apage%7D"
          },
          {
            type: CONTACT_TYPE.SLATE_COMMUNITY,
            link: "https://community.technolutions.net/member/Y51AbuXxly"
          },
          {
            type: CONTACT_TYPE.PRESENTATIONS_PUBLICATIONS,
            link: ""
          },
          {
            type: CONTACT_TYPE.EMAIL,
            link: "jrowand@reworkflow.com"
          }
        ],
        visible: false
      },
      {
        content: `I started working for a computer repair shop in high school, then joined the Helpdesk in undergrad. Finding myself at home in higher ed IT, I authored many PowerCampus resources over 10+ years at three schools, received community contributor awards from Ellucian, and served on the board of the PowerCampus Users Group, Inc.

            In 2016, I got the chance to work with Slate, a truly fantastic product. I wrote and maintain an open-source, RESTful integration between Slate and PowerCampus used by at least five institutions. I have extensive experience other areas as well, including Dynamic Forms by NG Web Solutions (a terrific, little-known product), Campus Caf\xE9 (SIS), PowerFAIDS, AMAG Symmetry access control, Azure, VMWare, ShoreTel, etc. Your IT department will like working with ReWorkflow because we understand the demands on their time.

            In our spare time, my wife and I are building a Carpenter Gothic/Victorian cottage and running a restaurant and cabaret for our children, cats, chickens, etc.`,
        id: 3,
        name: "Wyatt Best",
        order: 1,
        picture: "https://mharew.pythonanywhere.com/uploads/Wyatt_Best.png",
        title: "Chief Technology Officer",
        contact: [
          {
            type: CONTACT_TYPE.LINKEDIN,
            link: "https://www.linkedin.com/in/wyattbest/"
          },
          {
            type: CONTACT_TYPE.RESOURCE,
            link: "https://resource.reworkflow.com/search?term=%7Bcreated_by%3Awyatt-best%7D+%7Btype%3Apage%7D"
          },
          {
            type: CONTACT_TYPE.SLATE_COMMUNITY,
            link: "https://community.technolutions.net/member/A8GL9OxVPb"
          },
          {
            type: CONTACT_TYPE.PRESENTATIONS_PUBLICATIONS,
            link: ""
          },
          {
            type: CONTACT_TYPE.EMAIL,
            link: "wbest@reworkflow.com"
          }
        ],
        visible: false
      },
      {
        content: `I have been living the life of a global citizen roaming around the world. My first destination was Japan. In 2008, I was a part of the little world village at Ritsumeikan Asia Pacific University, Japan's first international university on top of a mountain. I then received a full scholarship to be an Eramus Mundus student in 2014. The Master in Research and Innovation in Higher Education allowed me to study in 4 countries during 2 years, and deepened my interest in international higher education.

            Upon moving to the US, I worked in admissions and admissions operations at Oklahoma City University and Columbia University. The experience working with prospective students front-end from my recruitment days has helped me tremendously when I moved to a more back-end roles, working with systems and processes to help student's application process more seamless. There are still a lot of questions: How to automatically load the student's enrollment history from their resume to their application in Slate? How to better communicate the official transcript submission instruction? The list goes on. These questions are the foundation of ReWorkflow. Jon & I started this adventure to help support institutions with streamlining their admissions and operations processes so the admission team can spend more time interacting with their students. Our ReWers work everyday towards building a more sustainable and evergreen system for teammate schools.`,
        id: 5,
        name: "Binh Roward",
        picture: "https://mharew.pythonanywhere.com/uploads/Binh_Rowand_-_Edited_1.png",
        title: "Chief Operating Officer",
        contact: [
          {
            type: CONTACT_TYPE.LINKEDIN,
            link: "https://www.linkedin.com/in/binh-ha-rowand-a64201107/"
          },
          {
            type: CONTACT_TYPE.RESOURCE,
            link: ""
          },
          {
            type: CONTACT_TYPE.SLATE_COMMUNITY,
            link: ""
          },
          {
            type: CONTACT_TYPE.PRESENTATIONS_PUBLICATIONS,
            link: ""
          },
          {
            type: CONTACT_TYPE.EMAIL,
            link: "browand@reworkflow.com"
          }
        ],
        visible: false
      },
      {
        content: `Megan Story joined ReWorkflow in August 2022 with 10 years of experience in higher education, including 4 years as a Slate Captain for graduate admissions at the University of California, Irvine. At ReWorkflow, Megan leverages her extensive background to support clients, drawing from her experience managing a Slate instance with 1,400 users and over 20,000 applications annually. During her tenure at UCI, she successfully developed drip campaigns, generated detailed reports, and created comprehensive documentation. Megan is a dedicated member of the Slate user community with highlights including presenting at the Slate Summit in 2022 and 2024 and serving on the leadership team for the Graduate Slate Community User Group.

            Megan hosts The ReWorkflow Podcast and in her free time is a frequent guest on a podcast about strategy board games.`,
        id: 4,
        name: "Megan Story",
        picture: "https://mharew.pythonanywhere.com/uploads/Megan_Story_1.png",
        title: "Director of Slate Systems & Operations",
        contact: [
          {
            type: CONTACT_TYPE.LINKEDIN,
            link: "https://www.linkedin.com/in/mpstory/"
          },
          {
            type: CONTACT_TYPE.RESOURCE,
            link: "https://resource.reworkflow.com/search?term=%7Bcreated_by%3Amegan-story%7D+%7Btype%3Apage%7D"
          },
          {
            type: CONTACT_TYPE.SLATE_COMMUNITY,
            link: "https://community.technolutions.net/member/dVj6MFzD6r"
          },
          {
            type: CONTACT_TYPE.PRESENTATIONS_PUBLICATIONS,
            link: ""
          },
          {
            type: CONTACT_TYPE.EMAIL,
            link: "mstory@reworkflow.com"
          }
        ],
        visible: false
      },
      {
        content: `Although I can't say I had a childhood dream of becoming a higher education technology consultant, I first met Slate back in 2014 and I was hooked.

            After implementing Slate at Lewis & Clark College, I joined the staff of Technolutions where I spent 6 years learning about Slate and helping clients find the resources they needed to be succesful. In addition to overseeing Support staff as the Assistant Director of Support, I was active in Community Conservations, Slate Labs, Launchpad, and resource creation for implementations through Cycle Prep. I directly supported dozens of Slate implementations, responded to over 2,500 Support Desk requests and even wrote a Dr Seuss-inspired ode to CJs called \u201COh the Joins You Will Join!\u201D

            I am currently based in Milan, Italy meaning that ReWorklow is the only Preferred Partner with a physical presence on three continents! Over the next year, my goal is to travel to a dozen countries with my husband and our two kids (8 and 11). European travel suggestions welcomed at <a href="mailto:pmckay@reworkflow.com" target="_blank">pmckay@reworkflow.com<a/>!`,
        id: 1,
        name: "Peter McKay",
        picture: "https://mharew.pythonanywhere.com/uploads/Peter_McKay.png",
        title: "Senior Slate Strategist",
        contact: [
          {
            type: CONTACT_TYPE.LINKEDIN,
            link: "https://www.linkedin.com/in/peter-mckay-a6083217/"
          },
          {
            type: CONTACT_TYPE.RESOURCE,
            link: "https://resource.reworkflow.com/search?term=%7Bcreated_by%3Apeter-mckay%7D+%7Btype%3Apage%7D"
          },
          {
            type: CONTACT_TYPE.SLATE_COMMUNITY,
            link: "https://community.technolutions.net/member/kFAC0J3piL"
          },
          {
            type: CONTACT_TYPE.PRESENTATIONS_PUBLICATIONS,
            link: ""
          },
          {
            type: CONTACT_TYPE.EMAIL,
            link: "pmckay@reworkflow.com"
          }
        ],
        visible: false
      },
      {
        content: `My name is Isaac Best and I am a Slate Specialist here at ReWorkflow. My background is in the world of IT and computer repair; after tinkering with computers and servers from childhood and providing friends and family with informal support, I eventually owned and ran a computer repair & support business for several years, gaining valuable customer service and troubleshooting skills in the process. I transitioned to Slate in the spring of 2023 and have been working with it since then. To date, I have the most experience in the areas of Cycle Prep, custom PDFs, the Reader/Workflows, Reports, and of course good ol' queries but I regularly assist clients with whatever Slate needs they bring to us.

            I am currently pursuing a Master's degree in theology. In my spare time, I love reading theology, history, and fiction and am a frequent contributor to the <a href="https://www.openstreetmap.org" rel="noopener noreferrer" target="_blank">OpenStreetMap project</a>. I also enjoy the occasional round of the <a href="https://www.openra.net/" rel="noopener noreferrer" target="_blank">OpenRA clone of C&amp;C Red Alert</a> with friends.`,
        id: 6,
        name: "Isaac Best",
        picture: "https://mharew.pythonanywhere.com/uploads/Isaac_Best.png",
        title: "Slate Specialist",
        contact: [
          {
            type: CONTACT_TYPE.LINKEDIN,
            link: "https://www.linkedin.com/in/peter-mckay-a6083217/"
          },
          {
            type: CONTACT_TYPE.RESOURCE,
            link: "https://resource.reworkflow.com/search?term=%7Bcreated_by%3Apeter-mckay%7D+%7Btype%3Apage%7D"
          },
          {
            type: CONTACT_TYPE.SLATE_COMMUNITY,
            link: "https://community.technolutions.net/member/kFAC0J3piL"
          },
          {
            type: CONTACT_TYPE.PRESENTATIONS_PUBLICATIONS,
            link: ""
          },
          {
            type: CONTACT_TYPE.EMAIL,
            link: "pmckay@reworkflow.com"
          }
        ],
        visible: false
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TeamBio = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-12" }, _attrs))} data-v-69215b4b><img${ssrRenderAttr("src", _imports_0)} alt="rew" class="bg-logo !top-1/2 !left-1/2 !transform -translate-x-1/2 !-translate-y-1/2 hidden md:block mt-[150px]" data-v-69215b4b><div data-aos="fade-down" class="flex items-center justify-center mb-12 heading" data-v-69215b4b> The <img${ssrRenderAttr("src", _imports_0$1)} alt="ReWorkflow" width="231" height="30" class="mx-2 ps-1" data-v-69215b4b> Team </div><div class="container-fluid !max-w-[1000px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12" data-v-69215b4b><!--[-->`);
      ssrRenderList(unref(bios), (bio, index) => {
        _push(`<div data-aos="zoom-in-down" data-aos-offset="50"${ssrRenderAttr("data-aos-delay", index * 50)} data-v-69215b4b>`);
        _push(ssrRenderComponent(_component_TeamBio, { bio }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/our-team.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ourTeam = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-69215b4b"]]);

export { ourTeam as default };
//# sourceMappingURL=our-team-WKQPnVFI.mjs.map
