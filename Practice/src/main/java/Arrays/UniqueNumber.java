package Arrays;

import java.util.ArrayList;

public class UniqueNumber {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int a[] = { 2, 3, 4, 2, 3, 4, 6, 7, 6 };// Array Declaration

		ArrayList<Integer> al = new ArrayList<Integer>();// Creating empty Array List

		for (int i = 0; i < a.length; i++)// Iteration for all numbers in the array
		{
			int k = 0;
			if (!al.contains(a[i]))// If same number is Present then we are not allowing inside here
			{
                al.add(a[i]);//if new number is found then print it
				k++;
			
			for (int j =i+1; j < a.length; j++) {// added one more for loop to check duplicated
				
				
				if (a[i] == a[j]) {
					k++;
				}
			}
			System.out.println(a[i] + "  presents " + k + "  Times");
			
			//Unique number Program 
		    if (k == 1)
            System.out.println(a[i] + "is a unique number");
        
		}
			}

	}

}
