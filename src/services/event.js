/**
 * Created by wb-mjy275902 on 2017/6/14.
 */
import qs from 'qs';
import request from '#/utils/request';
import config from '#/utils/config';
/*
 * 获取活动详情
 * */
 /* 获取警告信息*/

export async function eventDetail(eventId) {
  // alert('调用接口');
  // alert(eventId);
  return request(`${config.baseUrl}/activityDetail.json`, {
    method: 'POST',
    credentials: 'same-origin',
    mode: 'same-origin',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    body: qs.stringify({ eventId }),
  });
}
/*
 * 查询课程
 * */
export async function getLessonDetail(eventId) {
  return request(`${config.baseUrl}/lessonDetail.json?eventId=${eventId}`, {
    method: 'POST',
    credentials: 'same-origin',
    mode: 'same-origin',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
  });
}
/*
*
* 获取最新课程
* */
export async function getNewLesson(eventId) {
  return request(`${config.baseUrl}/pageQueryLesson.json?pageNum=1&pageSize=5&orderColumn=NewLesson`, {
    method: 'POST',
    credentials: 'same-origin',
    mode: 'same-origin',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
  });
}
/*
 *
 * 签到
 * */
export async function checkIn(info) {
  return request(`${config.baseUrl}/joinIn.json`, {
    method: 'POST',
    credentials: 'same-origin',
    mode: 'same-origin',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    body: qs.stringify(info),
  });
}

export async function getNoteInfo() {
  return request(`${config.baseUrl}/warningMessage.json`, {
    method: 'GET',
    credentials: 'same-origin',
    mode: 'same-origin',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
  });
}

export async function setNoteInfo(info) {
  return request(`${config.baseUrl}/warningMessage.json`, {
    method: 'POST',
    credentials: 'same-origin',
    mode: 'same-origin',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    body: qs.stringify(info),
  });
}
