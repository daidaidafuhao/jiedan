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
      common_vendor.index.__f__("log", "at pages/index/index.vue:138", "切换到标签:", tab);
    },
    handleAddClick() {
      common_vendor.index.__f__("log", "at pages/index/index.vue:141", "点击了添加按钮");
      common_vendor.index.navigateTo({
        url: "/pages/publish/publish"
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_nav_bar2 = common_vendor.resolveComponent("nav-bar");
  const _easycom_uni_notice_bar2 = common_vendor.resolveComponent("uni-notice-bar");
  const _easycom_uni_tag2 = common_vendor.resolveComponent("uni-tag");
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  const _easycom_tab_bar2 = common_vendor.resolveComponent("tab-bar");
  (_easycom_uni_icons2 + _easycom_nav_bar2 + _easycom_uni_notice_bar2 + _easycom_uni_tag2 + _easycom_uni_dateformat2 + _easycom_uni_card2 + _easycom_tab_bar2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_nav_bar = () => "../../components/nav-bar/nav-bar.js";
const _easycom_uni_notice_bar = () => "../../uni_modules/uni-notice-bar/components/uni-notice-bar/uni-notice-bar.js";
const _easycom_uni_tag = () => "../../uni_modules/uni-tag/components/uni-tag/uni-tag.js";
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
const _easycom_tab_bar = () => "../../components/tab-bar/tab-bar.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_nav_bar + _easycom_uni_notice_bar + _easycom_uni_tag + _easycom_uni_dateformat + _easycom_uni_card + _easycom_tab_bar)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      type: "more-filled",
      size: "24",
      color: "#333"
    }),
    b: common_vendor.p({
      type: "search",
      size: "24",
      color: "#333"
    }),
    c: common_vendor.p({
      title: "任务接单"
    }),
    d: common_assets._imports_0$1,
    e: common_vendor.p({
      text: "公告 推按阿姆几点几分谁辣椒几个咖啡机东莞市大...",
      scrollable: true,
      color: "#ff9500",
      ["background-color"]: "#fff"
    }),
    f: common_assets._imports_1$1,
    g: common_assets._imports_2,
    h: common_assets._imports_3,
    i: common_assets._imports_0$2,
    j: common_vendor.p({
      text: "已下单",
      type: "primary",
      size: "small"
    }),
    k: common_vendor.p({
      date: "2025-03-29 16:52:00",
      format: "yyyy-MM-dd hh:mm:ss"
    }),
    l: common_vendor.p({
      title: "推荐列表",
      ["is-shadow"]: false
    }),
    m: common_vendor.o($options.handleTabChange),
    n: common_vendor.o($options.handleAddClick),
    o: common_vendor.p({
      active: "home"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
