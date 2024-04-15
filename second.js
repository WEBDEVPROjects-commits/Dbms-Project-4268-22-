function sql(){
    document.querySelector(".Questions ol").innerHTML=""
    document.querySelector(".Solutions h2").innerHTML=""
    document.querySelector(".Solutions pre code").innerHTML=""
let currentIndex=-1
let arr = [{ Problem: "Where Clause", Number: 1, Solution: `SELECT * FROM employees WHERE department_id >= 2;
` }, { Problem: "Group By Clause", Number: 2, Solution: `SELECT customer_id, SUM(order_amount) AS total_order_amount
FROM orders
GROUP BY customer_id;
';
`}, { Problem: "Having Clause", Number: 3, Solution: `SELECT customer_id, SUM(order_amount) AS total_order_amount
FROM orders
GROUP BY customer_id
HAVING SUM(order_amount) > 1000;

` }, { Problem: "Order By Clause", Number: 4, Solution: `SELECT * FROM employees
ORDER BY last_name;

` }, { Problem: "NESTED INDEPENDENT QUERIES", Number: 5, Solution: `SELECT * 
FROM employees 
WHERE department_id = (
    SELECT department_id 
    FROM departments 
    WHERE department_name = 'Sales'
);

` }, { Problem: "NESTED CORRELATED QUERIES", Number: 6, Solution: `SELECT employee_id, first_name, last_name, salary, department_id
FROM employees e
WHERE salary > (
    SELECT AVG(salary) 
    FROM employees 
    WHERE department_id = e.department_id
);
` }, { Problem: "OR", Number: 7, Solution: `SELECT * 
FROM employees 
WHERE department_id = 'Sales' OR (department_id = 'Marketing' AND salary > 50000);

` }, { Problem: "AND", Number: 8, Solution: `SELECT * 
FROM employees 
WHERE (department_id = 'Sales' OR department_id = 'Marketing') AND salary > 50000;

` }, { Problem: "NOT", Number: 9, Solution: `SELECT * 
FROM employees 
WHERE NOT (department_id = 'Sales' AND salary > 50000);

` }, { Problem: "IN", Number: 10, Solution: `SELECT * 
FROM employees 
WHERE department_id IN ('Sales', 'Marketing', 'Finance');

` },{ Problem: "BETWEEN", Number: 11, Solution: `SELECT * 
FROM employees 
WHERE salary BETWEEN 40000 AND 60000;

` },{ Problem: "LIKE", Number: 12, Solution: `SELECT * 
FROM employees 
WHERE last_name LIKE 'S%';

` },{ Problem: "Equi Joins", Number: 13, Solution: `SELECT e.first_name, e.last_name, d.department_name
FROM employees e
JOIN departments d ON e.department_id = d.department_id;

` },{ Problem: "Outer Join", Number: 14, Solution: `SELECT *
FROM left_table
LEFT OUTER JOIN right_table ON left_table.column = right_table.column;

` },{ Problem: "Self Join", Number: 15, Solution: `SELECT e.first_name AS employee_name, m.first_name AS manager_name
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.employee_id;

` }]

arr.forEach((element, i) => {
    let Question = `<a id="Question${arr[i].Number}">
    <li>${arr[i].Problem}</li>
    </a>`
    document.querySelector(".Questions ol").insertAdjacentHTML("beforeend", Question)

    document.querySelector(`#Question${arr[i].Number}`).addEventListener("click", (e) => {
        currentIndex=i
        document.querySelector(".Solutions h2").innerHTML = `Example ${arr[currentIndex].Number} :`
        document.querySelector(".Solutions pre code").innerHTML = arr[currentIndex].Solution
    })
})

document.querySelector(".next").addEventListener("click", (e) => {
    if(currentIndex<arr.length-1){
        currentIndex++
        document.querySelector(".Solutions h2").innerHTML = `Example ${arr[currentIndex].Number} :`
        document.querySelector(".Solutions pre code").innerHTML = arr[currentIndex].Solution
        
    }
})
document.querySelector(".previous").addEventListener("click", (e) => {
    if (currentIndex > 0){ 
        currentIndex--;
        document.querySelector(".Solutions h2").innerHTML = `Example ${arr[currentIndex].Number} :`
        document.querySelector(".Solutions pre code").innerHTML = arr[currentIndex].Solution
        
    }
});
}


