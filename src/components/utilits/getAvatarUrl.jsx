export default function getAvatarUrl(url) {
  const imgUrl = new URL(url);
  // Определяем случайный размер в диапазоне 280 - 320.
  const imgSize = Math.floor(Math.random() * (320 - 280)) + 280;
  imgUrl.pathname = imgSize;
  return imgUrl.href;
}