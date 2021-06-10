import {request} from "../request"

export function login(account,password) {
  return request({
    url: "/user/login",
    method: "post",
    data: {
      id: account,
      password: password
    },
  })
}
