import http from './httpInstance';

interface BaseRequest {
  url: string;
  successNotify: boolean
}

function getUserInfo() {
  return http.get({
    url: '/getUserInfo',
    successNotify: true,
    errorTitle: 'hello.title'
  });
}

export { getUserInfo };