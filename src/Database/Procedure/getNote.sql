CREATE OR ALTER PROCEDURE getAllNotes
AS
BEGIN
    SELECT *
    FROM Notes
    WHERE isDeleted = 0
END


