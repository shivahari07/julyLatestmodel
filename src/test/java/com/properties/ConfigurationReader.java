package com.properties;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class ConfigurationReader {
	
	public static Properties p;
	
	public ConfigurationReader() throws IOException {
File f=new File("C:\\Users\\Hashinipranav\\eclipse-workspace\\AdactinCucumber\\src\\test\\java\\com\\properties\\adactin.properties");
FileInputStream fis=new FileInputStream(f);
p=new Properties();
p.load(fis);
	}
	
//we having 2 lines in adactin.property so we are creating 2 methods	
	
	
public String getBrowser() {
	String browser = p.getProperty("browser");
	return browser;
}

public String getUrl() {
	String url = p.getProperty("url");
	return url;

}
public String getUsername() {
	String un = p.getProperty("username");
	return un;

}
public String getPassword() {
	String pw = p.getProperty("password");
	return pw;

}

public String getfirstname() {
	String fn = p.getProperty("firstname");
	return fn;

}


public String getlastname() {
	String ln = p.getProperty("lastname");
	return ln;
	}

public String getAdress() {
	String ad = p.getProperty("address");
	return ad;
	
}

public String getcardno() {
	String cardno = p.getProperty("cardno");
	return cardno;
	}

public String getcvv() {
	String cvv = p.getProperty("cvv");
	return cvv;

}


	


}
