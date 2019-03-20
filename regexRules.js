// Quantifiers
function repeat(min,max=0)
{
    if(min<=1 && max<=1)
    {
        if(min==0)
        {
            if(max==0)
                return "*";
            else
                return "?";
        }
        else if(max==0)
        {
            return "+";
        }
    }
    else
    {
        repeatString="{"+String(min);
        if(max!=min)
        {
            repeatString+=",";
            if(max)
                repeatString+=String(max);
        }
        repeatString+="}";
        return repeatString;
    }
}

// Characters

console.log(Number('b'));    



    




