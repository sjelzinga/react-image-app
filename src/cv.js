/* global cv */
export function findEdges(image) {
  let img = new Image();
  img.crossOrigin = "Anonymous";
  img.addEventListener(
    "load",
    () => {
      let src = cv.imread(img);
      let dst = new cv.Mat();
      cv.cvtColor(src, src, cv.COLOR_RGB2GRAY, 0);

      cv.Canny(src, dst, 50, 100, 3, false);
      cv.imshow("output", dst);
      src.delete();
      dst.delete();
    },
    false
  );
  img.src = image.current.src;
}
