"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "tab-bar",
  props: {
    active: {
      type: String,
      default: "home"
    }
  },
  data() {
    return {};
  },
  methods: {
    switchTab(tab) {
      if (tab === this.active)
        return;
      if (tab === "home") {
        common_vendor.index.reLaunch({
          url: "/pages/index/index"
        });
      } else if (tab === "my") {
        common_vendor.index.reLaunch({
          url: "/pages/my/my"
        });
      }
      this.$emit("tabChange", tab);
    },
    onAddClick() {
      this.$emit("addClick");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $props.active === "home" ? "/static/home-active.png" : "/static/home.png",
    b: $props.active === "home" ? 1 : "",
    c: $props.active === "home" ? 1 : "",
    d: common_vendor.o(($event) => $options.switchTab("home")),
    e: common_vendor.o((...args) => $options.onAddClick && $options.onAddClick(...args)),
    f: $props.active === "my" ? "/static/my-active.png" : "/static/my.png",
    g: $props.active === "my" ? 1 : "",
    h: $props.active === "my" ? 1 : "",
    i: common_vendor.o(($event) => $options.switchTab("my"))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/tab-bar/tab-bar.js.map
