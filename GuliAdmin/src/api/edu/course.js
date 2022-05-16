import request from '@/utils/request'
export default {

  //  添加课程信息
  addCourseInfo(courseInfo) {
    return request({
      url: `/eduservice/course/addCourseInfo`,
      method: 'post',
      data: courseInfo
    })
  },

  //  查询所有讲师
  getTearcherList() {
    return request({
      url: `/eduservice/teacher/findAll`,
      method: 'get'
    })
  },

  //  根据课程id查询课程基本信息
  getCourseInfoId(courseId) {
    return request({
      url: `/eduservice/course/getCourseInfo/${courseId}`,
      method: 'get'
    })
  },

  //  修改课程信息
  updateCourseInfo(courseInfo) {
    return request({
      url: `/eduservice/course/updateCourseInfo`,
      method: 'post',
      data: courseInfo
    })
  },

  //  课程确认信息显示
  getPublishCourseInfo(id) {
    return request({
      url: `/eduservice/course/getPublishCourseInfo/${id}`,
      method: 'get'
    })
  },

  //  课程最终发布
  publishCourse(id) {
    return request({
      url: `/eduservice/course/publishCourse/${id}`,
      method: 'post'
    })
  },

  getCourseList() {
    return request({
      url: `/eduservice/course/getCourseList`,
      method: 'get'
    })
  }

}
