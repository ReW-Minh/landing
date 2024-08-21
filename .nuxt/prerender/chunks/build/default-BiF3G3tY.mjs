import { _ as __nuxt_component_0$1 } from './nuxt-link-l5zPv3vf.mjs';
import { useSSRContext, ref, unref, isRef, withCtx, createTextVNode, createVNode, reactive, openBlock, createBlock, createCommentVNode, withModifiers, toDisplayString, resolveComponent, resolveDirective, createElementBlock, mergeProps, Transition, withDirectives, renderSlot, Fragment, createElementVNode, normalizeClass, resolveDynamicComponent, vShow } from 'file:///Users/minh/Developer/REWORKFLOW/node_modules/vue/index.mjs';
import { R as RESOURCE_LINK, P as PODCAST_LINK } from './constant-fHB-VGeE.mjs';
import { _ as _imports_0$3, b as script$3$1, s as script$a, F as FocusTrap, c as script$2$1, d as script$8$1, e as script$9$1, R as Ripple, a as script$a$1 } from './virtual_public-BI6ygVgY.mjs';
import { addClass, focus, blockBodyScroll, unblockBodyScroll } from 'file:///Users/minh/Developer/REWORKFLOW/node_modules/@primeuix/utils/dom/index.mjs';
import { ZIndex } from 'file:///Users/minh/Developer/REWORKFLOW/node_modules/@primeuix/utils/zindex/index.mjs';
import { B as BaseStyle } from './server.mjs';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderSlot, ssrRenderAttrs } from 'file:///Users/minh/Developer/REWORKFLOW/node_modules/vue/server-renderer/index.mjs';
import { p as publicAssetsURL } from '../_/renderer.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { u as useState } from './state-tqLlnwND.mjs';
import { isEmpty } from 'file:///Users/minh/Developer/REWORKFLOW/node_modules/@primeuix/utils/object/index.mjs';
import emailjs from 'file:///Users/minh/Developer/REWORKFLOW/node_modules/@emailjs/browser/cjs/index.js';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/ufo/dist/index.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/@primeuix/styled/index.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/hookable/dist/index.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/unctx/dist/index.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/h3/dist/index.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/unhead/dist/index.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/radix3/dist/index.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/defu/dist/defu.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/@primeuix/utils/eventbus/index.mjs';
import 'file:///Users/minh/Developer/REWORKFLOW/node_modules/@primeuix/utils/index.mjs';
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

