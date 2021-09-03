import {request} from "../request"

export function select(name) {
  return request({
    url: "/island/select",
    method: "post",
    data: {
      name: name
    },
  })
}

export function distinctSelectType(type) {
  return request({
    url: "/island/distinctSelect",
    method: "post",
    data: {
      type: type
    },
  })
}