import {request} from "../request";

export function addUserInfo(id,name,password,sex,email,phone) {
  return request({
    url: "/user/add",
    method: "post",
    data: {
      id: id,
      name: name,
      password: password,
      sex: sex,
      email: email,
      phone: phone
    },
  })
}


export function selectActorId(identity) {
  return request({
    url: "/user/add",
    method: "post",
    data: {
      name: identity,
    },
  })
}

export function setActor(user_id,actor_id) {
  return request({
    url: "/user/add",
    method: "post",
    data: {
      user: user_id,
      actor: actor_id
    },
  })
}

export function addStudentInfo(id,name,number,branch,major,className,year) {
  return request({
    url: "/student/add",
    method: "post",
    data: {
      id: id,
      name: name,
      number: number,
      branch: branch,
      major: major,
      className: className,
      year: year
    },
  })
}

export function addTeacherInfo(id,name,jobNumber) {
  return request({
    url: "/student/add",
    method: "post",
    data: {
      id: id,
      name: name,
      jobNumber: jobNumber,
    },
  })
}

export function distinctSelectBranch() {
  return request({
    url: "/classes/distinctSelect",
    method: "post",
    data: {
      column: 'branch',
      // major: ''
    },
  })
}


export function distinctSelectMajor(branch) {
  return request({
    url: "/classes/distinctSelect",
    method: "post",
    data: {
      column: 'major',
      branch: branch
    },
  })
}

export function distinctSelectClassName(major) {
  return request({
    url: "/classes/distinctSelect",
    method: "post",
    data: {
      column: 'className',
      major: major
    },
  })
}

export function distinctSelectYear(className) {
  return request({
    url: "/classes/distinctSelect",
    method: "post",
    data: {
      column: 'year',
      className: className
    },
  })
}