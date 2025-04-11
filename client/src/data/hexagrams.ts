export interface HexagramData {
  number: number;
  name: string;
  chineseName: string;
  description: string;
  image?: string;
  lineInterpretations: string[];
}

export const hexagrams: HexagramData[] = [
  { 
    number: 0,
    name: "Placeholder",
    chineseName: "Placeholder",
    description: "Placeholder, for more intuitive King Wen numbering",
    image: undefined,
    lineInterpretations: [
      "Placeholder",
      "Placeholder",
      "Placeholder",
      "Placeholder",
      "Placeholder",
      "Placeholder"
    ]
  },
  {
    number: 1,
    name: "Qian",
    chineseName: "乾",
    description: "創天：剛健有力，主動進取，持之以恆可成功。",
    image: "/images/hexagrams/01.svg",
    lineInterpretations: [
      "初九：潛龍勿用。",
      "九二：見龍在田，利見大人。",
      "九三：君子終日乾乾，夕惕若。",
      "九四：或躍在淵，無咎。",
      "九五：飛龍在天，利見大人。",
      "上九：亢龍有悔。"
    ]
  },
  {
    number: 2,
    name: "Kun",
    chineseName: "坤",
    description: "承地：柔順包容，謙卑奉獻，順勢而為可得吉。",
    image: "/images/hexagrams/02.svg",
    lineInterpretations: [
      "初六：履霜，堅冰至。",
      "六二：直方大，不習無不利。",
      "六三：含章可貞，或從王事。",
      "六四：括囊，無咎無譽。",
      "六五：黃裳，元吉。",
      "上六：龍戰於野，其血玄黃。"
    ]
  },
  {
    number: 3,
    name: "Zhun",
    chineseName: "屯",
    description: "始難：初創艱難，堅忍不拔，逐步成長。",
    image: "/images/hexagrams/03.svg",
    lineInterpretations: [
      "初九：磐桓，利建侯。",
      "六二：屯如邅如，乘馬班如。",
      "六三：即鹿無虞，惟入於林中。",
      "六四：乘馬班如，求婚媾，吉。",
      "九五：屯其膏，小貞吉，大貞凶。",
      "上六：乘馬班如，泣血漣如。"
    ]
  },
  {
    number: 4,
    name: "Meng",
    chineseName: "蒙",
    description: "蒙昧：年幼無知，宜求教導，謹慎學習。",
    image: "/images/hexagrams/04.svg",
    lineInterpretations: [
      "初六：發蒙，利用刑人。",
      "九二：包蒙，吉，納婦吉。",
      "六三：勿用取女，見金夫，不有躬。",
      "六四：困蒙，吝。",
      "六五：童蒙，吉。",
      "上九：擊蒙，不利為寇，利禦寇。"
    ]
  },
  {
    number: 5,
    name: "Xu",
    chineseName: "需",
    description: "等待：耐心等待，準備充分，時機成熟可成。",
    image: "/images/hexagrams/05.svg",
    lineInterpretations: [
      "初九：需於郊，利用恆，無咎。",
      "九二：需於沙，小有言，終吉。",
      "九三：需於泥，致寇至。",
      "六四：需於血，出自穴。",
      "九五：需於酒食，貞吉。",
      "上六：入於穴，有不速之客三人來，敬之終吉。"
    ]
  },
  {
    number: 6,
    name: "Song",
    chineseName: "訟",
    description: "爭訟：避免爭端，尋求調解，中止爭執為上。",
    image: "/images/hexagrams/06.svg",
    lineInterpretations: [
      "初六：不永所事，小有言，終吉。",
      "九二：不克訟，歸而逋，其邑人三百戶，無眚。",
      "六三：食舊德，貞厲，終吉，或從王事，無成。",
      "九四：不克訟，復即命，渝安貞，吉。",
      "九五：訟元吉。",
      "上九：或錫之鞶帶，終朝三褫之。"
    ]
  },
  {
    number: 7,
    name: "Shi",
    chineseName: "師",
    description: "軍旅：嚴明紀律，賢能領軍，團結一致可勝。",
    image: "/images/hexagrams/07.svg",
    lineInterpretations: [
      "初六：師出以律，否臧凶。",
      "九二：在師中吉，無咎，王三錫命。",
      "六三：師或輿尸，凶。",
      "六四：師左次，無咎。",
      "六五：田有禽，利執言，無咎，長子帥師。",
      "上六：大君有命，開國承家，小人勿用。"
    ]
  },
  {
    number: 8,
    name: "Bi",
    chineseName: "比",
    description: "親比：團結互助，誠心相交，吉祥如意。",
    image: "/images/hexagrams/08.svg",
    lineInterpretations: [
      "初六：有孚比之，無咎。",
      "六二：比之自內，貞吉。",
      "六三：比之匪人。",
      "六四：外比之，貞吉。",
      "九五：顯比，王用三驅，失前禽，邑人不誡，吉。",
      "上六：比之無首，凶。"
    ]
  },
  {
    number: 9,
    name: "Xiao Chu",
    chineseName: "小畜",
    description: "小畜：積小成大，循序漸進，耐心等待時機。",
    image: "/images/hexagrams/09.svg",
    lineInterpretations: [
      "初九：復自道，何其咎，吉。",
      "九二：牽復，吉。",
      "九三：輿說輻，夫妻反目。",
      "六四：有孚，血去惕出，無咎。",
      "九五：有孚攣如，富以其鄰。",
      "上九：既雨既處，尚德載，婦貞厲，月幾望，君子徵凶。"
    ]
  },
  {
    number: 10,
    name: "Lu",
    chineseName: "履",
    description: "履道：謹慎行事，遵循正道，敬畏權威可安。",
    image: "/images/hexagrams/10.svg",
    lineInterpretations: [
      "初九：素履，往無咎。",
      "九二：履道坦坦，幽人貞吉。",
      "六三：眇能視，跛能履，履虎尾，咥人凶，武人為大君。",
      "九四：履虎尾，愬愬終吉。",
      "九五：夬履，貞厲。",
      "上九：視履考祥，其旋元吉。"
    ]
  },
  {
    number: 11,
    name: "Tai",
    chineseName: "泰",
    description: "通泰：天地交泰，小往大來，順暢亨通。",
    image: "/images/hexagrams/11.svg",
    lineInterpretations: [
      "初九：拔茅茹，以其彙，徵吉。",
      "九二：包荒，用馮河，不遐遺，朋亡，得尚於中行。",
      "九三：無平不陂，無往不復，艱貞無咎。",
      "六四：翩翩不富，以其鄰，不戒以孚。",
      "六五：帝乙歸妹，以祉元吉。",
      "上六：城復於隍，勿用師，自邑告命，貞吝。"
    ]
  },
  {
    number: 12,
    name: "Pi",
    chineseName: "否",
    description: "閉塞：天地不交，小人得勢，君子宜守正。",
    image: "/images/hexagrams/12.svg",
    lineInterpretations: [
      "初六：拔茅茹，以其彙，貞吉亨。",
      "六二：包承，小人吉，大人否亨。",
      "六三：包羞。",
      "九四：有命無咎，疇離祉。",
      "九五：休否，大人吉，其亡其亡，繫於苞桑。",
      "上九：傾否，先否後喜。"
    ]
  },
  {
    number: 13,
    name: "Tong Ren",
    chineseName: "同人",
    description: "同人：志同道合，團結一致，大同世界。",
    image: "/images/hexagrams/13.svg",
    lineInterpretations: [
      "初九：同人於門，無咎。",
      "六二：同人於宗，吝。",
      "九三：伏戎於莽，升其高陵，三歲不興。",
      "九四：乘其墉，弗克攻，吉。",
      "九五：同人先號咷而後笑，大師克相遇。",
      "上九：同人於郊，無悔。"
    ]
  },
  {
    number: 14,
    name: "Da You",
    chineseName: "大有",
    description: "大有：財富豐盛，光明正大，分享眾人。",
    image: "/images/hexagrams/14.svg",
    lineInterpretations: [
      "初九：無交害，匪咎，艱則無咎。",
      "九二：大車以載，有攸往，無咎。",
      "九三：公用亨於天子，小人弗克。",
      "九四：匪其彭，無咎。",
      "六五：厥孚交如，威如吉。",
      "上九：自天祐之，吉無不利。"
    ]
  },
  {
    number: 15,
    name: "Qian",
    chineseName: "謙",
    description: "謙虛：謙遜待人，低調行事，終得吉祥。",
    image: "/images/hexagrams/15.svg",
    lineInterpretations: [
      "初六：謙謙君子，用涉大川，吉。",
      "六二：鳴謙，貞吉。",
      "九三：勞謙，君子有終，吉。",
      "六四：無不利，撝謙。",
      "六五：不富以其鄰，利用侵伐，無不利。",
      "上六：鳴謙，利用行師，徵邑國。"
    ]
  },
  {
    number: 16,
    name: "Yu",
    chineseName: "豫",
    description: "喜豫：順應時勢，樂觀積極，動而得利。",
    image: "/images/hexagrams/16.svg",
    lineInterpretations: [
      "初六：鳴豫，凶。",
      "六二：介於石，不終日，貞吉。",
      "六三：盱豫，悔，遲有悔。",
      "九四：由豫，大有得，勿疑，朋盍簪。",
      "六五：貞疾，恆不死。",
      "上六：冥豫，成有渝，無咎。"
    ]
  },
  {
    number: 17,
    name: "Sui",
    chineseName: "隨",
    description: "隨順：順應潮流，隨時而動，吉無不利。",
    image: "/images/hexagrams/17.svg",
    lineInterpretations: [
      "初九：官有渝，貞吉，出門交有功。",
      "六二：係小子，失丈夫。",
      "六三：係丈夫，失小子，隨有求得，利居貞。",
      "九四：隨有獲，貞凶，有孚在道，以明何咎。",
      "九五：孚於嘉，吉。",
      "上六：拘係之，乃從維之，王用亨於西山。"
    ]
  },
  {
    number: 18,
    name: "Gu",
    chineseName: "蠱",
    description: "蠱惑：修復腐敗，革故鼎新，需謹慎行事。",
    image: "/images/hexagrams/18.svg",
    lineInterpretations: [
      "初六：幹父之蠱，有子，考無咎，厲終吉。",
      "九二：幹母之蠱，不可貞。",
      "九三：幹父之蠱，小有悔，無大咎。",
      "六四：裕父之蠱，往見吝。",
      "六五：幹父之蠱，用譽。",
      "上九：不事王侯，高尚其事。"
    ]
  },
  {
    number: 19,
    name: "Lin",
    chineseName: "臨",
    description: "親臨：以上臨下，教化眾人，需誠心正意。",
    image: "/images/hexagrams/19.svg",
    lineInterpretations: [
      "初九：咸臨，貞吉。",
      "九二：咸臨，吉無不利。",
      "六三：甘臨，無攸利，既憂之，無咎。",
      "六四：至臨，無咎。",
      "六五：知臨，大君之宜，吉。",
      "上六：敦臨，吉無咎。"
    ]
  },
  {
    number: 20,
    name: "Guan",
    chineseName: "觀",
    description: "觀察：以德感人，靜觀其變，修身養性。",
    image: "/images/hexagrams/20.svg",
    lineInterpretations: [
      "初六：童觀，小人無咎，君子吝。",
      "六二：窺觀，利女貞。",
      "六三：觀我生，進退。",
      "六四：觀國之光，利用賓於王。",
      "九五：觀我生，君子無咎。",
      "上九：觀其生，君子無咎。"
    ]
  },
  {
    number: 21,
    name: "Shi He",
    chineseName: "噬嗑",
    description: "咬合：破除障礙，執法公正，需果斷行動。",
    image: "/images/hexagrams/21.svg",
    lineInterpretations: [
      "初九：屨校滅趾，無咎。",
      "六二：噬膚滅鼻，無咎。",
      "六三：噬臘肉，遇毒，小吝，無咎。",
      "九四：噬乾胏，得金矢，利艱貞，吉。",
      "六五：噬乾肉，得黃金，貞厲，無咎。",
      "上九：何校滅耳，凶。"
    ]
  },
  {
    number: 22,
    name: "Bi",
    chineseName: "賁",
    description: "裝飾：注重外表，修飾內在，適度為宜。",
    image: "/images/hexagrams/22.svg",
    lineInterpretations: [
      "初九：賁其趾，捨車而徒。",
      "六二：賁其須。",
      "九三：賁如濡如，永貞吉。",
      "六四：賁如皤如，白馬翰如，匪寇婚媾。",
      "六五：賁於丘園，束帛戔戔，吝，終吉。",
      "上九：白賁，無咎。"
    ]
  },
  {
    number: 23,
    name: "Bo",
    chineseName: "剝",
    description: "剝落：陽氣衰退，陰盛陽衰，宜守正待時。",
    image: "/images/hexagrams/23.svg",
    lineInterpretations: [
      "初六：剝床以足，蔑貞凶。",
      "六二：剝床以辨，蔑貞凶。",
      "六三：剝之無咎。",
      "六四：剝床以膚，凶。",
      "六五：貫魚以宮人寵，無不利。",
      "上九：碩果不食，君子得輿，小人剝廬。"
    ]
  },
  {
    number: 24,
    name: "Fu",
    chineseName: "復",
    description: "復返：陽氣復生，反本歸真，重新開始。",
    image: "/images/hexagrams/24.svg",
    lineInterpretations: [
      "初九：不遠復，無祗悔，元吉。",
      "六二：休復，吉。",
      "六三：頻復，厲無咎。",
      "六四：中行獨復。",
      "六五：敦復，無悔。",
      "上六：迷復，凶，有災眚，用行師，終有大敗。"
    ]
  },
  {
    number: 25,
    name: "Wu Wang",
    chineseName: "無妄",
    description: "無妄：純正無邪，順應自然，切勿妄動。",
    image: "/images/hexagrams/25.svg",
    lineInterpretations: [
      "初九：無妄，往吉。",
      "六二：不耕穫，不菑畬，則利有攸往。",
      "六三：無妄之災，或繫之牛，行人之得，邑人之災。",
      "九四：可貞，無咎。",
      "九五：無妄之疾，勿藥有喜。",
      "上九：無妄，行有眚，無攸利。"
    ]
  },
  {
    number: 26,
    name: "Da Chu",
    chineseName: "大畜",
    description: "大畜：蓄積力量，培養賢能，厚積薄發。",
    image: "/images/hexagrams/26.svg",
    lineInterpretations: [
      "初九：有厲，利已。",
      "九二：輿說輻。",
      "九三：良馬逐，利艱貞，曰閑輿衛，利有攸往。",
      "六四：童牛之牿，元吉。",
      "六五：豶豕之牙，吉。",
      "上九：何天之衢，亨。"
    ]
  },
  {
    number: 27,
    name: "Yi",
    chineseName: "頤",
    description: "養頤：注重養生，自求口實，謹言慎行。",
    image: "/images/hexagrams/27.svg",
    lineInterpretations: [
      "初九：捨爾靈龜，觀我朵頤，凶。",
      "六二：顛頤，拂經，於丘頤，徵凶。",
      "六三：拂頤，貞凶，十年勿用，無攸利。",
      "六四：顛頤，吉，虎視眈眈，其欲逐逐，無咎。",
      "六五：拂經，居貞吉，不可涉大川。",
      "上九：由頤，厲吉，利涉大川。"
    ]
  },
  {
    number: 28,
    name: "Da Guo",
    chineseName: "大過",
    description: "大過：棟樑過重，需非常之舉，謹慎應對。",
    image: "/images/hexagrams/28.svg",
    lineInterpretations: [
      "初六：藉用白茅，無咎。",
      "九二：枯楊生稊，老夫得其女妻，無不利。",
      "九三：棟橈，凶。",
      "九四：棟隆，吉，有它吝。",
      "九五：枯楊生華，老婦得士夫，無咎無譽。",
      "上六：過涉滅頂，凶，無咎。"
    ]
  },
  {
    number: 29,
    name: "Kan",
    chineseName: "坎",
    description: "坎險：身處險境，堅守正道，謹慎脫困。",
    image: "/images/hexagrams/29.svg",
    lineInterpretations: [
      "初六：習坎，入於坎窞，凶。",
      "九二：坎有險，求小得。",
      "六三：來之坎坎，險且枕，入於坎窞，勿用。",
      "六四：樽酒簋貳，用缶，納約自牖，終無咎。",
      "九五：坎不盈，祗既平，無咎。",
      "上六：繫用徽纆，寘於叢棘，三歲不得，凶。"
    ]
  },
  {
    number: 30,
    name: "Li",
    chineseName: "離",
    description: "離麗：附麗光明，保持明智，團結一致。",
    image: "/images/hexagrams/30.svg",
    lineInterpretations: [
      "初九：履錯然，敬之無咎。",
      "六二：黃離，元吉。",
      "九三：日昃之離，不鼓缶而歌，則大耋之嗟，凶。",
      "九四：突如其來如，焚如，死如，棄如。",
      "六五：出涕沱若，戚嗟若，吉。",
      "上九：王用出徵，有嘉折首，獲匪其醜，無咎。"
    ]
  },
  {
    number: 31,
    name: "Xian",
    chineseName: "咸",
    description: "感應：心心相印，相互感應，誠意動人。",
    image: "/images/hexagrams/31.svg",
    lineInterpretations: [
      "初六：咸其拇。",
      "六二：咸其腓，凶，居吉。",
      "九三：咸其股，執其隨，往吝。",
      "九四：貞吉悔亡，憧憧往來，朋從爾思。",
      "九五：咸其脢，無悔。",
      "上六：咸其輔頰舌。"
    ]
  },
  {
    number: 32,
    name: "Heng",
    chineseName: "恆",
    description: "恆久：持之以恆，堅守正道，長久穩定。",
    image: "/images/hexagrams/32.svg",
    lineInterpretations: [
      "初六：浚恆，貞凶，無攸利。",
      "九二：悔亡。",
      "九三：不恆其德，或承之羞，貞吝。",
      "九四：田無禽。",
      "六五：恆其德，貞，婦人吉，夫子凶。",
      "上六：振恆，凶。"
    ]
  },
  {
    number: 33,
    name: "Dun",
    chineseName: "遯",
    description: "退避：小人得勢，君子退隱，等待時機。",
    image: "/images/hexagrams/33.svg",
    lineInterpretations: [
      "初六：遯尾，厲，勿用有攸往。",
      "六二：執之用黃牛之革，莫之勝說。",
      "九三：繫遯，有疾厲，畜臣妾吉。",
      "九四：好遯，君子吉，小人否。",
      "九五：嘉遯，貞吉。",
      "上九：肥遯，無不利。"
    ]
  },
  {
    number: 34,
    name: "Da Zhuang",
    chineseName: "大壯",
    description: "大壯：陽氣盛大，剛健有力，需謹慎用之。",
    image: "/images/hexagrams/34.svg",
    lineInterpretations: [
      "初九：壯於趾，徵凶，有孚。",
      "九二：貞吉。",
      "九三：小人用壯，君子用罔，貞厲，羝羊觸藩，羸其角。",
      "九四：貞吉悔亡，藩決不羸，壯於大輿之輹。",
      "六五：喪羊於易，無悔。",
      "上六：羝羊觸藩，不能退，不能遂，無攸利，艱則吉。"
    ]
  },
  {
    number: 35,
    name: "Jin",
    chineseName: "晉",
    description: "進展：光明上升，逐步前進，終得榮耀。",
    image: "/images/hexagrams/35.svg",
    lineInterpretations: [
      "初六：晉如摧如，貞吉，罔孚，裕無咎。",
      "六二：晉如愁如，貞吉，受茲介福，於其王母。",
      "六三：眾允，悔亡。",
      "九四：晉如鼫鼠，貞厲。",
      "六五：悔亡，失得勿恤，往吉無不利。",
      "上九：晉其角，維用伐邑，厲吉無咎，貞吝。"
    ]
  },
  {
    number: 36,
    name: "Ming Yi",
    chineseName: "明夷",
    description: "明傷：光明受損，隱藏鋒芒，宜守正自保。",
    image: "/images/hexagrams/36.svg",
    lineInterpretations: [
      "初九：明夷於飛，垂其翼，君子於行，三日不食，有攸往，主人有言。",
      "六二：明夷，夷於左股，用拯馬壯，吉。",
      "九三：明夷於南狩，得其大首，不可疾，貞。",
      "六四：入於左腹，獲明夷之心，於出門庭。",
      "六五：箕子之明夷，利貞。",
      "上六：不明晦，初登於天，後入於地。"
    ]
  },
  {
    number: 37,
    name: "Jia Ren",
    chineseName: "家人",
    description: "家人：治家有道，上下和睦，家庭興旺。",
    image: "/images/hexagrams/37.svg",
    lineInterpretations: [
      "初九：閑有家，悔亡。",
      "六二：無攸遂，在中饋，貞吉。",
      "九三：家人嗃嗃，悔厲吉，婦子嘻嘻，終吝。",
      "六四：富家，大吉。",
      "九五：王假有家，勿恤，吉。",
      "上九：有孚威如，終吉。"
    ]
  },
  {
    number: 38,
    name: "Kui",
    chineseName: "睽",
    description: "乖睽：意見分歧，小事可為，需和而不同。",
    image: "/images/hexagrams/38.svg",
    lineInterpretations: [
      "初九：悔亡，喪馬勿逐，自復，見惡人，無咎。",
      "九二：遇主於巷，無咎。",
      "六三：見輿曳，其牛掣，其人天且劓，無初有終。",
      "九四：睽孤，遇元夫，交孚，厲無咎。",
      "六五：悔亡，厥宗噬膚，往何咎。",
      "上九：睽孤，見豕負塗，載鬼一車，先張之弧，後說之弧，匪寇婚媾，往遇雨則吉。"
    ]
  },
  {
    number: 39,
    name: "Jian",
    chineseName: "蹇",
    description: "險阻：身處困境，宜退守觀望，等待救援。",
    image: "/images/hexagrams/39.svg",
    lineInterpretations: [
      "初六：往蹇來譽。",
      "六二：王臣蹇蹇，匪躬之故。",
      "九三：往蹇來反。",
      "六四：往蹇來連。",
      "九五：大蹇，朋來。",
      "上六：往蹇來碩，吉，利見大人。"
    ]
  },
  {
    number: 40,
    name: "Xie",
    chineseName: "解",
    description: "解難：解除困境，化險為夷，宜速行動。",
    image: "/images/hexagrams/40.svg",
    lineInterpretations: [
      "初六：無咎。",
      "九二：田獲三狐，得黃矢，貞吉。",
      "六三：負且乘，致寇至，貞吝。",
      "九四：解而拇，朋至斯孚。",
      "六五：君子維有解，吉，有孚於小人。",
      "上六：公用射隼於高墉之上，獲之，無不利。"
    ]
  },
  {
    number: 41,
    name: "Sun",
    chineseName: "損",
    description: "減損：有所損失，以損下益上，謙受益。",
    image: "/images/hexagrams/41.svg",
    lineInterpretations: [
      "初九：已事遄往，無咎，酌損之。",
      "九二：利貞，徵凶，弗損益之。",
      "六三：三人行則損一人，一人行則得其友。",
      "六四：損其疾，使遄有喜，無咎。",
      "六五：或益之十朋之龜，弗克違，元吉。",
      "上九：弗損益之，無咎，貞吉，利有攸往，得臣無家。"
    ]
  },
  {
    number: 42,
    name: "Yi",
    chineseName: "益",
    description: "增益：有所增益，以益下損上，利於行動。",
    image: "/images/hexagrams/42.svg",
    lineInterpretations: [
      "初九：利用為大作，元吉，無咎。",
      "六二：或益之十朋之龜，弗克違，永貞吉，王用享於帝，吉。",
      "六三：益之用凶事，無咎，有孚中行，告公用圭。",
      "六四：中行告公從，利用為依遷國。",
      "九五：有孚惠心，勿問元吉，有孚惠我德。",
      "上九：莫益之，或擊之，立心勿恆，凶。"
    ]
  },
  {
    number: 43,
    name: "Guai",
    chineseName: "夬",
    description: "決斷：果斷除惡，揚善去邪，需謹慎行事。",
    image: "/images/hexagrams/43.svg",
    lineInterpretations: [
      "初九：壯於前趾，往不勝為咎。",
      "九二：惕號，莫夜有戎，勿恤。",
      "九三：壯於頰，有凶，君子夬夬，獨行遇雨，若濡有慍，無咎。",
      "九四：臀無膚，其行次且，牽羊悔亡，聞言不信。",
      "九五：莧陸夬夬，中行無咎。",
      "上六：無號，終有凶。"
    ]
  },
  {
    number: 44,
    name: "Gou",
    chineseName: "姤",
    description: "相遇：陰陽相遇，小心交往，防微杜漸。",
    image: "/images/hexagrams/44.svg",
    lineInterpretations: [
      "初六：繫於金柅，貞吉，有攸往，見凶，羸豕孚躢躅。",
      "九二：包有魚，無咎，不利賓。",
      "九三：臀無膚，其行次且，厲，無大咎。",
      "九四：包無魚，起凶。",
      "九五：以杞包瓜，含章，有隕自天。",
      "上九：姤其角，吝，無咎。"
    ]
  },
  {
    number: 45,
    name: "Cui",
    chineseName: "萃",
    description: "聚集：群聚一心，團結一致，利於大事。",
    image: "/images/hexagrams/45.svg",
    lineInterpretations: [
      "初六：有孚不終，乃亂乃萃，若號一握為笑，勿恤，往無咎。",
      "六二：引吉，無咎，孚乃利用禴。",
      "六三：萃如嗟如，無攸利，往無咎，小吝。",
      "九四：大吉，無咎。",
      "九五：萃有位，無咎，匪孚，元永貞，悔亡。",
      "上六：齎咨涕洟，無咎。"
    ]
  },
  {
    number: 46,
    name: "Sheng",
    chineseName: "升",
    description: "上升：循序漸進，努力向上，終得高升。",
    image: "/images/hexagrams/46.svg",
    lineInterpretations: [
      "初六：允升，大吉。",
      "九二：孚乃利用禴，無咎。",
      "九三：升虛邑。",
      "六四：王用亨於岐山，吉無咎。",
      "六五：貞吉，升階。",
      "上六：冥升，利於不息之貞。"
    ]
  },
  {
    number: 47,
    name: "Kun",
    chineseName: "困",
    description: "困乏：身處困境，堅守正道，等待救援。",
    image: "/images/hexagrams/47.svg",
    lineInterpretations: [
      "初六：臀困於株木，入於幽谷，三歲不覿。",
      "九二：困於酒食，朱紱方來，利用享祀，徵凶，無咎。",
      "六三：困於石，據於蒺藜，入於其宮，不見其妻，凶。",
      "九四：來徐徐，困於金車，吝，有終。",
      "九五：劓刖，困於赤紱，乃徐有說，利用祭祀。",
      "上六：困於葛藟，於臲卼，曰動悔有悔，徵吉。"
    ]
  },
  {
    number: 48,
    name: "Jing",
    chineseName: "井",
    description: "水井：修井養德，汲水濟人，需誠心奉獻。",
    image: "/images/hexagrams/48.svg",
    lineInterpretations: [
      "初六：井泥不食，舊井無禽。",
      "九二：井谷射鮒，甕敝漏。",
      "九三：井渫不食，為我心惻，可用汲，王明並受其福。",
      "六四：井甃，無咎。",
      "九五：井洌，寒泉食。",
      "上六：井收勿幕，有孚元吉。"
    ]
  },
  {
    number: 49,
    name: "Ge",
    chineseName: "革",
    description: "革故：除舊布新，革故鼎新，需順應時勢。",
    image: "/images/hexagrams/49.svg",
    lineInterpretations: [
      "初九：鞏用黃牛之革。",
      "六二：巳日乃革之，徵吉，無咎。",
      "九三：徵凶，貞厲，革言三就，有孚。",
      "九四：悔亡，有孚改命，吉。",
      "九五：大人虎變，未占有孚。",
      "上六：君子豹變，小人革面，徵凶，居貞吉。"
    ]
  },
  {
    number: 50,
    name: "Ding",
    chineseName: "鼎",
    description: "鼎盛：穩固根基，烹飪調和，利於新事業。",
    image: "/images/hexagrams/50.svg",
    lineInterpretations: [
      "初六：鼎顛趾，利出否，得妾以其子，無咎。",
      "九二：鼎有實，我仇有疾，不我能即，吉。",
      "九三：鼎耳革，其行塞，雉膏不食，方雨虧悔，終吉。",
      "九四：鼎折足，覆公餗，其形渥，凶。",
      "六五：鼎黃耳金鉉，利貞。",
      "上九：鼎玉鉉，大吉，無不利。"
    ]
  },
  {
    number: 51,
    name: "Zhen",
    chineseName: "震",
    description: "震動：雷霆震動，驚醒奮起，謹慎行動。",
    image: "/images/hexagrams/51.svg",
    lineInterpretations: [
      "初九：震來虩虩，後笑言啞啞，吉。",
      "六二：震來厲，億喪貝，跻於九陵，勿逐，七日得。",
      "六三：震蘇蘇，震行無眚。",
      "九四：震遂泥。",
      "六五：震往來厲，億無喪，有事。",
      "上六：震索索，視矍矍，徵凶，震不於其躬，於其鄰，無咎，婚媾有言。"
    ]
  },
  {
    number: 52,
    name: "Gen",
    chineseName: "艮",
    description: "止艮：適時而止，靜觀其變，修身養性。",
    image: "/images/hexagrams/52.svg",
    lineInterpretations: [
      "初六：艮其趾，無咎，利永貞。",
      "六二：艮其腓，不拯其隨，其心不快。",
      "九三：艮其限，列其夤，厲薰心。",
      "六四：艮其身，無咎。",
      "六五：艮其輔，言有序，悔亡。",
      "上九：敦艮，吉。"
    ]
  },
  {
    number: 53,
    name: "Jian",
    chineseName: "漸",
    description: "漸進：循序漸進，穩步向前，終得成功。",
    image: "/images/hexagrams/53.svg",
    lineInterpretations: [
      "初六：鴻漸於干，小子厲，有言，無咎。",
      "六二：鴻漸於磐，飲食衎衎，吉。",
      "九三：鴻漸於陸，夫徵不復，婦孕不育，凶，利禦寇。",
      "六四：鴻漸於木，或得其桷，無咎。",
      "九五：鴻漸於陵，婦三歲不孕，終莫之勝，吉。",
      "上九：鴻漸於陸，其羽可用為儀，吉。"
    ]
  },
  {
    number: 54,
    name: "Gui Mei",
    chineseName: "歸妹",
    description: "歸妹：女子出嫁，需正位以待，切勿妄動。",
    image: "/images/hexagrams/54.svg",
    lineInterpretations: [
      "初九：歸妹以娣，跛能履，徵吉。",
      "九二：眇能視，利幽人之貞。",
      "六三：歸妹以須，反歸以娣。",
      "九四：歸妹愆期，遲歸有時。",
      "六五：帝乙歸妹，其君之袂，不如其娣之袂良，月幾望，吉。",
      "上六：女承筐無實，士刲羊無血，無攸利。"
    ]
  },
  {
    number: 55,
    name: "Feng",
    chineseName: "豐",
    description: "豐盛：盛大光明，需謹慎持盈，防過猶不及。",
    image: "/images/hexagrams/55.svg",
    lineInterpretations: [
      "初九：遇其配主，雖旬無咎，往有尚。",
      "六二：豐其蔀，日中見斗，往得疑疾，有孚發若，吉。",
      "九三：豐其沛，日中見昧，折其右肱，無咎。",
      "九四：豐其蔀，日中見斗，遇其夷主，吉。",
      "六五：來章，有慶譽，吉。",
      "上六：豐其屋，蔀其家，窺其戶，闃其無人，三歲不覿，凶。"
    ]
  },
  {
    number: 56,
    name: "Lu",
    chineseName: "旅",
    description: "旅居：客居他鄉，謹慎小心，宜守正道。",
    image: "/images/hexagrams/56.svg",
    lineInterpretations: [
      "初六：旅瑣瑣，斯其所取災。",
      "六二：旅即次，懷其資，得童僕貞。",
      "九三：旅焚其次，喪其童僕，貞厲。",
      "九四：旅於處，得其資斧，我心不快。",
      "六五：射雉一矢亡，終以譽命。",
      "上九：鳥焚其巢，旅人先笑後號咷，喪牛於易，凶。"
    ]
  },
  {
    number: 57,
    name: "Xun",
    chineseName: "巽",
    description: "巽順：柔順謙卑，隨風而行，循序漸進。",
    image: "/images/hexagrams/57.svg",
    lineInterpretations: [
      "初六：進退，利武人之貞。",
      "九二：巽在床下，用史巫紛若，吉無咎。",
      "九三：頻巽，吝。",
      "六四：悔亡，田獲三品。",
      "九五：貞吉悔亡，無不利，無初有終，先庚三日，後庚三日，吉。",
      "上九：巽在床下，喪其資斧，貞凶。"
    ]
  },
  {
    number: 58,
    name: "Dui",
    chineseName: "兌",
    description: "喜兌：和悅交流，言笑晏晏，利於正道。",
    image: "/images/hexagrams/58.svg",
    lineInterpretations: [
      "初九：和兌，吉。",
      "九二：孚兌，吉，悔亡。",
      "六三：來兌，凶。",
      "九四：商兌未寧，介疾有喜。",
      "九五：孚於剝，有厲。",
      "上六：引兌。"
    ]
  },
  {
    number: 59,
    name: "Huan",
    chineseName: "渙",
    description: "渙散：離散之後，重新凝聚，需誠心團結。",
    image: "/images/hexagrams/59.svg",
    lineInterpretations: [
      "初六：用拯馬壯，吉。",
      "九二：渙奔其機，悔亡。",
      "六三：渙其躬，無悔。",
      "六四：渙其群，元吉，渙有丘，匪夷所思。",
      "九五：渙汗其大號，渙王居，無咎。",
      "上九：渙其血，去逖出，無咎。"
    ]
  },
  {
    number: 60,
    name: "Jie",
    chineseName: "節",
    description: "節制：適度節制，有節有度，利於行事。",
    image: "/images/hexagrams/60.svg",
    lineInterpretations: [
      "初九：不出戶庭，無咎。",
      "九二：不出門庭，凶。",
      "六三：不節若，則嗟若，無咎。",
      "六四：安節，亨。",
      "九五：甘節，吉，往有尚。",
      "上六：苦節，貞凶，悔亡。"
    ]
  },
  {
    number: 61,
    name: "Zhong Fu",
    chineseName: "中孚",
    description: "中孚：誠信感人，中心信實，利於涉險。",
    image: "/images/hexagrams/61.svg",
    lineInterpretations: [
      "初九：虞吉，有他不燕。",
      "九二：鳴鶴在陰，其子和之，我有好爵，吾與爾靡之。",
      "六三：得敵，或鼓或罷，或泣或歌。",
      "六四：月幾望，馬匹亡，無咎。",
      "九五：有孚攣如，無咎。",
      "上九：翰音登於天，貞凶。"
    ]
  },
  {
    number: 62,
    name: "Xiao Guo",
    chineseName: "小過",
    description: "小過：小有過錯，謹慎小心，宜靜不宜動。",
    image: "/images/hexagrams/62.svg",
    lineInterpretations: [
      "初六：飛鳥以凶。",
      "六二：過其祖，遇其妣，不及其君，遇其臣，無咎。",
      "九三：弗過防之，從或戕之，凶。",
      "九四：無咎，弗過遇之，往厲必戒，勿用永貞。",
      "六五：密雲不雨，自我西郊，公弋取彼在穴。",
      "上六：弗遇過之，飛鳥離之，凶，是謂災眚。"
    ]
  },
  {
    number: 63,
    name: "Ji Ji",
    chineseName: "既濟",
    description: "既濟：事已完成，持盈保泰，防微杜漸。",
    image: "/images/hexagrams/63.svg",
    lineInterpretations: [
      "初九：曳其輪，濡其尾，無咎。",
      "六二：婦喪其茀，勿逐，七日得。",
      "九三：高宗伐鬼方，三年克之，小人勿用。",
      "六四：繻有衣袽，終日戒。",
      "九五：東鄰殺牛，不如西鄰之禴祭，實受其福。",
      "上六：濡其首，厲。"
    ]
  },
  {
    number: 64,
    name: "Wei Ji",
    chineseName: "未濟",
    description: "未濟：尚未完成，需謹慎行事，終可成功。",
    image: "/images/hexagrams/64.svg",
    lineInterpretations: [
      "初六：濡其尾，吝。",
      "九二：曳其輪，貞吉。",
      "六三：未濟，徵凶，利涉大川。",
      "九四：貞吉悔亡，震用伐鬼方，三年有賞於大國。",
      "六五：貞吉，無悔，君子之光，有孚吉。",
      "上九：有孚於飲酒，無咎，濡其首，有孚失是。"
    ]
  }
]