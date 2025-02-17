$(document).on("scroll", function () {
  let scrollTop = $(document).scrollTop();
  let maxScroll = $(document).height() - $(window).height();
  let scrollRatio = scrollTop / maxScroll;

  // カラーパレット（朝焼け～夕焼け～夜）
  let gradients = [
    ["#527e99", "#88a5b7"],
    ["#88a5b7", "#acbdc7"],
    ["#c8ecca", "#eadeb9"],
    ["#eadeb9", "#e2a872"],
    ["#e2a872", "#7084a5"],
    ["#7084a5", "#ada8be"],
    ["#ada8be", "#d4b0b5"],
    ["#051637", "#1c2c52"],
    ["#1c2c52", "#5c658b"],
  ];

  // 現在のスクロール位置に基づいてグラデーションを補間
  let index = Math.floor(scrollRatio * (gradients.length - 1));
  let t = (scrollRatio * (gradients.length - 1)) % 1; // 小数部分（補間比率）

  let color1_start = gradients[index][0];
  let color1_end = gradients[index][1];
  let color2_start = gradients[Math.min(index + 1, gradients.length - 1)][0];
  let color2_end = gradients[Math.min(index + 1, gradients.length - 1)][1];

  // カラー補間
  function interpolateColor(color1, color2, t) {
    let c1 = color1.match(/\w\w/g).map((c) => parseInt(c, 16));
    let c2 = color2.match(/\w\w/g).map((c) => parseInt(c, 16));
    let result = c1.map((v, i) => Math.round(v * (1 - t) + c2[i] * t));
    return `rgb(${result[0]}, ${result[1]}, ${result[2]})`;
  }

  let gradientStart = interpolateColor(color1_start, color2_start, t);
  let gradientEnd = interpolateColor(color1_end, color2_end, t);

  $("body").css(
    "background",
    `linear-gradient(135deg, ${gradientStart}, ${gradientEnd})`
  );
});
