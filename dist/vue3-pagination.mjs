import { defineComponent as e, openBlock as o, createElementBlock as r, toDisplayString as a } from "vue";
const s = /* @__PURE__ */ e({
  __name: "Pagination",
  props: {
    btnText: { type: String, required: !1 }
  },
  setup(t) {
    const n = t;
    return (i, p) => (o(), r("button", null, a(n.btnText), 1));
  }
});
export {
  s as Pagination
};
