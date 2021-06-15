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

export function selectStudent(userId) {
  return request({
    url: "/student/select",
    method: "post",
    data: {
      id: userId,
    },
  })
}

export function selectTeacher(userId) {
  return request({
    url: "/teacher/select",
    method: "post",
    data: {
      id: userId,
    },
  })
}

export function getCode() {
  return request({
    url: "/code/getCode",
    method: "post",
    data: {
    },
  })
}
