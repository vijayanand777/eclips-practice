package Loops;

public class ReversePyramid {
	public static void main(String[] args) {
		int k=3;
		for(int i=1;i<=4;i++)
		{
			for (int j=1;j<=i;j++)
			{
				System.out.print(j);
//				System.out.println(k);
				System.out.print("\t");
//				k++
			}
			System.out.println();
		}
	}

}
