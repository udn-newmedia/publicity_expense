<template>
  <div id="app">
    <Progress v-if="!readArticle"></Progress>
    <ReportIndicator v-if="readArticle"></ReportIndicator>
    <HeadBar :jsonProps="headJSON">
      <a slot="logo" href="https://vision.udn.com/" target="_blank"></a>
      <a href="https://udn.com">遊戲1</a>
      <a href="https://udn.com">遊戲2</a>
      <a href="https://udn.com">遊戲4</a>
    </HeadBar>
    <ResultFront v-if="gameOver"></ResultFront>
    <GameContent v-if="detectResize" id="game-content" :style="{top: gameContentTop, marginLeft: gameContentMargin, marginRight: gameContentMargin}">
      <Introduction id="introduction"></Introduction>
      <Character id="character"></Character>
      <RegionInfo id="region-info"></RegionInfo>
      <Game id="game"></Game>
    </GameContent>
    <!-- <TeachingVideo v-if="teachingGame"></TeachingVideo> -->
    <Teaching v-if="teachingGame"></Teaching>
    <ResultEnd v-if="gameOver"></ResultEnd>
    <div id="article-anchor"></div>
    <Content v-if="readArticle" id="article-content">
      <h3>打一場選戰燒掉多少錢？<br>選議員至少500萬 選縣市長上億起跳</h3>
      <p><br></p>
      <p>打一場選戰，究竟要燒掉多少競選經費？依候選人的策略和財力不同，選舉經費運用方式也各異，金額差距很大。</p>
      <p><br></p>  
      <p>根據《聯合報》調查採訪，一般來說，<strong>縣市議員候選人競選經費少說要300萬到500萬元，花費500萬到800萬元算正常；最基層的里長選舉要花5萬到10萬元</strong>。縣市長較難估算，根據資深政治公關業者估計，<strong>一般縣市長選舉花費至少億元起跳，六都市長可能上看1.5億。</strong></p>
      <p><br></p>
      <p>競選花費包山包海，大致可分為宣傳行銷費用、組織動員費用和人事行政費用。其中最燒錢的就是宣傳費，舉凡文宣、贈品、看板、公車廣告、電視廣告和網路宣傳，樣樣得花錢。據估計，<strong>光是宣傳費就占整體競選經費約四分之三</strong>，對於需要打知名度的政治新人來說，無疑是提高參政門檻。</p>
      <p><br></p>
      <ColumnOne 
        description="選舉看板所費不眥，每面月租至少萬元起跳，許多議員候選人光是掛看板就得花掉上百萬元。記者侯永全／攝影" src="./static/pictures/mobile/m1.jpg" 
        src-web="./static/pictures/web/w1.jpg">
      </ColumnOne>
      <p><br></p>
      <p><br></p>
      <h3>議員選舉拚知名度 看板燒錢最兇</h3>
      <p><br></p>
      <p>對議員參選人來說，選舉宣傳打的是知名度，因此掛在街頭巷尾的看板便成為最重要的宣傳管道。台北市士林、北投區議員參選人張斯綱認為，看板是選民認識你的重要媒介，因為自己是第一次參選，知名度還不夠，這次選舉自己花錢掛了38面看板，其他則是別人贊助。</p>
      <p><br></p>
      <Quote 
        img="./static/pictures/q1.png" 
        text="看板對我來說是「必要之惡」，我也不喜歡這樣花錢，但當競爭對手都在掛，你不得不跟進。" 
        refer="- 北市議員參選人張斯綱">
      </Quote>
      <p><br></p>           
      <p><strong>「議員選舉平均至少掛40到50面看板。」</strong>張斯綱觀察，有些資源豐富的議員，一個街角就掛了兩面。而他自己則是走「集中區塊、強化特定區域」的做法，點沒放那麼多，但較密集。大部分看板都是掛選前最後兩個月，台北市看板租金平均每月2萬到3萬元，再加上製作和吊掛費，張斯綱估算，<strong>光是掛看板就要燒掉100萬到200萬元，是宣傳支出中花最多錢的項目。</strong></p>
      <p><br></p>           
      <p>同樣是新人參選的台北市松山信義區議員參選人徐巧芯，最大筆的宣傳支出也花在看板上，這次選舉總共花錢掛了10面看板，其他則是「能借就借」，跟以前的補習班老師或鄰居商借大樓牆面，目前已借到3面以上，自己只要付看板製作和吊掛費，省下不少開銷。她估計，這次選舉全部花費可控制在300萬元以內。</p>
      <p><br></p>
      <Quote 
        img="./static/pictures/q2.png" 
        text="選舉最怕的就是「別人有做的東西你完全沒有」，會被質疑是「選假的」。因此我盡可能每項宣傳都有做到，但是想辦法花最少的成本。" 
        refer="- 北市議員參選人徐巧芯">
      </Quote>
      <p><br></p>           
      <p>但也有大膽打出「零看板」的參選人，台北市大安、文山區議員參選人羅智強坦言，不掛看板的最大原因是「沒錢」。因為在初選階段，依規定還不能募款，怎麼找的到幾百萬去設置看板？
      </p>           
      <p><br></p>
      <Quote 
        img="./static/pictures/q3.png" 
        text="其他參選人一打就是50面、100面看板，我去放個10面，沒意思。" 
        refer="- 北市議員參選人羅智強">
      </Quote>
      <p><br></p>
      <p>羅智強這次將宣傳資源放在公車廣告上，主要考量公車移動性高，且價格比較便宜，一面公車廣告每月租金加上製作費大約1萬元。但他也坦言，看板對民眾來說確實是很強的記憶點，宣傳效果還是比公車廣告好。<strong>「如果我最後落選，寫檢討報告時，沒有看板這件事會被我寫進去。」</strong>不過這次選舉他希望從自身做起，改變台灣砸錢掛看板的選舉文化。</p>
      <p><br></p>
      <ColumnOne 
        description="台北市議員參選人羅智強推出「嗆聲公車」，在各地支援縣市長參選人公車廣告。圖為支援高雄市長參選人韓國瑜的公車廣告。圖／取自羅智強臉書" src="./static/pictures/mobile/m2.jpg" 
        src-web="./static/pictures/web/w2.jpg">
      </ColumnOne>
      <p><br></p>
      <p>張斯綱也認為，燒錢宣傳會變成一種惡性循環。「新人沒有知名度，勢必得花更多錢打選戰，但偏偏新人卻是最沒有資源的。」他認為，政府必須針對選舉經費有嚴格的規範和查核機制。現在雖有規範競選金額上限，但都是徒具形式，根本沒有查核機制。長期下來變成都是固定的人參選，形成家族政治。</p>
      <p><br></p>
      <p>徐巧芯則認為，新人掛看板可以先從「小掛」開始，既然要選上就一定得花錢宣傳，但不要盲目地砸錢，浪費資源。「假如我掛50面看板，其他參選人就會掛更多，讓選舉變成軍備競賽。」她認為，只要自己適當控制看板數量，其他參選人也不會跟進，慢慢就能形成正面效應。</p>
      <p><br></p>
      <p>她也贊成可學習日本、韓國，設置公共選舉看板，讓每個參選人能張貼的海報數量和大小一致，達到形式上的公平。</p>
      <p><br></p>
      <ColumnOne 
        description="日本政府針對選舉文宣品如海報、傳單、看板等，有一定的規格限制，包括張貼的數量、地點都有規定，只能張貼在公定的的海報牆上。圖／法新社" src="./static/pictures/mobile/m3.jpg" 
        src-web="./static/pictures/web/w3.jpg">
      </ColumnOne>
      <p><br></p>
      <p><br></p>
      <h3>競選小物拚人氣 比實用比創意</h3>
      <p><br></p>
      <p>不只看板怎麼掛學問大，要發送哪些競選小物，參選人也各自有一套策略。<strong>「選舉小物最重要的，是要看在你包包和你家客廳的存活率。」</strong>張斯綱說，現在選舉贈品講求實用性，紙本文宣已經不太受歡迎，像他這次特別選做菜瓜布，一塊成本約3元，雖然比常見的面紙貴，但很受婆婆媽媽喜愛，他一口氣就訂做了8萬份。</p>
      <p><br></p>
      <p>徐巧芯則是在競選初期就決定發兩類選舉贈品，一類是最低成本的面紙，每包約1元，她訂做8萬包，在人多的地方發送，之後發完會改成口罩。另一類則是成本較高的環保購物袋，每個約5元，她訂製2萬個，只在特定場合發送。</p>
      <p><br></p>
      <p>此外，徐巧芯也發揮創意，因應不同節日發送應景小禮物，例如端午節送香包手環，母親節送肥皂花，每種大約只做2000份，每樣成本約5元，整體算下來花費不多。徐巧芯說，雖然發贈品是傳統的宣傳方式，但她盡可能在傳統中做出新意。「選民每次拿到不一樣的小禮物，也會覺得我們蠻用心的。」</p>
      <p><br></p>
      <ColumnOne 
        description="選戰激烈，各候選人絞盡腦汁設計競選小物，實用性高的菜瓜布、環保購物袋大受選民歡迎。記者許瑋琳／攝影" 
        src="./static/pictures/mobile/m10.jpg" 
        src-web="./static/pictures/web/w10.jpg">
      </ColumnOne>
      <p><br></p>
      <p><br></p>
      <h3>新人參選議員 先燒掉500萬元</h3>
      <p><br></p>
      <p>若一位新人初次參選議員，究竟要花多少競選經費？長期幫參選人操作選舉宣傳的威亞策略顧問業務總監李欣晏分析，要選上議員，必須有知名度和支持度，對新人來說，<strong>看板</strong>和<strong>贈品</strong>是必備的，可以讓選民快速認識參選人。發送<strong>文宣</strong>則是幫助選民了解參選人的政見和出身背景，進一步產生認同與支持。此外，<strong>競選辦公室租金</strong>和<strong>助理人事費用</strong>也是必要支出。</p>
      <p><br></p>
      <Quote text="要參選議員，最基本的開銷300萬到500萬元跑不掉，這還只是最陽春的選法。" >
      </Quote>
      <p><br></p>
      <p>（見表1）李欣晏指出，<strong>一般議員參選人競選花費500萬到800萬元算正常，宣傳費約占競選總支出的四分之三。</strong>不過，李欣晏也強調，這個金額是議員競選所需要的錢，但中間會有折扣或贊助，參選人最後實際花的錢不一定這麼多。</p>
      <p><br></p>

      <div>（表1）新人參選議員要花的基本競選經費</div>
      <div class="fresh-budget-row">
        <div class="fresh-top">
          <div class="fresh-name-wrapper"><div class="fresh-name">參選費用</div></div>
          <div class="fresh-cost-wrapper">
            <div class="fresh-cost">
              <div class="fresh-cost-row-wrapper">
                <div class="fresh-cost-row">直轄市議員</div>
                <div class="fresh-cost-row">國民黨：<span style="color: #ff4e00">75萬元</span></div>
                <div class="fresh-cost-row">民進黨：<span style="color: #ff4e00">70萬元</span></div>
                <div class="fresh-cost-row">獨立參選：<span style="color: #ff4e00">20萬元</span></div>
                <div class="fresh-cost-row"><br></div>
                <div class="fresh-cost-row">縣市議員</div>
                <div class="fresh-cost-row">國民黨：<span style="color: #ff4e00">57萬元</span></div>
                <div class="fresh-cost-row">民進黨：由各地方黨部自行調整</div>
                <div class="fresh-cost-row">獨立參選：<span style="color: #ff4e00">12萬元</span></div>  
              </div>
            </div>
          </div>
        </div>
        <div class="fresh-bottom">
          <div class="fresh-description">註 : 參加國、民兩黨黨內初選，需繳交登記費、選務作業費和保證金。<span class="read-more-btn-text" @click="showReadMore()">看說明</span><span class="read-more-btn-circle" @click="showReadMore()">▼</span></div>
          <div class="fresh-description-read-more-wrapper" ref="readMoreRef">
            <div>1.獨立參選僅需負擔中選會規定直轄市議員20萬元、縣市議員12萬元的保證金費用。
            </div>
            <div>2.國民黨規定，直轄市議員參選費總額55萬元，包括領表費5萬元、選務作業費30萬元，與保證金20萬元。加上中選會規定的20萬元，共75萬元。一般縣市議員參選費總額45萬元，包括領表費5萬元、選務作業費20萬元，與保證金20萬元。加上中選會規定的12萬元，共57萬元。</div>
            <div>3.民進黨規定，直轄市議員參選費總額50萬元，包括登記費20萬元、民調分擔金20萬元，與保證金10萬元。加上中選會規定的20萬元，共70萬元。一般縣市議員參選費金額則授權地方黨部決定。</div>
            <div>4.若獲時代力量和親民黨推薦提名，不需事先繳交保證金或作業費。</div>
            <div>5.中選會保證金，只要得票數超過該選區總人數除以應當選名額的1/10，就能退還。</div>
            <div>6.政黨保證金在各黨初選結束後，確認未違紀、脫黨參選等情形，就能退還。</div>
          </div>        
        </div>
      </div>
      <div class="fresh-budget-row">
        <div class="fresh-top">
          <div class="fresh-name-wrapper"><div class="fresh-name">看板</div></div>
          <div class="fresh-2">1萬/月租</div>
          <div class="fresh-3">20面</div>
          <div class="fresh-money">200-250萬元</div>
        </div>
        <div class="fresh-bottom">
          <div class="fresh-description">註 : 從初選期間，選前10個月開始掛。總價含看板租金、吊掛費和製作費</div>
        </div>
      </div>
      <div class="fresh-budget-row">
        <div class="fresh-top">
          <div class="fresh-name-wrapper"><div class="fresh-name">贈品</div></div>
          <div class="fresh-2">8元/個</div>
          <div class="fresh-3">10萬個</div>
          <div class="fresh-money">80萬元</div>
        </div>
        <div class="fresh-bottom">
          <div class="fresh-description">註 : 贈品價格有高有低，以平均每個8元計算</div> 
        </div>
      </div>
      <div class="fresh-budget-row">
        <div class="fresh-top">
          <div class="fresh-name-wrapper"><div class="fresh-name">文宣+派報</div></div>
          <div class="fresh-2">文宣1元/份<br>派報0.5元/份</div>
          <div class="fresh-3">4款文宣<br>每款10萬份</div>
          <div class="fresh-money">50-60萬元</div>
        </div>
        <div class="fresh-bottom">
          <div class="fresh-description">註 : 總價含文宣設計、製作費和派報成本</div>
        </div>
      </div>
      <div class="fresh-budget-row">
        <div class="fresh-top">
          <div class="fresh-name-wrapper"><div class="fresh-name">競選辦公室+助理</div></div>
          <div class="fresh-2">辦公室租金<br>8萬-12萬/月<br>助理<br>25K-28K/月</div>
          <div class="fresh-3">1間辦公室3-4名助理</div>
          <div class="fresh-money">40-50萬元</div>
        </div>
        <div class="fresh-bottom">
          <div class="fresh-description">註 : 從選前3-4個月起算。</div>
        </div>
      </div>
      <div class="fresh-budget-row">
        <div class="fresh-total-money">382-515<span style="font-size: 16px">萬元</span></div>
      </div>
      <p>採訪整理：蔡佩蓉</p>

      <p><br></p>
      <p><br></p>
      <h3>選縣市長億元起跳 電視廣告砸上千萬</h3>
      <p><br></p>
      <p>至於縣市長參選人要花多少競選經費？<strong>「因為縣市人口多、地方大，基本上可以將議員競選經費放大10倍來看，就是5000萬。」</strong>若再加上媒體廣告和組織動員費用，李欣晏估計，縣市長競選經費至少要花上億元，六都市長上看1.5億元。</p>
      <p><br></p>
      <p>選縣市長有多燒錢？台北市長柯文哲2014年公布當年競選經費，總共花了1.4億元，最後兩個月狂燒8000多萬。其中電視廣告費用驚人，一支電視廣告大概花掉近2000萬，難怪連柯P也感嘆選舉很花錢。</p>
      <p><br></p>
      <p>除了基本的文宣看板，<strong>縣市長選舉最燒錢的部分就是媒體</strong>。李欣晏表示，若以一支電視廣告製作費約150萬元估算，一般託播費大約是製作費的3到5倍，假設製作3支電視廣告，製作費450萬元，託播費就要1200萬到1500萬元。</p>
      <p><br></p>
      <p><strong>「廣告買的多，建立起來的是氣勢。」</strong>台北市長參選人丁守中辦公室發言人詹為元表示，縣市長參選人基本上知名度都夠，宣傳的主要目的是傳達形象和價值。對於媒體曝光度和網路聲量不足的參選人來說，電視廣告就變成基本必須的條件。</p>
      <p><br></p>
      <ColumnOne
        description="柯文哲2014年台北市長選舉前推出的電視廣告「這一票，你聽孩子的話」，一支電視廣告就花掉近2000萬。圖／截自YouTube" 
        src="./static/pictures/mobile/m4.jpg" 
        src-web="./static/pictures/web/w4.jpg">
      </ColumnOne>
      <p><br></p>
      <p>比起議員，縣市長參選人得花更多錢在組織動員。「議員通常是跑別人的場子，縣市長要自己辦活動。」李欣晏舉例，若以一場萬人的選前之夜活動估算，可預估約有3000到5000人是自發性參加，剩下的就要靠動員。</p>
      <p><br></p>
      <Quote text="組織動員費用包括遊覽車、餐費、背心、旗子，再加上舞台、音響和燈光，辦一場萬人造勢活動沒有100、200萬絕對過不去。">
      </Quote>
      <p><br></p>
      <p>一場選舉下來，李欣晏估算，<strong>組織動員費用大約占縣市長參選人競選經費的三分之一，包含媒體廣告在內的宣傳費約占三分之二。</strong></p>
      <p><br></p>
      <ColumnOne
        description="辦一場萬人造勢大會開銷驚人，包括動員民眾的遊覽車、便當、水、旗子都要錢，加上舞台、燈光和音響費用，一場活動就燒掉上百萬。圖／報系資料照" 
        src="./static/pictures/mobile/m5.jpg" 
        src-web="./static/pictures/web/w5.jpg">
      </ColumnOne>
      <p><br></p>
      <p><br></p>
      <h3>選舉打社群戰 參選人親自回LINE</h3>
      <p><br></p>
      <p>選舉開銷驚人，不少參選人現在轉而靠網路、新媒體宣傳。LINE今年推出選舉專案，開放參選人申請認證帳號，其帳號可直接被網友搜尋到，每月收費1萬元，不少參選人已成立LINE官方帳號。</p>
      <p><br></p>
      <p>李欣晏觀察，<strong>LINE接觸的年齡層廣，特別是老年人，日常生活幾乎都在LINE上面滿足，黏著度高。</strong></p>
      <p><br></p>
      <Quote text="LINE傳遞資訊的成本幾乎是零，只要有好的圖卡或影音，在LINE上面很容易擴散出去，可說是打選戰最強的工具。">
      </Quote>
      <p><br></p>
      <p>徐巧芯的LINE官方帳號目前有7000位粉絲，她的經營方式是本人回覆，可提高選民互動意願。此外，她也利用中秋節鄰里活動累積LINE粉絲，選民只要現場掃QRCord加LINE就可獲得盆栽。</p>
      <p><br></p>
      <p>「那場活動就增加了400位粉絲，而且我很確定這400位都是我們選區的。」透過這種方式，讓徐巧芯更精準發現潛在選民。「一周後我會傳LINE提醒他們，記得幫盆栽澆水，這樣就可以產生後續的互動。」</p>
      <p><br></p>
      <ColumnOne
        description="今年不少候選人都啟用LINE@帳號，透過影音、圖卡等各種訊息型式，或是串接聊天機器人，與選民互動。圖／截自LINE" 
        src="./static/pictures/mobile/m6.jpg" 
        src-web="./static/pictures/web/w6.jpg">
      </ColumnOne>
      <p><br></p>
      <p><br></p>
      <h3>找網紅臉書直播 降低宣傳成本</h3>
      <p><br></p>
      <p>有別於LINE接觸的是全年齡層，<strong>臉書（Facebook）的受眾多在30到50歲</strong>，李欣晏分析。</p>
      <p><br></p>
      <Quote text="臉書不是這次選戰才有，但不同的是，大家過去把它當成官方網站、或部落格的進階版，現在會講究直播和短影音。">
      </Quote>
      <p><br></p>
      <p>為了吸引網友觀看直播，各競選團隊幕僚都絞盡腦汁想梗。例如新北市長參選人侯友宜找來外甥納豆一起直播；同樣競選新北市長的蘇貞昌，也頻開直播分享掃街日常。台北市長參選人丁守中則是在臉書開直播「丁丁食堂」，介紹台北各行政區美食，並找各區國民黨議員參選人當來賓，順便聊市政。</p>
      <p><br></p>
      <p>參選人將宣傳重心轉移到網路，透過網路的影響力，可付出相對較低的宣傳成本。<strong>「你發10萬份文宣要花多少錢？但韓國瑜找館長直播馬上就有百萬人看，非常省錢。」</strong>李欣晏說，直播不用花很高的成本，又具即時性，可拉近參選人跟網友的距離，成為這次選戰中的宣傳利器。
      </p>
      <p><br></p>
      <ColumnOne
        description="社群直播成為有力的選舉宣傳工具，高雄市長參選人韓國瑜找網紅「館長」直播，臉書直播影片超過百萬次觀看。圖／截自韓國瑜臉書" 
        src="./static/pictures/mobile/m7.jpg" 
        src-web="./static/pictures/web/w7.jpg">
      </ColumnOne>
      <p><br></p>
      <ColumnOne
        description="台北市長參選人丁守中（中）推出「丁丁食堂」臉書直播節目，找國民黨北市議員參選人一同吃消夜、聊市政，希望拓展年輕票源。圖／截自丁守中臉書" 
        src="./static/pictures/mobile/m8.jpg" 
        src-web="./static/pictures/web/w8.jpg">
      </ColumnOne>
      <p><br></p>
      <p><br></p>
      <h3>IG注重真實 別當成選舉工具經營</h3>
      <p><br></p>
      <p>另一項新崛起的社群媒體IG（Instagram），也被運用在這次選戰宣傳中，六都市長參選人幾乎都有開設帳號。人氣最高的台北市長柯文哲，粉絲人數高達53萬9000人，今年5月27日柯文哲IG貼出一段他<a href="https://www.instagram.com/p/BjRia7-FHVU/?taken-by=doctorkowj">坐輪椅體驗VR</a>的影片，畫面逗趣，吸引7萬多人按讚、3500多則留言。</p>
      <p><br></p>      
      <p>李欣晏分析，<strong>IG注重視覺，瞄準的是20到29歲年輕族群，適合呈現參選人私下真實自然、有溫度的一面。</strong></p>
      <p><br></p>
      <Quote text="候選人不能將IG當成選舉工具經營，而是用來塑造個人形象，滿足選民偷窺候選人真實生活的慾望。">
      </Quote>
      <p><br></p>
      <p>徐巧芯說，由於臉書演算法改變，在臉書花錢投放廣告的效益遞減，現在她將宣傳重心轉移到LINE和IG，像這次選舉她沒有將政見放在臉書，而是放在IG限時動態，讓網友可以投票互動。</p>
      <p><br></p>
      <ColumnOne
        description="候選人透過IG分享生活日常，或是將政見放在IG限時動態，讓網友可以投票互動。圖／截自IG" 
        src="./static/pictures/mobile/m9.jpg" 
        src-web="./static/pictures/web/w9.jpg">
      </ColumnOne>
      <p><br></p>
      <p><br></p>
      <h3>社群分眾化 參選人要用新思維打選戰</h3>
      <p><br></p>
      <p>但真正了解IG特性的候選人仍屬少數，「曾經有候選人要發新聞稿，要求我們同時放在臉書和IG上，我們只好跟他解釋，IG上沒有人放這麼多文字。」李欣晏說，社群網路生態快速改變，但候選人的觀念轉變還不夠快。</p>
      <p><br></p>
      <Quote text="不要把你覺得重要的事情告訴每一個人，而是要找到每個人心裡覺得重要的事。">
      </Quote>
      <p><br></p>
      <p>丁守中辦公室發言人詹為元指出，<strong>現在打選戰的方式要更多元化、分群分眾</strong>。傳統的掃街、餐會還是得去；網路則要針對不同平台，推受眾想看的內容，像是LINE主攻50歲以上選民，臉書則對準30到50歲中堅份子，強打政策。</p>
      <p><br></p>
      <p>至於丁守中較弱的20到30歲族群，要努力拓展知名度，「YouTube、抖音我們都看，但也不能模仿，不去kuso，只是用年輕人的管道，增加青年對丁守中的認識。」</p>
      <p><br></p>
      <p>張斯綱認為，現在媒體、平台和受眾都很零碎，切分得很細，需要更多元的宣傳方式去鑽入各種管道中的縫隙，接觸不同族群的選民。</p>
      <p><br></p>
      <p>網路、新媒體宣傳方式，為傳統的選舉文化帶來衝擊和改變。但無論是透過傳統行銷工具或是社群網路打選戰，重要的是參選人必須找到符合自身特質的宣傳方式，順應時勢變化，靈活調整思維，才能真正打動選民的心。</p>
      <p><br></p>
      <p><br></p>
      <Share></Share>
      <Logo></Logo>
      <Editor>
        <div>採訪、文字：蔡佩蓉、洪欣慈、謝汶均</div>
        <div>視覺設計：許瑋琳</div>
        <div>網頁製作：楊若榆</div>
        <div>2018.11</div>
      </Editor>
      <p><br></p>
      <Question href="https://www.surveycake.com/s/KpQKN" text="填寫閱讀體驗問卷"></Question>
      <p><br></p>
      <Relate title="延伸閱讀"
        href1="https://udn.com/upf/newmedia/2018_data/2018election/index.html" img1="./static/pictures/r1.jpg" 
        text1="聯合報新媒體 2018九合一選舉數位專題" 

        href2="https://udn.com/news/story/10958/3232605" img2="./static/pictures/r3.jpg" 
        text2="六都市長選舉經費上限 新北市逾億拔頭籌" 

        href3="https://udn.com/news/story/10958/3333751" img3="./static/pictures/r2.jpg" 
        text3="競辦成立 柯文哲：希望6千萬元打完選戰" 

        href4="https://ubrand.udn.com/ubrand/story/11815/3350385" img4="./static/pictures/r4.jpg" 
        text4="進擊的地方媽媽！歐巴桑為孩子參選盼扭轉政治" > 
      </Relate>
      <FBComment></FBComment>
    </Content>
    <Foot v-if="gameOver"></Foot>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

