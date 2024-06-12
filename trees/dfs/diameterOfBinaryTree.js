/**
 * @author [Gagan Suneja]
 * @email [gagan91suneja@gmail.com]
 * @create date 2024-06-10 20:35:37
 * @modify date 2024-06-10 20:35:37
 * @desc [description]
 */

// URL -  

var diameterOfATree = function(root) {

    let dia = {dia:0};
    height(root, dia);
    return dia.dia;
    
}

var height = function(root, dia) {
    if(!root) return 0;
    let lh = height(root.left, dia);
    let rh = height(root.right, dia);
    let maxDia = dia.dia;
    if(lh+rh > maxDia) {
        dia.dia = lh+rh;
    }
    return Math.max(height(root.left), height(root.right)) + 1;
}