import {request} from "../../../request";

export function selectClass() {
  return request({
    url: "/classes/select",
    method: "post",
    data: {

    },
  })
}

export function selectByPage(page) {
  return request({
    url: "/classes/findByPage",
    method: "post",
    data: {
      page: page,
      rowAccount: 10,
    },
  })
}

export function addClass(branch,major,className,year) {
  return request({
    url: "/classes/add",
    method: "post",
    data: {
      branch: branch,
      major: major,
      className: className,
      year: year
    },
  })
}

export function updateClass(id,branch,major,className,year) {
  return request({
    url: "/classes/update",
    method: "post",
    data: {
      id: id,
      branch: branch,
      major: major,
      className: className,
      year: year
    },
  })
}

export function deleteClass(id) {
  return request({
    url: "/classes/delete",
    method: "post",
    data: {
      id: id,
    },
  })
}