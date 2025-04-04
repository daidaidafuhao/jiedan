"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      isAgree: false
    };
  },
  methods: {
    wechatLogin() {
      if (!this.isAgree) {
        common_vendor.index.showToast({
          title: "请先阅读并同意协议",
          icon: "none"
        });
        return;
      }
      common_vendor.index.showLoading({
        title: "登录中..."
      });
      setTimeout(() => {
        common_vendor.index.hideLoading();
        common_vendor.index.setStorageSync("isLoggedIn", true);
        common_vendor.index.reLaunch({
          url: "/pages/index/index",
          success: () => {
            common_vendor.index.__f__("log", "at pages/login/login.vue:70", "跳转到首页成功");
          },
          fail: (err) => {
            common_vendor.index.__f__("error", "at pages/login/login.vue:73", "跳转到首页失败", err);
            common_vendor.index.showToast({
              title: "跳转失败，请重试",
              icon: "none"
            });
          }
        });
      }, 1500);
    },
    toggleAgreement() {
      this.isAgree = !this.isAgree;
    },
    openUserAgreement() {
      common_vendor.index.navigateTo({
        url: "/pages/agreement/user"
      });
    },
    openPrivacyPolicy() {
      common_vendor.index.navigateTo({
        url: "/pages/agreement/privacy"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0,
    b: common_assets._imports_1,
    c: common_vendor.o((...args) => $options.wechatLogin && $options.wechatLogin(...args)),
    d: $data.isAgree,
    e: common_vendor.o((...args) => $options.toggleAgreement && $options.toggleAgreement(...args)),
    f: common_vendor.o((...args) => $options.openUserAgreement && $options.openUserAgreement(...args)),
    g: common_vendor.o((...args) => $options.openPrivacyPolicy && $options.openPrivacyPolicy(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/login/login.js.map
