;(function () {
  'use strict'

  let timerId

  const get = (target) => {
    return document.querySelector(target)
  }

  // scroll 이벤트 시 성능향상을 위한 throttle
  const throttle = (callback, time) => {
    if (timerId) return
    setTimeout(() => {
      callback()
      timerId = undefined; // 매번 초기화를 시켜줄 필요
    }, time)
  }

  const $progressBar = get('.progress-bar')


  const onScroll = () => {
    const height = document.documentElement.scrollHeight -
     document.documentElement.clientHeight

    const scrollTop = document.documentElement.scrollTop

    const width = (scrollTop / height) * 100;
    $progressBar.style.width = width + '%';
  }

  window.addEventListener('scroll', () => throttle(onScroll,100));
})()
