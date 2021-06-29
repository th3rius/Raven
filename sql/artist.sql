SELECT json_build_object('id', artist.id,
                         'name', name,
                         'sortName', sort_name,
                         'type', type,
                         'disambiguation', comment,
                         'isnis', array(SELECT isni
                                        FROM artist_isni i
                                        WHERE i.artist = artist.id),
                         'ipis', array(SELECT ipi
                                       FROM artist_ipi i
                                       WHERE i.artist = artist.id),
                         'gender', gender,
                         'urls', array(SELECT url
                                       FROM l_artist_url a
                                                INNER JOIN url u ON a.entity1 = u.id
                                       WHERE a.entity0 = artist.id
                             ),
                         'genres', array(SELECT g.name
                                         FROM artist_tag a
                                                  INNER JOIN tag t ON a.tag = t.id
                                                  INNER JOIN genre g ON t.name = g.name
                                         WHERE a.artist = artist.id),
                         'aliases', array(SELECT a.name
                                          FROM artist_alias a
                                          WHERE a.artist = artist.id),
                         'score', score(m.rating / 100, m.rating_count)
           ) artist
FROM artist
         LEFT JOIN artist_meta m ON artist.id = m.id
WHERE artist.id > :sql_last_value
ORDER BY artist.id
LIMIT 50
