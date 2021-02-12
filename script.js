if (
  !navigator.userAgent.match(
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
  )
) {
  const container = document.querySelector(".main");
  const items = Array.from(document.querySelectorAll("section"));

  container.style.cssText =
    "position: fixed; \
  overflow: hidden; \
  top: 0; \
  left: 0;\
  right: 0;";

  document.body.style.height = container.clientHeight + "px";

  let offset = pageYOffset;

  const setTranslate = (distance) => {
    container.style.transform = `translateY(-${distance}px)`;
  };

  let scrollAnim = () => {
    offset += (pageYOffset - offset) * 0.1;
    setTranslate(offset);
    requestAnimationFrame(scrollAnim);
  };

  requestAnimationFrame(scrollAnim);
}
