addons.register({
    init: function(events) {
        this.collisionMap;
        this.uiContainer = $('.ui-container');
        this.uiMap = $('<canvas class="addon-uiMap"></canvas>')
            .appendTo(this.uiContainer);
        
        this.uiMap.css("display", "none");
        events.on('onGetMap', this.onGetMap.bind(this));
        events.on('onKeyDown', this.onKeyDown.bind(this));
    },
    onGetMap: function(mapData) {
        if (!mapData.collisionMap) {
            return;   
        }
            
        this.collisionMap = mapData.collisionMap;
    },
    onKeyDown: function(key) {
        if (!key) {
            return;
        } else if (key == "tab") {
            this.drawMap(this.collisionMap);
        }
    },
    drawMap: function(collisionMap) {
        if (!collisionMap) {
            return;
        }
        
        if (this.uiMap.css("display") == "block") {
            this.uiContainer.css('background-color', 'transparent');
			this.uiContainer.removeClass('blocking');
            this.uiMap.css("display", "none");
            return;
        } else {
            this.uiMap.css("display", "block");
        }
        
        this.uiContainer.css('background-color', 'rgba(49, 33, 54, 0.5)');
	    this.uiContainer.addClass('blocking');
        
        var ctx = this.uiMap[0].getContext('2d');
        ctx.clearRect(0, 0, this.uiMap[0].width, this.uiMap[0].height);
        for (i = 0; i < collisionMap.length; i++) {
            for (j = 0; j <collisionMap[i].length; j++) {
                if (collisionMap[j][i] == 1) {
                    ctx.fillStyle = "white";
                } else {
                    ctx.fillStyle = "black";
                }
                
                ctx.fillRect(j, i, 1, 1);
            }
        }
        
        this.uiMap.css({
            'position': "absolute",
            'left': (this.uiContainer[0].clientWidth / 2) - ($('.addon-uiMap')[0].clientWidth / 2),
            'top': (this.uiContainer[0].clientHeight / 2) - ($('.addon-uiMap')[0].clientHeight / 2),
        });
    }
});