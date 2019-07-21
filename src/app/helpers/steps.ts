import anime from 'animejs';

const eventListenerTag = document.querySelector('#time-out');
console.log(eventListenerTag)

function step1() {
  eventListenerTag.appendChild(createCountDownElement());

  // anime({
  //   targets: 'div',
  //   translateX: 250,
  //   rotate: '1turn',
  //   backgroundColor: '#FFF',
  //   duration: 800
  // });
}

const createCountDownElement = () => {
  const svgTag = document.createElement('svg');
  const circleTag = document.createElement('circle');

  circleTag.setAttribute('r', '18');
  circleTag.setAttribute('cx', '20');
  circleTag.setAttribute('cy', '20');

  svgTag.appendChild(circleTag);

  return svgTag;

}

export default {
  step1
};

