function firstWord(s) {
  // your code here
	s=s.trim();
	if(s.length<1)
	{
		return ''
	}
	let j=0;
	for(let i=0;i<s.length;i++)
		{
			if(s.charAt(i)==' ')
			{
				j=i;
				break;
			}
		}
	if(j===0)
	{
		return s;
	}
	let ans=s.substring(0,j);
	return ans;
}

// Do not change the code below
/*
const s = prompt("Enter String:");
alert(firstWord(s));
