package Strings;

public class ReverseString {

	public static void main(String[] args) {
		ReverseString r1=new ReverseString();
		r1.reverse1();
		r1.reverse();
		// TODO Auto-generated method stub

	}
	public void reverse1()
	{
		String s="Vijayanand";
		char ch;
		String nstr="";
		int len=s.length();
		for (int i=len-1; i>=0; i--)
		{
			ch=s.charAt(i);
			nstr=nstr+ch;
		}
		System.out.println(nstr);
	}
	public void reverse()
	{
		String s1=new String("madam");
		String s2="";
		for (int j=s1.length()-1;j>=0;j--)
		{
			s2=s2+s1.charAt(j);
		}
		System.out.println(s2);
		if(s1.equals(s2))
		{
			System.out.println(s2+"  polidrome");
		}
		else
		{
			System.out.println(s2 +" is not a polindrome");
		}
		
	}
	

}
