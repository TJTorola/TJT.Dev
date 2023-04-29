export const setup = (q) => {
  q.background(0);
};

export const draw = (q) => {
  q.ellipse(q.mouseX, q.mouseY, 80, 80);
};
