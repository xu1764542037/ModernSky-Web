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

export function selectIId(id) {
  return request({
    url: "/island/selectIId",
    method: "post",
    data: {
      id: id
    },
  })
}

export function batchSelectIsland(ids) {
  return request({
    url: "/island/batchSelectIsland",
    method: "post",
    data: {
      ids: ids
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