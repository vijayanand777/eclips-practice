package Arrays;

public class ArraySortingAssendingOrder {

	public static void main(String[] args) {
		int arr[]= {6,8,3,4,5,6,0,9};
		int temp;
		for(int i=0;i<arr.length;i++)
		{
			for( int j=i+1;j<arr.length;j++)
			{
				if(arr[i]>arr[j])
				{
					temp=arr[i]; 
					arr[i]=arr[j];
					arr[j]=temp;
					 
					//without using 3rd variable sorting array
					/*
					 * arr[i]=arr[i]+arr[j]; arr[j]=arr[i]-arr[j]; arr[i]=arr[j]-arr[i];
					 */
				}
			}
		}
		for(int k=0;k<arr.length;k++)
		{
			System.out.println(k);
		}

	}

}
