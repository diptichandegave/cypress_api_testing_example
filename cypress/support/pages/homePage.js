export default class HomePage{

    //function to check string is in pascal case(first letter of each workd should be in caps) or not.
    isPascalCase(str) 
    {
        return /^[A-Z ][a-z ]+(?:[A-Z ][a-z ]+)*$/.test(str);
    }

    // function to check passing array does not have duplicate values
    hasDuplicates(array) {
        return (new Set(array)).size !== array.length;
    }
}