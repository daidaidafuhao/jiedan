"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const TabBar = () => "../../components/tab-bar/tab-bar.js";
const NavBar = () => "../../components/nav-bar/nav-bar.js";
const _sfc_main = {
  components: {
    TabBar,
    NavBar
  },
  data() {
    return {};
  },
  onLoad() {
  },
  methods: {
    handleTabChange(tab) {
      common_vendor.index.__f__("log", "at pages/index/index.vue:136", "切换到标签:", tab);
    },
    handleAddClick() {
      common_vendor.index.__f__("log", "at pages/index/index.vue:139", "点击了添加按钮");
      common_vendor.index.navigateTo({
        url: "/pages/publish/publish"
      });
    }
  }
};
if (!Array) {
  const _easycom_nav_bar2 = common_vendor.resolveComponent("nav-bar");
  const _easycom_tab_bar2 = common_vendor.resolveComponent("tab-bar");
  (_easycom_nav_bar2 + _easycom_tab_bar2)();
}
const _easycom_nav_bar = () => "../../components/nav-bar/nav-bar.js";
const _easycom_tab_bar = () => "../../components/tab-bar/tab-bar.js";
if (!Math) {
  (_easycom_nav_bar + _easycom_tab_bar)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      title: "任务接单"
    }),
    b: common_assets._imports_0$1,
    c: common_assets._imports_1$1,
    d: common_assets._imports_2,
    e: common_assets._imports_3,
    f: common_assets._imports_0$2,
    g: common_vendor.o($options.handleTabChange),
    h: common_vendor.o($options.handleAddClick),
    i: common_vendor.p({
      active: "home"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
