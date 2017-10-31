# Pseudocódigo

1.- Create two functions that cipher o decipher a sentence
2.- Request the user if they want to cipher or decipher
3.- Identify whether to cipher or decipher and enter a switch according to the case.
	3.1 The switch will have 2 cases: CIPHER and DECIPHER plus a default option indicating that you must enter a phrase.
4.- If the user enters CIPHER or DECIPHER validate the answer and ask what is the sentence?
5.- Enter the phrase to the corresponding function.
6.- Check letter by letter what is your position in the alphabet and once located find the position of the letter in the ASCII code.
7.- Use the Caesar Cipher formula:
	7.1 For CIPHER (x-65+n)%26+65
	7.2 For DECIPHER (x+65-n)%26+65
8.- Once the formula is processed for each letter by means of a for, the result is to add it to an array.
9.- Since the array returns the letters entered as separate elements, join them in a single chain.
10.- Return the result of the joined array.
11.- Send call functions depending on the case.
12.- End.


![This is the images from diagram](assets/images/diagrama-caesar-cipher.png)