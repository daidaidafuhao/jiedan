"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  name: "NavBar",
  props: {
    title: {
      type: String,
      default: "任务接单"
    },
    showLogo: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      statusBarHeight: 20
      // 默认状态栏高度
    };
  },
  created() {
    this.getStatusBarHeight();
  },
  methods: {
    getStatusBarHeight() {
      common_vendor.index.getSystemInfo({
        success: (res) => {
          this.statusBarHeight = res.statusBarHeight;
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.statusBarHeight + "px",
    b: $props.showLogo
  }, $props.showLogo ? {
    c: common_assets._imports_0
  } : {}, {
    d: common_vendor.t($props.title)
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/nav-bar/nav-bar.js.map
