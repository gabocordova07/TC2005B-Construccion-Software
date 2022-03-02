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
  
function bubbleSort(inputArr) 
    {
    let len = inputArr.length;
    for (let i = 0; i < len; i++)
        {
        for (let j = 0; j < len; j++) 
        {
            if (inputArr[j] > inputArr[j + 1]) 
            {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
        }
    }
    return inputArr;
}

function mergeSort(inputArr)
{
    
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
    
    setX(x){this.x = x};
    setY(y){this.y = y};
    setZ(z){this.z = z};
    
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
    
    printVector()
    {
        console.log("x:" + this.x + " y:" + this.y + " z:" + this.z);
    }	
}
  
function main() 
{
    console.log("----------Encontrar primer caracter que no se repite----------");
    console.log("First Array");
    console.log("abacddbec")
    firstNonrepeatChar("abacddbec");
    
    let array1 = [1,5,2,62,1,6,2];
    let array2 = [1,2,3,4,5];
    
    console.log("----------Bubble Sort----------");
    console.log("Original array: " + array1);
    let BubbleSortArray = bubbleSort(array1);
    console.log("After Bubble Sort" + BubbleSortArray);

    console.log("----------Merge Sort----------");
    console.log("Original array: " + array1);
    let mergeSortArray = mergeSort(array1);
    console.log("After merge sort: " + mergeSortArray);
    
    console.log("----------Reverse Array----------");
    console.log("Og Array: " + array2);
    let reversedArray = reverseArray(array2);
    console.log("New array: " + reversedArray);
    
    let vector1 = new Vector(1,2,3);
    let vector2 = new Vector(4,5,6);
    let vector3 = new Vector(2,4,6);
    let vector4 = new Vector(1,1,1);
    let vector5 = new Vector(1,0,-1);
    
    console.log("----------Suma de vectores----------");
    console.log("Vector 1:");
    vector1.printVector()
    console.log("Vector 2:");
    vector2.printVector();
    console.log("Suma: ");
    vector1.addVector(vector2);
    vector1.printVector();
    
    console.log("----------Resta de vectores----------");
    console.log("Vector 1:");
    vector1.printVector()
    console.log("Vector 2:");
    vector2.printVector();
    console.log("Resta: ");
    vector1.subVector(vector2);
    vector1.printVector();
    
    console.log("----------Magnitud del vector----------");
    console.log("Vector: ");
    vector1.printVector()
    console.log("Magnitud: " + vector1.getMagnitude());
    
    console.log("----------vector unitario----------");
    console.log("Vector: ");
    vector1.printVector()
    let unitVector = vector1.getUnitVector();
    console.log("Vector Unitario");
    unitVector.printVector();
    
    console.log("----------Multiplicar por un escalar----------");
    console.log("Vector: ");
    vector1.printVector()
    console.log("Escalar : 5");
    console.log("Multiplicacion por escalar: ");
    let vectorScalar = vector1.multiplyByScalar(5);
    vectorScalar.printVector();
    
    console.log("----------Hacker Speak----------");
    console.log(toHackerSpeech("Javascript"));
    
    console.log("----------Factores de un numero----------");
    console.log("Factores nel numero 12:")
    let factors = findFactors(12);
    console.log(...factors);
    
    console.log("----------Maximo comun divisor----------");
    console.log("MCD de 20 y 30:");
    console.log(getGCD(20,30));
    
    console.log("----------Vectores ortognonales----------");
    console.log("Vector 1: " + vector1.getVectorArray() + " Vector 2: " + vector2.getVectorArray());
    console.log("producto punto: " + dotProduct(vector1, vector2));
    checkIfOrthogonal(vector1, vector2);
    
    console.log("Vector 3: " + vector3.getVectorArray() + " Vector 4: " + vector3.getVectorArray());
    console.log("producto punto: " + dotProduct(vector3, vector3));
    checkIfOrthogonal(vector3, vector3);
    
    console.log("Vector 5: " + vector4.getVectorArray() + " Vector 6: " + vector5.getVectorArray());
    console.log("producto punto: " + dotProduct(vector4, vector5));
    checkIfOrthogonal(vector4, vector5);
    
    console.log("----------Remover Elementos duplicados----------");
    let numArray = [1, 0, 1, 1, 0, 0];
    console.log("Lista original: ");
    console.log(...numArray);
    
    let newArray = removeDuplicates(numArray);
    console.log("Nueva lista:");
    console.log(...newArray);
}
  
main();
  
  