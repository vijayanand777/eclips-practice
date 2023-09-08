package Arrays;

public class ArraySortingDissendingOrder {

	public static void main(String[] args) {
		int arr[]= {2,6,7,9,3,1};
		int temp;
		for(int i=0;i<arr.length;i++)
		{
			for (int j=i+1;j<arr.length;j++)
			{
				if(arr[i]<arr[j])
				{
					temp=arr[i];
					arr[i]=arr[j];
					arr[j]=temp;
				}
			}
		}
		for(int k=0;k<arr.length;k++)
		System.out.println(k);

	}

}
