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

export function selectUser(id) {
  return request({
    url: "/user/select",
    method: "post",
    data: {
      id: id
    },
  })
}

export function selectStudent(id) {
  return request({
    url: "/student/select",
    method: "post",
    data: {
      id: id
    },
  })
}

export function selectTeacher(id) {
  return request({
    url: "/teacher/select",
    method: "post",
    data: {
      id: id
    },
  })
}

export function selectAId(id) {
  return request({
    url: "/actor/selectAId",
    method: "post",
    data: {
      id: id
    },
  })
}

export function batchSelect(ids) {
  return request({
    url: "/actor/batchSelectActor",
    method: "post",
    data: {
      id: ids
    },
  })
}

export function deleteUser(id) {
  return request({
    url: "/user/delete",
    method: "post",
    data: {
      id: id
    },
  })
}

export function deleteStudent(id) {
  return request({
    url: "/student/delete",
    method: "post",
    data: {
      id: id
    },
  })
}

export function deleteTeacher(id) {
  return request({
    url: "/teacher/delete",
    method: "post",
    data: {
      id: id
    },
  })
}

export function deleteActor(id) {
  return request({
    url: "/actor/deleteActor",
    method: "post",
    data: {
      id: id
    },
  })
}