import Character from '@/components/Character'
import ColumnOne from '@/components/ColumnOne'
import Content from '@/components/Content'
import Editor from '@/components/Editor'
import FBComment from '@/components/FBComment'
import Foot from '@/components/Foot'
import Game from '@/components/Game'
import GameContent from '@/components/GameContent'
import HeadBar from '@/components/HeadBar'
import Introduction from '@/components/Introduction'
import Logo from '@/components/Logo'
import Progress from '@/components/Progress'
import RegionInfo from '@/components/RegionInfo'
import Relate from '@/components/Relate'
import ReportIndicator from '@/components/ReportIndicator'
import ResultFront from '@/components/ResultFront'
import ResultEnd from '@/components/ResultEnd'
import Share from '@/components/Share'
import Teaching from '@/components/Teaching'
import Question from '@/components/Question'
import Quote from '@/components/Quote'

export default {
  name: 'App',
  components: {
    Character,
    ColumnOne,
    Content,
    Editor,
    FBComment,
    Foot,
    Game,
    GameContent,
    Progress,
    RegionInfo,
    ReportIndicator,
    Relate,
    ResultFront,
    ResultEnd,
    HeadBar,
    Introduction,
    Logo,
    Share,
    Teaching,
    Question,
    Quote
  },
  data() {
    return {
      headJSON: {
        headColor: "#fff",
        iconColor: "#000"
      },
      DEVICE_WIDTH: 0,
      statgeNum: 0,
      enterGameLocation: 0,
      detectResize: true,
      gameContentTop: '',
      gameContentMargin: '',
      isReadMore: false
    }
  },
  computed: {
    ...mapGetters({
      HEADBAR_HEIGHT: 'getHeadbarHeight',
      stageID: 'getStageID',
      gameOver: 'getGameStatus',
      readArticle: 'getReadArticle',
      teachingGame: 'getTeachingGame'
    }),
  },
  methods: {      
    ...mapActions([
      'setDeviceWidth',
      'enterGame'      
    ]),
    calcWidth() {
      if(window.innerWidth <= 768) {
        this.DEVICE_WIDTH = window.innerWidth;
      } else {
        this.DEVICE_WIDTH = 880;
      }
    },
    calcStageLocation() {
      this.enterGameLocation = $('#introduction')[0].offsetTop - window.innerHeight * 0.05
    },
    showReadMore() {
      if(!this.isReadMore) {
        this.$refs.readMoreRef.style.display = 'block'
        this.$refs.readMoreRef.style.opacity = 1
        this.isReadMore = true
      } else {
        this.$refs.readMoreRef.style.display = 'none'
        this.$refs.readMoreRef.style.opacity = 0
        this.isReadMore = false
      }
    }
  },
  created() {
    let self = this
    this.calcWidth();
    this.setDeviceWidth({
      "width": this.DEVICE_WIDTH,
    })

    // 解決resize的問題
    window.addEventListener('resize', function(){
      window.location.assign('http://nmdap.udn.com.tw/election_2018/game_1/index.html')
    })

  },
  mounted() {
    this.statgeNum = this.stageID.length
    this.calcStageLocation()
    this.gameContentTop = this.HEADBAR_HEIGHT + 'px'
    this.gameContentMargin = ((window.clientWidth - this.DEVICE_WIDTH) * 0.5) + 'px'
  }
}
</script>
<style lang="scss">
  body {
    overflow: hidden;
  }
  h2 {
    margin: 0;
    // margin: 20px 0 0 0;
    text-align: center;
    line-height: 1.3;
    font-weight: 700;
  }
  h3 {
    font-size: 30px;
    font-weight: 700;
    line-height: 1.3;
  }

  .fresh-budget-row {
    padding: 10px 0;
    border-top: solid 1px #dcdcdc;

    .fresh-top {
      display: flex;
      padding: 5px;
    }
    .fresh-bottom {
      padding: 5px;
    }

    .fresh-name-wrapper {
      width: 20%;
      text-align: left;

      .fresh-name {
        background-color: #040351;
        color: #ffffff;
        padding: 3px;
      }
    }
    .fresh-cost-wrapper {
      width: 80%;
      right: 0;
      .fresh-cost {
        position: relative;
      }
      .fresh-cost-row-wrapper {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
      }
      .fresh-cost-row {
        width: 80%;

        @media screen and (min-width: 768px) {
          width: 50%;
        }  
      }
    }
    .fresh-2 {
      width: 25%;
      padding: 0 5px;
      display: flex;
      justify-content: center;
      align-items: start;
    }
    .fresh-3 {
      width: 25%;
      padding: 0 5px;
      display: flex;
      justify-content: center;
      align-items: start;
    }
    .fresh-money {
      width: 30%;
      display: flex;
      justify-content: flex-end;
      align-items: start;
      text-align: right;
      color: #ff4e00;
    }
    .fresh-description {
      position: relative;
      z-index: 1;
      color: #979595;
      .read-more-btn-text {
        text-decoration: underline;
        cursor: pointer;
      }
      .read-more-btn-circle {
        border-radius: 10px;
        color: #ffffff;
        background-color: #979595;
        cursor: pointer;
      }
    }
    .fresh-description-read-more-wrapper {
      position: relative;
      z-index: 2;
      display: none;
      width: 100%;
      padding: 10px;
      background-color: #ffffff;
      border: solid 1px #000000;
    }
    .fresh-total-money {
      text-align: end;
      font-size: 30px;
      color: #ff4e00;
    }
  }
</style>
