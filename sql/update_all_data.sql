UPDATE [PREFIX]tags tags,
  (
    SELECT
      a.tag_id as tag_id,
      a.discussion_count as discussion_count,
      a.post_count as post_count,
      b.last_posted_discussion_id as last_posted_discussion_id,
      b.last_posted_at as last_posted_at
    FROM (
        SELECT
          t.id as tag_id,
          count(td.discussion_id) as discussion_count,
          COALESCE(sum(d.comment_count), 0) as post_count,
          MAX(d.last_posted_at) as max_last_posted_at
        FROM [PREFIX]tags t
        LEFT JOIN [PREFIX]discussion_tag td ON t.id = td.tag_id
        LEFT JOIN [PREFIX]discussions d ON td.discussion_id = d.id
        WHERE
          d.is_private = FALSE
          AND d.hidden_at IS NULL
        GROUP BY
          t.id
      ) AS a
    LEFT JOIN (
        SELECT
          d.id as last_posted_discussion_id,
          d.last_posted_at as last_posted_at,
          td.tag_id
        FROM [PREFIX]discussions d
        LEFT JOIN [PREFIX]discussion_tag td on d.id = td.discussion_id
        WHERE
          d.is_private = FALSE
          AND d.hidden_at IS NULL
      ) as b ON a.max_last_posted_at = b.last_posted_at
      AND a.tag_id = b.tag_id
  ) AS source
SET
  tags.discussion_count = source.discussion_count,
  tags.post_count = source.post_count,
  tags.last_posted_at = source.last_posted_at,
  tags.last_posted_discussion_id = source.last_posted_discussion_id
WHERE
  tags.id = source.tag_id;