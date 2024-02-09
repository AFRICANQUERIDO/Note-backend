CREATE or ALTER PROCEDURE deleteNote(@note_id VARCHAR(100))
AS
BEGIN
DELETE FROM Note WHERE note_id = @note_id
END