package Arrays;

public class MaximumNumberFromAnArray {

	public static void main(String[] args) {
		int arr[][] = { { 10, -4, 5, 6 }, { 5, 6, 7, 3 }, { 1, 2, 3, 18 } };
		int max = arr[0][0];
		for (int i = 0; i < 3; i++) {
			for (int j = 0; j < 4; j++) {
				if (arr[i][j]  >max) {
					max = arr[i][j];
				}
			}
		}
		System.out.println(max);
	}

	

}
