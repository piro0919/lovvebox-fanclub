"use client";
import { Kaushan_Script as KaushanScript } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import { LuMinusCircle, LuPlusCircle } from "react-icons/lu";
import { MdOutlineArrowCircleRight } from "react-icons/md";
import fuga from "./images/fuga.jpg";
import hoge from "./images/hoge.png";
import moge from "./images/moge.png";
import piyo from "./images/piyo.png";
import topMobile from "./images/top-mobile.png";
import top from "./images/top.png";
import styles from "./style.module.css";

const kaushanScript = KaushanScript({ subsets: ["latin"], weight: "400" });

export default function App(): JSX.Element {
  const [accordionIndexList, setAccordionIndexList] = useState<number[]>([]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.headerWrapper}>
        <header className={styles.header}>
          <h1 className={styles.h1}>ラブボックス ファンクラブ</h1>
          <div className={styles.imageWrapper}>
            <Image
              alt=""
              className={styles.image}
              fill={true}
              quality={100}
              src={top.src}
            />
          </div>
          <div className={styles.imageWrapperMobile}>
            <Image
              alt=""
              className={styles.image}
              fill={true}
              quality={100}
              src={topMobile.src}
            />
          </div>
          <div className={styles.titleWrapper}>
            <div className={`${styles.title} ${kaushanScript.className}`}>
              LoVVebox
            </div>
            <div className={`${styles.title} ${kaushanScript.className}`}>
              Fanclub
            </div>
          </div>
        </header>
      </div>
      <div className={styles.mainWrapper}>
        <main className={styles.main}>
          <section className={styles.section} data-section="about">
            <h2 className={styles.h2}>
              <span>ファンクラブとは</span>
            </h2>
            <div className={styles.container}>
              <p className={styles.description}>
                ぶいすぽっ！メンバーのさらなる魅力を発信できる場所として、ぶいすぽっ！ファンクラブを開設いたします！
                <br />
                <br />
                ファンクラブでしか見られない、ぶいすぽっ！コンテンツをぜひお楽しみください！
              </p>
            </div>
          </section>
          <section className={styles.section} data-section="content">
            <h2 className={styles.h2}>
              <span>コンテンツ</span>
            </h2>
            <div className={styles.container}>
              <article className={styles.article}>
                <div className={styles.imageWrapper}>
                  <Image alt="" fill={true} quality={100} src={hoge.src} />
                </div>
                <h3 className={styles.h3}>会員証</h3>
                <p className={styles.description}>
                  ぶいすぽっ！ファンクラブにご入会いただいた方々に、オリジナルデザインの会員証をお届け！
                  ファンクラブサイトではデジタルカードもあるので、イベントで自己紹介にも使えるかも！？
                </p>
              </article>
              <article className={styles.article}>
                <div className={styles.imageWrapper}>
                  <Image alt="" fill={true} quality={100} src={fuga.src} />
                </div>
                <h3 className={styles.h3}>会員限定ラジオ番組</h3>
                <p className={styles.description}>
                  ぶいすぽっ！ファンクラブでは、会員限定のラジオを視聴可能！
                  ぶいすぽラジオでは、ファンクラブ会員からお便りを募ったり、ぶいすぽメンバーの日常について発信予定。
                  これであなたもぶいすぽマニアに！？
                </p>
              </article>
              <article className={styles.article}>
                <div className={styles.imageWrapper}>
                  <Image alt="" fill={true} quality={100} src={piyo.src} />
                </div>
                <h3 className={styles.h3}>壁紙ダウンロード</h3>
                <p className={styles.description}>
                  月に1度、複数のメンバーが登場するPCとスマートフォン用の壁紙を配布！
                  ファンクラブならではの壁紙をお楽しみに！
                </p>
              </article>
              <article className={styles.article}>
                <div className={styles.imageWrapper}>
                  <Image alt="" fill={true} quality={100} src={moge.src} />
                </div>
                <h3 className={styles.h3}>イベント先行情報</h3>
                <p className={styles.description}>
                  さらに、ぶいすぽっ！ファンクラブでは、オフラインイベントの先行情報をお届け予定！
                  イベント情報をイチ早くGETして、イベント参加にそなえよう。
                </p>
              </article>
            </div>
          </section>
          <div className={styles.entry}>
            <Image
              alt=""
              className={styles.image}
              fill={true}
              quality={100}
              src={top.src}
            />
            <div className={styles.inner}>
              <div className={styles.price}>年会費 6,600円（税込）</div>
              <button
                className={styles.button}
                onClick={() =>
                  window.open("https://forms.gle/NRvFwrNSdRJ9yzDbA", "_blank")
                }
              >
                <span>ラブボックスファンクラブに入会する！</span>
                <MdOutlineArrowCircleRight size={36} />
              </button>
            </div>
          </div>
          <section className={styles.section} data-section="faq">
            <h2 className={styles.h2}>
              <span>FAQ</span>
            </h2>
            <div className={styles.container}>
              <dl className={styles.list}>
                {[
                  {
                    description: (
                      <p>
                        ぶいすぽっ！ファンクラブのサービスは日本語に限らせていただいております。
                      </p>
                    ),
                    term: "日本語以外のサービスはありますか？",
                  },
                  {
                    description: (
                      <p>
                        スマートフォンには対応しておりますが、従来の携帯電話(フィーチャーフォン)は非対応になります。
                        <br />
                        本サイトでは、JavaScriptを使用しています。
                        <br />
                        ウェブブラウザの設定でJavaScriptを「無効」にしている場合、正しく表示されなかったり、機能しない場合がございます。
                        <br />
                        ウェブブラウザの設定でJavaScriptを「有効」にしてご覧ください。
                      </p>
                    ),
                    term: "携帯電話(フィーチャーフォン)、スマートフォンからアクセスできますか？",
                  },
                  {
                    description: (
                      <p>
                        “ぶいすぽっ！ファンクラブ”(以下、当サイト)内のテキスト・画像・映像・音声・イラスト等については、個人サイト・SNS・ブログへの転載、画像等を転写・加工しての無断使用及び、第三者への転送等は固く禁じております。
                        <br />
                        他サイト等での転載を発見された場合は、当サイトの
                        [お問い合わせ] ページよりご連絡ください。
                        <br />
                        皆さまのご理解とご協力をお願いいたします。
                      </p>
                    ),
                    term: "個人のホームページやSNS、ブログ、印刷物に、サイト内の画像や音源、映像を使用してもいいですか？",
                  },
                  {
                    description: (
                      <>
                        <p>
                          ページ右上の[ 入会 ] ボタンよりご入会いただけます。
                          <br />
                          会費のお支払い方法は以下よりご選択いただけます。
                        </p>
                        <ul>
                          <li>クレジットカード決済</li>
                          <li>コンビニ決済</li>
                          <li>携帯キャリア決済（docomo、au）</li>
                        </ul>
                        <p>
                          ※ソフトバンクのキャリア決済につきましては、当サービスではご利用いただけません。
                        </p>
                      </>
                    ),
                    term: "ファンクラブに入会したいのですが、どのような方法がありますか？",
                  },
                  {
                    description: (
                      <p>
                        ぶいすぽっ！ファンクラブの年会費は￥6,600(税込)です。
                      </p>
                    ),
                    term: "会費はいくらかかりますか？",
                  },
                  {
                    description: (
                      <p>
                        決済完了月から11ヶ月後の月末までとなります。
                        <br />
                        (例)2024年8月15日にご入会手続きをされた場合 ⇒
                        会員期限【2025年7月31日】まで
                        <br />
                        ※お客様の会員有効期限は会員サイトへログイン後、[ MY PAGE
                        ] にてご確認いただけます。
                      </p>
                    ),
                    term: "会員期限はいつまでになりますか？",
                  },
                  {
                    description: (
                      <p>
                        会員資格期間満了日の30日前に、更新に関するご案内をお送りしております。
                        <br />
                        クレジットカード決済およびキャリア決済の方は、退会手続きを行わなければ自動更新となります。
                        <br />
                        コンビニ決済の方は、更新手続きが必要となります。
                        <br />
                        更新手続きがお済みでない場合は、翌月以降、特典が受け取れませんので予めご了承ください。
                      </p>
                    ),
                    term: "更新期間はいつですか？",
                  },
                  {
                    description: (
                      <p>
                        発送を伴う特典があるため、日本国内の住所をお持ちの方のみ対象になります。
                        <br />
                        あらかじめご了承ください。
                      </p>
                    ),
                    term: "海外からの入会はできますか？",
                  },
                  {
                    description: (
                      <p>
                        定員や入会受付時期の設定はありません。
                        <br />
                        いつでもご入会いただけます。
                      </p>
                    ),
                    term: "ファンクラブには定員や入会受付時期はありますか？",
                  },
                  {
                    description: (
                      <p>
                        携帯電話のメールアドレスでもご登録可能ですが、サイトへのアクセスはパソコンおよびスマートフォンからのみになります。
                        <br />
                        また、機種や受信設定によりメールが届かない場合もありあますので、なるべくパソコンのメールアドレス(Gmail等のフリーメールアドレス)をご利用いただけますようお願いいたします。
                      </p>
                    ),
                    term: "入会にはメールアドレスが必要なようですが、 スマートフォンや携帯電話のメールアドレスでも大丈夫ですか？",
                  },
                  {
                    description: (
                      <>
                        <p>
                          ぶいすぽっ！ファンクラブからのご案内やメールマガジン等は、すべて
                          【@fc.vspo.jp】のドメインより送信されます。
                          <br />
                          確実に情報をお届けするためにも、再度設定をご確認ください。
                          <br />
                          ＜受信設定の確認方法＞
                          <br />
                          ■フリーメールアドレスをご利用の方へ
                          <br />
                          Yahoo!メールやGmail等のフリーメールアドレスをご利用の方は、メールが「迷惑メール」フォルダに振り分けられる場合がございます。
                          <br />
                          メールが未着の場合は、自動的に削除されてしまう前に「迷惑メール」フォルダ、「ゴミ箱」内もご確認ください。
                          <br />
                          ■スマートフォン、携帯電話のメールアドレスをご利用の方へ
                          <br />
                          メール指定受信/拒否設定をされている場合は、【@fc.vspo.jp】のドメインからのメールを受信できるように設定をお願いいたします。
                        </p>
                        <ul>
                          <li>
                            「URL付きメール拒否設定」を解除、または受取設定してください。
                          </li>
                          <li>
                            「PCメールの一括拒否」の設定解除、または受取設定してください。
                          </li>
                          <li>
                            「かんたん設定」「なりすまし規制」を解除、または設定を(低)に変更してください。
                          </li>
                          <li>
                            迷惑メールの「ブロック設定」を解除、または個別設定してください。
                          </li>
                        </ul>
                        <p>
                          ※auをご利用の方へお願い
                          <br />
                          auをご利用の場合、デフォルトで「なりすまし規制」が(高)に設定されております。
                          <br />
                          この「なりすまし規制」が(高)になっていると、メールが一切お届け出来ない可能性がございます。
                          <br />
                          必ずご登録の前に「なりすまし規制」を(低)に変更してください。
                          <br />
                          受信設定をご確認いただいたにも関わらず、メールの未着が続く場合は、[
                          お問い合わせ ]ページよりご連絡ください。
                        </p>
                      </>
                    ),
                    term: "会費の支払い後、入会完了メールが何日経っても届きません。",
                  },
                  {
                    description: (
                      <p>
                        入会時に同意していただいた利用規約に反した場合、『会員の資質を問われる行為』として除名処分になります。
                      </p>
                    ),
                    term: "強制的にファンクラブを退会させられたり、 除名されたりすることはありますか？",
                  },
                  {
                    description: (
                      <p>
                        本名以外での会員登録はできません。
                        <br />
                        今後、イベントへのご参加の際は、公的な身分証でご本人確認を行う場合がございます。
                        <br />
                        ご本人以外の入場は、ご家族名義であっても無効となりますのでご注意ください。
                        <br />
                        ペンネームや他人名義等の登録で問題が生じた場合、『ぶいすぽっ！ファンクラブ』では一切の責任を負いません。
                      </p>
                    ),
                    term: "本名以外での会員登録はできますか？",
                  },
                  {
                    description: (
                      <p>
                        おひとりさま様につき、1名義（1アカウント）のみとさせていただきます。
                        <br />
                        複数アカウントの登録は禁止しておりますのでご注意ください。
                        <br />
                        重複登録や他人名義でのお申込、匿名・偽名でのお申込等を確認した場合、強制退会処理を行う場合がございます。
                        <br />
                        その際、会費の返金はいたしませんので、あらかじめご了承ください。
                        <br />
                        ※偽名・他人名義でのご登録・チケットのお申込等は行わないでください。
                        <br />
                        ＜既に家族が入会している場合＞
                        <br />
                        同じ住所であっても、別名義であればご入会は可能です。
                        <br />
                        【同一名義】での重複登録については禁止しておりますが、同一住所のご家族様の登録に関しての制限は特にありません。
                      </p>
                    ),
                    term: "ひとりで複数登録してもいいですか？",
                  },
                  {
                    description: (
                      <>
                        <p>
                          下記のようなメールアドレスは、世界共通となるインターネット通信規格RFC（Request
                          for
                          Comments）に準拠していないため、原則ご利用いただけません。
                          <br />
                          ＜RFCに準拠していないメールアドレス＞
                        </p>
                        <ol>
                          <li>
                            「-」「_」「.」「+」「?」「/」以外の記号が含まれている場合
                          </li>
                          <li>記号を2文字以上連続使用している場合</li>
                          <li>記号を最初と最後(@の直前)に使用している場合</li>
                          <li>@の前部分が64文字以上の場合</li>
                          <li>メールアドレス全体が256文字以上の場合</li>
                        </ol>
                        <p>
                          該当文字列を含むメールアドレスをご利用の場合は、別のメールアドレスにて改めてご登録ください。
                          <br />
                          メールアドレスをお持ちでない方は、GmailやYahoo等、フリーメールアドレスの取得をお願いします。
                        </p>
                      </>
                    ),
                    term: "登録に使用できないメールアドレスはありますか？",
                  },
                  {
                    description: (
                      <p>
                        ご自身で変更が可能です。
                        <br />
                        ログイン後、MY
                        PAGE内【会員情報＞編集】からお手続きください。
                        <br />
                        発送物未着の原因となりますので、ご住所に変更があった場合は、お早目の手続きをお願いします。
                      </p>
                    ),
                    term: "住所・電話番号が変わった場合はどうすればよいですか？",
                  },
                  {
                    description: (
                      <p>
                        ご自身で変更が可能です。
                        <br />
                        ログイン後、MY
                        PAGE内【会員情報＞編集する＞変更する】からお手続きください。
                        <br />
                        ご登録いただいた新アドレス宛てに、「変更確定用メール」が届きますので、
                        <br />
                        メールに記載のURLへアクセスし、変更を確定してください。
                      </p>
                    ),
                    term: "メールアドレスは変更できますか？",
                  },
                  {
                    description: <p>MY PAGE内の会員情報から変更可能です。</p>,
                    term: "結婚等により名字が変わった場合はどうすればよいですか？",
                  },
                  {
                    description: (
                      <p>
                        VISA / Master Card / JCB / Diners / AMEX
                        <br />
                        上記カードがご利用いただけます。
                        <br />
                        ※海外で発行されたクレジットカードについては、ご利用いただけない場合がございます。
                      </p>
                    ),
                    term: "使用できるクレジットカードはどの会社のものですか？",
                  },
                  {
                    description: (
                      <p>
                        ご契約のカード会社によって異なりますので、詳細はクレジットカード裏面記載のお問い合わせ先にてご確認ください。
                      </p>
                    ),
                    term: "クレジットカードの料金引き落としはいつになりますか？",
                  },
                  {
                    description: (
                      <p>
                        全国のファミリーマート、ローソン、ミニストップ、セイコーマートからお支払いいただけます。
                      </p>
                    ),
                    term: "支払いが可能なコンビニはどこですか？",
                  },
                  {
                    description: (
                      <>
                        <p>
                          対応しているコンビニと、具体的なお支払い方法は以下をご参照ください。
                          <br />
                          ■ファミリーマート
                        </p>
                        <ol>
                          <li>
                            Famiポートのトップ画面で「代金支払い」をタッチしてください。
                          </li>
                          <li>
                            「お客様番号を入力する」をタッチしてください。
                          </li>
                          <li>
                            ぶいすぽっ！ファンクラブの加入申込時にメールに記載された「お客様番号」(11桁)を入力して、「OK」をタッチしてください。
                          </li>
                          <li>
                            出力された申込券をレジに提示して、代金をお支払いください。
                          </li>
                        </ol>
                        <p>
                          ※お客様番号は、加入操作を行なったプランページ上の「プランを見る」ボタンからお支払い期限内はいつでもご確認いただけます。
                          <br />
                          ■ローソン・ミニストップ
                        </p>
                        <ol>
                          <li>
                            Loppi、またはMINISTOP
                            Loppiのトップ画面で「各種サービスメニュー」をタッチしてください。
                          </li>
                          <li>
                            「各種代金・料金お支払い」をタッチしてください。
                          </li>
                          <li>「各種代金お支払い」をタッチしてください。</li>
                          <li>
                            「マルチペイメントサービス」をタッチしてください。
                          </li>
                          <li>
                            ぶいすぽっ！ファンクラブの加入申込時にメールに記載された「注文番号」(14桁)を入力して、「次へ」をタッチしてください。
                          </li>
                          <li>
                            ぶいすぽっ！ファンクラブの加入申込時にメールに記載された「確認番号」(4桁)を入力して、「次へ」をタッチしてください。
                          </li>
                          <li>
                            出力された申込券をレジに提示して、代金をお支払いください。
                          </li>
                        </ol>
                        <p>
                          ※確認番号は、加入操作を行なった当該プランページ上の「プランを見る」ボタンからお支払い期限内はいつでもご確認いただけます。
                          <br />
                          ■セイコーマート
                        </p>
                        <ol>
                          <li>
                            クラブステーションのトップ画面で「インターネット受付
                            各種代金お支払い」をタッチしてください。
                          </li>
                          <li>
                            ぶいすぽっ！ファンクラブの加入申込時にメールに記載された「お支払い受付番号」を入力し「次のページ」をタッチしてください。
                          </li>
                          <li>
                            ぶいすぽっ！ファンクラブの加入申込時に入力頂いた「電話番号」を入力し「次のページ」をタッチしてください。
                          </li>
                          <li>
                            出力された申込券をレジに提示して、代金をお支払いください。
                          </li>
                        </ol>
                        <p>
                          ※店舗により異なる場合があります。その場合は店舗でのご案内にしたがってお支払いください。
                          <br />
                          ※入力いただいた電話番号は、加入操作を行なった当該プランページ上の「プランを見る」ボタンからお支払い期限内はいつでもご確認いただけます。
                        </p>
                      </>
                    ),
                    term: "コンビニのお支払い方法について",
                  },
                  {
                    description: (
                      <p>
                        お支払い方法によって異なりますので、下記ご確認ください。
                        <br />
                        ▼クレジットカード決済を選択したが、別の決済方法に変更したい。
                        <br />
                        ＜ご入会の場合＞
                        <br />
                        カード情報を入力し、決済が完了した場合は変更ができません。
                        <br />
                        決済完了前であれば、再度お手続きください。
                        <br />
                        ＜ご継続の場合＞
                        <br />
                        ご入会時にクレジットカード決済で手続きした場合は自動継続となりますがMY
                        PAGE内の【お支払いについて＞変更する】からお手続きいただければ変更可能です。
                        <br />
                        ※クレジットカード決済からコンビニ決済への変更はできません。
                        <br />
                        ▼コンビニ決済にしたが、クレジットカード決済にしたい。
                        <br />
                        お支払いが完了していなければ変更可能です。
                        <br />
                        MY
                        PAGE内の【プランについて＞入会する】からもう一度お手続きください。
                        <br />
                        ▼コンビニ決済にしたが、別のコンビニにしたい
                        <br />
                        お支払いが完了していなければ変更可能です。
                        <br />
                        MY
                        PAGE内の【プランについて＞入会する】もう一度お手続きください。
                        <br />
                        ▼キャリア決済を選択したが、別の決済方法に変更したい。
                        <br />
                        ＜ご入会の場合＞
                        <br />
                        決済が完了した場合は変更ができません。
                        <br />
                        決済完了前であれば、再度お手続きください。
                        <br />
                        ＜ご継続の場合＞
                        <br />
                        ご入会時にキャリア決済で手続きした場合は自動継続となりますが、MY
                        PAGE内の【お支払いについて＞変更する】からお手続きいただければ変更可能です。
                        <br />
                        ※キャリア決済からコンビニ決済への変更はできません。
                      </p>
                    ),
                    term: "決済方法の変更はできますか？",
                  },
                  {
                    description: (
                      <p>
                        パスワードをお忘れの場合は、ログイン画面にございます[
                        パスワードをお忘れの方はこちら ] をご利用ください。
                        <br />
                        また、ログインID (登録したメールアドレス)
                        は、入会手続き完了後に配信される入会完了メールに記載されています。
                      </p>
                    ),
                    term: "ファンクラブ入会後、ログインするためのパスワードがわかりません。どうすればいいですか？",
                  },
                  {
                    description: (
                      <p>
                        ご入会後、初回の会員情報(氏名・住所等)のご登録をしていただいてから約3ヶ月～4ヶ月程お時間をいただきます。
                        <br />
                        また、製造状況により発送が前後する場合がございますのでご了承ください。
                        <br />
                        なお、会員証未着に関するお問い合わせは期間を設けておりませんが、発送開始から3ヶ月以上経過した場合は、調査を行うことできず対応いたしかねますので、あらかじめご了承ください。
                        <br />
                        ※会員情報のご登録がない場合、ぶいすぽっ！ファンクラブ内の特典(会員限定コンテンツの閲覧、入会特典の発送など)をご利用いただくことができませんので、あらかじめご了承ください。
                      </p>
                    ),
                    term: "会員証はいつ頃届きますか？",
                  },
                  {
                    description: (
                      <p>
                        会員証を再発行する場合、
                        再発行手数料として、1000円(税込)が必要です。
                        <br />
                        再発行をご希望の方は[ お問い合わせ ]
                        よりカスタマーセンターへご連絡ください。
                        <br />
                        ※お支払い方法により、別途所定の手数料がかかる場合があります。
                        <br />
                        ※再発行および住所不備による再発送に関しましては、発送費はお客様負担になりますので、予めご了承ください。
                        <br />
                        ※発送時期につきましては、決済完了してから約3ヶ月〜4ヶ月程お時間をいただきます。
                        <br />
                        ※製造状況により発送が前後する場合がございますのでご了承ください。
                      </p>
                    ),
                    term: "会員証を紛失してしまいました。再発行はしてもらえますか？",
                  },
                  {
                    description: (
                      <p>
                        MY
                        PAGE内【プランについて＞解約する】からお手続きください。
                      </p>
                    ),
                    term: "退会方法を教えてください。",
                  },
                  {
                    description: (
                      <>
                        <p>
                          推奨環境は以下の通りです。
                          <br />
                          ■OS
                          <br />
                          スマートフォン
                        </p>
                        <ul>
                          <li>iOS 16 以降</li>
                          <li>Android 13 以降</li>
                        </ul>
                        <p>PC</p>
                        <ul>
                          <li>Windows 10, 11</li>
                          <li>macOS 13</li>
                        </ul>
                        <p>■ブラウザ</p>
                        <ul>
                          <li>Google Chrome 最新バージョン</li>
                        </ul>
                      </>
                    ),
                    term: "推奨環境について",
                  },
                  {
                    description: (
                      <p>
                        大変申し訳ございませんが、ぶいすぽっ！メンバーへの「プレゼント」は、一切受け付けておりません。
                        <br />
                        「ファンレター」は以下住所が送り先になります。
                        <br />
                        ▼ぶいすぽっ！ファンレター 送り先
                        <br />
                        郵便番号：〒154-0001
                        <br />
                        住所：東京都世田谷区池尻2-31-20 清水ビル5F
                        <br />
                        送り先：ぶいすぽっ！運営事務局＿該当メンバー名
                        <br />
                        何卒ご了承ください。
                      </p>
                    ),
                    term: "ファンレター・プレゼントの送り先を教えてください｡",
                  },
                  {
                    description: (
                      <p>
                        FAQを見ても解決しない場合、また、ご不明な点は[
                        お問い合わせ ]ページからご連絡ください。
                        <br />
                        ※お問い合わせの際は、会員の方は会員番号(会員の方)・ログインID(会員の方で登録したメールアドレス)・お名前・ご連絡先を必ずお知らせください。
                        <br />
                        ※お問い合わせには順次回答をいたしておりますが、ご回答までに数日いただく場合がございます。
                        <br />
                        7営業日以上経っても返信メールが届かない場合には、お手数ですが再度お問い合わせください。FAQを見ても解決しない場合、また、ご不明な点は[
                        お問い合わせ ]ページからご連絡ください。
                      </p>
                    ),
                    term: "FAQページを見てもわからないことがあった場合はどうすればいいですか？",
                  },
                ].map(({ description, term }, index) => (
                  <div key={term}>
                    <dt
                      className={styles.term}
                      onClick={() =>
                        setAccordionIndexList((prevAccordionIndexList) =>
                          prevAccordionIndexList.includes(index)
                            ? prevAccordionIndexList.filter(
                                (prevIndex) => prevIndex !== index
                              )
                            : [...prevAccordionIndexList, index]
                        )
                      }
                    >
                      <span>{term}</span>
                      {accordionIndexList.includes(index) ? (
                        <LuMinusCircle size={24} />
                      ) : (
                        <LuPlusCircle size={24} />
                      )}
                    </dt>
                    <dd
                      className={`${styles.description} ${accordionIndexList.includes(index) ? styles.open : ""}`}
                    >
                      <div className={styles.inner}>{description}</div>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>
        </main>
      </div>
      <footer className={styles.footer}>&copy; 2024 Blackbox Inc.</footer>
    </div>
  );
}
