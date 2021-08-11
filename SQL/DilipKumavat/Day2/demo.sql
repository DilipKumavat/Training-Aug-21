SELECT * FROM Employees;

ALTER TABLE Employees DROP CONSTRAINT ukEmail

UPDATE Employees SET Email = 'not available'

UPDATE Employees SET Email = 'not available' , CommissionPct = 0.10

UPDATE Employees SET Email = 'Not Available' , CommissionPct = 0.10 WHERE DepartmentID = 110

UPDATE Employees SET Email = 'NOT AVAILABLE' WHERE DepartmentID = 80 AND CommissionPct < 0.20

UPDATE Employees SET EMAIL = 'NoT Available' WHERE JobId LIKE '%ACCOUNT'

UPDATE Employees SET Salary = 8000 WHERE EmployeeID = 105 AND Salary < 5000

UPDATE Employees SET JobId = 'SH_CLERK' WHERE DepartmentID = 30 AND JobId NOT LIKE 'SH%' AND EmployeeID = 118

UPDATE Employees SET Salary += (Salary* 0.25) WHERE DepartmentID = 40

UPDATE Employees SET Salary += (Salary* 0.15) WHERE DepartmentID = 90

UPDATE Employees SET Salary += (Salary* 0.10) WHERE DepartmentID = 110
---------------------------------------------------------------------------------

UPDATE Employees SET Salary += CASE DepartmentID WHEN 40 THEN Salary * 0.25 
												 WHEN 90 THEN Salary * 0.15
												 WHEN 110 THEN Salary * 0.10
												 ELSE 0
												 END
                         
---------------------------------------------------------------------------------                         
                         
SELECT * FROM Employees;

SELECT FirstName,LastName FROM Employees

SELECT 'Employee Name' = FirstName FROM Employees

SELECT * FROM Employees WHERE FirstName = 'Steven'

SELECT * FROM Employees WHERE FirstName = 'Neena' OR FirstName = 'Lex'

SELECT * FROM Employees WHERE FirstName <> 'Neena'

SELECT * FROM Employees WHERE Salary BETWEEN 5000 AND 8000

SELECT FirstName,LastName,Salary,'PF ' = Salary*0.12 FROM Employees

SELECT FirstName FROM Employees WHERE FirstName LIKE 'N%'

SELECT DISTINCT DepartmentId FROM Employees

SELECT * FROM Employees ORDER BY FirstName DESC

SELECT EmployeeID,FirstName,LastName,Salary FROM Employees ORDER BY Salary ASC

SELECT TOP 2 Salary FROM Employees
