/* 
*   webpage background change plugin
*   creat by Du Enyang
*   2017-09-08
*/

class BgChange {

    constructor(option){
        this.body = document.querySelector('body')[0] || document.body || document.documentElement.body;
        this.el = document.createElement('div');
        this.duration = option.duration ? option.duration : 2;
        this.interval = option.interval ? option.interval : 3000;
        this.image = option.image ? true : false;
        this.imagesList = option.image ? option.imagesList : null;
        this.colorList = option.image ? null :  option.colorList;
        this.timer = null;
        this.index = 0;
        this.hasDOM = false;
    }

    init(){

        let _this = this;

        function setStyle(){
            _this.el.style.position = "absolute";
            _this.el.style.width = "100%";
            _this.el.style.height = "100%";
            _this.el.style.left = "0";
            _this.el.style.top = "0";
            _this.el.style.zIndex = "-1";
            _this.el.style.webkitTransition = "background " + _this.duration + "s ease";
            _this.el.style.transition = "background " + _this.duration + "s ease";
            _this.el.style.backgroundSize = '100% 100%';
            _this.el.style.backgroundRepeat = 'no-repeat';
            _this.el.style.backgroundPosition = '0 0';
            _this.body.style.position = 'relative';
        }

        if (this.image && !this.imagesList) {
            throw new Error('You choose the image mode should add a imageList.');
            return false;
        }

        if (!this.image && !this.colorList) {
            throw new Error('colorList is not found, You should add a colorList.');
            return false;
        }

        setStyle();

        !this.hasDOM && this.body.appendChild(this.el);
        this.hasDOM = true;
        
        return this;
    }

    start(){

        this.init();

        let _this = this;
        let length = this.image ? this.imagesList.length : this.colorList.length;

        if (this.image) {
            this.el.style.backgroundImage = 'url(' + this.imagesList[this.index] + ')';
        }else{
            this.el.style.background = this.colorList[this.index];
        }

        clearInterval(this.timer);
        this.timer = setInterval(function(){

            _this.index++;
            if (_this.index > length - 1) {
                _this.index = 0;
            }

            if(_this.image){
                _this.el.style.backgroundImage = 'url(' + _this.imagesList[_this.index] + ')';
            }else{
                _this.el.style.background = _this.colorList[_this.index];
            }

        },this.interval);

        return this;
    }

    stop(){
        clearInterval(this.timer);
        return this;
    }
}

export default BgChange;