module.exports = {
  insertMarkdownInfo: `
  INSERT INTO article_detail ( title, create_time, updata_time, introduction, main_category, sub_category, sort, top, content ) VALUES ( ?,?,?,?,?,?,?,?,? )
  `,
  selectArticleList: `
    SELECT
      id AS articleId,
      title,
      create_time AS createTime,
      updata_time AS updataTime,
      introduction AS introduction,
      read_num AS readNum,
      like_num AS likeNum,
      main_category AS mainCategory,
      sub_category AS subCategory,
      sort,
      top AS isTop
    FROM
      article_detail 
    WHERE
      delete_flag = 0 
      LIMIT 0,
      10
  `
}