function plsql(){
    document.querySelector(".Questions ol").innerHTML=""
    document.querySelector(".Solutions h2").innerHTML=""
    document.querySelector(".Solutions pre code").innerHTML=""
let currentIndex=-1
let arr1 = [{ Problem: "Scalar Data Types", Number: 1, Solution: `CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    date_of_birth DATE,
    salary DECIMAL(10, 2),
    is_manager BOOLEAN
);

` }, { Problem: "Composite Data Types", Number: 2, Solution: `CREATE TYPE address_type AS (
    street VARCHAR(100),
    city VARCHAR(50),
    zip_code VARCHAR(10)
);

`}, { Problem: "References Data Types", Number: 3, Solution: `-- Define a cursor type
CREATE OR REPLACE TYPE emp_cursor_type AS REF CURSOR;

-- Create a stored procedure that returns a cursor variable
CREATE OR REPLACE PROCEDURE get_employee_data (emp_cursor OUT emp_cursor_type) AS
BEGIN
    OPEN emp_cursor FOR
    SELECT employee_id, first_name, last_name, salary
    FROM employees;
END;
/
` }, { Problem: "large Object(LOB) Data Types", Number: 4, Solution: `DECLARE
v_document_id documents.document_id%TYPE := 1001; -- Example document ID
v_document_content documents.content%TYPE;
BEGIN
SELECT content INTO v_document_content
FROM documents
WHERE document_id = v_document_id;

DBMS_OUTPUT.PUT_LINE('Content of document with ID ' || v_document_id || ':');
DBMS_OUTPUT.PUT_LINE(v_document_content);
END;
` }, { Problem: "Condition Control with IF Statement", Number: 5, Solution: `-- Create a procedure to check if a given number is positive, negative, or zero
CREATE OR REPLACE PROCEDURE check_number (
    p_number IN NUMBER
) AS
BEGIN
    -- Check if the number is positive
    IF p_number > 0 THEN
        DBMS_OUTPUT.PUT_LINE('The number ' || p_number || ' is positive.');
    -- Check if the number is negative
    ELSIF p_number < 0 THEN
        DBMS_OUTPUT.PUT_LINE('The number ' || p_number || ' is negative.');
    -- If the number is neither positive nor negative, it must be zero
    ELSE
        DBMS_OUTPUT.PUT_LINE('The number ' || p_number || ' is zero.');
    END IF;
END;
/
` }, { Problem: "Case Expressions", Number: 6, Solution: `-- Create a procedure to classify a given student's grade based on their score
CREATE OR REPLACE PROCEDURE classify_grade (
    p_score IN NUMBER
) AS
    v_grade VARCHAR2(10);
BEGIN
    -- Use a case expression to determine the grade based on the score
    v_grade := CASE
                    WHEN p_score >= 90 THEN 'A'
                    WHEN p_score >= 80 THEN 'B'
                    WHEN p_score >= 70 THEN 'C'
                    WHEN p_score >= 60 THEN 'D'
                    ELSE 'F'
               END;

    -- Print the result
    DBMS_OUTPUT.PUT_LINE('The student''s grade is: ' || v_grade);
END;
/
` }, { Problem: "Loop/Iterative Control", Number: 7, Solution: ` DECLARE
i NUMBER := 1;
BEGIN
WHILE i <= 5 LOOP
    DBMS_OUTPUT.PUT_LINE(i);
    i := i + 1;
END LOOP;
END;
` }, { Problem: "Sequential Control", Number: 8, Solution: `DECLARE
total_salary NUMBER := 0;
BEGIN
SELECT SUM(salary) INTO total_salary FROM employees;

DBMS_OUTPUT.PUT_LINE('Total Salary: ' || total_salary);
END;
` }, { Problem: "Implicit Cursor", Number: 9, Solution: ` DECLARE
v_employee_id employees.employee_id%TYPE := 1001; -- Example employee ID
v_employee_salary employees.salary%TYPE;
BEGIN
SELECT salary INTO v_employee_salary
FROM employees
WHERE employee_id = v_employee_id;

DBMS_OUTPUT.PUT_LINE('Salary of employee with ID ' || v_employee_id || ': ' || v_employee_salary);
END;
` }, { Problem: "Explicit Cursor", Number: 10, Solution: `DECLARE
CURSOR emp_cursor IS
    SELECT name
    FROM employees;
v_emp_name employees.name%TYPE;
BEGIN
OPEN emp_cursor;
LOOP
    FETCH emp_cursor INTO v_emp_name;
    EXIT WHEN emp_cursor%NOTFOUND;
    DBMS_OUTPUT.PUT_LINE('Employee Name: ' || v_emp_name);
END LOOP;
CLOSE emp_cursor;
END;
` },{ Problem: "Callin A Procedure", Number: 11, Solution: ` CREATE OR REPLACE PROCEDURE get_employee_salary(
    p_employee_id IN employees.employee_id%TYPE,
    p_salary OUT employees.salary%TYPE
)
AS
BEGIN
    SELECT salary INTO p_salary
    FROM employees
    WHERE employee_id = p_employee_id;
END;

Now, we will call this procedure to retrieve the salary of an employee with ID 1001.

DECLARE
    v_employee_id employees.employee_id%TYPE := 1001; -- Example employee ID
    v_salary employees.salary%TYPE;
BEGIN
    get_employee_salary(v_employee_id, v_salary);
    DBMS_OUTPUT.PUT_LINE('Salary of employee with ID ' || v_employee_id || ': ' || v_salary);
END;
` },{ Problem: "Dropping A procedure", Number: 12, Solution: `Consider a scenario where we have a procedure named get_employee_salary that retrieves the salary of an employee with a specific employee ID. We want to drop this procedure.

DROP PROCEDURE get_employee_salary;

This statement will drop the get_employee_salary procedure from the database.
` },{ Problem: "Function Execution", Number: 13, Solution: `DECLARE
v_employee_id employees.employee_id%TYPE := 1001; -- Example employee ID
v_bonus NUMBER;
BEGIN
v_bonus := calculate_bonus(v_employee_id);
DBMS_OUTPUT.PUT_LINE('Bonus for employee with ID ' || v_employee_id || ': ' || v_bonus);
END;

` },{ Problem: "Dropping A Function", Number: 14, Solution: `  DROP FUNCTION calculate_bonus;
` },{ Problem: "In Mode", Number: 15, Solution: `CREATE OR REPLACE PROCEDURE print_employee_details(
    p_employee_id IN employees.employee_id%TYPE
)
AS
    v_employee_name employees.name%TYPE;
    v_employee_salary employees.salary%TYPE;
BEGIN
    SELECT name, salary INTO v_employee_name, v_employee_salary
    FROM employees
    WHERE employee_id = p_employee_id;
    
    DBMS_OUTPUT.PUT_LINE('Employee ID: ' || p_employee_id);
    DBMS_OUTPUT.PUT_LINE('Employee Name: ' || v_employee_name);
    DBMS_OUTPUT.PUT_LINE('Employee Salary: ' || v_employee_salary);
END;
` },{ Problem: "Out Mode", Number: 16, Solution: `CREATE OR REPLACE PROCEDURE get_employee_salary(
    p_employee_id IN employees.employee_id%TYPE,
    p_salary OUT employees.salary%TYPE
)
AS
BEGIN
    SELECT salary INTO p_salary
    FROM employees
    WHERE employee_id = p_employee_id;
END;
` },{ Problem: "In Out Mode", Number: 17, Solution: `CREATE OR REPLACE PROCEDURE update_employee_salary(
    p_employee_id IN employees.employee_id%TYPE,
    p_new_salary IN OUT employees.salary%TYPE
)
AS
BEGIN
    -- Logic to update the salary
    UPDATE employees
    SET salary = p_new_salary
    WHERE employee_id = p_employee_id;
END;
` },{ Problem: "Referencing Package Contents", Number: 18, Solution: `CREATE OR REPLACE PACKAGE emp_package AS
PROCEDURE get_employees;
END emp_package;

CREATE OR REPLACE PACKAGE BODY emp_package AS
PROCEDURE get_employees IS
  CURSOR emp_cur IS SELECT * FROM employees;
BEGIN
  FOR emp_rec IN emp_cur LOOP
    DBMS_OUTPUT.PUT_LINE('Employee ID: ' || emp_rec.employee_id || ', Name: ' || emp_rec.first_name || ' ' || emp_rec.last_name);
  END LOOP;
END get_employees;
END emp_package;
` },{ Problem: "Advantages of Packages", Number: 19, Solution: `CREATE OR REPLACE PACKAGE employee_package AS
TYPE emp_cursor IS REF CURSOR;
PROCEDURE get_employee_details(p_employee_id IN NUMBER, p_employee_details OUT SYS_REFCURSOR);
END employee_package;

CREATE OR REPLACE PACKAGE BODY employee_package AS
PROCEDURE get_employee_details(p_employee_id IN NUMBER, p_employee_details OUT SYS_REFCURSOR) IS
BEGIN
  OPEN p_employee_details FOR
    SELECT * FROM employees WHERE employee_id = p_employee_id;
END get_employee_details;
END employee_package;
` },{ Problem: "Dropping a Package", Number: 20, Solution: `DROP PACKAGE employee_package;
` },{ Problem: "Statement-Level Trigger", Number: 21, Solution: `CREATE OR REPLACE TRIGGER log_table_changes
AFTER INSERT OR UPDATE OR DELETE ON employees
DECLARE
  v_action VARCHAR2(10);
BEGIN
  IF INSERTING THEN
    v_action := 'INSERT';
  ELSIF UPDATING THEN
    v_action := 'UPDATE';
  ELSIF DELETING THEN
    v_action := 'DELETE';
  END IF;
  DBMS_OUTPUT.PUT_LINE('Table employees ' || v_action || ' operation performed at ' || TO_CHAR(SYSDATE, 'DD-MON-YYYY HH24:MI:SS'));
END;
` },{ Problem: "Row-Level Trigger", Number: 22, Solution: `CREATE OR REPLACE TRIGGER log_salary_changes
AFTER UPDATE OF salary ON employees
FOR EACH ROW
BEGIN
  DBMS_OUTPUT.PUT_LINE('Employee ' || :OLD.employee_id || ' salary changed from ' || :OLD.salary || ' to ' || :NEW.salary || ' at ' || TO_CHAR(SYSDATE, 'DD-MON-YYYY HH24:MI:SS'));
END;
` },{ Problem: "Before Trigger", Number: 23, Solution: `CREATE OR REPLACE TRIGGER check_salary_limit
BEFORE INSERT OR UPDATE ON employees
FOR EACH ROW
BEGIN
  IF :NEW.salary > 10000 THEN
    RAISE_APPLICATION_ERROR(-20001, 'Salary cannot exceed $10,000');
  END IF;
END;
` },{ Problem: "After Trigger", Number: 24, Solution: `CREATE OR REPLACE TRIGGER log_employee_changes
AFTER INSERT OR UPDATE OR DELETE ON employees
FOR EACH ROW
BEGIN
  IF INSERTING THEN
    DBMS_OUTPUT.PUT_LINE('New employee added: ' || :NEW.employee_id || ', ' || :NEW.first_name || ' ' || :NEW.last_name);
  ELSIF UPDATING THEN
    DBMS_OUTPUT.PUT_LINE('Employee details updated: ' || :OLD.employee_id || ' -> ' || :NEW.employee_id);
  ELSIF DELETING THEN
    DBMS_OUTPUT.PUT_LINE('Employee deleted: ' || :OLD.employee_id || ', ' || :OLD.first_name || ' ' || :OLD.last_name);
  END IF;
END;
` },{ Problem: "Instead Of Trigger", Number: 25, Solution: `CREATE OR REPLACE TRIGGER instead_of_update_employee_view
INSTEAD OF UPDATE ON employee_view
FOR EACH ROW
BEGIN
  UPDATE employees
  SET salary = :NEW.salary
  WHERE employee_id = :NEW.employee_id;
END;
` }]

arr1.forEach((element, i) => {
    let Question = `<a id="Question${arr1[i].Number}">
    <li>${arr1[i].Problem}</li>
    </a>`
    document.querySelector(".Questions ol").insertAdjacentHTML("beforeend", Question)

    document.querySelector(`#Question${arr1[i].Number}`).addEventListener("click", (e) => {
        currentIndex=i
        document.querySelector(".Solutions h2").innerHTML = `Example ${arr1[currentIndex].Number} :`
        document.querySelector(".Solutions pre code").innerHTML = arr1[currentIndex].Solution
    })
})

document.querySelector(".next").addEventListener("click", (e) => {
    if(currentIndex<arr1.length-1){
        currentIndex++
        document.querySelector(".Solutions h2").innerHTML = `Example ${arr1[currentIndex].Number} :`
        document.querySelector(".Solutions pre code").innerHTML = arr1[currentIndex].Solution
        
    }
})
document.querySelector(".previous").addEventListener("click", (e) => {
    if (currentIndex > 0) { 
        currentIndex--;
        document.querySelector(".Solutions h2").innerHTML = `Example ${arr1[currentIndex].Number} :`
        document.querySelector(".Solutions pre code").innerHTML = arr1[currentIndex].Solution
    }
});
}

  document.querySelector(".Sql").firstElementChild.addEventListener("click",(e) => {
        sql();
    })
    document.querySelector(".Sql").children[1].addEventListener("click",(e) => {
        plsql();
  })