package Arrays;

public class ArrayMinimumNumber {

	public static void main(String[] args) {

		int arr[][] = { { 10, -4, 5, 6 }, { 5, 6, 7, 3 }, { 1, 2, 3, 8, } };
		int min = arr[0][0];
		for (int i = 0; i < 3; i++) {
			for (int j = 0; j < 4; j++) {
				if (arr[i][j]  >min) {
					min = arr[i][j];
				}
			}
		}
		System.out.println(min);
	}

}
