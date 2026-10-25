const coin = new Audio('/sounds/zvukmonety.mp3');
coin.volume = 0.4; // 0..1
coin.preload = 'auto';

export const playCoinSound = () => {
  try {
    coin.currentTime = 0; // перемотка в начало, чтобы можно было кликать подряд
    coin.play().catch(() => {
      // браузер может заблокировать — молча игнорируем
    });
  } catch {
    // звук не критичен
  }
};