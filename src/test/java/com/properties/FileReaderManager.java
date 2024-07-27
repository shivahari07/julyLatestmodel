package com.properties;

import java.io.IOException;

public class FileReaderManager {
	
	private FileReaderManager() {//In Runner class we dont want to create methods or constructors,in order to hide the data 
		// TODO Auto-generated constructor stub
	}
	
	public static FileReaderManager getInstance() {
		FileReaderManager helper=new FileReaderManager();
		return helper;
		
	}
	
	public  ConfigurationReader getInstanceCR() throws IOException {
		ConfigurationReader reader=new ConfigurationReader();
		return reader;

	}
		
	}


