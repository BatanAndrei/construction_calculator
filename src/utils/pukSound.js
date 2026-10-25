const puk = new Audio("/sounds/puk.mp3");
puk.volume = 0.4; // 0..1
puk.preload = "auto";

export const playPukSound = () => {
  try {
    puk.currentTime = 0; // перемотка в начало, чтобы можно было кликать подряд
    puk.play().catch(() => {
      // браузер может заблокировать — молча игнорируем
    });
  } catch {
    // звук не критичен
  }
};
