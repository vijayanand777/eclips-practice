package Strings;

import java.util.ArrayList;

public class NameStartingWithA {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		ArrayList<String> name=new ArrayList<String>();
		name.add("Abdul");
		name.add("Arun");
		name.add("hemanth");
		name.add("vijay");
		name.add("Amith");
		int count=0;
		String actual="";
		 for(int i=0;i<name.size();i++)
		 {
			actual=name.get(i);
			 if(actual.startsWith("A"))
			 {
				 count++;
			 }
		 }
		 System.out.println(count +" Times");

	}

}
