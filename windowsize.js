/**
easy windowing based system.
 */
// 1. Define Size for storing the dimensions of the window
export function Size(width, height){
    this.width = width ?? 80
    this.height = height ?? 60
}
//2. Define Position to store a window position
Size.prototype.resize = function (newWidth, newHeight) {
    this.width = newWidth
    this.height = newHeight
}
// 3. Define a ProgramWindow class

export function Position(x,y){
    this.x = x || 0
    this.y = y || 0
}
// 4. Add a method to resize the window

Position.prototype.move = function(newX, newY){
    this.x = newX
    this.y = newY
}
// 5. Add a method to move the window

export class ProgramWindow {
    constructor(){
        this.screenSize = new Size(800,600)
        this.size = new Size()
        this.position = new Position()
    }
    resize(size){
        let x = size.width
        let y = size.height
        if(x <= 0) {x = 1}
        if(y <= 0) {y = 1}
        if(x === 1000){x = 90}
        if(y === 1000){y = 75}
        this.size = new Size(x,y)
    }
   move(position){
    let x = position.x
    let y = position.y
    if(x < 0) {x = 0}
    if(y < 0) {y = 0}
    if(x > 700){x = 700}
    if(y > 500){y = 500}
    this.position = new Position(x,y)
   }
  
}
// 6. Change a program window

export function changeWindow(ProgramWindow){
    ProgramWindow.size = new Size(400, 300)
    ProgramWindow.position = new Position(100, 150)
    return ProgramWindow
   }
