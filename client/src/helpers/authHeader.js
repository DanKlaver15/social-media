export function authHeader() {
  let user = JSON.parse(localStorage.getItem("zestyauth"));

  if (user && user.token) {
    return { "x-auth-token": user.token };
  } else {
    return {};
  }
}

export function userId() {
  let user = JSON.parse(localStorage.getItem("zestyauth"));

  if (user && user._id) {
    return user._id;
  } else {
    return null;
  }
}

export function getError(err) {
  return err.response ? err.response.data.error : "Unknown Error!";
}
