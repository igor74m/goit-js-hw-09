!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequire7bc7;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){n[e]=o},e.parcelRequire7bc7=t);var r=t("h6c0i");r.Notify.init({cssAnimationStyle:"from-top",fontAwesomeIconStyle:"shadow"});var i={form:document.querySelector(".form"),startDelay:document.querySelector('input[name = "delay"]'),step:document.querySelector('input[name = "step"]'),amount:document.querySelector('input[name = "amount"]')};function a(e,o){var n=Math.random()>.3;return new Promise((function(t,r){setTimeout((function(){n?t({position:e,delay:o}):r({position:e,delay:o})}),o)}))}function u(e){var o=e.position,n=e.delay;r.Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(n,"ms"))}function c(e){var o=e.position,n=e.delay;r.Notify.failure("❌ Rejected promise ".concat(o," in ").concat(n,"ms"))}i.form.addEventListener("submit",(function(e){e.preventDefault();for(var o=Number(i.form.delay.value),n=Number(i.form.step.value),t=Number(i.form.amount.value),r=1;r<=t;r+=1){a(r,o+n*(r-1)).then(u).catch(c)}}))}();
//# sourceMappingURL=03-promises.8ee4b916.js.map
