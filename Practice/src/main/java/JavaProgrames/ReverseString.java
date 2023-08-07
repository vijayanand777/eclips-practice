package JavaProgrames;

public class ReverseString {

	public static void main(String[] args) {
		
		String s="Vijayanand";
		char ch;
		String nstr="";
		for (int i=0;i<=s.length();i--)
		{
			ch=s.charAt(i);
			nstr=ch+ nstr;
		}
		System.out.println(nstr);
System.out.println("reversed String is"+nstr);


		// TODO Auto-generated method stub

	}

}
