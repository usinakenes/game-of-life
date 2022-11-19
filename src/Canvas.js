import React, { useRef, useEffect } from 'react'
import { createSpaceship, createGlider, createGliderGun } from './patterns.js'
import Sketch from "react-p5";

let grid;
let cols;
let rows;
let res = 12;


const Canvas = (props) => {

    function countNeighbours(grid, x, y){
        let sum = 0;
        for(let i = -1; i <= 1; i++){
          for(let j = -1; j <= 1; j++){
            
            let col = (x+i+cols) % cols
            let row = (y+j+rows) % rows
            sum += grid[col][row];
          }
        }
        sum -= grid[x][y];
        return sum;
    }
      
    function make2DArray(cols, rows) {
        let arr = new Array(cols)
        
        for (let i = 0; i < arr.length; i++){
          arr[i] = new Array(rows)
        }
        
        return arr
    }


	const setup = (s, canvasParentRef) => {
		// use parent to render the canvas in this ref
		// (without that p5 will render the canvas outside of your component)
		s.createCanvas(s.windowWidth, s.windowHeight).parent(canvasParentRef);

        cols = (s.windowWidth - (s.windowWidth % res)) / res
        rows = (s.windowHeight - (s.windowHeight % res)) / res
        
        grid = make2DArray(cols, rows)
        for (let i = 0; i < cols; i++){
          for (let j = 0; j < rows; j++){
            grid[i][j] = 0

          }
        }
        
        
        createGliderGun(grid, 60, 60)

        
	};

	const draw = (s) => {
        s.resizeCanvas(s.windowWidth, s.windowHeight)
        s.background(0);
        
        for (let i = 0; i < cols; i++){
          for (let j = 0; j < rows; j++){
            let x = i * res
            let y = j * res
            if(grid[i][j] === 1){
              s.fill(255)
              s.rect(x, y, res, res) 
            } else{
              s.stroke(30)
              s.fill(0)
              s.rect(x,y,res,res)
            }
          }
        }
        let next = make2DArray(cols, rows);
        
        for (let i = 0; i < cols; i++){
          for (let j = 0; j < rows; j++){
            
            let state = grid[i][j]
            
            let neighbours = countNeighbours(grid, i, j);
      
            if(state === 0 && neighbours === 3){
              next[i][j] = 1;
            } else if (state === 1 && (neighbours < 2 || neighbours > 3)){
              next[i][j] = 0 
            } else {
              next[i][j] = state
            }  
          }
        }
        grid = next

	};

	return <Sketch setup={setup} draw={draw} />;
};

export default Canvas

