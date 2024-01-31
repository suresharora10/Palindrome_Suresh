package com.atb.palindrome;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PalindromeController {




    /**
     * @param x int
     * @return boolean
     */
    private boolean isPalindrome(int x) {
        long t = x, rev = 0;
        while (t > 0) {
            rev = 10 * rev + t % 10;
            t /= 10;
        }
        return rev == x;
    }

    @CrossOrigin
    @GetMapping(value = "/", produces = { "text/plain" })
    public ResponseEntity<Object> index() {
        return ResponseEntity.ok().body("Hello world");
    }

    /**
     * The simplest solution is to consider every possible number smaller than the given number nn, starting by
     * decrementing 1 from the given number and go on in descending order. Similarly, we can consider every possible
     * number greater than nn starting by incrementing 1 from the given number and going in ascending order.
     * We can continue doing so in an alternate manner till we find a number which is a palindrome.
     * @param number String
     * @return ResponseEntity<Object>
     */
    @CrossOrigin
    @GetMapping(value = "/palindrome/{number}")
    public ResponseEntity<Object> palindrome(@PathVariable String number){
        int num = Integer.parseInt(number);
        for (int i = 1;; i++) {
            if (isPalindrome(num - i))
                return ResponseEntity.ok().body("" + (num - i));
            if (isPalindrome(num + i))
                return ResponseEntity.ok().body("" + (num + i));
        }
    }


}
