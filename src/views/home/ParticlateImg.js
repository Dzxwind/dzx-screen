const randomNum = (minNum,maxNum) => {
  return Math.random()*(maxNum-minNum+1)+minNum; 
}

// Ease-in-out动画函数
// t:当前时间 b:初始值 c:总位移 d:总时间
const easeInOutCubic = (t, b, c, d) => {
  if ((t/=d/2) < 1) return c/2*t*t*t + b;
  return c/2*((t-=2)*t*t + 2) + b;
}

const throttle = (func, wait = 200) => {
  let timeout;
  return function() {
    let context = this;
    let args = arguments;
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null;
        func.apply(context, args)
      }, wait)
    }
  }
}

class Dot {
  constructor({ centerX, centerY,randomRangeX, randomRangeY, radius, color }) {
    this.color = color
    this.x = centerX
    this.y = centerY
    this.radius = radius
    this.frameNum = 0
    this.frameCount = Math.ceil(2000 / (1000 / 60))
    this.sx = parseInt(randomNum(...randomRangeX))
    this.sy = parseInt(randomNum(...randomRangeY))
    this.delay = this.frameCount * Math.random()
    this.delayCount = 0
  }
}

class ParticlateImg {
  constructor({ img, dom }) {
    this.img = img
    this.width = dom.offsetWidth
    this.height = dom.offsetHeight
    this.initContext(dom)
    this.draw()
  }
  // 初始化canvas
  initContext(dom) {
    this.canvas = document.createElement('canvas')
    this.canvas.id = 'particlateImg'
    this.canvas.width = this.width
    this.canvas.height = this.height
    this.ctx = this.canvas.getContext('2d')
    dom.append(this.canvas)
  }
  // 绘制静态图片，同时获取图片像素点数据
  getImagePixel() {
    let imgWidth = this.img.width
    let imgHeight = this.img.height
    let sx = this.width / 2 - imgWidth / 2
    let sy = this.height / 2 - imgHeight / 2
    this.ctx.drawImage(this.img,sx,sy)
    this.imageData = this.ctx.getImageData(sx,sy,imgWidth,imgHeight)
  }
  getDotList() {
    this.dotList = []
    for (let x = 0; x < this.imageData.width; x+=6) {
      for (let y = 0; y < this.imageData.height; y+=6) {
        let i = (y * this.imageData.width + x) * 4;
        let dot = new Dot({
          centerX: x,
          centerY: y,
          randomRangeX: [- this.width + this.img.width, this.width],
          randomRangeY: [- this.height + this.img.height, this.height],
          radius: 2,
          color: `rgba(${this.imageData.data[i]},${this.imageData.data[i + 1]},${this.imageData.data[i + 2]},${this.imageData.data[i + 3]})`
        })
        if (this.imageData.data[i + 3] > 128) {
          this.dotList.push(dot)
        }
      }
    }
  }
  // 绘制静态点
  renderStaticDot() {
    this.ctx.clearRect(0, 0, this.width, this.height)
    let sx = this.width / 2 - this.img.width / 2
    let sy = this.height / 2 - this.img.height / 2
    this.dotList.forEach(item => {
      this.ctx.fillStyle = item.color
      this.ctx.save()
      this.ctx.beginPath()
      this.ctx.arc(sx + item.x,sy + item.y,item.radius,0,2 * Math.PI)
      this.ctx.fill()
      this.ctx.restore()
    })
  }
  // 绘制动态点
  renderAnimateDot() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.interval = null
    let sx = this.width / 2 - this.img.width / 2;
    let sy = this.height / 2 - this.img.height / 2;
    let frameOption = {
      finishCount:0,
      frameCount:0,
      frameNum:0
    }
    this.dotList.forEach((item,index,arr) => {
      frameOption.frameNum = item.frameNum;
      frameOption.frameCount = item.frameCount;
      this.ctx.fillStyle = item.color;
      if (item.delayCount < item.delay) {
        item.delayCount += 1;
        return;
      }
      this.ctx.save();
      this.ctx.beginPath();
      if (frameOption.frameNum < frameOption.frameCount) {
        this.curX = easeInOutCubic(frameOption.frameNum,item.sx,item.x - item.sx,item.frameCount);
        this.curY = easeInOutCubic(frameOption.frameNum,item.sy,item.y - item.sy,item.frameCount);
        this.ctx.arc(sx + this.curX,sy + this.curY,item.radius,0,2 * Math.PI);
        item.frameNum += 1;
      } else {
        this.ctx.arc(sx + item.x,sy + item.y,item.radius,0,2 * Math.PI);
        frameOption.finishCount += 1
      }
      this.ctx.fill();
      this.ctx.restore();
      if (frameOption.finishCount >= arr.length) {
        cancelAnimationFrame(this.interval);
        return
      }
    })
    this.interval = requestAnimationFrame(() => {
      this.renderAnimateDot()
    })
  }
  draw() {
    this.getImagePixel()
    this.getDotList()
    // this.renderStaticDot()
    this.renderAnimateDot()
    this.suitScreen()
  }
  dispose() {
    if (document.getElementById('particlateImg')) {
      console.log('ga');
      cancelAnimationFrame(this.interval)
    }
  }
  suitScreen() {
    window.addEventListener('resize', throttle(() => {
      this.canvasSize = {
        width: window.innerWidth,
        height: window.innerHeight
      }
      this.canvas.width = this.width
      this.canvas.height = this.height
    }), 50)
  }
}

export default ParticlateImg
