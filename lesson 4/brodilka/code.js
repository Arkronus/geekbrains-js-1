let game = {

    run() {
        while (true) {
            let direction = prompt('Введите направление (↙ 1,↓ 2,↘ 3, ← 4, 5, → 6,↖ 7, ↑ 8, ↗9)');

            if (direction === null) {
                console.log('Игра окончена');
                return;
            }

            let nextPoint = mover.getNextPoint(direction);
            renderer.clear();
            player.move(nextPoint);
            renderer.render();
        }
    },

    init() {
        console.log('Для начала игры введите команду game.run()');
        renderer.render();
    },

};




game.init();

