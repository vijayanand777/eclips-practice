package Arrays;

public class FindingMinimumValueFromSpecifiedArray {

	public static void main(String[] args) {
		int arr[][] = { { 3, 4, 5 }, { 7, 8, 9 }, { 4, 0, 7 } };
		int min = arr[0][0];
		int minColumn = 0;
		for (int i = 0; i < 3; i++) {
			for (int j = 0; j < 3; j++) {
				if (arr[i][j] < min) {
					min=arr[i][j];
					System.out.println(min);

					minColumn = j;
				}
			}

		}
		int k = 0;
		int max=arr[k][minColumn];
		while (k < 3) {
			if (arr[k][minColumn] > max) {
				max = arr[k][minColumn];
			}
			k++;
		}
		System.out.println(max);

	}

}