var theme$3 = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-drawer {\n    display: flex;\n    flex-direction: column;\n    pointer-events: auto;\n    transform: translate3d(0px, 0px, 0px);\n    position: relative;\n    transition: transform 0.3s;\n    background: ".concat(dt("drawer.background"), ";\n    color: ").concat(dt("drawer.color"), ";\n    border: 1px solid ").concat(dt("drawer.border.color"), ";\n    box-shadow: ").concat(dt("drawer.shadow"), ";\n}\n\n.p-drawer-content {\n    overflow-y: auto;\n    flex-grow: 1;\n    padding: ").concat(dt("drawer.content.padding"), ";\n}\n\n.p-drawer-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    flex-shrink: 0;\n    padding: ").concat(dt("drawer.header.padding"), ";\n}\n\n.p-drawer-footer {\n    padding: ").concat(dt("drawer.header.padding"), ";\n}\n\n.p-drawer-title {\n    font-weight: ").concat(dt("drawer.title.font.weight"), ";\n    font-size: ").concat(dt("drawer.title.font.size"), ";\n}\n\n.p-drawer-full .p-drawer {\n    transition: none;\n    transform: none;\n    width: 100vw !important;\n    height: 100vh !important;\n    max-height: 100%;\n    top: 0px !important;\n    left: 0px !important;\n    border-width: 1px;\n}\n\n.p-drawer-left .p-drawer-enter-from,\n.p-drawer-left .p-drawer-leave-to {\n    transform: translateX(-100%);\n}\n\n.p-drawer-right .p-drawer-enter-from,\n.p-drawer-right .p-drawer-leave-to {\n    transform: translateX(100%);\n}\n\n.p-drawer-top .p-drawer-enter-from,\n.p-drawer-top .p-drawer-leave-to {\n    transform: translateY(-100%);\n}\n\n.p-drawer-bottom .p-drawer-enter-from,\n.p-drawer-bottom .p-drawer-leave-to {\n    transform: translateY(100%);\n}\n\n.p-drawer-full .p-drawer-enter-from,\n.p-drawer-full .p-drawer-leave-to {\n    opacity: 0;\n}\n\n.p-drawer-full .p-drawer-enter-active,\n.p-drawer-full .p-drawer-leave-active {\n    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\n.p-drawer-left .p-drawer {\n    width: 20rem;\n    height: 100%;\n    border-right-width: 1px;\n}\n\n.p-drawer-right .p-drawer {\n    width: 20rem;\n    height: 100%;\n    border-left-width: 1px;\n}\n\n.p-drawer-top .p-drawer {\n    height: 10rem;\n    width: 100%;\n    border-bottom-width: 1px;\n}\n\n.p-drawer-bottom .p-drawer {\n    height: 10rem;\n    width: 100%;\n    border-top-width: 1px;\n}\n\n.p-drawer-left .p-drawer-content,\n.p-drawer-right .p-drawer-content,\n.p-drawer-top .p-drawer-content,\n.p-drawer-bottom .p-drawer-content {\n    width: 100%;\n    height: 100%;\n}\n\n.p-drawer-open {\n    display: flex;\n}\n");
};
var inlineStyles = {
  mask: function mask(_ref2) {
    var position = _ref2.position;
    return {
      position: "fixed",
      height: "100%",
      width: "100%",
      left: 0,
      top: 0,
      display: "flex",
      justifyContent: position === "left" ? "flex-start" : position === "right" ? "flex-end" : "center",
      alignItems: position === "top" ? "flex-start" : position === "bottom" ? "flex-end" : "center"
    };
  }
};
var classes$4 = {
  mask: function mask2(_ref3) {
    var instance = _ref3.instance, props = _ref3.props;
    var positions = ["left", "right", "top", "bottom"];
    var pos = positions.find(function(item) {
      return item === props.position;
    });
    return ["p-drawer-mask", {
      "p-overlay-mask p-overlay-mask-enter": props.modal,
      "p-drawer-open": instance.containerVisible,
      "p-drawer-full": instance.fullScreen
    }, pos ? "p-drawer-".concat(pos) : ""];
  },
  root: function root(_ref4) {
    var instance = _ref4.instance;
    return ["p-drawer p-component", {
      "p-drawer-full": instance.fullScreen
    }];
  },
  header: "p-drawer-header",
  title: "p-drawer-title",
  pcCloseButton: "p-drawer-close-button",
  content: "p-drawer-content",
  footer: "p-drawer-footer"
};
var DrawerStyle = BaseStyle.extend({
  name: "drawer",
  theme: theme$3,
  classes: classes$4,
  inlineStyles
});
var script$1$4 = {
  name: "BaseDrawer",
  "extends": script$a$1,
  props: {
    visible: {
      type: Boolean,
      "default": false
    },
    position: {
      type: String,
      "default": "left"
    },
    header: {
      type: null,
      "default": null
    },
    baseZIndex: {
      type: Number,
      "default": 0
    },
    autoZIndex: {
      type: Boolean,
      "default": true
    },
    dismissable: {
      type: Boolean,
      "default": true
    },
    showCloseIcon: {
      type: Boolean,
      "default": true
    },
    closeButtonProps: {
      type: Object,
      "default": function _default() {
        return {
          severity: "secondary",
          text: true,
          rounded: true
        };
      }
    },
    closeIcon: {
      type: String,
      "default": void 0
    },
    modal: {
      type: Boolean,
      "default": true
    },
    blockScroll: {
      type: Boolean,
      "default": false
    }
  },
  style: DrawerStyle,
  provide: function provide() {
    return {
      $pcDrawer: this,
      $parentInstance: this
    };
  },
  watch: {
    dismissable: function dismissable(newValue) {
      if (newValue) {
        this.bindOutsideClickListener();
      } else {
        this.unbindOutsideClickListener();
      }
    }
  }
};
var script$9 = {
  name: "Drawer",
  "extends": script$1$4,
  inheritAttrs: false,
  emits: ["update:visible", "show", "hide", "after-hide"],
  data: function data() {
    return {
      containerVisible: this.visible
    };
  },
  container: null,
  mask: null,
  content: null,
  headerContainer: null,
  footerContainer: null,
  closeButton: null,
  outsideClickListener: null,
  documentKeydownListener: null,
  updated: function updated() {
    if (this.visible) {
      this.containerVisible = this.visible;
    }
  },
  beforeUnmount: function beforeUnmount() {
    this.disableDocumentSettings();
    if (this.mask && this.autoZIndex) {
      ZIndex.clear(this.mask);
    }
    this.container = null;
    this.mask = null;
  },
  methods: {
    hide: function hide() {
      this.$emit("update:visible", false);
    },
    onEnter: function onEnter() {
      this.$emit("show");
      this.focus();
      this.bindDocumentKeyDownListener();
      if (this.autoZIndex) {
        ZIndex.set("modal", this.mask, this.baseZIndex || this.$primevue.config.zIndex.modal);
      }
    },
    onAfterEnter: function onAfterEnter() {
      this.enableDocumentSettings();
    },
    onBeforeLeave: function onBeforeLeave() {
      if (this.modal) {
        !this.isUnstyled && addClass(this.mask, "p-overlay-mask-leave");
      }
    },
    onLeave: function onLeave() {
      this.$emit("hide");
    },
    onAfterLeave: function onAfterLeave() {
      if (this.autoZIndex) {
        ZIndex.clear(this.mask);
      }
      this.unbindDocumentKeyDownListener();
      this.containerVisible = false;
      this.disableDocumentSettings();
      this.$emit("after-hide");
    },
    onMaskClick: function onMaskClick(event) {
      if (this.dismissable && this.modal && this.mask === event.target) {
        this.hide();
      }
    },
    focus: function focus$1() {
      var findFocusableElement = function findFocusableElement2(container) {
        return container && container.querySelector("[autofocus]");
      };
      var focusTarget = this.$slots.header && findFocusableElement(this.headerContainer);
      if (!focusTarget) {
        focusTarget = this.$slots["default"] && findFocusableElement(this.container);
        if (!focusTarget) {
          focusTarget = this.$slots.footer && findFocusableElement(this.footerContainer);
          if (!focusTarget) {
            focusTarget = this.closeButton;
          }
        }
      }
      focusTarget && focus(focusTarget);
    },
    enableDocumentSettings: function enableDocumentSettings() {
      if (this.dismissable && !this.modal) {
        this.bindOutsideClickListener();
      }
      if (this.blockScroll) {
        blockBodyScroll();
      }
    },
    disableDocumentSettings: function disableDocumentSettings() {
      this.unbindOutsideClickListener();
      if (this.blockScroll) {
        unblockBodyScroll();
      }
    },
    onKeydown: function onKeydown(event) {
      if (event.code === "Escape") {
        this.hide();
      }
    },
    containerRef: function containerRef(el) {
      this.container = el;
    },
    maskRef: function maskRef(el) {
      this.mask = el;
    },
    contentRef: function contentRef(el) {
      this.content = el;
    },
    headerContainerRef: function headerContainerRef(el) {
      this.headerContainer = el;
    },
    footerContainerRef: function footerContainerRef(el) {
      this.footerContainer = el;
    },
    closeButtonRef: function closeButtonRef(el) {
      this.closeButton = el ? el.$el : void 0;
    },
    bindDocumentKeyDownListener: function bindDocumentKeyDownListener() {
      if (!this.documentKeydownListener) {
        this.documentKeydownListener = this.onKeydown;
        (void 0).addEventListener("keydown", this.documentKeydownListener);
      }
    },
    unbindDocumentKeyDownListener: function unbindDocumentKeyDownListener() {
      if (this.documentKeydownListener) {
        (void 0).removeEventListener("keydown", this.documentKeydownListener);
        this.documentKeydownListener = null;
      }
    },
    bindOutsideClickListener: function bindOutsideClickListener() {
      var _this = this;
      if (!this.outsideClickListener) {
        this.outsideClickListener = function(event) {
          if (_this.isOutsideClicked(event)) {
            _this.hide();
          }
        };
        (void 0).addEventListener("click", this.outsideClickListener);
      }
    },
    unbindOutsideClickListener: function unbindOutsideClickListener() {
      if (this.outsideClickListener) {
        (void 0).removeEventListener("click", this.outsideClickListener);
        this.outsideClickListener = null;
      }
    },
    isOutsideClicked: function isOutsideClicked(event) {
      return this.container && !this.container.contains(event.target);
    }
  },
  computed: {
    fullScreen: function fullScreen() {
      return this.position === "full";
    },
    closeAriaLabel: function closeAriaLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.close : void 0;
    }
  },
  directives: {
    focustrap: FocusTrap
  },
  components: {
    Button: script$3$1,
    Portal: script$2$1,
    TimesIcon: script$8$1
  }
};
var _hoisted_1$6 = ["aria-modal"];
function render$8(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Button = resolveComponent("Button");
  var _component_Portal = resolveComponent("Portal");
  var _directive_focustrap = resolveDirective("focustrap");
  return openBlock(), createBlock(_component_Portal, null, {
    "default": withCtx(function() {
      return [$data.containerVisible ? (openBlock(), createElementBlock("div", mergeProps({
        key: 0,
        ref: $options.maskRef,
        onMousedown: _cache[0] || (_cache[0] = function() {
          return $options.onMaskClick && $options.onMaskClick.apply($options, arguments);
        }),
        "class": _ctx.cx("mask"),
        style: _ctx.sx("mask", true, {
          position: _ctx.position
        })
      }, _ctx.ptm("mask")), [createVNode(Transition, mergeProps({
        name: "p-drawer",
        onEnter: $options.onEnter,
        onAfterEnter: $options.onAfterEnter,
        onBeforeLeave: $options.onBeforeLeave,
        onLeave: $options.onLeave,
        onAfterLeave: $options.onAfterLeave,
        appear: ""
      }, _ctx.ptm("transition")), {
        "default": withCtx(function() {
          return [_ctx.visible ? withDirectives((openBlock(), createElementBlock("div", mergeProps({
            key: 0,
            ref: $options.containerRef,
            "class": _ctx.cx("root"),
            role: "complementary",
            "aria-modal": _ctx.modal
          }, _ctx.ptmi("root")), [_ctx.$slots.container ? renderSlot(_ctx.$slots, "container", {
            key: 0,
            closeCallback: $options.hide
          }) : (openBlock(), createElementBlock(Fragment, {
            key: 1
          }, [createElementVNode("div", mergeProps({
            ref: $options.headerContainerRef,
            "class": _ctx.cx("header")
          }, _ctx.ptm("header")), [renderSlot(_ctx.$slots, "header", {
            "class": normalizeClass(_ctx.cx("title"))
          }, function() {
            return [_ctx.header ? (openBlock(), createElementBlock("div", mergeProps({
              key: 0,
              "class": _ctx.cx("title")
            }, _ctx.ptm("title")), toDisplayString(_ctx.header), 17)) : createCommentVNode("", true)];
          }), _ctx.showCloseIcon ? (openBlock(), createBlock(_component_Button, mergeProps({
            key: 0,
            ref: $options.closeButtonRef,
            type: "button",
            "class": _ctx.cx("pcCloseButton"),
            "aria-label": $options.closeAriaLabel,
            unstyled: _ctx.unstyled,
            onClick: $options.hide
          }, _ctx.closeButtonProps, {
            pt: _ctx.ptm("pcCloseButton"),
            "data-pc-group-section": "iconcontainer"
          }), {
            icon: withCtx(function(slotProps) {
              return [renderSlot(_ctx.$slots, "closeicon", {}, function() {
                return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.closeIcon ? "span" : "TimesIcon"), mergeProps({
                  "class": [_ctx.closeIcon, slotProps["class"]]
                }, _ctx.ptm("pcCloseButton")["icon"]), null, 16, ["class"]))];
              })];
            }),
            _: 3
          }, 16, ["class", "aria-label", "unstyled", "onClick", "pt"])) : createCommentVNode("", true)], 16), createElementVNode("div", mergeProps({
            ref: $options.contentRef,
            "class": _ctx.cx("content")
          }, _ctx.ptm("content")), [renderSlot(_ctx.$slots, "default")], 16), _ctx.$slots.footer ? (openBlock(), createElementBlock("div", mergeProps({
            key: 0,
            ref: $options.footerContainerRef,
            "class": _ctx.cx("footer")
          }, _ctx.ptm("footer")), [renderSlot(_ctx.$slots, "footer")], 16)) : createCommentVNode("", true)], 64))], 16, _hoisted_1$6)), [[_directive_focustrap]]) : createCommentVNode("", true)];
        }),
        _: 3
      }, 16, ["onEnter", "onAfterEnter", "onBeforeLeave", "onLeave", "onAfterLeave"])], 16)) : createCommentVNode("", true)];
    }),
    _: 3
  });
}
script$9.render = render$8;
const _imports_0$2 = publicAssetsURL("/img/instagram-green.svg");
const _imports_1$2 = publicAssetsURL("/img/linkedin-green.svg");
const _sfc_main$4 = {
  __name: "MobileMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const visible = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Drawer = script$9;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Button = script$3$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Drawer, {
        visible: unref(visible),
        "onUpdate:visible": ($event) => isRef(visible) ? visible.value = $event : null,
        header: " ",
        position: "right"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col h-full overflow-hidden" data-v-23e94393${_scopeId}><div class="grow flex flex-col items-center justify-center" data-v-23e94393${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              onClick: ($event) => visible.value = false,
              class: "menu-link",
              to: "/"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Home `);
                } else {
                  return [
                    createTextVNode(" Home ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              onClick: ($event) => visible.value = false,
              class: "menu-link",
              to: "/our-team"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Our Team `);
                } else {
                  return [
                    createTextVNode(" Our Team ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<a class="menu-link"${ssrRenderAttr("href", "RESOURCE_LINK" in _ctx ? _ctx.RESOURCE_LINK : unref(RESOURCE_LINK))} target="_blank" data-v-23e94393${_scopeId}> ReSource </a><a class="menu-link"${ssrRenderAttr("href", "PODCAST_LINK" in _ctx ? _ctx.PODCAST_LINK : unref(PODCAST_LINK))} target="_blank" data-v-23e94393${_scopeId}> Podcast </a></div><div class="menu-btm" data-v-23e94393${_scopeId}><div class="flex items-center justify-center mb-3 mx-5 overflow-hidden" data-v-23e94393${_scopeId}><a href="https://www.instagram.com/reworkflow/" target="_blank" class="mx-2" data-v-23e94393${_scopeId}><img${ssrRenderAttr("src", _imports_0$2)} alt="instagram" data-v-23e94393${_scopeId}></a><a href="https://www.linkedin.com/company/reworkflow/about/" class="mx-2" data-v-23e94393${_scopeId}><img${ssrRenderAttr("src", _imports_1$2)} alt="linkedin" data-v-23e94393${_scopeId}></a></div><div data-v-23e94393${_scopeId}><img${ssrRenderAttr("src", _imports_0$3)} alt="ReWorkflow" width="231" height="30" class="m-auto" data-v-23e94393${_scopeId}></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col h-full overflow-hidden" }, [
                createVNode("div", { class: "grow flex flex-col items-center justify-center" }, [
                  createVNode(_component_NuxtLink, {
                    onClick: ($event) => visible.value = false,
                    class: "menu-link",
                    to: "/"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Home ")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_NuxtLink, {
                    onClick: ($event) => visible.value = false,
                    class: "menu-link",
                    to: "/our-team"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Our Team ")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode("a", {
                    onClick: ($event) => visible.value = false,
                    class: "menu-link",
                    href: "RESOURCE_LINK" in _ctx ? _ctx.RESOURCE_LINK : unref(RESOURCE_LINK),
                    target: "_blank"
                  }, " ReSource ", 8, ["onClick", "href"]),
                  createVNode("a", {
                    onClick: ($event) => visible.value = false,
                    class: "menu-link",
                    href: "PODCAST_LINK" in _ctx ? _ctx.PODCAST_LINK : unref(PODCAST_LINK),
                    target: "_blank"
                  }, " Podcast ", 8, ["onClick", "href"])
                ]),
                createVNode("div", { class: "menu-btm" }, [
                  createVNode("div", { class: "flex items-center justify-center mb-3 mx-5 overflow-hidden" }, [
                    createVNode("a", {
                      href: "https://www.instagram.com/reworkflow/",
                      target: "_blank",
                      class: "mx-2"
                    }, [
                      createVNode("img", {
                        src: _imports_0$2,
                        alt: "instagram"
                      })
                    ]),
                    createVNode("a", {
                      href: "https://www.linkedin.com/company/reworkflow/about/",
                      class: "mx-2"
                    }, [
                      createVNode("img", {
                        src: _imports_1$2,
                        alt: "linkedin"
                      })
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode("img", {
                      src: _imports_0$3,
                      alt: "ReWorkflow",
                      width: "231",
                      height: "30",
                      class: "m-auto"
                    })
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Button, {
        icon: "pi pi-arrow-right",
        onClick: ($event) => visible.value = true,
        class: "flex ml-auto md:hidden"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="pi pi-bars text-2xl" style="${ssrRenderStyle({ "color": "var(--rew-secondary-green)" })}" data-v-23e94393${_scopeId}></i>`);
          } else {
            return [
              createVNode("i", {
                class: "pi pi-bars text-2xl",
                style: { "color": "var(--rew-secondary-green)" }
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MobileMenu.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-23e94393"]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_MobileMenu = __nuxt_component_1$1;
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "fixed top-0 left-0 right-0 z-50" }, _attrs))} data-v-01bea7e9><nav class="container-fluid flex items-center bg-transparent" data-v-01bea7e9>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "navbar-brand py-1.5",
    to: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0$3)} alt="ReWorkflow" width="231" height="30" data-v-01bea7e9${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0$3,
            alt: "ReWorkflow",
            width: "231",
            height: "30"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_MobileMenu, null, null, _parent));
  _push(`<div class="md:block hidden ml-auto" id="rewHeader" data-v-01bea7e9><div class="navbar-nav" data-v-01bea7e9>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "nav-link ml-0 md:ml-4 lg:ml-12 p-2 whitespace-nowrap",
    to: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Home `);
      } else {
        return [
          createTextVNode(" Home ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "nav-link ml-0 md:ml-4 lg:ml-12 p-2 whitespace-nowrap",
    to: "/our-team"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Our Team `);
      } else {
        return [
          createTextVNode(" Our Team ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<a class="nav-link ml-0 md:ml-4 lg:ml-12 p-2 whitespace-nowrap"${ssrRenderAttr("href", "RESOURCE_LINK" in _ctx ? _ctx.RESOURCE_LINK : unref(RESOURCE_LINK))} target="_blank" data-v-01bea7e9> ReSource </a><a class="nav-link ml-0 md:ml-4 lg:ml-12 p-2 whitespace-nowrap"${ssrRenderAttr("href", "PODCAST_LINK" in _ctx ? _ctx.PODCAST_LINK : unref(PODCAST_LINK))} target="_blank" data-v-01bea7e9> Podcast </a></div></div></nav></header>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-01bea7e9"]]);
const _imports_0$1 = publicAssetsURL("/img/logo-min.svg");
const _imports_1$1 = publicAssetsURL("/img/instagram.svg");
const _imports_2$1 = publicAssetsURL("/img/linkedin.svg");
const _sfc_main$2 = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    useState("visible");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<!--[--><section data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" class="sub-footer py-6 text-center text-uppercase" data-v-9b264598><div class="container-fluid" data-v-9b264598><button title="Contact Us" class="rew-main-btn rew-box-shadow inline-flex items-center" data-v-9b264598><span data-v-9b264598>Contact Us</span><span class="md:ml-3 ml-1" data-v-9b264598><svg class="button-arrow" width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9b264598><path d="M4.16671 27.75L0.958374 24.5417L11.4427 14L0.958374 3.45833L4.16671 0.25L17.9167 14L4.16671 27.75ZM19.2917 27.75L16.0834 24.5417L26.5677 14L16.0834 3.45833L19.2917 0.25L33.0417 14L19.2917 27.75Z" fill="white" data-v-9b264598></path></svg></span></button></div></section><footer data-v-9b264598><div class="container-fluid" data-v-9b264598><div class="md:mx-0 mx-12 md:border-b" data-v-9b264598><div class="grid grid-cols-12 mb-3" data-v-9b264598><div class="md:col-span-4 col-span-12" data-v-9b264598><div class="md:mx-0 mx-auto" style="${ssrRenderStyle({ "max-width": "177px" })}" data-v-9b264598><div class="bg-white logo-container" data-v-9b264598><img${ssrRenderAttr("src", _imports_0$1)} alt="rew" class="img-fluid" data-v-9b264598></div><div class="hidden md:flex items-center justify-center mt-3" data-v-9b264598><a href="https://www.instagram.com/reworkflow/" target="_blank" class="mx-2 social-hover instagram" data-v-9b264598><img${ssrRenderAttr("src", _imports_1$1)} alt="instagram" data-v-9b264598></a><a href="https://www.linkedin.com/company/reworkflow/about/" target="_blank" class="mx-2 social-hover linkedin" data-v-9b264598><img${ssrRenderAttr("src", _imports_2$1)} alt="linkedin" data-v-9b264598></a></div></div></div><div class="md:col-span-3 col-span-12" data-v-9b264598><ul class="footer-link-list !mt-6 md:!mt-0 md:block flex items-center justify-between" data-v-9b264598><li data-v-9b264598>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "footer-link",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`home`);
          } else {
            return [
              createTextVNode("home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-9b264598>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "footer-link",
        to: "/our-team"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`our team`);
          } else {
            return [
              createTextVNode("our team")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-9b264598><a class="footer-link"${ssrRenderAttr("href", "RESOURCE_LINK" in _ctx ? _ctx.RESOURCE_LINK : unref(RESOURCE_LINK))} data-v-9b264598>ReSource</a></li><li data-v-9b264598><a class="footer-link"${ssrRenderAttr("href", "PODCAST_LINK" in _ctx ? _ctx.PODCAST_LINK : unref(PODCAST_LINK))} data-v-9b264598>Podcast</a></li></ul></div><div class="md:col-span-3 col-span-12 text-center-sm" data-v-9b264598><div class="footer-link !mt-6 md:!mt-0 !mb-0 block" data-v-9b264598>Contact Us</div><a class="mail-link block underline" href="mailto:solutions@reworkflow.com" data-v-9b264598>solutions@reworkflow.com</a></div><div class="col-span-12 md:hidden" data-v-9b264598><div class="flex items-center justify-center mt-12" data-v-9b264598><a href="https://www.instagram.com/reworkflow/" target="_blank" class="mx-2" style="${ssrRenderStyle({ "max-width": "28px" })}" data-v-9b264598><img${ssrRenderAttr("src", _imports_1$1)} alt="instagram" data-v-9b264598></a><a href="https://www.linkedin.com/company/reworkflow/about/" target="_blank" class="mx-2" style="${ssrRenderStyle({ "max-width": "28px" })}" data-v-9b264598><img${ssrRenderAttr("src", _imports_2$1)} alt="linkedin" data-v-9b264598></a></div></div></div></div><div class="md:mx-0 mx-12 text-end text-white mt-3 copyright" data-v-9b264598>ReWorkflow, LLC. All Rights Reserved \xA9, 2024.</div></div></footer><!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-9b264598"]]);
var script$8 = {
  name: "CheckIcon",
  "extends": script$9$1
};
var _hoisted_1$5 = /* @__PURE__ */ createElementVNode("path", {
  d: "M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z",
  fill: "currentColor"
}, null, -1);
var _hoisted_2$3 = [_hoisted_1$5];
function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _hoisted_2$3, 16);
}
script$8.render = render$7;
var script$7 = {
  name: "ExclamationTriangleIcon",
  "extends": script$9$1
};
var _hoisted_1$4 = /* @__PURE__ */ createElementVNode("path", {
  d: "M13.4018 13.1893H0.598161C0.49329 13.189 0.390283 13.1615 0.299143 13.1097C0.208003 13.0578 0.131826 12.9832 0.0780112 12.8932C0.0268539 12.8015 0 12.6982 0 12.5931C0 12.4881 0.0268539 12.3848 0.0780112 12.293L6.47985 1.08982C6.53679 1.00399 6.61408 0.933574 6.70484 0.884867C6.7956 0.836159 6.897 0.810669 7 0.810669C7.103 0.810669 7.2044 0.836159 7.29516 0.884867C7.38592 0.933574 7.46321 1.00399 7.52015 1.08982L13.922 12.293C13.9731 12.3848 14 12.4881 14 12.5931C14 12.6982 13.9731 12.8015 13.922 12.8932C13.8682 12.9832 13.792 13.0578 13.7009 13.1097C13.6097 13.1615 13.5067 13.189 13.4018 13.1893ZM1.63046 11.989H12.3695L7 2.59425L1.63046 11.989Z",
  fill: "currentColor"
}, null, -1);
var _hoisted_2$2 = /* @__PURE__ */ createElementVNode("path", {
  d: "M6.99996 8.78801C6.84143 8.78594 6.68997 8.72204 6.57787 8.60993C6.46576 8.49782 6.40186 8.34637 6.39979 8.18784V5.38703C6.39979 5.22786 6.46302 5.0752 6.57557 4.96265C6.68813 4.85009 6.84078 4.78686 6.99996 4.78686C7.15914 4.78686 7.31179 4.85009 7.42435 4.96265C7.5369 5.0752 7.60013 5.22786 7.60013 5.38703V8.18784C7.59806 8.34637 7.53416 8.49782 7.42205 8.60993C7.30995 8.72204 7.15849 8.78594 6.99996 8.78801Z",
  fill: "currentColor"
}, null, -1);
var _hoisted_3 = /* @__PURE__ */ createElementVNode("path", {
  d: "M6.99996 11.1887C6.84143 11.1866 6.68997 11.1227 6.57787 11.0106C6.46576 10.8985 6.40186 10.7471 6.39979 10.5885V10.1884C6.39979 10.0292 6.46302 9.87658 6.57557 9.76403C6.68813 9.65147 6.84078 9.58824 6.99996 9.58824C7.15914 9.58824 7.31179 9.65147 7.42435 9.76403C7.5369 9.87658 7.60013 10.0292 7.60013 10.1884V10.5885C7.59806 10.7471 7.53416 10.8985 7.42205 11.0106C7.30995 11.1227 7.15849 11.1866 6.99996 11.1887Z",
  fill: "currentColor"
}, null, -1);
var _hoisted_4 = [_hoisted_1$4, _hoisted_2$2, _hoisted_3];
function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _hoisted_4, 16);
}
script$7.render = render$6;
var script$6 = {
  name: "InfoCircleIcon",
  "extends": script$9$1
};
var _hoisted_1$3 = /* @__PURE__ */ createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M3.11101 12.8203C4.26215 13.5895 5.61553 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.61553 13.5895 4.26215 12.8203 3.11101C12.0511 1.95987 10.9579 1.06266 9.67879 0.532846C8.3997 0.00303296 6.99224 -0.13559 5.63437 0.134506C4.2765 0.404603 3.02922 1.07129 2.05026 2.05026C1.07129 3.02922 0.404603 4.2765 0.134506 5.63437C-0.13559 6.99224 0.00303296 8.3997 0.532846 9.67879C1.06266 10.9579 1.95987 12.0511 3.11101 12.8203ZM3.75918 2.14976C4.71846 1.50879 5.84628 1.16667 7 1.16667C8.5471 1.16667 10.0308 1.78125 11.1248 2.87521C12.2188 3.96918 12.8333 5.45291 12.8333 7C12.8333 8.15373 12.4912 9.28154 11.8502 10.2408C11.2093 11.2001 10.2982 11.9478 9.23232 12.3893C8.16642 12.8308 6.99353 12.9463 5.86198 12.7212C4.73042 12.4962 3.69102 11.9406 2.87521 11.1248C2.05941 10.309 1.50384 9.26958 1.27876 8.13803C1.05367 7.00647 1.16919 5.83358 1.61071 4.76768C2.05222 3.70178 2.79989 2.79074 3.75918 2.14976ZM7.00002 4.8611C6.84594 4.85908 6.69873 4.79698 6.58977 4.68801C6.48081 4.57905 6.4187 4.43185 6.41669 4.27776V3.88888C6.41669 3.73417 6.47815 3.58579 6.58754 3.4764C6.69694 3.367 6.84531 3.30554 7.00002 3.30554C7.15473 3.30554 7.3031 3.367 7.4125 3.4764C7.52189 3.58579 7.58335 3.73417 7.58335 3.88888V4.27776C7.58134 4.43185 7.51923 4.57905 7.41027 4.68801C7.30131 4.79698 7.1541 4.85908 7.00002 4.8611ZM7.00002 10.6945C6.84594 10.6925 6.69873 10.6304 6.58977 10.5214C6.48081 10.4124 6.4187 10.2652 6.41669 10.1111V6.22225C6.41669 6.06754 6.47815 5.91917 6.58754 5.80977C6.69694 5.70037 6.84531 5.63892 7.00002 5.63892C7.15473 5.63892 7.3031 5.70037 7.4125 5.80977C7.52189 5.91917 7.58335 6.06754 7.58335 6.22225V10.1111C7.58134 10.2652 7.51923 10.4124 7.41027 10.5214C7.30131 10.6304 7.1541 10.6925 7.00002 10.6945Z",
  fill: "currentColor"
}, null, -1);
var _hoisted_2$1 = [_hoisted_1$3];
function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _hoisted_2$1, 16);
}
script$6.render = render$5;
var script$5 = {
  name: "TimesCircleIcon",
  "extends": script$9$1
};
var _hoisted_1$2 = /* @__PURE__ */ createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z",
  fill: "currentColor"
}, null, -1);
var _hoisted_2 = [_hoisted_1$2];
function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _hoisted_2, 16);
}
script$5.render = render$4;
var theme$2 = function theme2(_ref) {
  var dt = _ref.dt;
  return "\n.p-message {\n    border-radius: ".concat(dt("message.border.radius"), ";\n    outline-width: ").concat(dt("message.border.width"), ";\n    outline-style: solid;\n}\n\n.p-message-content {\n    display: flex;\n    align-items: center;\n    padding: ").concat(dt("message.content.padding"), ";\n    gap: ").concat(dt("message.content.gap"), ";\n    height: 100%;\n}\n\n.p-message-icon {\n    flex-shrink: 0;\n}\n\n.p-message-close-button {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-shrink: 0;\n    margin: 0 0 0 auto;\n    overflow: hidden;\n    position: relative;\n    width: ").concat(dt("message.close.button.width"), ";\n    height: ").concat(dt("message.close.button.height"), ";\n    border-radius: ").concat(dt("message.close.button.border.radius"), ";\n    background: transparent;\n    transition: background ").concat(dt("message.transition.duration"), ", color ").concat(dt("message.transition.duration"), ", outline-color ").concat(dt("message.transition.duration"), ", box-shadow ").concat(dt("message.transition.duration"), ", opacity 0.3s;\n    outline-color: transparent;\n    color: inherit;\n    padding: 0;\n    border: none;\n    cursor: pointer;\n    user-select: none;\n}\n\n.p-message-close-icon {\n    font-size: ").concat(dt("message.close.icon.size"), ";\n    width: ").concat(dt("message.close.icon.size"), ";\n    height: ").concat(dt("message.close.icon.size"), ";\n}\n\n.p-message-close-button:focus-visible {\n    outline-width: ").concat(dt("message.close.button.focus.ring.width"), ";\n    outline-style: ").concat(dt("message.close.button.focus.ring.style"), ";\n    outline-offset: ").concat(dt("message.close.button.focus.ring.offset"), ";\n}\n\n.p-message-info {\n    background: ").concat(dt("message.info.background"), ";\n    outline-color: ").concat(dt("message.info.border.color"), ";\n    color: ").concat(dt("message.info.color"), ";\n    box-shadow: ").concat(dt("message.info.shadow"), ";\n}\n\n.p-message-info .p-message-close-button:focus-visible {\n    outline-color: ").concat(dt("message.info.close.button.focus.ring.color"), ";\n    box-shadow: ").concat(dt("message.info.close.button.focus.ring.shadow"), ";\n}\n\n.p-message-info .p-message-close-button:hover {\n    background: ").concat(dt("message.info.close.button.hover.background"), ";\n}\n\n.p-message-success {\n    background: ").concat(dt("message.success.background"), ";\n    outline-color: ").concat(dt("message.success.border.color"), ";\n    color: ").concat(dt("message.success.color"), ";\n    box-shadow: ").concat(dt("message.success.shadow"), ";\n}\n\n.p-message-success .p-message-close-button:focus-visible {\n    outline-color: ").concat(dt("message.success.close.button.focus.ring.color"), ";\n    box-shadow: ").concat(dt("message.success.close.button.focus.ring.shadow"), ";\n}\n\n.p-message-success .p-message-close-button:hover {\n    background: ").concat(dt("message.success.close.button.hover.background"), ";\n}\n\n.p-message-warn {\n    background: ").concat(dt("message.warn.background"), ";\n    outline-color: ").concat(dt("message.warn.border.color"), ";\n    color: ").concat(dt("message.warn.color"), ";\n    box-shadow: ").concat(dt("message.warn.shadow"), ";\n}\n\n.p-message-warn .p-message-close-button:focus-visible {\n    outline-color: ").concat(dt("message.warn.close.button.focus.ring.color"), ";\n    box-shadow: ").concat(dt("message.warn.close.button.focus.ring.shadow"), ";\n}\n\n.p-message-warn .p-message-close-button:hover {\n    background: ").concat(dt("message.warn.close.button.hover.background"), ";\n}\n\n.p-message-error {\n    background: ").concat(dt("message.error.background"), ";\n    outline-color: ").concat(dt("message.error.border.color"), ";\n    color: ").concat(dt("message.error.color"), ";\n    box-shadow: ").concat(dt("message.error.shadow"), ";\n}\n\n.p-message-error .p-message-close-button:focus-visible {\n    outline-color: ").concat(dt("message.error.close.button.focus.ring.color"), ";\n    box-shadow: ").concat(dt("message.error.close.button.focus.ring.shadow"), ";\n}\n\n.p-message-error .p-message-close-button:hover {\n    background: ").concat(dt("message.error.close.button.hover.background"), ";\n}\n\n.p-message-secondary {\n    background: ").concat(dt("message.secondary.background"), ";\n    outline-color: ").concat(dt("message.secondary.border.color"), ";\n    color: ").concat(dt("message.secondary.color"), ";\n    box-shadow: ").concat(dt("message.secondary.shadow"), ";\n}\n\n.p-message-secondary .p-message-close-button:focus-visible {\n    outline-color: ").concat(dt("message.secondary.close.button.focus.ring.color"), ";\n    box-shadow: ").concat(dt("message.secondary.close.button.focus.ring.shadow"), ";\n}\n\n.p-message-secondary .p-message-close-button:hover {\n    background: ").concat(dt("message.secondary.close.button.hover.background"), ";\n}\n\n.p-message-contrast {\n    background: ").concat(dt("message.contrast.background"), ";\n    outline-color: ").concat(dt("message.contrast.border.color"), ";\n    color: ").concat(dt("message.contrast.color"), ";\n    box-shadow: ").concat(dt("message.contrast.shadow"), ";\n}\n\n.p-message-contrast .p-message-close-button:focus-visible {\n    outline-color: ").concat(dt("message.contrast.close.button.focus.ring.color"), ";\n    box-shadow: ").concat(dt("message.contrast.close.button.focus.ring.shadow"), ";\n}\n\n.p-message-contrast .p-message-close-button:hover {\n    background: ").concat(dt("message.contrast.close.button.hover.background"), ";\n}\n\n.p-message-text {\n    font-size: ").concat(dt("message.text.font.size"), ";\n    font-weight: ").concat(dt("message.text.font.weight"), ";\n}\n\n.p-message-icon {\n    font-size: ").concat(dt("message.icon.size"), ";\n    width: ").concat(dt("message.icon.size"), ";\n    height: ").concat(dt("message.icon.size"), ";\n}\n\n.p-message-enter-from {\n    opacity: 0;\n}\n\n.p-message-enter-active {\n    transition: opacity 0.3s;\n}\n\n.p-message.p-message-leave-from {\n    max-height: 1000px;\n}\n\n.p-message.p-message-leave-to {\n    max-height: 0;\n    opacity: 0;\n    margin: 0;\n}\n\n.p-message-leave-active {\n    overflow: hidden;\n    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin 0.3s;\n}\n\n.p-message-leave-active .p-message-close-button {\n    opacity: 0;\n}\n");
};
var classes$3 = {
  root: function root2(_ref2) {
    var props = _ref2.props;
    return "p-message p-component p-message-" + props.severity;
  },
  content: "p-message-content",
  icon: "p-message-icon",
  text: "p-message-text",
  closeButton: "p-message-close-button",
  closeIcon: "p-message-close-icon"
};
var MessageStyle = BaseStyle.extend({
  name: "message",
  theme: theme$2,
  classes: classes$3
});
var script$1$3 = {
  name: "BaseMessage",
  "extends": script$a$1,
  props: {
    severity: {
      type: String,
      "default": "info"
    },
    closable: {
      type: Boolean,
      "default": false
    },
    life: {
      type: Number,
      "default": null
    },
    icon: {
      type: String,
      "default": void 0
    },
    closeIcon: {
      type: String,
      "default": void 0
    },
    closeButtonProps: {
      type: null,
      "default": null
    }
  },
  style: MessageStyle,
  provide: function provide2() {
    return {
      $pcMessage: this,
      $parentInstance: this
    };
  }
};
var script$4 = {
  name: "Message",
  "extends": script$1$3,
  inheritAttrs: false,
  emits: ["close", "life-end"],
  timeout: null,
  data: function data2() {
    return {
      visible: true
    };
  },
  mounted: function mounted() {
    var _this = this;
    if (this.life) {
      setTimeout(function() {
        _this.visible = false;
        _this.$emit("life-end");
      }, this.life);
    }
  },
  methods: {
    close: function close(event) {
      this.visible = false;
      this.$emit("close", event);
    }
  },
  computed: {
    iconComponent: function iconComponent() {
      return {
        info: script$6,
        success: script$8,
        warn: script$7,
        error: script$5
      }[this.severity];
    },
    closeAriaLabel: function closeAriaLabel2() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.close : void 0;
    }
  },
  directives: {
    ripple: Ripple
  },
  components: {
    TimesIcon: script$8$1,
    InfoCircleIcon: script$6,
    CheckIcon: script$8,
    ExclamationTriangleIcon: script$7,
    TimesCircleIcon: script$5
  }
};
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var _hoisted_1$1 = ["aria-label"];
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_TimesIcon = resolveComponent("TimesIcon");
  var _directive_ripple = resolveDirective("ripple");
  return openBlock(), createBlock(Transition, mergeProps({
    name: "p-message",
    appear: ""
  }, _ctx.ptmi("transition")), {
    "default": withCtx(function() {
      return [withDirectives(createElementVNode("div", mergeProps({
        "class": _ctx.cx("root"),
        role: "alert",
        "aria-live": "assertive",
        "aria-atomic": "true"
      }, _ctx.ptm("root")), [_ctx.$slots.container ? renderSlot(_ctx.$slots, "container", {
        key: 0,
        closeCallback: $options.close
      }) : (openBlock(), createElementBlock("div", mergeProps({
        key: 1,
        "class": _ctx.cx("content")
      }, _ctx.ptm("content")), [renderSlot(_ctx.$slots, "icon", {
        "class": "p-message-icon"
      }, function() {
        return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.icon ? "span" : null), mergeProps({
          "class": [_ctx.cx("icon"), _ctx.icon]
        }, _ctx.ptm("icon")), null, 16, ["class"]))];
      }), _ctx.$slots["default"] ? (openBlock(), createElementBlock("div", mergeProps({
        key: 0,
        "class": ["p-message-text", _ctx.cx("text")]
      }, _ctx.ptm("text")), [renderSlot(_ctx.$slots, "default")], 16)) : createCommentVNode("", true), _ctx.closable ? withDirectives((openBlock(), createElementBlock("button", mergeProps({
        key: 1,
        "class": _ctx.cx("closeButton"),
        "aria-label": $options.closeAriaLabel,
        type: "button",
        onClick: _cache[0] || (_cache[0] = function($event) {
          return $options.close($event);
        })
      }, _objectSpread(_objectSpread({}, _ctx.closeButtonProps), _ctx.ptm("closeButton"))), [renderSlot(_ctx.$slots, "closeicon", {}, function() {
        return [_ctx.closeIcon ? (openBlock(), createElementBlock("i", mergeProps({
          key: 0,
          "class": [_ctx.cx("closeIcon"), _ctx.closeIcon]
        }, _ctx.ptm("closeIcon")), null, 16)) : (openBlock(), createBlock(_component_TimesIcon, mergeProps({
          key: 1,
          "class": [_ctx.cx("closeIcon"), _ctx.closeIcon]
        }, _ctx.ptm("closeIcon")), null, 16, ["class"]))];
      })], 16, _hoisted_1$1)), [[_directive_ripple]]) : createCommentVNode("", true)], 16))], 16), [[vShow, $data.visible]])];
    }),
    _: 3
  }, 16);
}
script$4.render = render$3;
var classes$2 = {
  root: "p-inputgroupaddon"
};
var InputGroupAddonStyle = BaseStyle.extend({
  name: "inputgroupaddon",
  classes: classes$2
});
var script$1$2 = {
  name: "BaseInputGroupAddon",
  "extends": script$a$1,
  style: InputGroupAddonStyle,
  provide: function provide3() {
    return {
      $pcInputGroupAddon: this,
      $parentInstance: this
    };
  }
};
var script$3 = {
  name: "InputGroupAddon",
  "extends": script$1$2,
  inheritAttrs: false
};
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [renderSlot(_ctx.$slots, "default")], 16);
}
script$3.render = render$2;
var theme$1 = function theme3(_ref) {
  var dt = _ref.dt;
  return "\n.p-inputtext {\n    font-family: inherit;\n    font-feature-settings: inherit;\n    font-size: 1rem;\n    color: ".concat(dt("inputtext.color"), ";\n    background: ").concat(dt("inputtext.background"), ";\n    padding: ").concat(dt("inputtext.padding.y"), " ").concat(dt("inputtext.padding.x"), ";\n    border: 1px solid ").concat(dt("inputtext.border.color"), ";\n    transition: background ").concat(dt("inputtext.transition.duration"), ", color ").concat(dt("inputtext.transition.duration"), ", border-color ").concat(dt("inputtext.transition.duration"), ", outline-color ").concat(dt("inputtext.transition.duration"), ", box-shadow ").concat(dt("inputtext.transition.duration"), ";\n    appearance: none;\n    border-radius: ").concat(dt("inputtext.border.radius"), ";\n    outline-color: transparent;\n    box-shadow: ").concat(dt("inputtext.shadow"), ";\n}\n\n.p-inputtext:enabled:hover {\n    border-color: ").concat(dt("inputtext.hover.border.color"), ";\n}\n\n.p-inputtext:enabled:focus {\n    border-color: ").concat(dt("inputtext.focus.border.color"), ";\n    box-shadow: ").concat(dt("inputtext.focus.ring.shadow"), ";\n    outline: ").concat(dt("inputtext.focus.ring.width"), " ").concat(dt("inputtext.focus.ring.style"), " ").concat(dt("inputtext.focus.ring.color"), ";\n    outline-offset: ").concat(dt("inputtext.focus.ring.offset"), ";\n}\n\n.p-inputtext.p-invalid {\n    border-color: ").concat(dt("inputtext.invalid.border.color"), ";\n}\n\n.p-inputtext.p-variant-filled {\n    background: ").concat(dt("inputtext.filled.background"), ";\n}\n\n.p-inputtext.p-variant-filled:enabled:focus {\n    background: ").concat(dt("inputtext.filled.focus.background"), ";\n}\n\n.p-inputtext:disabled {\n    opacity: 1;\n    background: ").concat(dt("inputtext.disabled.background"), ";\n    color: ").concat(dt("inputtext.disabled.color"), ";\n}\n\n.p-inputtext::placeholder {\n    color: ").concat(dt("inputtext.placeholder.color"), ";\n}\n\n.p-inputtext-sm {\n    font-size: ").concat(dt("inputtext.sm.font.size"), ";\n    padding: ").concat(dt("inputtext.sm.padding.y"), " ").concat(dt("inputtext.sm.padding.x"), ";\n}\n\n.p-inputtext-lg {\n    font-size: ").concat(dt("inputtext.lg.font.size"), ";\n    padding: ").concat(dt("inputtext.lg.padding.y"), " ").concat(dt("inputtext.lg.padding.x"), ";\n}\n\n.p-inputtext-fluid {\n    width: 100%;\n}\n");
};
var classes$1 = {
  root: function root3(_ref2) {
    var instance = _ref2.instance, props = _ref2.props;
    return ["p-inputtext p-component", {
      "p-filled": instance.filled,
      "p-inputtext-sm": props.size === "small",
      "p-inputtext-lg": props.size === "large",
      "p-invalid": props.invalid,
      "p-variant-filled": props.variant ? props.variant === "filled" : instance.$primevue.config.inputStyle === "filled" || instance.$primevue.config.inputVariant === "filled",
      "p-inputtext-fluid": instance.hasFluid
    }];
  }
};
var InputTextStyle = BaseStyle.extend({
  name: "inputtext",
  theme: theme$1,
  classes: classes$1
});
var script$1$1 = {
  name: "BaseInputText",
  "extends": script$a$1,
  props: {
    modelValue: null,
    size: {
      type: String,
      "default": null
    },
    invalid: {
      type: Boolean,
      "default": false
    },
    variant: {
      type: String,
      "default": null
    },
    fluid: {
      type: Boolean,
      "default": null
    }
  },
  style: InputTextStyle,
  provide: function provide4() {
    return {
      $pcInputText: this,
      $parentInstance: this
    };
  }
};
var script$2 = {
  name: "InputText",
  "extends": script$1$1,
  inheritAttrs: false,
  emits: ["update:modelValue"],
  inject: {
    $pcFluid: {
      "default": null
    }
  },
  methods: {
    getPTOptions: function getPTOptions(key) {
      var _ptm = key === "root" ? this.ptmi : this.ptm;
      return _ptm(key, {
        context: {
          filled: this.filled,
          disabled: this.$attrs.disabled || this.$attrs.disabled === ""
        }
      });
    },
    onInput: function onInput(event) {
      this.$emit("update:modelValue", event.target.value);
    }
  },
  computed: {
    filled: function filled() {
      return this.modelValue != null && this.modelValue.toString().length > 0;
    },
    hasFluid: function hasFluid() {
      return isEmpty(this.fluid) ? !!this.$pcFluid : this.fluid;
    }
  }
};
var _hoisted_1 = ["value", "aria-invalid"];
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("input", mergeProps({
    type: "text",
    "class": _ctx.cx("root"),
    value: _ctx.modelValue,
    "aria-invalid": _ctx.invalid || void 0,
    onInput: _cache[0] || (_cache[0] = function() {
      return $options.onInput && $options.onInput.apply($options, arguments);
    })
  }, $options.getPTOptions("root")), null, 16, _hoisted_1);
}
script$2.render = render$1;
var theme4 = function theme5(_ref) {
  var dt = _ref.dt;
  return "\n.p-inputgroup {\n    display: flex;\n    align-items: stretch;\n    width: 100%;\n}\n\n.p-inputgroupaddon {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 0.5rem;\n    background: ".concat(dt("inputgroup.addon.background"), ";\n    color: ").concat(dt("inputgroup.addon.color"), ";\n    border-top: 1px solid ").concat(dt("inputgroup.addon.border.color"), ";\n    border-left: 1px solid ").concat(dt("inputgroup.addon.border.color"), ";\n    border-bottom: 1px solid ").concat(dt("inputgroup.addon.border.color"), ";\n    padding: 0.5rem 0.75rem;\n    min-width: 2.5rem;\n}\n\n.p-inputgroup .p-floatlabel {\n    display: flex;\n    align-items: stretch;\n    width: 100%;\n}\n\n.p-inputgroup .p-inputtext,\n.p-inputgroup-fluid .p-inputtext,\n.p-inputgroup .p-inputwrapper,\n.p-inputgroup-fluid .p-input {\n    flex: 1 1 auto;\n    width: 1%;\n}\n\n.p-inputgroupaddon:last-child {\n    border-right: 1px solid ").concat(dt("inputgroup.addon.border.color"), ";\n}\n\n.p-inputgroup > .p-component,\n.p-inputgroup > .p-inputwrapper > .p-inputtext,\n.p-inputgroup > .p-floatlabel > .p-component {\n    border-radius: 0;\n    margin: 0;\n}\n\n.p-inputgroup > .p-component + .p-inputgroupaddon,\n.p-inputgroup > .p-inputwrapper > .p-inputtext + .p-inputgroupaddon,\n.p-inputgroup > .p-floatlabel > .p-component + .p-inputgroupaddon {\n    border-left: 0 none;\n}\n\n.p-inputgroup > .p-component:focus,\n.p-inputgroup > .p-inputwrapper > .p-inputtext:focus,\n.p-inputgroup > .p-floatlabel > .p-component:focus {\n    z-index: 1;\n}\n\n.p-inputgroup > .p-component:focus ~ label,\n.p-inputgroup > .p-inputwrapper > .p-inputtext:focus~label,\n.p-inputgroup > .p-floatlabel > .p-component:focus~label {\n    z-index: 1;\n}\n\n.p-inputgroupaddon:first-child,\n.p-inputgroup button:first-child,\n.p-inputgroup input:first-child,\n.p-inputgroup > .p-inputwrapper:first-child,\n.p-inputgroup > .p-inputwrapper:first-child > .p-inputtext {\n    border-top-left-radius: ").concat(dt("inputgroup.addon.border.radius"), ";\n    border-bottom-left-radius: ").concat(dt("inputgroup.addon.border.radius"), ";\n}\n\n.p-inputgroup .p-floatlabel:first-child input {\n    border-top-left-radius: ").concat(dt("inputgroup.addon.border.radius"), ";\n    border-bottom-left-radius: ").concat(dt("inputgroup.addon.border.radius"), ";\n}\n\n.p-inputgroupaddon:last-child,\n.p-inputgroup button:last-child,\n.p-inputgroup input:last-child,\n.p-inputgroup > .p-inputwrapper:last-child,\n.p-inputgroup > .p-inputwrapper:last-child > .p-inputtext {\n    border-top-right-radius: ").concat(dt("inputgroup.addon.border.radius"), ";\n    border-bottom-right-radius: ").concat(dt("inputgroup.addon.border.radius"), ";\n}\n\n.p-inputgroup .p-floatlabel:last-child input {\n    border-top-right-radius: ").concat(dt("inputgroup.addon.border.radius"), ";\n    border-bottom-right-radius: ").concat(dt("inputgroup.addon.border.radius"), ";\n}\n\n.p-inputgroup-fluid .p-button {\n    width: auto;\n}\n\n.p-inputgroup-fluid .p-button.p-button-icon-only {\n    width: 2.5rem;\n}\n");
};
var classes = {
  root: function root4(_ref2) {
    var instance = _ref2.instance;
    return ["p-inputgroup", {
      "p-inputgroup-fluid": instance.hasFluid
    }];
  }
};
var InputGroupStyle = BaseStyle.extend({
  name: "inputgroup",
  theme: theme4,
  classes
});
var script$1 = {
  name: "BaseInputGroup",
  "extends": script$a$1,
  props: {
    fluid: {
      type: Boolean,
      "default": null
    }
  },
  style: InputGroupStyle,
  provide: function provide5() {
    return {
      $pcInputGroup: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "InputGroup",
  "extends": script$1,
  inheritAttrs: false,
  inject: {
    $pcFluid: {
      "default": null
    }
  },
  computed: {
    hasFluid: function hasFluid2() {
      return isEmpty(this.fluid) ? !!this.$pcFluid : this.fluid;
    }
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [renderSlot(_ctx.$slots, "default")], 16);
}
script.render = render;
const _imports_0 = publicAssetsURL("/img/name.svg");
const _imports_1 = publicAssetsURL("/img/institution.svg");
const _imports_2 = publicAssetsURL("/img/mail.svg");
const _imports_3 = publicAssetsURL("/img/message.svg");
const _sfc_main$1 = {
  __name: "ContactPopup",
  __ssrInlineRender: true,
  setup(__props) {
    const visible = useState("visible", () => false);
    const loading = ref(false);
    const form = ref(null);
    const message = reactive({
      text: "",
      severity: "error",
      show: false
    });
    const handleMessage = (str, severity) => {
      message.text = str;
      message.show = true;
      if (severity)
        message.severity = severity;
      setTimeout(() => {
        message.show = false;
        message.text = "";
        message.severity = "success";
      }, 3e3);
    };
    const clearData = () => {
      form.value.reset();
      visible.value = false;
    };
    const sendEmail = async () => {
      loading.value = true;
      try {
        await emailjs.sendForm("service_mgq832c", "template_rrsrn8n", form.value, "XWnBPQ5zs66M-d5nI");
        handleMessage("Thank you for contacting us, we will get back to you soon.");
        setTimeout(() => {
          clearData();
        }, 1e3);
      } catch (error) {
        handleMessage("Oops, something went wrong, please try again later.", "error");
      } finally {
        loading.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Dialog = script$a;
      const _component_InputGroup = script;
      const _component_InputText = script$2;
      const _component_InputGroupAddon = script$3;
      const _component_Button = script$3$1;
      const _component_Message = script$4;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Dialog, {
        visible: unref(visible),
        "onUpdate:visible": ($event) => isRef(visible) ? visible.value = $event : null,
        modal: "",
        closable: false,
        id: "contact-popup",
        style: { width: "100vw", maxWidth: "789px", margin: "0 20px" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="modal-content py-4 px-4 md:px-12" data-v-33444cd9${_scopeId}><div class="modal-header text-white justify-content-center border-bottom-0 pb-0" data-v-33444cd9${_scopeId}><h2 class="modal-title text-center" id="contactModalLabel" data-v-33444cd9${_scopeId}>CONTACT US</h2></div><form data-v-33444cd9${_scopeId}><div class="space-y-3 mb-3" data-v-33444cd9${_scopeId}>`);
            _push2(ssrRenderComponent(_component_InputGroup, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_InputText, {
                    placeholder: "NAME",
                    name: "inputName",
                    required: ""
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_InputGroupAddon, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img${ssrRenderAttr("src", _imports_0)} alt="name" data-v-33444cd9${_scopeId3}>`);
                      } else {
                        return [
                          createVNode("img", {
                            src: _imports_0,
                            alt: "name"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_InputText, {
                      placeholder: "NAME",
                      name: "inputName",
                      required: ""
                    }),
                    createVNode(_component_InputGroupAddon, null, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: _imports_0,
                          alt: "name"
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_InputGroup, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_InputText, {
                    placeholder: "INSTITUTION",
                    name: "inputInstitution",
                    required: ""
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_InputGroupAddon, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img${ssrRenderAttr("src", _imports_1)} alt="institution" data-v-33444cd9${_scopeId3}>`);
                      } else {
                        return [
                          createVNode("img", {
                            src: _imports_1,
                            alt: "institution"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_InputText, {
                      placeholder: "INSTITUTION",
                      name: "inputInstitution",
                      required: ""
                    }),
                    createVNode(_component_InputGroupAddon, null, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: _imports_1,
                          alt: "institution"
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_InputGroup, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_InputText, {
                    placeholder: "EMAIL",
                    name: "inputEmail",
                    required: "",
                    type: "email"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_InputGroupAddon, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img${ssrRenderAttr("src", _imports_2)} alt="mail" data-v-33444cd9${_scopeId3}>`);
                      } else {
                        return [
                          createVNode("img", {
                            src: _imports_2,
                            alt: "mail"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_InputText, {
                      placeholder: "EMAIL",
                      name: "inputEmail",
                      required: "",
                      type: "email"
                    }),
                    createVNode(_component_InputGroupAddon, null, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: _imports_2,
                          alt: "mail"
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_InputGroup, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_InputText, {
                    placeholder: "MESSAGE",
                    name: "inputMessage"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_InputGroupAddon, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img${ssrRenderAttr("src", _imports_3)} alt="message" data-v-33444cd9${_scopeId3}>`);
                      } else {
                        return [
                          createVNode("img", {
                            src: _imports_3,
                            alt: "message"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_InputText, {
                      placeholder: "MESSAGE",
                      name: "inputMessage"
                    }),
                    createVNode(_component_InputGroupAddon, null, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: _imports_3,
                          alt: "message"
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="grid grid-cols-3 gap-3" data-v-33444cd9${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Button, {
              onClick: clearData,
              class: "col-span-1 btn form-btn form-btn-secondary font-bold h-10"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Back`);
                } else {
                  return [
                    createTextVNode("Back")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Button, {
              type: "submit",
              loading: unref(loading),
              class: "col-span-2 btn form-btn form-btn-primary font-bold h-10"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(loading)) {
                    _push3(`<i class="pi pi-spin pi-spinner" data-v-33444cd9${_scopeId2}></i>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(` Submit `);
                } else {
                  return [
                    unref(loading) ? (openBlock(), createBlock("i", {
                      key: 0,
                      class: "pi pi-spin pi-spinner"
                    })) : createCommentVNode("", true),
                    createTextVNode(" Submit ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form></div>`);
          } else {
            return [
              createVNode("div", { class: "modal-content py-4 px-4 md:px-12" }, [
                createVNode("div", { class: "modal-header text-white justify-content-center border-bottom-0 pb-0" }, [
                  createVNode("h2", {
                    class: "modal-title text-center",
                    id: "contactModalLabel"
                  }, "CONTACT US")
                ]),
                createVNode("form", {
                  ref_key: "form",
                  ref: form,
                  onSubmit: withModifiers(sendEmail, ["prevent"])
                }, [
                  createVNode("div", { class: "space-y-3 mb-3" }, [
                    createVNode(_component_InputGroup, null, {
                      default: withCtx(() => [
                        createVNode(_component_InputText, {
                          placeholder: "NAME",
                          name: "inputName",
                          required: ""
                        }),
                        createVNode(_component_InputGroupAddon, null, {
                          default: withCtx(() => [
                            createVNode("img", {
                              src: _imports_0,
                              alt: "name"
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_InputGroup, null, {
                      default: withCtx(() => [
                        createVNode(_component_InputText, {
                          placeholder: "INSTITUTION",
                          name: "inputInstitution",
                          required: ""
                        }),
                        createVNode(_component_InputGroupAddon, null, {
                          default: withCtx(() => [
                            createVNode("img", {
                              src: _imports_1,
                              alt: "institution"
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_InputGroup, null, {
                      default: withCtx(() => [
                        createVNode(_component_InputText, {
                          placeholder: "EMAIL",
                          name: "inputEmail",
                          required: "",
                          type: "email"
                        }),
                        createVNode(_component_InputGroupAddon, null, {
                          default: withCtx(() => [
                            createVNode("img", {
                              src: _imports_2,
                              alt: "mail"
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_InputGroup, null, {
                      default: withCtx(() => [
                        createVNode(_component_InputText, {
                          placeholder: "MESSAGE",
                          name: "inputMessage"
                        }),
                        createVNode(_component_InputGroupAddon, null, {
                          default: withCtx(() => [
                            createVNode("img", {
                              src: _imports_3,
                              alt: "message"
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "grid grid-cols-3 gap-3" }, [
                    createVNode(_component_Button, {
                      onClick: clearData,
                      class: "col-span-1 btn form-btn form-btn-secondary font-bold h-10"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Back")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Button, {
                      type: "submit",
                      loading: unref(loading),
                      class: "col-span-2 btn form-btn form-btn-primary font-bold h-10"
                    }, {
                      default: withCtx(() => [
                        unref(loading) ? (openBlock(), createBlock("i", {
                          key: 0,
                          class: "pi pi-spin pi-spinner"
                        })) : createCommentVNode("", true),
                        createTextVNode(" Submit ")
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ])
                ], 544)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(message).show) {
        _push(`<div class="fixed z-[10000] bottom-[16px] right-[16px]" data-v-33444cd9>`);
        _push(ssrRenderComponent(_component_Message, {
          severity: unref(message).severity
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(message).text)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(message).text), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ContactPopup.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-33444cd9"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Header = __nuxt_component_0;
  const _component_Footer = __nuxt_component_1;
  const _component_ContactPopup = __nuxt_component_2;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(`<div class="mt" data-v-ccfd0fe1>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(ssrRenderComponent(_component_ContactPopup, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ccfd0fe1"]]);

export { _default2 as default };
//# sourceMappingURL=default-BiF3G3tY.mjs.map
