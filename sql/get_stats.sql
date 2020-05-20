SELECT t.name, t.id, count(td.discussion_id) as discussion_count, COALESCE(sum(d.comment_count), 0) as post_count
FROM flarum_tags t
    LEFT JOIN flarum_discussion_tag td ON t.id = td.tag_id
    LEFT JOIN flarum_discussions d ON td.discussion_id = d.id
WHERE d.is_private = FALSE AND d.hidden_at IS NULL
GROUP BY t.id;