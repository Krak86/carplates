(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(a,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"d",(function(){return m})),n.d(e,"c",(function(){return v})),n.d(e,"e",(function(){return o})),n.d(e,"a",(function(){return i}));var l=n(118),u=50,m={vendor:0,profileName:"",avatar:"",mail:""},v={itemRequest:"",imageRequest:"",itemResponse:{PartitionKey:"",RowKey:"",body:"",brand:"",capacity:"",color:"",d_reg:"",dep:"",dep_code:"",fuel:"",kind:"",make_year:"",model:"",n_reg_new:"",oper_code:"",oper_name:"",own_weight:"",person:"",purpose:"",reg_addr_koatuu:"",total_weight:"",region:""},itemsList:[],imagesPlatesMania:[],imagesRia:[],navigation:{url:"home"},drawerToogled:!1,itemIsLoading:!1,itemHasErrored:!1,itemIsLoaded:!1,responseIsEmpty:!0,itemSearching:l.b.plate,vinRequest:"",vinResponse:{Count:0,Message:"",SearchCriteria:"",Results:[]},vinsList:[],loggedIn:m,imageRiaLoaded:!1,imageCarsmaniaLoaded:!1,lang:0,favorites:[],badges:0,itemsMerging:!1},o={"АА":"Київ","КА":"Київ","АІ":"Київська область","КІ":"Київська область","АВ":"Вінницька область","КВ":"Вінницька область","АС":"Волинська область","КС":"Волинська область","АЕ":"Дніпропетровська область","КЕ":"Дніпропетровська область","АК":"АР Крим","КК":"АР Крим","АН":"Донецька область","КН":"Донецька область","АМ":"Житомирська область","КМ":"Житомирська область","АО":"Закарпатська область","КО":"Закарпатська область","АР":"Запоріжська область","КР":"Запоріжська область","АТ":"Івано-Франківська область","КТ":"Івано-Франківська область","ВА":"Кіровоградська область","НА":"Кіровоградська область","ВВ":"Луганська область","НВ":"Луганська область","ВС":"Львівська область","НС":"Львівська область","ВЕ":"Миколаївська область","НЕ":"Миколаївська область","ВН":"Одеська область","НН":"Одеська область","ВІ":"Полтавська область","НІ":"Полтавська область","ВК":"Рівненська область","НК":"Рівненська область","СН":"Севастополь","ІН":"Севастополь","ВМ":"Сумська область","НМ":"Сумська область","ВО":"Тернопільська область","НО":"Тернопільська область","АХ":"Харьківська область","КХ":"Харьківська область","ВТ":"Херсонська область","НТ":"Херсонська область","ВХ":"Хмельницька область","НХ":"Хмельницька область","СА":"Черкаська область","ІА":"Черкаська область","СВ":"Чернігівська область","ІВ":"Чернігівська область","СЕ":"Черновіцька область","ІЕ":"Черновіцька область"},i={getDataByPlateUrl:"",getDataByVinUrl:"https://vpic.nhtsa.dot.gov/api/vehicles/decodevin",getImageByNameUrl:"https://pixabay.com/api/?key=",getImagesByCarplateUrl_1:"https://platesmania.com/mobile/api_photo.php",getImagesByCarplateUrl_2:"https://avto-nomer.ru/mobile/api_photo.php",CarPlatesUrl:"https://platesmania.com",CarPlatesUrl_2:"https://avto-nomer.ru",CarPlatesName_1:"platesmania.com",CarPlatesName_2:"avto-nomer.ru",carPlateRecMlApiUrl:"",riaUrl:"https://developers.ria.com/auto",riaUrlPublic:"https://auto.ria.com"}},202:function(a,e,n){"use strict";n.d(e,"a",(function(){return l}));var l=[{name:"Armstrong Siddeley",value:5276},{name:"Alfa Romeo",value:3},{name:"Aston Martin",value:5},{name:"Austin Healey",value:4355},{name:"BMW Alpina",value:99},{name:"Fiat Abarth",value:4459},{name:"Bio Auto",value:3127},{name:"Detroit Electric",value:4883},{name:"De Lorean",value:3071},{name:"Dr Motor",value:5051},{name:"Iran Khodro",value:3821},{name:"Great Wall",value:124},{name:"Jinbei Minibusus",value:4549},{name:"King Long",value:2676},{name:"Land Rover",value:37},{name:"Praga Baby",value:2728},{name:"Ssang Yong",value:73},{name:"Think Global",value:4237},{name:"Thunder Tiger",value:4033},{name:"Van Hool",value:206},{name:"Abarth",value:5166},{name:"Acura",value:98},{name:"Adler",value:2396},{name:"Aero",value:5165},{name:"Aixam",value:2},{name:"Alpine",value:100},{name:"Altamarea",value:3988},{name:"AMC",value:5821},{name:"Anaig",value:5769},{name:"Aro",value:101},{name:"Artega",value:3105},{name:"Asia",value:4},{name:"AsiaStar",value:5793},{name:"Audi",value:6},{name:"Austin",value:7},{name:"Autobianchi",value:102},{name:"Avia",value:2077},{name:"Baoya",value:5245},{name:"Barkas",value:103},{name:"Баркас",value:103},{name:"Baw",value:1540},{name:"Beijing",value:105},{name:"Bentley",value:8},{name:"Bertone",value:106},{name:"Blonell",value:108},{name:"BMW",value:9},{name:"Borgward",value:5240},{name:"Brilliance",value:329},{name:"Bristol",value:10},{name:"Bugatti",value:109},{name:"Buick",value:110},{name:"BYD",value:386},{name:"Cadillac",value:11},{name:"Caterham",value:3221},{name:"Chana",value:407},{name:"Changan",value:1580},{name:"Changhe",value:1567},{name:"Chery",value:190},{name:"Chevrolet",value:13},{name:"Chrysler",value:14},{name:"Citroen",value:15},{name:"Dacia",value:17},{name:"Dadi",value:198},{name:"Daewoo",value:18},{name:"DAF",value:115},{name:"VDL",value:1441},{name:"Dagger",value:3717},{name:"Daihatsu",value:19},{name:"Daimler",value:20},{name:"Datsun",value:4206},{name:"Derways",value:4328},{name:"DKW",value:2243},{name:"Dodge",value:118},{name:"Dongfeng",value:308},{name:"DS",value:4495},{name:"Eagle",value:120},{name:"Auwarter",value:1413},{name:"Estrima",value:3921},{name:"FAW",value:121},{name:"Ferrari",value:22},{name:"Fiat",value:23},{name:"Fisker",value:3444},{name:"Ford",value:24},{name:"Fornasari",value:3104},{name:"FSO",value:25},{name:"FUQI",value:197},{name:"Gac",value:4506},{name:"Geely",value:185},{name:"Geo",value:2790},{name:"GMC",value:123},{name:"Gonow",value:183},{name:"Groz",value:1575},{name:"Hafei",value:191},{name:"Haima",value:3674},{name:"Hanomag",value:1784},{name:"Hansa",value:2053},{name:"Haval",value:5456},{name:"Hawtai",value:5791},{name:"Hindustan",value:3411},{name:"Honda",value:28},{name:"HongXing",value:5572},{name:"Horch",value:5624},{name:"Huabei",value:2595},{name:"Huanghai",value:388},{name:"Humber",value:3002},{name:"Hummer",value:127},{name:"Humvee",value:4663},{name:"Hyundai",value:29},{name:"Infiniti",value:128},{name:"Innocenti",value:4273},{name:"Isuzu",value:30},{name:"ItalCar",value:3757},{name:"Iveco",value:175},{name:"JAC",value:317},{name:"Jaguar",value:31},{name:"JCB",value:1590},{name:"Jeep",value:32},{name:"Jiangnan",value:335},{name:"Jinbei",value:2231},{name:"JMC",value:3018},{name:"Jonway",value:1574},{name:"Karosa",value:412},{name:"Kia",value:33},{name:"KingWoo",value:4606},{name:"Kirkham",value:4843},{name:"Koenigsegg",value:2643},{name:"Konecranes",value:4e3},{name:"Lada",value:5553},{name:"Lamborghini",value:35},{name:"Lancia",value:36},{name:"Landwind",value:406},{name:"LDV",value:134},{name:"Lexus",value:38},{name:"Lichi",value:5339},{name:"Lifan",value:334},{name:"Lincoln",value:135},{name:"Lotus",value:41},{name:"LTI",value:136},{name:"Luxgen",value:4269},{name:"Marshell",value:4064},{name:"Maruti",value:139},{name:"Maserati",value:45},{name:"Maybach",value:46},{name:"Mazda",value:47},{name:"McLaren",value:3101},{name:"MEGA",value:1904},{name:"Mercedes-Benz",value:48},{name:"Mercury",value:144},{name:"Merkur",value:3948},{name:"MG",value:49},{name:"Microcar",value:6055},{name:"Miles",value:4528},{name:"MINI",value:147},{name:"Mitsubishi",value:52},{name:"Mitsuoka",value:402},{name:"Morgan",value:53},{name:"Morris",value:54},{name:"MPM",value:5039},{name:"MYBRO",value:5138},{name:"Nissan",value:55},{name:"Norster",value:2489},{name:"Nysa",value:2045},{name:"Oldsmobile",value:148},{name:"Oltcit",value:2963},{name:"Opel",value:56},{name:"Packard",value:3193},{name:"Pagani",value:2644},{name:"Peerless",value:1852},{name:"Peg-Perego",value:3446},{name:"Peterbilt",value:346},{name:"Peugeot",value:58},{name:"Pininfarina",value:3590},{name:"Pinzgauer",value:3215},{name:"Plymouth",value:181},{name:"Pontiac",value:149},{name:"Porsche",value:59},{name:"Proton",value:60},{name:"Qifeng",value:5340},{name:"Quicksilver",value:1332},{name:"Ram",value:4369},{name:"Ravon",value:4681},{name:"Renault",value:62},{name:"Renault Samsung",value:4698},{name:"Rezvani",value:4466},{name:"Rimac",value:3330},{name:"Robeta",value:5761},{name:"Rolls-Royce",value:63},{name:"Rover",value:64},{name:"Saab",value:65},{name:"Saipa",value:3437},{name:"Saleen",value:196},{name:"Samand",value:192},{name:"Samson",value:3972},{name:"Samsung",value:325},{name:"Saturn",value:331},{name:"Sceo",value:2734},{name:"Scion",value:3268},{name:"SEAT",value:67},{name:"Secma",value:2492},{name:"Selena",value:1726},{name:"Shelby",value:3100},{name:"Shuanghuan",value:195},{name:"Sidetracker",value:4003},{name:"Skoda",value:70},{name:"SMA",value:311},{name:"Smart",value:71},{name:"SouEast",value:194},{name:"Soyat",value:3212},{name:"Spyker",value:411},{name:"Star",value:214},{name:"Studebaker",value:3228},{name:"Subaru",value:75},{name:"Sunbeam",value:385},{name:"Suzuki",value:76},{name:"T-King",value:5341},{name:"Talbot",value:77},{name:"Tarpan",value:2497},{name:"TATA",value:78},{name:"Tatra",value:204},{name:"Tazzari",value:3922},{name:"Tesla",value:2233},{name:"Think",value:6092},{name:"Tianma",value:1578},{name:"Tiger",value:2050},{name:"Tofas",value:2552},{name:"Toyota",value:79},{name:"Trabant",value:345},{name:"Triumph",value:80},{name:"TVR",value:81},{name:"Ultima",value:3017},{name:"Vantage",value:5873},{name:"Vauxhall",value:82},{name:"Venturi",value:83},{name:"Vepr",value:3320},{name:"Volkswagen",value:84},{name:"Volvo",value:85},{name:"Wanderer",value:2021},{name:"Wanfeng",value:2403},{name:"Wartburg",value:339},{name:"Wiesmann",value:1992},{name:"Willys",value:1820},{name:"Wuling",value:2653},{name:"Xiaolong",value:3452},{name:"Xinkai",value:338},{name:"Yogomo",value:5285},{name:"Yugo",value:87},{name:"Zastava",value:2309},{name:"Zimmer",value:2958},{name:"Zotye",value:3610},{name:"Zuk",value:3089},{name:"ZX",value:322},{name:"Богдан",value:188},{name:"Бронто",value:3e3},{name:"ВАЗ",value:88},{name:"ВИС",value:90},{name:"ГАЗ",value:91},{name:"ГолАЗ",value:410},{name:"ЕРАЗ",value:170},{name:"Жук",value:169},{name:"ЗАЗ",value:89},{name:"ЗИЛ",value:168},{name:"ЗИМ",value:1544},{name:"ЗИС",value:186},{name:"ИЖ",value:92},{name:"ЛуАЗ",value:189},{name:"Москвич",value:94},{name:"АЗЛК",value:94},{name:"Прицеп",value:154},{name:"РАФ",value:327},{name:"СеАЗ",value:96},{name:"СМЗ",value:2491},{name:"SPEV",value:1351},{name:"ТагАЗ",value:4537},{name:"ТАМ",value:341},{name:"ТогАЗ",value:2638},{name:"Тренер",value:4038},{name:"УАЗ",value:93},{name:"Циклон",value:4021},{name:"Эстония",value:2307}]},203:function(a,e,n){"use strict";n.d(e,"a",(function(){return l}));var l=[{name:"ABM",value:3875},{name:"Access",value:1463},{name:"Acxa",value:2282},{name:"Adler",value:2396},{name:"Adly",value:1569},{name:"Aeon",value:1004},{name:"AGT",value:1770},{name:"Aie motor",value:1465},{name:"AIMA",value:4945},{name:"Aisle-Master",value:3986},{name:"Akumoto",value:2762},{name:"Alesin",value:4103},{name:"Alfa",value:2393},{name:"Alfacore Seev",value:5350},{name:"Alfamoto",value:1558},{name:"Alpha",value:2108},{name:"Alphasports",value:1009},{name:"Amazing Scooter",value:5009},{name:"American ironhorse",value:1012},{name:"Apollo",value:4164},{name:"Aprilia",value:1014},{name:"Arctic cat",value:1581},{name:"Argo",value:389},{name:"Ariel",value:404},{name:"Armada Moto",value:3151},{name:"Arora",value:4968},{name:"Asia Wing",value:5857},{name:"Asia-moto",value:4567},{name:"Atala",value:2834},{name:"Atk",value:1015},{name:"atMoto",value:4364},{name:"ATV",value:2521},{name:"Auto Moto",value:2659},{name:"Avantis",value:4209},{name:"Azimut",value:1662},{name:"Baja",value:1741},{name:"Bajaj",value:3662},{name:"Baltmotors",value:4030},{name:"BAODIAO",value:4317},{name:"Baotian",value:2232},{name:"Barracuda",value:6085},{name:"Bashan",value:2431},{name:"Baumann",value:3976},{name:"Benelli",value:1020},{name:"Benyco",value:4464},{name:"Benzhou",value:5397},{name:"Beta",value:1021},{name:"Big Bear Choppers",value:4564},{name:"Big Sam G",value:4443},{name:"Bimota",value:3031},{name:"Birel",value:2637},{name:"Blata",value:2377},{name:"Bluera",value:4981},{name:"BMW",value:9},{name:"Board",value:5545},{name:"Bobcat",value:1618},{name:"Bombardier",value:4789},{name:"Bonez",value:3058},{name:"Boom Trikes",value:2574},{name:"Booster",value:3911},{name:"BPG-Werks",value:3615},{name:"Bravis",value:5431},{name:"Bravo",value:2987},{name:"BRIG",value:1665},{name:"Brixton Motorcycles",value:6086},{name:"BRP",value:1471},{name:"BSA",value:3761},{name:"BT",value:4909},{name:"Buell",value:1031},{name:"Bugtrail",value:3506},{name:"BWK",value:2536},{name:"BWS",value:4800},{name:"Cagiva",value:1033},{name:"Campagna",value:3781},{name:"Cannondale",value:5018},{name:"CARGO",value:4327},{name:"Carroli",value:5852},{name:"Catran",value:2820},{name:"Cectek",value:2079},{name:"Celebrity",value:2228},{name:"Cezet",value:2002},{name:"Cezeta",value:5644},{name:"Cf moto",value:1037},{name:"Challenger",value:2262},{name:"Chenlon",value:4363},{name:"Chongqing Wonjan",value:3782},{name:"Citycoco",value:5568},{name:"Club Сar",value:2372},{name:"Comman",value:3469},{name:"Commandor",value:2847},{name:"Corrado",value:1547},{name:"Corsa",value:5571},{name:"Cougar",value:3952},{name:"CPI",value:1043},{name:"Crafter",value:4099},{name:"CRG",value:2674},{name:"Crosser",value:3026},{name:"Custom Culture",value:5406},{name:"D-MONIAK",value:1692},{name:"Dabra",value:5699},{name:"Daelim",value:1047},{name:"Dafier",value:3653},{name:"DASY",value:3118},{name:"Dayun",value:3473},{name:"Defiant",value:1542},{name:"Delta",value:1560},{name:"Derbi",value:1938},{name:"Df motor",value:1054},{name:"DFL",value:3816},{name:"Diamo",value:1057},{name:"DINLI",value:2660},{name:"Dirtbike",value:5066},{name:"Discovery",value:2437},{name:"DKW",value:2243},{name:"Drift Trike",value:4907},{name:"Drive King",value:5908},{name:"Ducati",value:1060},{name:"E - ATV",value:3183},{name:"E-Cult",value:4872},{name:"E-Kross",value:5607},{name:"E-Madix",value:4809},{name:"E-Ton",value:4279},{name:"E-Twow",value:4602},{name:"E-Z-GO",value:2490},{name:"Eagle",value:120},{name:"East Dragon",value:2310},{name:"Eco-Extreme",value:3924},{name:"EcoMoto",value:5483},{name:"EF-TK",value:4641},{name:"Eglem",value:4952},{name:"Eglmoto",value:5490},{name:"EH Line",value:5472},{name:"Electric Scooter",value:5973},{name:"Electrowin",value:5476},{name:"Elwinn",value:5469},{name:"Emco",value:6082},{name:"EMU Alltrack",value:2467},{name:"Epella",value:5659},{name:"Eriskay",value:1548},{name:"ESO",value:6032},{name:"Espero",value:2558},{name:"Eurotex",value:4624},{name:"EvoBike",value:5595},{name:"Exdrive",value:5067},{name:"Explorer",value:4964},{name:"Fada",value:1549},{name:"Falcon",value:1732},{name:"Fantic",value:2438},{name:"Farmer",value:3163},{name:"Favorit",value:3298},{name:"Feishen",value:3919},{name:"Flybo",value:1550},{name:"Flyer",value:5098},{name:"Forte",value:3164},{name:"Fortune",value:2759},{name:"Forward",value:2275},{name:"Fosti",value:1069},{name:"Foton",value:187},{name:"FoxWell",value:4210},{name:"Freedomotor",value:2321},{name:"FreeGo",value:5594},{name:"Futong",value:1941},{name:"FYM",value:1573},{name:"G&A",value:1566},{name:"G-max",value:1561},{name:"GAMAX",value:4134},{name:"Garelli",value:1071},{name:"Gas gas",value:1570},{name:"Geeli",value:5559},{name:"Geely",value:185},{name:"Genata",value:3844},{name:"Generic",value:3205},{name:"Gentoya",value:5897},{name:"Geon",value:1976},{name:"Gepard",value:2280},{name:"GerioMobil",value:2509},{name:"Gibbs",value:4058},{name:"Gilera",value:1077},{name:"Gladiator",value:4560},{name:"GM",value:3220},{name:"Godzilla",value:3828},{name:"Goes",value:1230},{name:"Gogoro",value:4301},{name:"Golf Car",value:4316},{name:"Goped",value:5690},{name:"Groz",value:1575},{name:"Guzzi",value:1128},{name:"Haibike",value:5410},{name:"Hamer",value:2621},{name:"Hammer",value:2432},{name:"Hammerhead",value:4527},{name:"Hanway",value:4151},{name:"Haobon",value:3872},{name:"Haojin",value:6012},{name:"Harley-Davidson",value:1078},{name:"Harlo",value:4049},{name:"Havana",value:5666},{name:"Hecht",value:4264},{name:"Hercules",value:3655},{name:"Hero Electric",value:4224},{name:"Hero Majestic",value:4158},{name:"Hero Splendor",value:4365},{name:"Hisun",value:2468},{name:"Honda",value:28},{name:"Hongda",value:3997},{name:"Honling",value:2183},{name:"Honor",value:2944},{name:"Hornet",value:5542},{name:"Hors",value:2e3},{name:"Horse",value:2424},{name:"HP Power",value:3775},{name:"Huanma",value:5689},{name:"Huatian",value:1577},{name:"Hubtex",value:3977},{name:"Hunter",value:2384},{name:"Huoniao",value:2683},{name:"Hupper",value:3686},{name:"Husaberg",value:2092},{name:"Husqvarna",value:1085},{name:"Hussar",value:2071},{name:"Hyosung",value:1086},{name:"IFA (ИФА)",value:1486},{name:"Imperial",value:2081},{name:"Indian",value:1087},{name:"Infinum",value:4798},{name:"Intrepid",value:4169},{name:"Invacare",value:5414},{name:"Irbis",value:3931},{name:"Iron Motorcycles",value:5094},{name:"Isuzu",value:30},{name:"Italjet",value:1089},{name:"Jawa",value:1487},{name:"Jazz",value:3177},{name:"JBW",value:2661},{name:"Jeek",value:5831},{name:"Jialing",value:2705},{name:"Jianshe",value:1093},{name:"Jieda",value:2870},{name:"JimStar",value:2486},{name:"JINCHENG",value:2675},{name:"Jinding",value:3207},{name:"Jinling",value:4044},{name:"Jinlun",value:2799},{name:"Jinyee",value:4100},{name:"Jmstar",value:4146},{name:"John Deere",value:1583},{name:"Johnny Pag",value:4362},{name:"Jonway",value:1574},{name:"Joyner",value:2357},{name:"Jumbo",value:1896},{name:"Junak",value:4067},{name:"Juneng",value:4772},{name:"Kainuo",value:4411},{name:"Kaitong",value:4794},{name:"Kallio",value:5810},{name:"Kaminah",value:3898},{name:"Kangchao",value:3937},{name:"Kangda",value:4383},{name:"Kansas",value:4806},{name:"Kanuni",value:1100},{name:"Kavaki Motor",value:4724},{name:"Kawasaki",value:176},{name:"Kayo",value:2352},{name:"Kazuma",value:2753},{name:"Keeway",value:1101},{name:"Keine",value:5005},{name:"Kenrod",value:3474},{name:"Kentoya",value:4728},{name:"Kewesekl",value:1681},{name:"Kindroad",value:5957},{name:"Kinetik",value:4360},{name:"KingSong",value:5638},{name:"Kingway",value:3475},{name:"Kinlon",value:3192},{name:"Kinroad",value:1499},{name:"Kioti",value:3429},{name:"Kosmic",value:5021},{name:"Kovi",value:5939},{name:"Kreidler",value:4776},{name:"Kross",value:2826},{name:"KTM",value:1104},{name:"Kv",value:3814},{name:"KXD moto",value:4115},{name:"Kymco",value:1105},{name:"Kymera",value:3260},{name:"Lambretta",value:1106},{name:"Land Tamer",value:5171},{name:"Lantana",value:2493},{name:"Laverda",value:1985},{name:"Leader",value:1628},{name:"Leike",value:4625},{name:"Leopard",value:2442},{name:"Lepton",value:5971},{name:"Lexmoto",value:4605},{name:"Liberty GMG",value:4098},{name:"Lifan",value:334},{name:"Like.Bike",value:5167},{name:"Lingben",value:4990},{name:"Linhai",value:1109},{name:"Lml",value:1110},{name:"Loncin",value:2026},{name:"Longjia",value:4826},{name:"LZ",value:3923},{name:"MadAss",value:3909},{name:"Maja",value:5008},{name:"Makc",value:2315},{name:"Malaguti",value:1115},{name:"Malanca",value:1116},{name:"Mar-co",value:3989},{name:"Marsun",value:1551},{name:"Masai",value:4866},{name:"Mash",value:5538},{name:"Matador",value:4361},{name:"Max Trailer",value:3987},{name:"Maxxter",value:5488},{name:"MBK",value:2223},{name:"MegaStar",value:3783},{name:"Megelli",value:2075},{name:"Meiduo",value:4139},{name:"Melex",value:2057},{name:"Menila",value:2433},{name:"Metrakit",value:3084},{name:"Mikilon",value:3147},{name:"Milan",value:5019},{name:"MINI",value:147},{name:"Miro",value:2496},{name:"Mista",value:3996},{name:"MKS",value:4759},{name:"Montesa Honda",value:4615},{name:"Moto Aupa",value:4566},{name:"Moto Bellini",value:5036},{name:"Moto Guzzi",value:3123},{name:"MOTO MORINI",value:2590},{name:"Moto-Leader",value:4250},{name:"Motobecane",value:4217},{name:"Motobi",value:2226},{name:"Motoczysz",value:1132},{name:"MotoJet",value:2254},{name:"Motoland",value:4414},{name:"Motom",value:1134},{name:"Motorro",value:1506},{name:"Motowell",value:4431},{name:"Motron",value:4040},{name:"MSKart",value:3611},{name:"Musstang",value:1565},{name:"Mustang",value:2979},{name:"Mv agusta",value:1138},{name:"MYBRO",value:5138},{name:"MZ",value:1139},{name:"NanFang",value:4152},{name:"Navigator",value:1552},{name:"New Holland",value:1696},{name:"Nexus",value:4039},{name:"Ninebot",value:5704},{name:"Ninebot One",value:4419},{name:"Nitro",value:2951},{name:"NIU",value:5128},{name:"Norco",value:3784},{name:"NSU",value:2157},{name:"Nzita",value:5987},{name:"OlympMotors",value:6050},{name:"Optima",value:4612},{name:"Orion",value:3591},{name:"Oset",value:4223},{name:"Panda",value:3583},{name:"Pannon",value:4054},{name:"Pannonia",value:1149},{name:"Patriot",value:3116},{name:"Patron",value:2794},{name:"Peda",value:1980},{name:"Peg-Perego",value:3446},{name:"Pegasus",value:3482},{name:"PERAVES",value:4290},{name:"Peripoli",value:5705},{name:"Peugeot",value:58},{name:"Pgo",value:1151},{name:"Phoenix",value:2625},{name:"Piaggio",value:313},{name:"Pioneer",value:4626},{name:"Pit bike",value:2789},{name:"Pitbull",value:4147},{name:"Piton",value:4654},{name:"PitsterPro",value:4274},{name:"Pocket bike",value:4738},{name:"Polaris",value:1231},{name:"Polini",value:4129},{name:"Pony",value:3584},{name:"Presto",value:5304},{name:"Pride",value:5132},{name:"Pronto",value:5896},{name:"Puch",value:2591},{name:"Pulse",value:5055},{name:"Q-tek",value:3873},{name:"Qianjiang",value:1939},{name:"Qingqi",value:1157},{name:"Qjiang",value:1754},{name:"Quad Bike",value:2606},{name:"Quadro",value:5584},{name:"Quadzilla",value:3876},{name:"Racer",value:3910},{name:"Racing",value:3493},{name:"Rage",value:3402},{name:"Raketa-Futong",value:2106},{name:"Ratas Moto",value:4801},{name:"Rato",value:5888},{name:"Razor",value:3409},{name:"Reaper",value:2657},{name:"Regal",value:1595},{name:"Regal-Raptor",value:2009},{name:"Rewaco",value:2869},{name:"Rex",value:3832},{name:"Rexon",value:2027},{name:"Rialli",value:2829},{name:"RiderKart",value:2634},{name:"Rieju",value:2462},{name:"Rivero",value:4227},{name:"RM",value:4280},{name:"Road Knight",value:4286},{name:"Road Legal",value:2962},{name:"Roadsign",value:5518},{name:"Rokon",value:4005},{name:"Rolektro",value:5119},{name:"Romet",value:1693},{name:"Rover",value:64},{name:"Roxon",value:5843},{name:"Royal Enfield",value:3443},{name:"Runmaster Motor",value:5562},{name:"Sabur",value:1556},{name:"Sachs",value:1166},{name:"Sagitta",value:4255},{name:"Salardi",value:5551},{name:"Samada",value:4388},{name:"Sandi",value:5506},{name:"Sanyou",value:4287},{name:"Scandic",value:4070},{name:"Scootmobiel",value:5928},{name:"Scorpa",value:3261},{name:"Scorpion",value:3582},{name:"Screamin",value:3962},{name:"SEEV",value:4629},{name:"Segway",value:1557},{name:"Senke",value:5272},{name:"Sensor",value:2832},{name:"SH",value:4795},{name:"Shark",value:5025},{name:"Shawoom",value:2085},{name:"Sherco",value:3087},{name:"Shineray",value:1572},{name:"Shoprider",value:5909},{name:"Sigma Line",value:3262},{name:"Simson",value:1176},{name:"Sinski",value:2815},{name:"Skaut",value:5099},{name:"Skeeter",value:3998},{name:"SkyBike",value:4230},{name:"Skygo",value:3112},{name:"SkyMoto",value:1555},{name:"SkyTeam",value:4874},{name:"SM-MOTO",value:4520},{name:"Smart",value:71},{name:"SmartWay",value:4690},{name:"SMC",value:2746},{name:"Snow hawk",value:2567},{name:"SNOWMAX",value:4766},{name:"Sodikart",value:4176},{name:"Sonik",value:3241},{name:"Sontan",value:2366},{name:"Soul",value:1853},{name:"SP",value:3895},{name:"Spark",value:1554},{name:"Sparta",value:5935},{name:"Sparta Pharos",value:4887},{name:"Specialized",value:3787},{name:"Speed Gear",value:1553},{name:"Speed Shek",value:2186},{name:"Spider",value:2473},{name:"Spike",value:5984},{name:"Spike ZZ",value:4107},{name:"Sport Energy",value:2584},{name:"Spy",value:5484},{name:"Stalker",value:3266},{name:"Stels",value:2213},{name:"Sterling",value:2754},{name:"Stinger",value:1563},{name:"Stock",value:5609},{name:"Storm",value:2060},{name:"Stormbringer",value:4880},{name:"Sukida",value:5497},{name:"Sumoto",value:2798},{name:"Sun City",value:4878},{name:"Sunbeam",value:385},{name:"Sunra",value:5570},{name:"Sunrise Medical",value:5593},{name:"Sur-Ron",value:5960},{name:"Suzuki",value:76},{name:"Swiss Hutless",value:2570},{name:"SWM",value:5513},{name:"Sym",value:2176},{name:"T3 Motion",value:5548},{name:"Tank Vision",value:5573},{name:"Tante",value:4312},{name:"Tauris",value:6041},{name:"TCS",value:3979},{name:"TDMC",value:3294},{name:"Terrot",value:4444},{name:"TGB",value:1775},{name:"Thunder Mountain",value:5494},{name:"Tiger",value:2050},{name:"Tiras",value:3055},{name:"Tisong",value:5257},{name:"Titan",value:3186},{name:"TM Racing",value:2409},{name:"Tms",value:5905},{name:"Tomos",value:2151},{name:"Tontse",value:5866},{name:"Tony Kart",value:2650},{name:"Top-Kart",value:6099},{name:"Tornado",value:2078},{name:"Toros",value:5621},{name:"Tourer",value:4799},{name:"Triad",value:4453},{name:"Trike",value:4797},{name:"TRIKEtec",value:4894},{name:"TriRod",value:4580},{name:"Triton",value:3102},{name:"Triumph",value:80},{name:"Truva",value:2224},{name:"TRX Scooter",value:3001},{name:"UABike",value:5191},{name:"UGBEST",value:4531},{name:"United Motors",value:3384},{name:"Unix",value:3837},{name:"VACCI Bike",value:4979},{name:"Valenti",value:4627},{name:"Vanguard",value:3800},{name:"Vapor",value:4562},{name:"Varan",value:2291},{name:"Vectrix",value:2750},{name:"VEGA",value:1998},{name:"Veken",value:3788},{name:"Venom",value:2512},{name:"Venta",value:2256},{name:"Vento",value:4987},{name:"Ventus",value:3951},{name:"Veola",value:5871},{name:"Vertemati",value:4384},{name:"Verucci",value:2949},{name:"Vespa",value:1199},{name:"Victoria",value:2245},{name:"Victory",value:2474},{name:"Viking",value:2858},{name:"Vimann",value:3959},{name:"Viper",value:1201},{name:"Volta",value:3793},{name:"VZ Yachts",value:3990},{name:"Vеola",value:5116},{name:"Warrior",value:4133},{name:"Wels",value:4142},{name:"Wenling",value:2816},{name:"Werya",value:2850},{name:"Wexxtor",value:3154},{name:"Wild Horses",value:4950},{name:"Windtech",value:5683},{name:"Winner",value:3539},{name:"WK BIKES",value:4650},{name:"Wmotion",value:5108},{name:"WOQU",value:5691},{name:"WSK",value:4292},{name:"Wuyi ZhengLong",value:2121},{name:"XGJAO",value:1814},{name:"Xiamen",value:4985},{name:"Xiaomi",value:5107},{name:"Xingye",value:5164},{name:"Xingyue",value:1762},{name:"Xinling",value:2313},{name:"XinYang",value:2636},{name:"Xispa",value:1211},{name:"Xmotos",value:1212},{name:"XYKD",value:4437},{name:"Yadea",value:5479},{name:"Yamaha",value:179},{name:"Yamasaki",value:1546},{name:"Yamati",value:3540},{name:"Yamoto",value:2290},{name:"YCF",value:4563},{name:"YiBen",value:2560},{name:"Yinxiang",value:4313},{name:"Yongkang",value:4338},{name:"YUKI",value:4796},{name:"Zabel",value:3798},{name:"Zealsun Prince",value:2314},{name:"Zemis",value:2911},{name:"Zenith",value:3789},{name:"Zero",value:4303},{name:"Zhejiang",value:2288},{name:"Zhongqi",value:5498},{name:"Zhongyu",value:3567},{name:"Zipp",value:4157},{name:"Znen",value:2671},{name:"Zonda",value:1439},{name:"Zonder",value:1576},{name:"Zongshen",value:1214},{name:"Zontes",value:4272},{name:"Zorro",value:4997},{name:"Ztech",value:5934},{name:"ZTR",value:5523},{name:"Zubr",value:2426},{name:"Zulrace",value:5910},{name:"Zumico",value:4777},{name:"Zundapp",value:1216},{name:"АКУ",value:4324},{name:"Алиса",value:5072},{name:"Багги",value:3239},{name:"Буран",value:2523},{name:"Верховина",value:1755},{name:"Восход",value:1204},{name:"Вятка",value:2317},{name:"ДАЗ",value:3097},{name:"Днепр (КМЗ)",value:171},{name:"Дорожник",value:5906},{name:"ДТЗ",value:3351},{name:"Заря",value:2052},{name:"ЗиД",value:1535},{name:"ЗИМ",value:1544},{name:"ЗИФ",value:1959},{name:"ИЖ",value:92},{name:"ИМЗ",value:2370},{name:"Карпаты",value:1854},{name:"Кастом",value:2764},{name:"Кельбаджары",value:4936},{name:"Ковровец",value:3427},{name:"Красный Октябрь",value:2244},{name:"ЛВЗ",value:3305},{name:"ЛМЗ",value:4649},{name:"Махо",value:1999},{name:"Минск",value:1125},{name:"Москва",value:2194},{name:"Муравей",value:1933},{name:"Партнер",value:5073},{name:"ПатриотМото",value:3445},{name:"Полесье",value:4892},{name:"Ракета-мото",value:3401},{name:"Рига",value:2218},{name:"РМЗ",value:3265},{name:"Рысь",value:2563},{name:"С-Мото",value:1537},{name:"Самодельный",value:2863},{name:"Тайга",value:1234},{name:"ТИЗ",value:2010},{name:"ТМЗ",value:1539},{name:"Трайк",value:3494},{name:"Тула",value:1579},{name:"УКРмото",value:3003},{name:"Урал",value:95}]},204:function(a,e,n){"use strict";n.d(e,"a",(function(){return l}));var l=[{name:"AMCO-VEBA",value:3019},{name:"Aro",value:101},{name:"Ashok Leyland",value:2550},{name:"Astra",value:2063},{name:"Avia",value:2077},{name:"Barkas",value:103},{name:"Baw",value:1540},{name:"Beifan",value:2229},{name:"Bocheng",value:4810},{name:"CAMC",value:2381},{name:"Caterpillar",value:1589},{name:"Chevrolet",value:13},{name:"Citroen",value:15},{name:"Csepel",value:3538},{name:"Daewoo",value:18},{name:"DAF",value:115},{name:"Dayun",value:3473},{name:"DFAC",value:3202},{name:"DFSK",value:4077},{name:"Dodge",value:118},{name:"Dongfeng",value:308},{name:"Eagle",value:120},{name:"Egritech",value:5613},{name:"ERF",value:1442},{name:"Fargo Effedi",value:4596},{name:"FAW",value:121},{name:"Feber",value:2408},{name:"Fiat",value:23},{name:"Foden",value:3874},{name:"Force",value:2203},{name:"Ford",value:24},{name:"Ford Trucks",value:6030},{name:"Foton",value:187},{name:"Freightliner",value:314},{name:"Ginaf",value:2767},{name:"GMC",value:123},{name:"Great Wall",value:124},{name:"Groz",value:1575},{name:"HANIA",value:4251},{name:"Hanomag",value:1784},{name:"Hino",value:2230},{name:"Hongda",value:3997},{name:"Howo",value:379},{name:"Hyundai",value:29},{name:"IFA",value:1486},{name:"International",value:306},{name:"Isuzu",value:30},{name:"Iveco",value:175},{name:"JAC",value:317},{name:"Jelcz",value:2499},{name:"Jinbei",value:2231},{name:"JMC",value:3018},{name:"Kenworth",value:387},{name:"Kia",value:33},{name:"KingWoo",value:4606},{name:"Land Rover",value:37},{name:"LDV",value:134},{name:"Lovol",value:4222},{name:"Mack",value:1541},{name:"Magirus-Deutz",value:4488},{name:"MAN",value:177},{name:"MAN-VW",value:3822},{name:"Mazda",value:47},{name:"Mercedes-Benz",value:48},{name:"Mitsubishi",value:52},{name:"MUDAN",value:2362},{name:"Nissan",value:55},{name:"Opel",value:56},{name:"Peterbilt",value:346},{name:"Peugeot",value:58},{name:"Piaggio",value:313},{name:"Praga",value:3040},{name:"Renault",value:62},{name:"Robur",value:1972},{name:"Roman",value:3560},{name:"Rover",value:64},{name:"Runda",value:4815},{name:"Samsung",value:325},{name:"Scania",value:203},{name:"Seddon Atkinsons",value:3575},{name:"Shaanxi",value:2392},{name:"Shacman",value:5254},{name:"Simca",value:5541},{name:"Sinotruk",value:3054},{name:"Sisu",value:3457},{name:"Skoda",value:70},{name:"Star",value:214},{name:"Sterling",value:2754},{name:"Steyr",value:2476},{name:"Studebaker",value:3228},{name:"Suzuki",value:76},{name:"TATA",value:78},{name:"Tatra",value:204},{name:"Terberg",value:3074},{name:"Terex",value:2102},{name:"TESAB",value:4019},{name:"Tesla",value:2233},{name:"Thwaites",value:5029},{name:"Toyota",value:79},{name:"Van Hool",value:206},{name:"Volkswagen",value:84},{name:"Volvo",value:85},{name:"Western",value:2488},{name:"Yuejin",value:333},{name:"Zuk",value:3089},{name:"Богдан",value:188},{name:"ВАЗ",value:88},{name:"ВЕПР",value:4804},{name:"ГАЗ",value:91},{name:"ЕРАЗ",value:170},{name:"ЗИЛ",value:168},{name:"ЗИС",value:186},{name:"КАЗ",value:163},{name:"КамАЗ",value:97},{name:"КрАЗ",value:161},{name:"ЛиАЗ",value:347},{name:"МАЗ",value:159},{name:"МАЗ-МАН",value:3067},{name:"МЗКТ",value:2329},{name:"МоАЗ",value:1773},{name:"ПАЗ",value:156},{name:"РАФ",value:327},{name:"САЗ",value:2325},{name:"СемАР",value:4199},{name:"УАЗ",value:93},{name:"Урал",value:95}]},205:function(a,e,n){"use strict";n.d(e,"a",(function(){return l}));var l=[{name:"Ajokki",value:5552},{name:"Ashok Leyland",value:2550},{name:"Asia",value:4},{name:"AsiaStar",value:5793},{name:"Ataman",value:3981},{name:"Autosan",value:340},{name:"Avia",value:2077},{name:"Ayats",value:3206},{name:"Barkas",value:103},{name:"Baw",value:1540},{name:"Bedford",value:2622},{name:"Beijing",value:105},{name:"Berkof",value:3095},{name:"Beulas",value:4088},{name:"Blue Bird",value:2500},{name:"BMC",value:3693},{name:"BOVA",value:211},{name:"Carrozzeria Barbi",value:3763},{name:"Citroen",value:15},{name:"DAB",value:4168},{name:"Daewoo",value:18},{name:"DAF",value:115},{name:"Den Oudsten",value:4336},{name:"Dennis",value:2482},{name:"Dodge",value:118},{name:"Drogmoller",value:3226},{name:"EOS",value:3129},{name:"Ernst Auwarter",value:1413},{name:"FAN",value:4204},{name:"Fiat",value:23},{name:"Force",value:2203},{name:"Ford",value:24},{name:"Freightliner",value:314},{name:"Golden Dragon",value:4456},{name:"Groz",value:1575},{name:"Heuliez",value:3568},{name:"Higer",value:2278},{name:"Hyundai",value:29},{name:"International",value:306},{name:"Irizar",value:3684},{name:"Isuzu",value:30},{name:"Iveco",value:175},{name:"Iveco Irisbus",value:1426},{name:"JAC",value:317},{name:"Jelcz",value:2499},{name:"Jonckheere",value:4170},{name:"Kapena",value:4014},{name:"Karosa",value:412},{name:"Karsan",value:5168},{name:"Kia",value:33},{name:"King Long",value:2676},{name:"Kutsenits",value:4770},{name:"LDV",value:134},{name:"Lifan",value:334},{name:"MAN",value:177},{name:"Marshell",value:4064},{name:"Mazda",value:47},{name:"MCV",value:3224},{name:"MCW",value:2395},{name:"Mercedes-Benz",value:48},{name:"Mitsubishi",value:52},{name:"MUDAN",value:2362},{name:"NAW",value:3290},{name:"Neoplan",value:378},{name:"New Flyer",value:4370},{name:"Nissan",value:55},{name:"Noge",value:2326},{name:"Oghab",value:4465},{name:"Opel",value:56},{name:"Otokar",value:2575},{name:"Peugeot",value:58},{name:"Prevost",value:2441},{name:"Renault",value:62},{name:"Robur",value:1972},{name:"Scania",value:203},{name:"Setra",value:384},{name:"Shaolin",value:401},{name:"Solaris",value:4514},{name:"SOR",value:2796},{name:"Ssang Yong",value:73},{name:"TAM",value:2311},{name:"TATA",value:78},{name:"Temsa",value:403},{name:"Thomas",value:2120},{name:"Toyota",value:79},{name:"Troliga",value:5503},{name:"UNVI",value:5314},{name:"Van Hool",value:206},{name:"VDL",value:4922},{name:"Viseon",value:5776},{name:"Volat",value:6001},{name:"Volkswagen",value:84},{name:"Volteco",value:4368},{name:"Volvo",value:85},{name:"Youyi",value:405},{name:"YUTONG",value:2003},{name:"Zhong Tong",value:3580},{name:"Zuk",value:3089},{name:"БАЗ",value:326},{name:"Бескид",value:3225},{name:"БКМ",value:2358},{name:"Богдан",value:188},{name:"Волжанин",value:2806},{name:"ГАЗ",value:91},{name:"ГалАЗ",value:4060},{name:"ГолАЗ",value:410},{name:"ДАЗ",value:3097},{name:"ЗАЗ",value:89},{name:"ЗИЛ",value:168},{name:"ЗЭЗТС",value:4163},{name:"Икарус",value:167},{name:"КАВЗ",value:164},{name:"Круизер",value:4016},{name:"Кубань",value:3146},{name:"ЛАЗ",value:160},{name:"ЛиАЗ",value:347},{name:"МАЗ",value:159},{name:"МАРЗ",value:2181},{name:"Неман",value:1631},{name:"Нефаз",value:2128},{name:"ПАЗ",value:156},{name:"РАФ",value:327},{name:"РУТА",value:408},{name:"Сварог",value:4002},{name:"Скиф",value:1973},{name:"Стрый Авто",value:4320},{name:"Таджикистан",value:2054},{name:"ТролЗа",value:4755},{name:"ТУР",value:409},{name:"УАЗ",value:93},{name:"мрія",value:5309},{name:"Укравтобуспром",value:4899},{name:"ХАЗ",value:390},{name:"ЧАЗ",value:1410},{name:"ЧЗСА",value:3033},{name:"ЧРЗ",value:4679}]},234:function(a,e,n){"use strict";n.d(e,"a",(function(){return l}));var l=[{name:"Седан",value:3},{name:"Внедорожник / Кроссовер",value:5},{name:"Минивэн",value:8},{name:"Хэтчбек",value:4},{name:"Универсал",value:2},{name:"Купе",value:6},{name:"Легковой фургон (до 1,5 т)",value:254},{name:"Кабриолет",value:7},{name:"Пикап",value:9},{name:"Лифтбек",value:307},{name:"Лимузин",value:252},{name:"Другой",value:28},{name:"Родстер",value:315},{name:"Вездеход-амфибия",value:43},{name:"Гольф-кар",value:44},{name:"Другое",value:56},{name:"Картинг",value:45},{name:"Квадроцикл  утилитарный",value:41},{name:"Квадроцикл детский",value:36},{name:"Квадроцикл спортивный",value:39},{name:"Квадроциклы",value:35},{name:"Макси-скутер",value:12},{name:"Мини крос (Питбайк)",value:33},{name:"Мини мотоциклы",value:31},{name:"Мини спорт",value:32},{name:"Мопеды",value:58},{name:"Мотовездеход",value:42},{name:"Мотоцикл Без обтекателей (Naked bike)",value:15},{name:"Мотоцикл Внедорожный (Enduro)",value:21},{name:"Мотоцикл Кастом",value:30},{name:"Мотоцикл Классик",value:14},{name:"Мотоцикл Кросс",value:19},{name:"Мотоцикл Круизер",value:24},{name:"Мотоцикл Многоцелевой (All-round)",value:25},{name:"Мотоцикл с коляской",value:29},{name:"Мотоцикл Спорт-туризм",value:17},{name:"Мотоцикл Супермото (Motard)",value:22},{name:"Мотоцикл Триал",value:20},{name:"Мотоцикл Туризм",value:16},{name:"Мотоцикл Чоппер",value:23},{name:"Мотоциклы",value:13},{name:"Скутер / Мотороллер",value:11},{name:"Снегоход",value:46},{name:"Спортбайк",value:18},{name:"Трайк",value:57},{name:"Трицикл",value:34},{name:"Автовоз",value:178},{name:"Бетономешалка (Миксер) полуприцеп",value:172},{name:"Борт",value:150},{name:"Бортовой полуприцеп",value:165},{name:"Для перевозки животных - полуприцеп",value:176},{name:"Для перевозки животных - прицеп",value:159},{name:"Другое",value:251},{name:"Зерновоз - полуприцеп",value:387},{name:"Зерновоз - прицеп",value:386},{name:"Изотермическая будка",value:303},{name:"Контейнеровоз",value:154},{name:"Контейнеровоз полуприцеп",value:169},{name:"Лафет",value:256},{name:"Легковой прицеп",value:179},{name:"Лесовоз / Сортиментовоз - полуприцеп",value:175},{name:"Лесовоз / Сортиментовоз - прицеп",value:160},{name:"Низкорамная платформа",value:164},{name:"Платформа",value:149},{name:"Платформа полуприцеп",value:163},{name:"Плитовоз",value:177},{name:"Полуприцеп",value:161},{name:"Прицеп",value:147},{name:"Прицеп дача",value:255},{name:"Рефрижератор",value:157},{name:"Рефрижератор полуприцеп",value:173},{name:"Самосвал полуприцеп",value:168},{name:"Самосвал прицеп",value:152},{name:"Тентованный борт (штора) - полуприцеп",value:167},{name:"Тентованный борт (штора) - прицеп",value:151},{name:"Фургон",value:153},{name:"Фургон полуприцеп",value:170},{name:"Цистерна",value:155},{name:"Цистерна полуприцеп",value:171},{name:"Шасси",value:148},{name:"Шасси полуприцеп",value:162},{name:"Автовоз",value:207},{name:"Бортовой",value:194},{name:"Вахтовый автобус / Кунг",value:228},{name:"Грузовик",value:190},{name:"Для перевозки животных",value:203},{name:"Другое",value:213},{name:"Зерновоз",value:385},{name:"Контейнеровоз",value:200},{name:"Кормовоз",value:314},{name:"Легковой фургон (до 1,5 т)",value:254},{name:"Лесовоз / Сортиментовоз",value:204},{name:"Микроавтобус грузовой (до 3,5т)",value:210},{name:"Мультилифт",value:205},{name:"Мусоровоз",value:211},{name:"Платформа",value:193},{name:"Рефрижератор",value:198},{name:"Самосвал",value:196},{name:"Стекловоз",value:206},{name:"Тентованый",value:195},{name:"Тягач",value:212},{name:"Фургон",value:197},{name:"Цистерна",value:201},{name:"Шасси",value:192},{name:"Эвакуатор",value:208},{name:"Автобус",value:220},{name:"Городской автобус",value:221},{name:"Другое",value:229},{name:"Микроавтобус (от 10 до 22 пас.)",value:219},{name:"Пригородный автобус",value:224},{name:"Туристический / Междугородний автобус",value:227}]}}]);