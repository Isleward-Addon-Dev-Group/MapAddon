addons.register({
    init: function(events) {
        this.collisionMap;
        this.uiContainer = $('.ui-container');
        this.uiMap = $('<table class="addon-uiMap"></table>')
            .appendTo(this.uiContainer);
        
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
        
        if (this.uiMap.html()) {
            this.uiMap.empty();
            this.uiContainer.css('background-color', 'transparent');
			this.uiContainer.removeClass('blocking');
            return;
        }
        
        this.uiContainer.css('background-color', 'rgba(49, 33, 54, 0.5)');
	    this.uiContainer.addClass('blocking');
        
        for (i = 0; i < collisionMap.length; i++) {
            var trEl = $('<tr></tr>')
            
            for (j = 0; j <collisionMap[i].length; j++) {
                if (collisionMap[j][i] == 1) {
                    trEl.append('<td style="background-color: white;"></td>');
                } else {
                    trEl.append('<td></td>');
                }
            }
            
            this.uiMap.append(trEl);
        }
        
        this.uiMap.css({
            'position': "absolute",
            'color': "white",
            'left': (this.uiContainer[0].clientWidth / 2) - ($('.addon-uiMap')[0].clientWidth / 2),
            'top': (this.uiContainer[0].clientHeight / 2) - ($('.addon-uiMap')[0].clientHeight / 2),
            'background-color': "rgba(49, 33, 54, 0.498039)",
        });
    }
});