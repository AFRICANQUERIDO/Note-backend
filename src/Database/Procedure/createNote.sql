CREATE PROCEDURE createNote(
    @note_id VARCHAR(100),
    @Title VARCHAR(200),
@Content VARCHAR(200),
    @CreateAt VARCHAR (200))

AS
BEGIN
    INSERT INTO Notes(note_id, Title, Content, createAt)
    VALUES (@note_id, @Title, @Content, @createAt)
END

