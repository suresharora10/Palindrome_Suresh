package com.atb.palindrome;

import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;

@SpringBootTest
class PalindromeApplicationTests {

    /**
     * Creating the object of PalindromeController class and using its reference in This methods
     */
    @Autowired
    PalindromeController tesController;

    /**
     * This method is used to validate the status code of the API
     * Status code 200 represents as Success
     */
    @Test
    public void testSuccessAPIResponseCode() {
        int returnCode = tesController.palindrome("123").getStatusCodeValue();
        assertTrue(returnCode == 200);

    }

    /**
     * This method is used to verify when an integer input is provided to Palindrome method
     * then it returns the nearest palindrome
     */
    @Test
    public void testGenericResponse() {
        ResponseEntity<Object> responseEntity = tesController.palindrome("121");
        assertTrue(responseEntity.getBody().equals("111"));
    }

    /**
     * This method is used to verify when passing the max int value it successfully
     * returns the nearest palindrome
     */
    @Test
    public void testWithMaxIntValue() {
        ResponseEntity<Object> responseEntity = tesController.palindrome("2147483647");
        assertTrue(responseEntity.getBody().equals("2147447412"));
    }

    /**
     * This method is used to validate when passing the min int value it successfully returns
     * the nearest palindrome
     */
    @Test
    public void testWithMinIntValue() {

        ResponseEntity<Object> responseEntity = tesController.palindrome("-2147483648");
        assertTrue(responseEntity.getBody().equals("2147447412"));
    }

    /**
     * This method is used to verify when passing the int value as 0 then
     * it successfully returns the nearest palindrome
     */
    @Test
    public void testWithZeroAsIntValue() {
        ResponseEntity<Object> responseEntity = tesController.palindrome("0");
        assertTrue(responseEntity.getBody().equals("1"));
    }

    /**
     * This method is used to verify when user passes a String value instead of integer then
     * the user gets the message - Invalid value passed. Only integer value is accepted
     */
    @Test
    public void testWhenStringAsInputType() {
        ResponseEntity<Object> responseEntity = tesController.palindrome("testString");
        assertTrue(responseEntity.getBody().equals("Invalid value passed."));
    }

    /**
     * This method is used to verify when user passes an integer value exceeding its limit then
     * the NumberFormat exception is handled using try catch block
     */

    @Test
    public void testExceedingIntLimit() {
        ResponseEntity<Object> responseEntity = tesController.palindrome("214748364756");
        assertTrue(responseEntity.getBody().equals("Invalid value passed."));
    }

}
