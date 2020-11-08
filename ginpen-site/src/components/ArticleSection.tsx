import { Link } from "gatsby";
import React, { useMemo } from "react";
import { Article, Category, Tag } from "../models/Article";
import "./ArticleSection.scss";

export const ArticleSection: React.FC<{ article: Article }> = ({ article }) => (
  <article className="ArticleSection">
    <h1 className="ArticleSection-title">{article.title}</h1>
    <div className="ArticleSection-meta">
      <span className="ArticleSection-metaItem">
        投稿日時：
        <DateLink date={article.createdAt} />
      </span>
      <span className="ArticleSection-metaItem">
        カテゴリー：
        {article.categories.flatMap((category, index) => [
          index === 0 ? "" : ", ",
          <CategoryLink category={category} key={category.slug} />,
        ])}
      </span>
      <span className="ArticleSection-metaItem">
        タグ：
        {article.tags.flatMap((tag, index) => [
          index === 0 ? "" : ", ",
          <TagLink tag={tag} key={tag.slug} />,
        ])}
      </span>
    </div>
    <div
      className="ArticleSection-main"
      dangerouslySetInnerHTML={{
        __html: article.body,
      }}
    ></div>
  </article>
);

function digit2(n: number) {
  return `0${n}`.slice(-2);
}

const DateLink: React.FC<{ date: number }> = ({ date }) => {
  const sDate = useMemo(() => {
    const d = new Date(date);
    const yyyy = d.getFullYear();
    const MM = digit2(d.getMonth() + 1);
    const dd = digit2(d.getDay());
    const hh = digit2(d.getHours());
    const mm = digit2(d.getMinutes());
    return `${yyyy}/${MM}/${dd} ${hh}:${mm}`;
  }, [date]);

  return <>{sDate}</>;
};

const CategoryLink: React.FC<{ category: Category }> = ({ category }) => {
  const url = `/--todo--/categories/${category.slug}`;
  return (
    <Link className="ArticleSection-CategoryLink" to={url}>
      {category.name}
    </Link>
  );
};

const TagLink: React.FC<{ tag: Tag }> = ({ tag }) => {
  const url = `/--todo--/tags/${tag.slug}`;
  return (
    <Link className="ArticleSection-TagLink" to={url}>
      {tag.name}
    </Link>
  );
};
