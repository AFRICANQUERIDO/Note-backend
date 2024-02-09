CREATE TABLE Notes ( 
    note_id VARCHAR(100) NOT NULL,
    Title VARCHAR(200) NOT NULL,
    Content VARCHAR(200) NOT NULL,
    createAt VARCHAR(200) NOT NULL,
    isDeleted BIT default 0
)

-- ALTER TABLE Notes ADD isDeleted BIT Default 0

-- SELECT * FROM Notes
-- UPDATE Notes SET isDeleted = 0

-- DROP TABLE Notes