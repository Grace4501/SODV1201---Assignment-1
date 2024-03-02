
function gradeConverter()
{
    var inputElement = document.getElementById("grade");
    var userGrade = inputElement.value;
    var userNumberGrade = parseInt(userGrade, 10);

    var result = document.getElementById("convertedGrade");
    
    result.innerHTML="";
    
    if(!isNaN(userNumberGrade))
    {
        if (userNumberGrade > 0 && userNumberGrade < 50)
        {
            result.innerHTML="You have a grade F";
        }
        else if (userNumberGrade > 49 && userNumberGrade < 70)
        {
            result.innerHTML="You have a grade D";
        }
        else if (userNumberGrade > 69 && userNumberGrade < 80)
        {
            result.innerHTML="You have a grade C";
        }
        else if (userNumberGrade > 79 && userNumberGrade < 90)
        {
            result.innerHTML="You have a grade B";
        }
        else if (userNumberGrade > 90)
        {
            result.innerHTML="You have a grade A";
        }
        else
        {
            result.innerHTML="Invalid Input";
            console.log="error";   
        }
    }
    else
    {
        result.innerHTML="Invalid Input";
        console.log="error";
    }
}