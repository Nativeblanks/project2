-- DROP DATABASE
DROP DATABASE IF EXISTS employees;

-- CREATE DATABASE
CREATE DATABASE employees;

USE employees;

DROP TABLE IF EXISTS employee;
DROP TABLE IF EXISTS address;

CREATE TABLE address 
(
  Address_id INTEGER NOT NULL AUTO_INCREMENT,
  Organization varchar(64) NOT NULL, 
  AddressLine1 VARCHAR(45) NOT NULL,
  AddressLine2 VARCHAR(45) NULL,
  City VARCHAR(45) NOT NULL,
  State VARCHAR(2) NOT NULL,
  Zip VARCHAR(10) NOT NULL,
  Phone VARCHAR(45) NULL,
  Fax VARCHAR(45) NULL,
  PRIMARY KEY (Address_id)
);

CREATE TABLE employee 
(
  employee_id INT NOT NULL AUTO_INCREMENT,
  Firstname VARCHAR(45) NOT NULL,
  Lastname VARCHAR(45) NOT NULL,
  Title VARCHAR(100) NOT NULL,
  Phone VARCHAR(45) NULL,
  Cell VARCHAR(45) NULL,
  Email VARCHAR(128) NOT NULL,
  Hiredate DATETIME NOT NULL,
  Dateofbirth DATETIME NOT NULL,
  Linkedin VARCHAR(45) NULL,
  Facebookaccount VARCHAR(45) NULL,
  Twitteraccount VARCHAR(45) NULL,
  Address_id INT NOT NULL,
  PRIMARY KEY (employee_id),
  FOREIGN KEY (Address_id) REFERENCES address(Address_id)
);