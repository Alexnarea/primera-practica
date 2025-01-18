input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    for (let index = 0; index < 10; index++) {
        music.play(music.stringPlayable("G B A G C5 B A B ", 501), music.PlaybackMode.UntilDone)
    }
})
input.onGesture(Gesture.Shake, function () {
    Numero_dado = randint(1, 6)
    if (Numero_dado == 1) {
        basic.showLeds(`
            . . # . .
            . # # . .
            # . # . .
            . . # . .
            . . # . .
            `)
        music.play(music.stringPlayable("F B F C F E G C ", 500), music.PlaybackMode.UntilDone)
    } else if (Numero_dado == 2) {
        basic.showLeds(`
            # # # # #
            . . . . #
            # # # # #
            # . . . .
            # # # # #
            `)
        music.play(music.stringPlayable("C5 B A G F E D C ", 500), music.PlaybackMode.UntilDone)
    } else if (Numero_dado == 3) {
        basic.showLeds(`
            # # # # #
            . . . . #
            . # # # #
            . . . . #
            # # # # #
            `)
        music.play(music.stringPlayable("C5 D G A - F C5 D ", 500), music.PlaybackMode.UntilDone)
    } else if (Numero_dado == 4) {
        basic.showLeds(`
            # . . # .
            # . . # .
            # # # # #
            . . . # .
            . . . # .
            `)
        music.play(music.stringPlayable("G F G A - F E D ", 500), music.PlaybackMode.UntilDone)
    } else if (Numero_dado == 5) {
        basic.showLeds(`
            # # # # #
            # . . . .
            # # # # #
            . . . . #
            # # # # #
            `)
        music.play(music.stringPlayable("G F G C - F C5 D ", 500), music.PlaybackMode.UntilDone)
    } else if (Numero_dado == 6) {
        basic.showLeds(`
            # # # # #
            # . . . .
            # # # # #
            # . . . #
            # # # # #
            `)
        music.play(music.stringPlayable("G B G A - A E C5 ", 500), music.PlaybackMode.UntilDone)
    } else {
    	
    }
})
let Numero_dado = 0
basic.showIcon(IconNames.Happy)
basic.showString("READY!")
