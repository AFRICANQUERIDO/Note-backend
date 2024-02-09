CREATE PROCEDURE updateNote(
    @note_id VARCHAR(100),
    @Title VARCHAR(200),
@Content VARCHAR(200),
    @CreateAt VARCHAR (200))

AS
BEGIN
UPDATE Notes SET note_id = @note_id, Title =@Title,Content=@Content,createAT =@createAt
END