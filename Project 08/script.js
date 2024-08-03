document.getElementById('character_clickable-div').addEventListener('click', function() {

    document.getElementById('message').style.display = 'block';
    document.getElementById('message').style.left = '200px'

    let audio = document.getElementById('sound');

    audio.play();
});

style.width = '200px';   // Устанавливаем ширину
element.style.height = '100px'; 