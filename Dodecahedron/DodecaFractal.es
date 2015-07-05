// DodecaFractal
set maxdepth 8
//s 0.382
fractal

rule fractal md 2 > dodeca{

{ x 1 y 1 z 1 s 0.382} fractal
{ x 1 y 1 z -1 s 0.382} fractal
{ x 1 y -1 z 1 s 0.382} fractal
{ x 1 y -1 z -1 s 0.382} fractal
{ x -1 y 1 z 1 s 0.382} fractal
{ x -1 y 1 z -1 s 0.382} fractal
{ x -1 y -1 z 1 s 0.382} fractal
{ x -1 y -1 z -1 s 0.382} fractal
{ x 0 y 0.618034 z 1.61803 s 0.382} fractal
{ x 0 y 0.618034 z -1.61803 s 0.382} fractal
{ x 0 y -0.618034 z 1.61803 s 0.382} fractal
{ x 0 y -0.618034 z -1.61803 s 0.382} fractal
{ x 0.618034 y 1.61803 z 0 s 0.382} fractal
{ x 0.618034 y -1.61803 z 0 s 0.382} fractal
{ x -0.618034 y 1.61803 z 0 s 0.382} fractal
{ x -0.618034 y -1.61803 z 0 s 0.382} fractal
{ x 1.61803 y 0 z 0.618034 s 0.382} fractal
{ x 1.61803 y 0 z -0.618034 s 0.382} fractal
{ x -1.61803 y 0 z 0.618034 s 0.382} fractal
{ x -1.61803 y 0 z -0.618034 s 0.382} fractal


}

rule dodeca{

triangle[-1 , 1 , 1 ; 0 , -0.618034 , 1.61803 ; -1.61803 , 0 , 0.618034]
triangle[0 , -0.618034 , 1.61803 ; -1 , -1 , 1 ; -1.61803 , 0 , 0.618034]
triangle[0 , -0.618034 , 1.61803 ; -1 , 1 , 1 ; 0 , 0.618034 , 1.61803]
triangle[1 , 1 , -1 ; -0.618034 , 1.61803 , 0 ; 0 , 0.618034 , -1.61803]
triangle[-0.618034 , 1.61803 , 0 ; -1 , 1 , -1 ; 0 , 0.618034 , -1.61803]
triangle[-0.618034 , 1.61803 , 0 ; 1 , 1 , -1 ; 0.618034 , 1.61803 , 0]
triangle[1 , 1 , 1 ; -0.618034 , 1.61803 , 0 ; 0.618034 , 1.61803 , 0]
triangle[-0.618034 , 1.61803 , 0 ; 1 , 1 , 1 ; 0 , 0.618034 , 1.61803]
triangle[-1 , 1 , 1 ; -0.618034 , 1.61803 , 0 ; 0 , 0.618034 , 1.61803]
triangle[1 , 1 , -1 ; 1.61803 , 0 , -0.618034 ; 0.618034 , 1.61803 , 0]
triangle[1.61803 , 0 , -0.618034 ; 1 , 1 , 1 ; 0.618034 , 1.61803 , 0]
triangle[1 , 1 , 1 ; 1.61803 , 0 , -0.618034 ; 1.61803 , 0 , 0.618034]
triangle[1 , -1 , 1 ; 1 , 1 , 1 ; 1.61803 , 0 , 0.618034]
triangle[1 , 1 , 1 ; 1 , -1 , 1 ; 0 , 0.618034 , 1.61803]
triangle[1 , -1 , 1 ; 0 , -0.618034 , 1.61803 ; 0 , 0.618034 , 1.61803]
triangle[1 , -1 , 1 ; 1 , -1 , -1 ; 0.618034 , -1.61803 , 0]
triangle[1.61803 , 0 , -0.618034 ; 1 , -1 , 1 ; 1.61803 , 0 , 0.618034]
triangle[1 , -1 , 1 ; 1.61803 , 0 , -0.618034 ; 1 , -1 , -1]
triangle[-0.618034 , 1.61803 , 0 ; -1.61803 , 0 , -0.618034 ; -1 , 1 , -1]
triangle[-1.61803 , 0 , -0.618034 ; -1 , 1 , 1 ; -1.61803 , 0 , 0.618034]
triangle[-1.61803 , 0 , -0.618034 ; -0.618034 , 1.61803 , 0 ; -1 , 1 , 1]
triangle[0 , -0.618034 , 1.61803 ; -0.618034 , -1.61803 , 0 ; -1 , -1 , 1]
triangle[-0.618034 , -1.61803 , 0 ; 1 , -1 , 1 ; 0.618034 , -1.61803 , 0]
triangle[1 , -1 , 1 ; -0.618034 , -1.61803 , 0 ; 0 , -0.618034 , 1.61803]
triangle[-1 , -1 , 1 ; -0.618034 , -1.61803 , 0 ; -1.61803 , 0 , 0.618034]
triangle[-0.618034 , -1.61803 , 0 ; -1.61803 , 0 , -0.618034 ; -1.61803 , 0 , 0.618034]
triangle[-1.61803 , 0 , -0.618034 ; -0.618034 , -1.61803 , 0 ; -1 , -1 , -1]
triangle[0 , -0.618034 , -1.61803 ; 1 , 1 , -1 ; 0 , 0.618034 , -1.61803]
triangle[0 , -0.618034 , -1.61803 ; 1.61803 , 0 , -0.618034 ; 1 , 1 , -1]
triangle[1.61803 , 0 , -0.618034 ; 0 , -0.618034 , -1.61803 ; 1 , -1 , -1]
triangle[-1 , 1 , -1 ; 0 , -0.618034 , -1.61803 ; 0 , 0.618034 , -1.61803]
triangle[0 , -0.618034 , -1.61803 ; -1.61803 , 0 , -0.618034 ; -1 , -1 , -1]
triangle[-1.61803 , 0 , -0.618034 ; 0 , -0.618034 , -1.61803 ; -1 , 1 , -1]
triangle[1 , -1 , -1 ; 0 , -0.618034 , -1.61803 ; 0.618034 , -1.61803 , 0]
triangle[-0.618034 , -1.61803 , 0 ; 0 , -0.618034 , -1.61803 ; -1 , -1 , -1]
triangle[0 , -0.618034 , -1.61803 ; -0.618034 , -1.61803 , 0 ; 0.618034 , -1.61803 , 0]

}