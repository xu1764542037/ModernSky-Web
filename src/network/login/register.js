  import {request} from "../request"

export function sendEmailCheck(email) {
  return request({
    url: "/mail/getCheckCode",
    method: "post",
    data: {
      email: email
    },
  })
}

export function register(account,password,email) {
  return request({
    url: "/user/add",
    method: "post",
    data: {
      id: account,
      password: password,
      email: email
    },
  })
}

export function selectId(account) {
  return request({
    url: "/user/select",
    method: "post",
    data: {
      id: account
    },
  })
}