let mover = {
    validPosition(position){
        return position.x >= 0 && position.x < 10 && position.y >= 0 && position.y < 10;
    },

    getNextPoint(direction) {
        let nextPoint = {
            x: player.x,
            y: player.y
        };

        

        // запоминаем текущее положение игрока
        let old_x = nextPoint.x;
        let old_y = nextPoint.y;

        // 2, 6, 8, 4
        switch (direction) {
            case '2':
                nextPoint.y--;
                break;
            case '6':
                nextPoint.x++;
                break;
            case '8':
                nextPoint.y++;
                break;
            case '4':
                nextPoint.x--;
                break;
            case 1:
                nextPoint.y--;
                nextPoint.x--;
                break;
            case 3:
                nextPoint.y--;
                nextPoint.x++;
                break;
            case 7:
                nextPoint.x--;
                nextPoint.y++;
                break;
            case 9:
                nextPoint.y++;
                nextPoint.x++;
                break;

        }
        
        // если позиция не корректна, игро остаётся на месте.
        if (!this.validPosition(nextPoint)) {
            nextPoint.x = old_x;
            nextPoint.y = old_y;
        }

        return nextPoint;

    }


};
