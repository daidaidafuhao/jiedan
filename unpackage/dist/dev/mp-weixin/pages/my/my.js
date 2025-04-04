"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const TabBar = () => "../../components/tab-bar/tab-bar.js";
const _sfc_main = {
  components: {
    TabBar
  },
  data() {
    return {};
  },
  methods: {
    handleTabChange(tab) {
      common_vendor.index.__f__("log", "at pages/my/my.vue:73", "切换到标签:", tab);
    },
    handleAddClick() {
      common_vendor.index.__f__("log", "at pages/my/my.vue:76", "点击了添加按钮");
      common_vendor.index.navigateTo({
        url: "/pages/publish/publish"
      });
    }
  }
};
if (!Array) {
  const _easycom_tab_bar2 = common_vendor.resolveComponent("tab-bar");
  _easycom_tab_bar2();
}
const _easycom_tab_bar = () => "../../components/tab-bar/tab-bar.js";
if (!Math) {
  _easycom_tab_bar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0$2,
    b: common_vendor.o($options.handleTabChange),
    c: common_vendor.o($options.handleAddClick),
    d: common_vendor.p({
      active: "my"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/my/my.js.map
