package GetSystemDate;

import java.text.SimpleDateFormat;
import java.util.Date;

public class PrintSystemDate {

	public static void main(String[] args) {
		Date d=new Date();
		System.out.println(d.toString());
		
		SimpleDateFormat sdm=new SimpleDateFormat("dd/MM/yyyy hh:mm:ss");
		SimpleDateFormat sd=new SimpleDateFormat("MM/dd/yyyy");
		System.out.println(sd.format(d));
		System.out.println(sdm.format(d));

	}

}
