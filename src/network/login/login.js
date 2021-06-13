import {request} from "../request"

export function login(account,password) {
  return request({
    url: "/user/select",
    method: "post",
    data: {
      id: account,
      password: password
    },
  })
}
