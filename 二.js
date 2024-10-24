document.addEventListener('DOMContentLoaded', function() {
    const animations = document.querySelectorAll('.animation-item');

    // 定义一个函数来为每个动画元素设置动画
    function animateCharacter(character, delay) {
        character.style.animation = `fade 2s ${delay}s linear infinite`;
    }

    // 设置动画的延迟时间，以控制播放顺序
    const delays = [0, 1, 2]; // 延迟时间数组，单位：秒

    // 为每个动画元素设置动画和延迟时间
    delays.forEach((delay, index) => {
        setTimeout(() => {
            animateCharacter(animations[index], delay);
        }, delay * 1000); // 将秒转换为毫秒
    });
});