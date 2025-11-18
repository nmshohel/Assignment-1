type TTypeChecked=string|number|boolean
const formatValue=(value:TTypeChecked):TTypeChecked=>{
    if(typeof value==='string')
    {
        return value.toUpperCase();
    }
    else if(typeof value==='number')
    {
        return value*10;
    }
    else{
        if(value===true)
        {
            return false;
        }
        else{
            return true;
        }
    }
}


type TstringOrArray=string|string[]|number[]|boolean[]
const getLength =(value:TstringOrArray):number=>{
    if(typeof value==='string')
    {
        return value.length
    }
    else if(Array.isArray(value)){
        return value.length

    }
return 0;

}


class Person{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age
    }
    getDetails(){
        return `'Name: ${this.name}, Age: ${this.age}'`
    }
}


type TBooks={
    title:string;
    rating:number
}
const filterByRating =(books:TBooks[]):TBooks[]=>{
    const topRatedBooks=books.filter((book)=>{
        return book.rating>=4;
    })
    return topRatedBooks;
}



type TUsers={
    id:number;
    name:string;
    email:string;
    isActive:boolean;
}
const filterActiveUsers =(users:TUsers[])=>{
    return users.filter((user)=>user.isActive===true)
}


interface Book{
   title:string;
   author:string;
   publishedYear:number;
   isAvailable:boolean
}
const printBookDetails=(book:Book)=>{

    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable===true?'Yes':'No'}`)

}



const getUniqueValues = <T extends string | number>(array1: T[], array2: T[]): T[] => {
  array2.map((item) => {
    array1.push(item);
  });
  let newArray: T[] = [];
  array1.map((currentValue) => {
    let isDuplicate = false;

    newArray.map((existingValue) => {
      if (existingValue === currentValue) {
        isDuplicate = true;
      }
    });
    if (!isDuplicate) {
      newArray.push(currentValue);
    }
  });
  return newArray;
};



type Products={
    name:string;
    price:number;
    quantity:number;
    discount?:number
}
const calculateTotalPrice =(products:Products[]):number=>{

    const totalPrice:number=products.reduce((total,product)=>{
        if(product.discount && product.discount<=100 && product.discount>0){
            const discount=product.discount 
            const subTotal=product.price*product.quantity
            const percentage=(subTotal*discount)/100
            return total=total+(subTotal-percentage)

        }
        return total=total+(product.price*product.quantity)
    },0);
return totalPrice

}