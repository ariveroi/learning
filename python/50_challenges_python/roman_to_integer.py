class Solution(object):
    # Problem url: https://leetcode.com/problems/roman-to-integer/
    def romanToInt(self, s):
        """
        :type s: str
        :rtype: int
        """
        num_to_roman = {
            'O': 0,
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        }
        
        s += 'O'
        
        prefixes = ['IV', 'IX', 'XL', 'XC', 'CD', 'CM']
        
        result = 0
        
        for i in range(len(s) - 1):
            if (s[i] + s[i+1]) in prefixes:
                result -= num_to_roman[s[i]]
            else:
                result += num_to_roman[s[i]]
            
        return result