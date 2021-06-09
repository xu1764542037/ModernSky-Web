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