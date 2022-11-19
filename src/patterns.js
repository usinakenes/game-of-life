
export function createSpaceship(grid, x, y) {

    grid[x+1][y] = 1
    grid[x+2][y] = 1
    grid[x+5][y] = 1
    grid[x+6][y] = 1

    grid[x+3][y+1] = 1
    grid[x+4][y+1] = 1

    grid[x+3][y+2] = 1
    grid[x+4][y+2] = 1

    grid[x][y+3] = 1
    grid[x+2][y+3] = 1
    grid[x+5][y+3] = 1
    grid[x+7][y+3] = 1
    
    grid[x][y+4] = 1
    grid[x+7][y+4] = 1

    grid[x][y+6] = 1
    grid[x+7][y+6] = 1

    grid[x+1][y+7] = 1
    grid[x+2][y+7] = 1
    grid[x+5][y+7] = 1
    grid[x+6][y+7] = 1

    grid[x+2][y+8] = 1
    grid[x+3][y+8] = 1
    grid[x+4][y+8] = 1
    grid[x+5][y+8] = 1

    grid[x+3][y+10] = 1
    grid[x+4][y+10] = 1
    
    grid[x+3][y+11] = 1
    grid[x+4][y+11] = 1
}


export function createGlider(grid, x, y) {
    grid[x+1][y] = 1
    grid[x+2][y+1] = 1
    grid[x][y+2] = 1
    grid[x+1][y+2] = 1
    grid[x+2][y+2] = 1
}

export function createGliderGun(grid, x, y) {
    grid[x+24][y] = 1
    
    grid[x+22][y+1] = 1
    grid[x+24][y+1] = 1

    grid[x+12][y+2] = 1
    grid[x+13][y+2] = 1
    grid[x+20][y+2] = 1
    grid[x+21][y+2] = 1
    grid[x+34][y+2] = 1
    grid[x+35][y+2] = 1

    grid[x+11][y+3] = 1
    grid[x+15][y+3] = 1
    grid[x+20][y+3] = 1
    grid[x+21][y+3] = 1
    grid[x+34][y+3] = 1
    grid[x+35][y+3] = 1

    grid[x][y+4] = 1
    grid[x+1][y+4] = 1
    grid[x+10][y+4] = 1
    grid[x+16][y+4] = 1
    grid[x+20][y+4] = 1
    grid[x+21][y+4] = 1

    grid[x][y+5] = 1
    grid[x+1][y+5] = 1
    grid[x+10][y+5] = 1
    grid[x+14][y+5] = 1
    grid[x+16][y+5] = 1
    grid[x+17][y+5] = 1
    grid[x+22][y+5] = 1
    grid[x+24][y+5] = 1

    grid[x+10][y+6] = 1
    grid[x+16][y+6] = 1
    grid[x+24][y+6] = 1

    grid[x+11][y+7] = 1
    grid[x+15][y+7] = 1

    grid[x+12][y+8] = 1
    grid[x+13][y+8] = 1
    
}