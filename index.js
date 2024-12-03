// function resetAnimation() {
//     console.log("lalal222"); // Проверяем вывод в консоль
//     document.getAnimations().forEach((anim) => {
//         anim.cancel();
//         anim.play();
//       });
// }

// // Сбрасываем анимацию при загрузке страницы
// window.onload = resetAnimation;

 

 // Получаем значение хэша из URL
 const hash = window.location.hash;
 
 // Проверяем, есть ли хэш и извлекаем имя
 if (hash) {
     // Удаляем символ # и выделяем часть после знака =
     const name = hash.split('=')[1];
     console.log(name );
     if (name) {
         // Создаем элемент изображения
         const img = document.createElement('img'); 
         const video = document.createElement('video')
         const img2 = document.createElement('img');
         img.src = `./image/${name}1.png`; // Устанавливаем путь к изображению
         img2.src = `./image/${name}2.png`; // Устанавливаем путь к изображению
         video.src = `./video/${name}.mov` || null;
         video.autoplay = true
        //  video.loop = true
         video.muted = true
         // Вставляем изображение в HTML
         const container = document.getElementById('image-container-one');
         const container2 = document.getElementById('image-container-two');
         const containerVideo = document.getElementById('video');
 
         container.appendChild(img); 
         container2.appendChild(img2)
 
         if(video.src !== null) {
            containerVideo.appendChild(video)
         }
        
     } else {
         console.error('Не удалось извлечь имя из URL.');
     }
 } else {
     console.error('Нет хэша в URL.');
 }