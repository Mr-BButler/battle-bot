let distance_to_obstacle_cm = 0
let direction_random = 0
basic.forever(function () {
    distance_to_obstacle_cm = Maqueen_V5.Ultrasonic()
    if (distance_to_obstacle_cm <= 30 && distance_to_obstacle_cm > 6) {
        direction_random = randint(0, 1)
        if (direction_random == 0) {
            basic.showLeds(`
                . . # . .
                . # . . .
                # . # # #
                . # . . .
                . . # . .
                `)
            Maqueen_V5.motorRun(Maqueen_V5.Motors.M1, Maqueen_V5.Dir.CW, 100)
            Maqueen_V5.motorRun(Maqueen_V5.Motors.M2, Maqueen_V5.Dir.CW, 0)
            basic.pause(800)
        } else {
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # . #
                . . . # .
                . . # . .
                `)
            Maqueen_V5.motorRun(Maqueen_V5.Motors.M2, Maqueen_V5.Dir.CW, 100)
            Maqueen_V5.motorRun(Maqueen_V5.Motors.M1, Maqueen_V5.Dir.CW, 0)
            basic.pause(800)
        }
    } else if (distance_to_obstacle_cm < 6) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # . # .
            . . # . .
            `)
        Maqueen_V5.motorRun(Maqueen_V5.Motors.All, Maqueen_V5.Dir.CCW, 100)
        basic.pause(800)
    } else {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . # . #
            . . # . .
            . . # . .
            `)
        Maqueen_V5.motorRun(Maqueen_V5.Motors.All, Maqueen_V5.Dir.CW, 100)
    }
})
