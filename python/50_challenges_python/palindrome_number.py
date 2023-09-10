class Solution(object):
    # Problem url: https://leetcode.com/problems/palindrome-number/
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        # Negative cases
        if x < 0:
            return False
        x_str = str(x)
        x_reversed = x_str[::-1]
        if x == int(x_reversed):
            return True
        else:
            return False