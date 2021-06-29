CREATE FUNCTION score(rating REAL, count INT) returns REAL
AS
'
    SELECT ((rating + 1.9208) / (rating + count) -
            1.96 * sqrt((rating * count) / (rating + count) + 0.9604) /
            (rating + count)) / (1 + 3.8416 / (rating + count))
'
    LANGUAGE SQL
    IMMUTABLE
    STRICT
