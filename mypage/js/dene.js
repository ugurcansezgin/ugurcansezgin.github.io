getTop.addEventListener("click", function () {
  scrollTo(0, 3000);
});
function scrollTo(element, duration) {
  const e = document.documentElement;
  if (e.scrollTop === 0) {
    const t = e.scrollTop;
    ++e.scrollTop;
    e = t + 1 === e.scrollTop-- ? e : document.body;
  }
  scrollToC(e, e.scrollTop, element, duration);
}
function scrollToC(element, from, to, duration) {
  if (duration <= 0) return;
  if (typeof from === "object") from = from.offsetTop;
  if (typeof to === "object") to = to.offsetTop;

  scrollToX(element, from, to, 0, 1 / duration, 20, easeOutCuaic);
}

function scrollToX(element, xFrom, xTo, t01, speed, step, motion) {
  if (t01 < 0 || t01 > 1 || speed <= 0) {
    element.scrollTop = xTo;
    return;
  }
  element.scrollTop = xFrom - (xFrom - xTo) * motion(t01);
  t01 += speed * step;
  debugger;
  setTimeout(function () {
    scrollToX(element, xFrom, xTo, t01, speed, step, motion);
  }, step);
}

function easeOutCuaic(t) {
  t--;
  return t * t * t + 1;
}
