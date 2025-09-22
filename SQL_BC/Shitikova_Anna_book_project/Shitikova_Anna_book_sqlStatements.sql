USE bookdb;

INSERT INTO book (bookID, name, author, year, genre) VALUES
(5, 'Rebellion of Sophie Q. Lister', 'Antony Lee', 1995, 'poem'),
(7, 'SQL-mysteries', 'Isla Shore', 1990, 'fiction'),
(1, 'NoSql - New Hope', 'Jesse River', 2018, 'nonfiction'),
(2, 'Maria and My', 'Felix Harris', 2011, 'textbook'),
(4, 'Hacking databases', 'Emily White', 2017, 'humorous essay'),
(3, 'The adventures of Mike the Millipede', 'Layla Jones', 2015, 'short story'),
(6, 'Databases - The rise and fall', 'Matt Wilson', 2005, 'chronic');

SELECT * FROM book;

SELECT year, bookID, author FROM book;

SELECT * FROM book WHERE name = 'Databases - The rise and fall';
SELECT * FROM book WHERE author = 'Antony Lee';
SELECT * FROM book WHERE genre = 'nonfiction';

UPDATE book SET name = 'Rebellion of Sophie Q. Lister', year = 2012 WHERE bookID = 7;
UPDATE book SET name = 'SQL-mysteries', year = 1990 WHERE bookID = 3;
UPDATE book SET author = 'Matt Wilson', year = 2000, genre = 'short story' WHERE bookID = 3;
UPDATE book SET year = 2015, name = 'Maria and My', genre = 'textbook' WHERE bookID = 7;

DELETE FROM book WHERE bookID = 6;
DELETE FROM book WHERE bookID = 5;
DELETE FROM book WHERE genre = 'fiction';
DELETE FROM book WHERE author = 'Emily White' OR genre = 'poem';
DELETE FROM book WHERE year = 1990 OR author = 'Layla Jones' OR genre = 'nonfiction';

SELECT * FROM book;