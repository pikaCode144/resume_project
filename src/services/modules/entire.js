import request from "../request"

export function getEntireRoomList(offset, size = 20) {
  return request.get('/entire/list', {
    params: {
      offset,
      size
    }
  })
}