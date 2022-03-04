function firstNonrepeatChar(string) 
{
    for (let i = 0; i < string.length; i++) 
    {
        let c = string[i];
        if (string.indexOf(c) === i && string.indexOf(c, i + 1) === -1) 
        {
            console.log(c);
            return;
        }
    }
}
  
function bubbleSort(arr) 
    {
    for (let i = 0; i < arr.length - 1; i++) 
    {
        for (let j = 0; j < arr.length - 1 - i; j++)
        { 
            if (arr[j] > arr[j+1]) 
            {
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
}

// Function from https://stackabuse.com/merge-sort-in-javascript/
function merge(left, right) {
    let arr = []
    // Break out of loop if any one of the array gets empty
    while (left.length && right.length) {
        // Pick the smaller among the smallest element of left and right sub arrays 
        if (left[0] < right[0]) {
            arr.push(left.shift())
        } 
        else 
        {
            arr.push(right.shift())
        }
    }

    return [ ...arr, ...left, ...right ]
}

// Function from https://stackabuse.com/merge-sort-in-javascript/
// No pude :(
function mergeSort(array) 
{
    const half = array.length / 2
    
    if(array.length < 2)
    {
        return array
    }

    const left = array.splice(0, half)
    return merge(mergeSort(left),mergeSort(array))
}
  
function reverseArray(inputArray) 
{
    let array = [];
    for(let i = inputArray.length-1; i >= 0; i--) 
    {
        array.push(inputArray[i]);
    }	
    return array;
}
  
function toHackerSpeech(string)
{
    for(let i = 0; i < string.length; i++)
    {
        switch(string[i])
        {
            case "a" || "A":
            string = string.replaceAll('a', '4');
            break;
            
            case "s" || "S":
            string = string.replaceAll('s', '5');
            break;
            
            case "i" || "I":
            string = string.replaceAll('i', '1');
            break;
            
            case "o" || "O":
            string = string.replaceAll('o', '0');
            break;
            
            case "e" || "E":
            string = string.replaceAll('e', '3');
            break;
        }
    }
    return string;
}
  
function findFactors(inputNum)
{
    let array = [];
    for(let i = 1; i <= inputNum; i++) 
    {
        if(inputNum % i === 0) 
        {
            array.push(i);
        }
    }
    return array;
}
  
function getGCD(a, b)
{
    while((a % b) > 0)
    {
        let R = a % b;
        a = b;
        b = R;	
    }
    return b;
}
  
function dotProduct(inputVector1, inputVector2) 
{
    let vector1 = inputVector1.getVectorArray();
    let vector2 = inputVector2.getVectorArray();
    
    let result = 0;
    for (let i = 0; i < 3; i++)
    {
        result += vector1[i] * vector2[i];
    }
    return result;
}
  
function checkIfOrthogonal(inputVector1, inputVector2)
{
    if(dotProduct(inputVector1, inputVector2) === 0)
    {
        console.log("Los vectores son ortogonales.");
    }
    else
    {
        console.log("Los vectores no son ortogonales.");
    }
}
  
function removeDuplicates(inputArray)
{
    let newArr = [];
    for(let i = 0; i < inputArray.length; i++)
    {
        if(!newArr.includes(inputArray[i]))
        {
            newArr.push(inputArray[i]);
        }
    }
    return newArr;
}
  
class Vector
{	
    constructor(x, y, z)
    {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    
    getX(){return this.x};
    getY(){return this.y};
    getZ(){return this.z};
    
    getVectorArray()
    {
        return [this.x, this.y, this.z];
    }
    
    getMagnitude()
    {
        return Math.sqrt(this.x + this.y + this.z);
    }
    
    addVector(inputVector)
    {
        this.x = this.x + inputVector.getX();
        this.y = this.y + inputVector.getY();
        this.z = this.z + inputVector.getZ();
    }
    
    subVector(inputVector)
    {
        this.x = this.x - inputVector.getX();
        this.y = this.y - inputVector.getY();
        this.z = this.z - inputVector.getZ();
    }
    
    getUnitVector()
    {
        let magnitude = this.getMagnitude();
        return new Vector(this.x / magnitude, this.y / magnitude, this.z / magnitude);
    }
    
    multiplyByScalar(scalar)
    {
        return new Vector(this.x * scalar, this.y * scalar, this.z * scalar);
    }
    
    vectorToString()
    {
        return("x:" + this.x + " y:" + this.y + " z:" + this.z);
    }	
}
  
function main() 
{
    let array1 = [1,5,2,62,1,6,2];
    let array2 = [1,2,3,4,5];
    let array3 = [4,2,56,2,65];
    let array4 = [2,6,2,5,2,7];
    let array5 = [5,2,5,7,8,1];
    let array6 = [6,2,67,2,1,6];

    let vector1 = new Vector(1,2,3);
    let vector2 = new Vector(4,5,6);
    let vector3 = new Vector(2,4,6);
    let vector4 = new Vector(1,1,1);
    let vector5 = new Vector(1,0,-1);
    let vector6 = new Vector(3,6,9);

    let numArray = [1, 0, 1, 1, 0, 0];
    let numArray2 = [2, 5, 5, 5, 4, 2];
    let numArray3 = [6, 12, 12, 15, 15, 16];

    console.log("----------Encontrar primer caracter que no se repite----------");
    
    console.log("First Array");
    console.log("abacddbec")
    firstNonrepeatChar("abacddbec");
    
    console.log("----------Bubble Sort----------");
    
    console.log("Original array: " + array1);
    console.log("Original array: " + array2);
    console.log("Original array: " + array3);
    
    console.log("After Bubble Sort" + bubbleSort(array1));
    console.log("After Bubble Sort" + bubbleSort(array2));
    console.log("After Bubble Sort" + bubbleSort(array3));

    console.log("----------Merge Sort----------");
    
    console.log("Original array: " + array4);
    console.log("Original array: " + array5);
    console.log("Original array: " + array6);
    
    console.log("After merge sort: " + mergeSort(array4));
    console.log("After merge sort: " + mergeSort(array5));
    console.log("After merge sort: " + mergeSort(array6));
    
    console.log("----------Reverse Array----------");
    
    console.log("Og Array: " + array1);
    console.log("Og Array: " + array2);
    console.log("Og Array: " + array3);

    console.log("New array: " + reverseArray(array1));
    console.log("New array: " + reverseArray(array2));
    console.log("New array: " + reverseArray(array3));
    
    console.log("----------Suma de vectores----------");
    
    console.log("Vector 1: " + vector1.vectorToString());
    console.log("Vector 2: " + vector2.vectorToString());
    vector1.addVector(vector2);
    console.log("Suma: " + vector1.vectorToString());

    console.log("Vector 3: " + vector3.vectorToString());
    console.log("Vector 4: " + vector4.vectorToString());
    vector3.addVector(vector4);
    console.log("Suma: " + vector3.vectorToString());

    console.log("Vector 5:" + vector5.vectorToString());
    console.log("Vector 6:" + vector6.vectorToString());
    vector5.addVector(vector6);
    console.log("Suma: " + vector5.vectorToString());
    
    console.log("----------Resta de vectores----------");
    
    console.log("Vector 1: " + vector1.vectorToString());
    console.log("Vector 2: " + vector2.vectorToString());
    vector1.subVector(vector2)
    console.log("Resta: " + vector1.vectorToString());

    console.log("Vector 3: " + vector3.vectorToString());
    console.log("Vector 4: " + vector4.vectorToString());
    vector3.subVector(vector4);
    console.log("Resta: " + vector3.vectorToString());

    console.log("Vector 5: " + vector5.vectorToString());
    console.log("Vector 6: " + vector6.vectorToString());
    vector5.subVector(vector6);
    console.log("Resta: " + vector5.vectorToString());
    
    console.log("----------Magnitud del vector----------");
    
    console.log("Vector: " + vector1.vectorToString());
    console.log("Magnitud: " + vector1.getMagnitude());

    console.log("Vector: " + vector2.vectorToString());
    console.log("Magnitud: " + vector2.getMagnitude());

    console.log("Vector: " + vector3.vectorToString());
    console.log("Magnitud: " + vector3.getMagnitude());
    
    console.log("----------vector unitario----------");
    
    console.log("Vector: " + vector1.vectorToString());
    console.log("Vector Unitario: " + vector1.getUnitVector().vectorToString());

    console.log("Vector: " + vector1.vectorToString());
    console.log("Vector Unitario: " + vector2.getUnitVector().vectorToString());

    console.log("Vector: " + vector1.vectorToString());
    console.log("Vector Unitario: " + vector3.getUnitVector().vectorToString());
    
    console.log("----------Multiplicar por un escalar----------");
    
    console.log("Vector: " + vector1.vectorToString());
    console.log("Escalar : 5");
    console.log("Multiplicacion por escalar: " + vector1.multiplyByScalar(5).vectorToString());

    console.log("Vector: " + vector2.vectorToString());
    console.log("Escalar : 10");
    console.log("Multiplicacion por escalar: " + vector2.multiplyByScalar(10).vectorToString());

    console.log("Vector: " + vector3.vectorToString());
    console.log("Escalar : 15");
    console.log("Multiplicacion por escalar: " + vector3.multiplyByScalar(15).vectorToString());
    
    console.log("----------Hacker Speak----------");
    
    console.log(toHackerSpeech("Javascript"));
    console.log(toHackerSpeech("Hello, World!"));
    console.log(toHackerSpeech("Actividad"));
    
    console.log("----------Factores de un numero----------");
    
    console.log("Factores nel numero 12:")
    console.log(findFactors(12));

    console.log("Factores nel numero 20:")
    console.log(findFactors(20));

    console.log("Factores nel numero 100:")
    console.log(findFactors(100));
    
    console.log("----------Maximo comun divisor----------");
    
    console.log("MCD de 20 y 30:");
    console.log(getGCD(20,30));

    console.log("MCD de 60 y 100:");
    console.log(getGCD(60,100));

    console.log("MCD de 100 y 200:");
    console.log(getGCD(100,200));
    
    console.log("----------Vectores ortognonales----------");
    
    console.log("Vector 1: " + vector1.vectorToString() + " Vector 2: " + vector2.vectorToString());
    console.log("producto punto: " + dotProduct(vector1, vector2));
    checkIfOrthogonal(vector1, vector2);
    
    console.log("Vector 3: " + vector3.vectorToString() + " Vector 4: " + vector3.vectorToString());
    console.log("producto punto: " + dotProduct(vector3, vector3));
    checkIfOrthogonal(vector3, vector3);
    
    console.log("Vector 5: " + vector4.vectorToString() + " Vector 6: " + vector5.vectorToString());
    console.log("producto punto: " + dotProduct(vector4, vector5));
    checkIfOrthogonal(vector4, vector5);
    
    console.log("----------Remover Elementos duplicados----------");
    
    console.log("Lista original: ");
    console.log(...numArray);
    console.log(...numArray2);
    console.log(...numArray3);
    
    console.log("Nueva lista:");
    console.log(removeDuplicates(numArray));
    console.log(removeDuplicates(numArray2));
    console.log(removeDuplicates(numArray3));
}
  
main();
  
  