import { jwtDecode } from "jwt-decode";
import Cookie from "js-cookie";
export default function ({ store, redirect }) {
  try {
    if (store.getters.isAuthenticated) {
      let token = Cookie.get("authKey");
      if (token) {
        const decoded = jwtDecode(token);
        if (new Date().getTime() <= decoded.exp) {
          throw new Error("Zaman aşımı!");
        }
      }
    } else {
      throw new Error("Token bulunamadı!");
    }
  } catch (error) {
    redirect("/auth");
  }
}
