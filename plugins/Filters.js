import Vue from "vue";

Vue.filter("parseStringMoney", function (digit) {
  let turksihLira = new Intl.NumberFormat("tr-Tr", {
    style: "currency",
    currency: "TRY",
  });
  return turksihLira.format(digit);
});
