export function authHeader() {
  let user = JSON.parse(localStorage.getItem("zestyauth"));

  if (user && user.token) {
    return { "x-auth-token": user.token };
  } else {
    return {};
  }
}
