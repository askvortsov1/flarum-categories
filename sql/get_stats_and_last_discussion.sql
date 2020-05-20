SELECT a.tag_name, a.tag_id, a.discussion_count, a.post_count, b.last_posted_discussion_id, b.last_posted_at, b.last_posted_user_id
FROM (
    SELECT t.name as tag_name, t.id as tag_id, count(td.discussion_id) as discussion_count, COALESCE(sum(d.comment_count), 0) as post_count,
        MAX(d.last_posted_at) as max_last_posted_at
    FROM flarum_tags t
        LEFT JOIN flarum_discussion_tag td ON t.id = td.tag_id
        LEFT JOIN flarum_discussions d ON td.discussion_id = d.id
    WHERE d.is_private = FALSE AND d.hidden_at IS NULL
    GROUP BY t.name, t.id
) AS a
    LEFT JOIN (
    SELECT d.id as last_posted_discussion_id, d.last_posted_at as last_posted_at, d.last_posted_user_id as last_posted_user_id, td.tag_id
    FROM flarum_discussions d
        LEFT JOIN flarum_discussion_tag td on d.id = td.discussion_id
    WHERE d.is_private = FALSE AND d.hidden_at IS NULL
) as b
    ON a.max_last_posted_at = b.last_posted_at AND a.tag_id = b.tag_id;