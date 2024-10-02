//for dynamic component props is like a parameter in a component page and its value is like an argument ,passing in page.tsx
// Prop is an object so we can make it's interface like below instead of data typed any.

interface Props{
    name:string,
    qualification :string
}





function Heading(props:Props){
    console.log(props.name);  //checking the values passing in console.
    console.log(props.qualification);
    console.log(props);
    return(
        <div>

   <h1>{`Hello, My name is ${props.name} and I am ${props.qualification}`}</h1>


        </div>
    )
}
export default Heading 