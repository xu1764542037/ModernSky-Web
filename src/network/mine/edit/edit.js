import {request} from "../../request";

export function updateAutograph(id,autograph) {
  return request({
    url: "/user/update",
    method: "post",
    data: {
      id: id,
      autograph: autograph
    },
  })
}

export function updateUserInfo(id,name,sex) {
  return request({
    url: "/user/update",
    method: "post",
    data: {
      id: id,
      name: name,
      sex: sex
    },
  })
}

export function updateStudent(id,name) {
  return request({
    url: "/student/update",
    method: "post",
    data: {
      id: id,
      name: name
    },
  })
}

export function updateTeacher(id,name) {
  return request({
    url: "/teacher/update",
    method: "post",
    data: {
      id: id,
      name: name
    },
  })
}