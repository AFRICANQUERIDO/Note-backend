CREATE PROCEDURE getOneNote(
    @note_id VARCHAR(100)
)
AS
BEGIN
SELECT * FROM Notes where note_id = @note_id; 
END