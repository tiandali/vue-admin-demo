<template>
  <div
    v-if="isShow"
    v-loading="socialLoading"
    class="login-container"
    :element-loading-text="'现在进行'+currentPath+'第三方登录,请稍等'"
  >
    <div class="login-right">
      <div class="title-container">
        <h3 class="title">
          PRE 权限后台系统登录
        </h3>
      </div>
      <el-tabs
        v-model="activeName"
        @tab-click="handleClick"
      >
        <el-tab-pane name="loginForm">
          <span slot="label">
            <i
              slot="prefix"
              class
            >
              <svg-icon icon-class="user" />
            </i> 用户名登录
          </span>
          <el-form
            ref="loginForm"
            :model="loginForm"
            :rules="loginRules"
            class="login-form"
            label-position="left"
          >
            <el-form-item prop="username">
              <el-input
                v-model="loginForm.username"
                placeholder="账号"
                name="username"
                type="text"
                autocomplete="off"
              >
                <i
                  slot="prefix"
                  class
                >
                  <svg-icon icon-class="user1" />
                </i>
              </el-input>
            </el-form-item>

            <el-form-item prop="password">
              <el-input
                v-model="loginForm.password"
                placeholder="密码"
                name="password"
                type="password"
              >
                <i
                  slot="prefix"
                  class
                >
                  <svg-icon icon-class="密码" />
                </i>
              </el-input>
            </el-form-item>

            <el-button
              :loading="loading"
              type="primary"
              style="width:100%;"
              @click.native.prevent="handleLogin"
            >
              登录
            </el-button>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import { formatData, getUrlKey } from "@/utils/webUtils";
import { isvalidPhone } from "@/utils/validate";
import { getImgCode } from "@/api/login";
import { sendSms } from "@/api/user";

export default {
  name: "Login",
  data() {
    const validatePassword = (rule, value, callback) => {
      if (value.length < 2) {
        callback(new Error("The password can not be less than 6 digits"));
      } else {
        callback();
      }
    };
    // 验证手机号格式
    const validPhone = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入手机号"));
      } else if (!isvalidPhone(value)) {
        callback(new Error("请输入正确的11位手机号码"));
      } else {
        callback();
      }
    };
    return {
      tenantList: [],
      loginForm: {
        username: "admin",
        password: "123456",
        code: "",
        token: "",
        key: ""
      },
      src: "",
      phoneForm: {
        phone: "",
        code: ""
      },
      loginRules: {
        username: [{ required: true, trigger: "blur" }],
        password: [
          { required: true, trigger: "blur", validator: validatePassword }
        ],
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }]
      },
      phoneRules: {
        phone: [{ required: true, trigger: "blur", validator: validPhone }],
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }]
      },
      passwordType: "password",
      loading: false,
      showDialog: false,
      redirect: undefined,
      token: "",
      isShow: true,
      activeName: "loginForm",
      buttonName: "发送验证码",
      isDisabled: false,
      codeLoading: false,
      time: 60,
      socialLoading: false,
      currentPath: "",
      active: ""
    };
  },
  created() {
    this.refreshCaptcha();
    this.socialLogin();
  },
  mounted() {
    // 自动加载indexs方法
  },
  methods: {
    showPwd() {
      if (this.passwordType === "password") {
        this.passwordType = "";
      } else {
        this.passwordType = "password";
      }
    },
    // 用户名 密码登录
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch("LoginByUsername", this.loginForm)
            .then(() => {
              this.loading = false;
              this.$router.push({ path: this.redirect || "/" });
            })
            .catch(() => {
              this.loading = false;
              this.refreshCaptcha();
            });
        } else {
          return false;
        }
      });
    },

    // 手机号短信登录
    phoneLogin() {
      this.$refs.phoneForm.validate(valid => {
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch("LoginByUserPhone", this.phoneForm)
            .then(() => {
              this.loading = false;
              this.$router.push({ path: this.redirect || "/" });
            })
            .catch(() => {
              this.loading = false;
              this.refreshCaptcha();
            });
        } else {
          return false;
        }
      });
    },
    refreshCaptcha: function() {
      getImgCode().then(res => {
        this.src = res.data.data.img;
        this.loginForm.key = res.data.data.key;
      });
    },
    // 社交登录
    socialLogin() {
      const _this = this;
      _this.loginForm.token = getUrlKey("token");
      if (this.loginForm.token != null && this.loginForm.token !== "") {
        _this.isShow = false;
        this.$store
          .dispatch("LoginByUsername", this.loginForm)
          .then(() => {
            this.loading = false;
            this.$router.push({ path: this.redirect || "/" });
          })
          .catch(() => {
            this.loading = false;
            this.refreshCaptcha();
          });
      }
    },
    // 发送短信验证码
    sendCode() {
      if (this.phoneForm.phone !== "" && isvalidPhone(this.phoneForm.phone)) {
        this.codeLoading = true;
        this.buttonName = "发送中";
        const _this = this;
        sendSms(this.phoneForm.phone)
          .then(res => {
            if (res.data.code === 200) {
              this.$message({
                showClose: true,
                message: "发送成功，验证码有效期2分钟",
                type: "success"
              });
              this.codeLoading = false;
              this.isDisabled = true;
              this.buttonName = this.time-- + "秒";
              this.timer = window.setInterval(function() {
                _this.buttonName = _this.time + "秒";
                --_this.time;
                if (_this.time < 0) {
                  _this.buttonName = "重新发送";
                  _this.time = 60;
                  _this.isDisabled = false;
                  window.clearInterval(_this.timer);
                }
              }, 1000);
            }
          })
          .catch(err => {
            this.resetForm();
            this.codeLoading = false;
          });
      } else {
        this.$message({
          showClose: true,
          message: "请输入手机号",
          type: "error"
        });
      }
    },
    handleClick(tab, event) {
      this.$refs[tab.paneName].resetFields();
    },
    handleSocial(path) {
      this.currentPath = path;
      this.socialLoading = true;
      window.location.href = "http://localhost:8081/auth/" + path;
    },
    gotoRegister() {
      this.$router.push({
        path: "/register"
      });
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  /*background-image: url(https://img2018.cnblogs.com/blog/1211637/201908/1211637-20190809112720089-1507550740.png);*/
  background-image: url("../../assets/63048029b07252112f0033e8e3c52865.jpg");
  /*background: red;*/
  background-size: cover;

  .login-right {
    width: 30%;
    padding: 50px;
    border-radius: 6px;
    background: #ffffff;

    .title {
      margin: 0 auto 30px auto;
      text-align: center;
      color: #505458;
    }

    .login-form {
      height: 50%;
    }

    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 5px;
      color: #454545;
    }

    .other-login {
      margin-top: 3vh;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }

    .other-icon {
      cursor: pointer;
      margin-left: 5px;
      fill: rgba(0, 0, 0, 0.2);
    }

    .other-icon:hover {
      fill: rebeccapurple;
    }

    .other-login .other-way {
      font-size: 14px;
      color: #515a6e;
      width: calc(100% - 56px);
    }

    .register {
      float: right;
      color: #1ab2ff;
      font-size: 14px;
      cursor: pointer;
      text-align: right;
    }

    .login-select {
      margin-left: 100px;
      margin-bottom: 13px;

      input {
        color: #333;
        font-size: 14px;
        font-weight: 400;
        border: none;
      }
    }
  }
}
</style>
