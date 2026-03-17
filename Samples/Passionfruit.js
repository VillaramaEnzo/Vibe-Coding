// @title Familiar Beat? 
// @by Enzo Villarama

setcpm(112/4)

$: note(`[e3 [- B3] - C#4]*4
        [C#3 [- B3] - C#4
        C#3 [- B3] - C#4
        C#3 [- B3] - C#4
        C#3 [- B3] - A#3]
        [D#3 [- A#3] - B#3]*4
        [G#3 [- F#4] - G#4
        G#3 [- F#4] - C#4
        E3 [- B3] - C#4
        E3 [- B3] - C#4]`
).s("gm_fretless_bass")
.slow(8)
.lpf(slider(307.2, 0, 600))
.decay(0.7)
.release(0.3)
.gain(1.5)
.room(2)
.attack(0.001)
.pianoroll()

$: note(`[E2, G#2, B2. D#3]
[C#2, G#2, B2, D#3]
[D#2, F#2, A#2, D#3]
[<D#2, B2, D#3, F#3><E2, B2, D#3, F#3>]
`).s("gm_epiano1")
.slow(8)
.gain(0.3)
._scope()
$: note("[A2 E2]*2")
.sound("rolandtr808_bd")
.lpf(1000)
.gain(1.2)
.room(1)
._scope()
$click: note("[- A#1]*4")
.sound("tr808_perc")
.gain(0.1)
._scope()
$highhat: s("- - hh hh")
.bank("alesishr16")
.fast(4)
.lpf(8500)
.gain(0.4)
.attack(0.3)
.early(0.003)
.hpf(4000)
._scope()

$: s("<[- sd] [- sd*4]>")
.bank("rolanddr30, emudrumulator")
.fast(2)
._scope()