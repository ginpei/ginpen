import { Link } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "./article.scss";

const SecondPage: React.FC = () => (
  <Layout>
    <SEO title="Article" />
    <h1 className="article-title">これは記事ページだよ。</h1>
    <div className="article-meta">
      <span className="article-metaItem">
        投稿日時：
        <Link to="/dummy">2020/10/02 12:34</Link>
      </span>
      <span className="article-metaItem">
        カテゴリー：
        <Link to="/dummy">JavaScript</Link>
      </span>
      <span className="article-metaItem">
        タグ：
        <Link to="/dummy">JavaScript</Link>
        {", "}
        <Link to="/dummy">CSS</Link>
        {", "}
        <Link to="/dummy">HTML</Link>
      </span>
    </div>
    <main className="article-main">
      <p>こんにちは。</p>
      <h2>見出しだよ</h2>
      <p>そのころわたくしは、モリーオ市の博物局に勤めて居りました。</p>
      <h3>
        <span>小見出しだよg</span>
      </h3>
      <p>
        十八等官でしたから役所のなかでも、ずうっと下の方でしたし俸給ほうきゅうもほんのわずかでしたが、受持ちが標本の採集や整理で生れ付き好きなことでしたから、わたくしは毎日ずいぶん愉快にはたらきました。殊にそのころ、モリーオ市では競馬場を植物園に拵こしらえ直すというので、その景色のいいまわりにアカシヤを植え込んだ広い地面が、切符売場や信号所の建物のついたまま、わたくしどもの役所の方へまわって来たものですから、わたくしはすぐ宿直という名前で月賦で買った小さな蓄音器と二十枚ばかりのレコードをもって、その番小屋にひとり住むことになりました。わたくしはそこの馬を置く場所に板で小さなしきいをつけて一疋の山羊を飼いました。毎朝その乳をしぼってつめたいパンをひたしてたべ、それから黒い革のかばんへすこしの書類や雑誌を入れ、靴もきれいにみがき、並木のポプラの影法師を大股にわたって市の役所へ出て行くのでした。
      </p>
      <p>
        あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。
      </p>
    </main>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;
