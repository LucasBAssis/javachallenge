package com.grupomult.javachallenge.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.grupomult.javachallenge.services.DBService;

@Configuration
public class DBConfig {
	
	@Autowired
	private DBService dbService;
	
	@Bean
	public boolean instantiateDatabase() {
		dbService.instanteateDatabase();
		return true;
	}

}
