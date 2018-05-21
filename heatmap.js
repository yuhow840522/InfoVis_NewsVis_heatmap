
//data
var data=[
  {"schoolname":	"朝陽科技大學"	,"data104":	88.71	,"data105":	96.43	,"data106":	65.57	,"data107":	85.33	},
  {"schoolname":	"崇右技術學院"	,"data104":	36.36	,"data105":	47.06	,"data106":	16	,"data107":	-1	},
  {"schoolname":	"崇右影藝科技大學"	,"data104":	41.67	,"data105":	-1	,"data106":	-1	,"data107":	-1	},
  {"schoolname":	"慈惠醫護管理專科學校"	,"data104":	5.26	,"data105":	10	,"data106":	15	,"data107":	25	},
  {"schoolname":	"慈濟大學"	,"data104":	52.63	,"data105":	47.06	,"data106":	47.37	,"data107":	50	},
  {"schoolname":	"大漢技術學院"	,"data104":	11.76	,"data105":	10.53	,"data106":	4.11	,"data107":	18.18	},
  {"schoolname":	"大華科技大學"	,"data104":	45.24	,"data105":	31.25	,"data106":	20.45	,"data107":	38.24	},
  {"schoolname":	"大仁科技大學"	,"data104":	15.93	,"data105":	17.65	,"data106":	11.43	,"data107":	41.86	},
  {"schoolname":	"大同大學"	,"data104":	100	,"data105":	0	,"data106":	-1	,"data107":	-1	},
  {"schoolname":	"大同技術學院"	,"data104":	10	,"data105":	20	,"data106":	0	,"data107":	58.33	},
  {"schoolname":	"大葉大學"	,"data104":	15.66	,"data105":	13.58	,"data106":	8.86	,"data107":	3.91	},
  {"schoolname":	"淡江大學"	,"data104":	88.24	,"data105":	92.5	,"data106":	87.76	,"data107":	94	},
  {"schoolname":	"稻江科技暨管理學院"	,"data104":	45.24	,"data105":	56.25	,"data106":	38.1	,"data107":	38.1	},
  {"schoolname":	"德霖技術學院"	,"data104":	56.76	,"data105":	41.03	,"data106":	33.96	,"data107":	-1	},
  {"schoolname":	"德明財經科技大學"	,"data104":	84.62	,"data105":	89.47	,"data106":	15	,"data107":	90.48	},
  {"schoolname":	"東方設計大學"	,"data104":	39.34	,"data105":	-1	,"data106":	-1	,"data107":	-1	},
  {"schoolname":	"東方設計學院"	,"data104":	61.54	,"data105":	24.56	,"data106":	22.81	,"data107":	-1	},
  {"schoolname":	"東海大學"	,"data104":	55.56	,"data105":	56.52	,"data106":	65.22	,"data107":	51.52	},
  {"schoolname":	"東南科技大學"	,"data104":	88.24	,"data105":	81.25	,"data106":	100	,"data107":	73.33	},
  {"schoolname":	"東吳大學"	,"data104":	91.43	,"data105":	91.89	,"data106":	82.35	,"data107":	82.35	},
  {"schoolname":	"逢甲大學"	,"data104":	37.5	,"data105":	40	,"data106":	16.67	,"data107":	88.89	},
  {"schoolname":	"佛光大學"	,"data104":	77.78	,"data105":	75	,"data106":	33.33	,"data107":	70	},
  {"schoolname":	"輔仁大學"	,"data104":	82.35	,"data105":	66.67	,"data106":	46.67	,"data107":	73.33	},
  {"schoolname":	"輔英科技大學"	,"data104":	37.78	,"data105":	36.73	,"data106":	13.33	,"data107":	45.65	},
  {"schoolname":	"高雄醫學大學"	,"data104":	66.67	,"data105":	91.67	,"data106":	76.92	,"data107":	66.67	},
  {"schoolname":	"高苑科技大學"	,"data104":	35.85	,"data105":	35.48	,"data106":	43.59	,"data107":	56	},
  {"schoolname":	"國立成功大學"	,"data104":	61.29	,"data105":	66.67	,"data106":	63.33	,"data107":	43.33	},
  {"schoolname":	"國立東華大學"	,"data104":	70.97	,"data105":	71.43	,"data106":	61.9	,"data107":	71.88	},
  {"schoolname":	"國立高雄大學"	,"data104":	45.45	,"data105":	33.33	,"data106":	68.42	,"data107":	53.33	},
  {"schoolname":	"國立高雄第一科技大學"	,"data104":	85.71	,"data105":	100	,"data106":	66.67	,"data107":	0	},
  {"schoolname":	"國立高雄海洋科技大學"	,"data104":	77.78	,"data105":	75	,"data106":	100	,"data107":	0	},
  {"schoolname":	"國立高雄師範大學"	,"data104":	34.78	,"data105":	33.33	,"data106":	37.5	,"data107":	31.82	},
  {"schoolname":	"國立高雄應用科技大學"	,"data104":	53.33	,"data105":	37.5	,"data106":	50	,"data107":	0	},
  {"schoolname":	"國立虎尾科技大學"	,"data104":	64.1	,"data105":	75	,"data106":	57.58	,"data107":	60.71	},
  {"schoolname":	"國立暨南國際大學"	,"data104":	57.69	,"data105":	35.48	,"data106":	45.45	,"data107":	55.56	},
  {"schoolname":	"國立嘉義大學"	,"data104":	65.22	,"data105":	45	,"data106":	34.78	,"data107":	34.78	},
  {"schoolname":	"國立交通大學"	,"data104":	18.18	,"data105":	9.09	,"data106":	18.18	,"data107":	45.45	},
  {"schoolname":	"國立金門大學"	,"data104":	80	,"data105":	87.5	,"data106":	100	,"data107":	100	},
  {"schoolname":	"國立聯合大學"	,"data104":	33.33	,"data105":	37.5	,"data106":	38.1	,"data107":	52.38	},
  {"schoolname":	"國立澎湖科技大學"	,"data104":	0	,"data105":	0	,"data106":	100	,"data107":	31.25	},
  {"schoolname":	"國立屏東大學"	,"data104":	52.78	,"data105":	46.88	,"data106":	58.82	,"data107":	71.79	},
  {"schoolname":	"國立屏東科技大學"	,"data104":	96.67	,"data105":	100	,"data106":	81.82	,"data107":	100	},
  {"schoolname":	"國立勤益科技大學"	,"data104":	87.5	,"data105":	90	,"data106":	64.29	,"data107":	78.57	},
  {"schoolname":	"國立清華大學"	,"data104":	10.34	,"data105":	13.79	,"data106":	20.59	,"data107":	20	},
  {"schoolname":	"國立臺北大學"	,"data104":	61.11	,"data105":	33.33	,"data106":	40	,"data107":	52.63	},
  {"schoolname":	"國立臺北教育大學"	,"data104":	100	,"data105":	85.71	,"data106":	100	,"data107":	100	},
  {"schoolname":	"國立臺北科技大學"	,"data104":	66.67	,"data105":	72.73	,"data106":	57.14	,"data107":	66.67	},
  {"schoolname":	"國立臺北商業大學"	,"data104":	9.09	,"data105":	23.81	,"data106":	-1	,"data107":	-1	},
  {"schoolname":	"國立臺東大學"	,"data104":	80	,"data105":	100	,"data106":	60	,"data107":	33.33	},
  {"schoolname":	"國立臺東專科學校"	,"data104":	88.89	,"data105":	100	,"data106":	100	,"data107":	69.23	},
  {"schoolname":	"國立臺南大學"	,"data104":	62.5	,"data105":	41.67	,"data106":	33.33	,"data107":	56	},
  {"schoolname":	"國立臺南藝術大學"	,"data104":	50	,"data105":	50	,"data106":	50	,"data107":	50	},
  {"schoolname":	"國立臺灣大學"	,"data104":	73.08	,"data105":	74	,"data106":	70	,"data107":	69.39	},
  {"schoolname":	"國立臺灣海洋大學"	,"data104":	36.36	,"data105":	46.67	,"data106":	14.29	,"data107":	57.14	},
  {"schoolname":	"國立臺灣科技大學"	,"data104":	100	,"data105":	100	,"data106":	33.33	,"data107":	66.67	},
  {"schoolname":	"國立臺灣師範大學"	,"data104":	78.13	,"data105":	62.5	,"data106":	60	,"data107":	77.42	},
  {"schoolname":	"國立臺灣體育運動大學"	,"data104":	100	,"data105":	100	,"data106":	33.33	,"data107":	100	},
  {"schoolname":	"國立臺灣藝術大學"	,"data104":	100	,"data105":	80	,"data106":	45.45	,"data107":	90.91	},
  {"schoolname":	"國立臺中教育大學"	,"data104":	60	,"data105":	14.29	,"data106":	44.44	,"data107":	62.5	},
  {"schoolname":	"國立臺中科技大學"	,"data104":	73.33	,"data105":	66.67	,"data106":	59.09	,"data107":	47.06	},
  {"schoolname":	"國立體育大學"	,"data104":	90.91	,"data105":	55.56	,"data106":	66.67	,"data107":	77.78	},
  {"schoolname":	"國立新竹教育大學"	,"data104":	72.73	,"data105":	44.44	,"data106":	-1	,"data107":	-1	},
  {"schoolname":	"國立宜蘭大學"	,"data104":	88	,"data105":	92.86	,"data106":	89.29	,"data107":	80.77	},
  {"schoolname":	"國立雲林科技大學"	,"data104":	58.33	,"data105":	63.64	,"data106":	40	,"data107":	60	},
  {"schoolname":	"國立彰化師範大學"	,"data104":	62.5	,"data105":	55.56	,"data106":	26.32	,"data107":	66.67	},
  {"schoolname":	"國立政治大學"	,"data104":	80	,"data105":	77.78	,"data106":	78.57	,"data107":	77.78	},
  {"schoolname":	"國立中山大學"	,"data104":	36	,"data105":	51.52	,"data106":	43.75	,"data107":	34.78	},
  {"schoolname":	"國立中興大學"	,"data104":	57.58	,"data105":	57.14	,"data106":	53.85	,"data107":	51.61	},
  {"schoolname":	"國立中央大學"	,"data104":	38.46	,"data105":	33.33	,"data106":	37.5	,"data107":	44	},
  {"schoolname":	"國立中正大學"	,"data104":	44	,"data105":	50	,"data106":	45.45	,"data107":	64.71	},
  {"schoolname":	"和春技術學院"	,"data104":	23.53	,"data105":	8.24	,"data106":	10.84	,"data107":	12.86	},
  {"schoolname":	"弘光科技大學"	,"data104":	64.86	,"data105":	74	,"data106":	50.94	,"data107":	53.95	},
  {"schoolname":	"宏國德霖科技大學"	,"data104":	55.81	,"data105":	-1	,"data106":	-1	,"data107":	-1	},
  {"schoolname":	"華梵大學"	,"data104":	55.56	,"data105":	65.38	,"data106":	56.67	,"data107":	64.86	},
  {"schoolname":	"環球科技大學"	,"data104":	28.17	,"data105":	26.92	,"data106":	16.67	,"data107":	28.36	},
  {"schoolname":	"嘉南藥理大學"	,"data104":	66.45	,"data105":	57.96	,"data106":	48.2	,"data107":	68.97	},
  {"schoolname":	"建國科技大學"	,"data104":	59.41	,"data105":	40.8	,"data106":	36.59	,"data107":	46.94	},
  {"schoolname":	"健行科技大學"	,"data104":	44	,"data105":	36.17	,"data106":	49.43	,"data107":	53.76	},
  {"schoolname":	"經國管理暨健康學院"	,"data104":	29.63	,"data105":	14.04	,"data106":	21.15	,"data107":	17.31	},
  {"schoolname":	"景文科技大學"	,"data104":	64.29	,"data105":	58.82	,"data106":	53.49	,"data107":	44.9	},
  {"schoolname":	"靜宜大學"	,"data104":	16.67	,"data105":	18.37	,"data106":	23.26	,"data107":	33.33	},
  {"schoolname":	"開南大學"	,"data104":	53.85	,"data105":	57.65	,"data106":	82.22	,"data107":	-1	},
  {"schoolname":	"康寧大學"	,"data104":	40.58	,"data105":	-1	,"data106":	-1	,"data107":	-1	},
  {"schoolname":	"康寧學校財團法人康寧大學"	,"data104":	28.81	,"data105":	29.41	,"data106":	57.14	,"data107":	-1	},
  {"schoolname":	"崑山科技大學"	,"data104":	60.67	,"data105":	61.02	,"data106":	43.45	,"data107":	52.94	},
  {"schoolname":	"蘭陽技術學院"	,"data104":	33.33	,"data105":	18.52	,"data106":	5.26	,"data107":	21.62	},
  {"schoolname":	"黎明技術學院"	,"data104":	46.81	,"data105":	50.52	,"data106":	31	,"data107":	51.92	},
  {"schoolname":	"嶺東科技大學"	,"data104":	20	,"data105":	60	,"data106":	80	,"data107":	25	},
  {"schoolname":	"美和科技大學"	,"data104":	26.67	,"data105":	12.5	,"data106":	6.52	,"data107":	26.53	},
  {"schoolname":	"明道大學"	,"data104":	31.82	,"data105":	43.4	,"data106":	12.12	,"data107":	27.66	},
  {"schoolname":	"明新科技大學"	,"data104":	74.47	,"data105":	78.72	,"data106":	62.96	,"data107":	70.89	},
  {"schoolname":	"銘傳大學"	,"data104":	100	,"data105":	92.31	,"data106":	93.33	,"data107":	88.24	},
  {"schoolname":	"南華大學"	,"data104":	56.25	,"data105":	55.56	,"data106":	50	,"data107":	53.33	},
  {"schoolname":	"南開科技大學"	,"data104":	29.2	,"data105":	25.2	,"data106":	12.31	,"data107":	54.24	},
  {"schoolname":	"南榮科技大學"	,"data104":	22	,"data105":	15.79	,"data106":	16	,"data107":	22.73	},
  {"schoolname":	"南臺科技大學"	,"data104":	80	,"data105":	87.5	,"data106":	92.06	,"data107":	80.85	},
  {"schoolname":	"南亞技術學院"	,"data104":	21.74	,"data105":	33.96	,"data106":	-1	,"data107":	-1	},
  {"schoolname":	"聖約翰科技大學"	,"data104":	50	,"data105":	59.09	,"data106":	45	,"data107":	50	},
  {"schoolname":	"實踐大學"	,"data104":	93.94	,"data105":	80.56	,"data106":	69.39	,"data107":	71.43	},
  {"schoolname":	"世新大學"	,"data104":	91.67	,"data105":	100	,"data106":	100	,"data107":	100	},
  {"schoolname":	"樹德科技大學"	,"data104":	56.36	,"data105":	85.71	,"data106":	66.67	,"data107":	79.17	},
  {"schoolname":	"台北海洋技術學院"	,"data104":	67.41	,"data105":	52.33	,"data106":	28.46	,"data107":	-1	},
  {"schoolname":	"台北海洋科技大學"	,"data104":	33.07	,"data105":	-1	,"data106":	-1	,"data107":	-1	},
  {"schoolname":	"台南應用科技大學"	,"data104":	42.86	,"data105":	43.53	,"data106":	23.26	,"data107":	50	},
  {"schoolname":	"台灣首府大學"	,"data104":	18.18	,"data105":	4	,"data106":	6.45	,"data107":	11.11	},
  {"schoolname":	"臺北城市科技大學"	,"data104":	81.82	,"data105":	70.97	,"data106":	62.86	,"data107":	64.1	},
  {"schoolname":	"臺北市立大學"	,"data104":	63.64	,"data105":	75	,"data106":	80	,"data107":	80	},
  {"schoolname":	"臺灣觀光學院"	,"data104":	17.74	,"data105":	13.79	,"data106":	9.09	,"data107":	25	},
  {"schoolname":	"桃園創新技術學院"	,"data104":	36	,"data105":	32.04	,"data106":	-1	,"data107":	-1	},
  {"schoolname":	"萬能科技大學"	,"data104":	46.94	,"data105":	48	,"data106":	45	,"data107":	53.03	},
  {"schoolname":	"文藻外語大學"	,"data104":	47.62	,"data105":	40	,"data106":	21.05	,"data107":	47.62	},
  {"schoolname":	"吳鳳科技大學"	,"data104":	5.29	,"data105":	8.13	,"data106":	6.57	,"data107":	15.38	},
  {"schoolname":	"醒吾科技大學"	,"data104":	80.77	,"data105":	72.41	,"data106":	45.19	,"data107":	53.64	},
  {"schoolname":	"修平科技大學"	,"data104":	33.33	,"data105":	41.38	,"data106":	31.58	,"data107":	56	},
  {"schoolname":	"玄奘大學"	,"data104":	100	,"data105":	100	,"data106":	44.44	,"data107":	40	},
  {"schoolname":	"亞東技術學院"	,"data104":	28.21	,"data105":	33.33	,"data106":	33.33	,"data107":	53.33	},
  {"schoolname":	"亞太創意技術學院"	,"data104":	41.03	,"data105":	61.9	,"data106":	0	,"data107":	-1	},
  {"schoolname":	"亞洲大學"	,"data104":	76.71	,"data105":	48.57	,"data106":	37.93	,"data107":	45.83	},
  {"schoolname":	"義守大學"	,"data104":	89.66	,"data105":	86.84	,"data106":	80	,"data107":	76.74	},
  {"schoolname":	"育達科技大學"	,"data104":	41.38	,"data105":	31.82	,"data106":	29.03	,"data107":	32.56	},
  {"schoolname":	"元培醫事科技大學"	,"data104":	35	,"data105":	36.44	,"data106":	34.92	,"data107":	32.58	},
  {"schoolname":	"元智大學"	,"data104":	80	,"data105":	50	,"data106":	75	,"data107":	100	},
  {"schoolname":	"遠東科技大學"	,"data104":	38.1	,"data105":	30.51	,"data106":	23.33	,"data107":	38	},
  {"schoolname":	"長庚大學"	,"data104":	100	,"data105":	100	,"data106":	42.86	,"data107":	42.86	},
  {"schoolname":	"長榮大學"	,"data104":	66.67	,"data105":	75.47	,"data106":	64.29	,"data107":	67.31	},
  {"schoolname":	"真理大學"	,"data104":	100	,"data105":	100	,"data106":	81.82	,"data107":	100	},
  {"schoolname":	"致理技術學院"	,"data104":	87.5	,"data105":	-1	,"data106":	-1	,"data107":	-1	},
  {"schoolname":	"致理科技大學"	,"data104":	76.47	,"data105":	60	,"data106":	80.95	,"data107":	-1	},
  {"schoolname":	"中國科技大學"	,"data104":	45.45	,"data105":	55.56	,"data106":	50	,"data107":	80	},
  {"schoolname":	"中國文化大學"	,"data104":	33.33	,"data105":	50	,"data106":	30	,"data107":	54.55	},
  {"schoolname":	"中國醫藥大學"	,"data104":	75	,"data105":	63.16	,"data106":	54.55	,"data107":	50	},
  {"schoolname":	"中華大學"	,"data104":	87.5	,"data105":	71.43	,"data106":	50	,"data107":	44.25	},
  {"schoolname":	"中華醫事科技大學"	,"data104":	37.5	,"data105":	45.35	,"data106":	28.57	,"data107":	57.5	},
  {"schoolname":	"中山醫學大學"	,"data104":	40	,"data105":	60	,"data106":	0	,"data107":	40	},
  {"schoolname":	"中臺科技大學"	,"data104":	57.89	,"data105":	61.54	,"data106":	42.22	,"data107":	45.65	},
  {"schoolname":	"中原大學"	,"data104":	20.51	,"data105":	19.51	,"data106":	30.95	,"data107":	33.33	},
  {"schoolname":	"中州科技大學"	,"data104":	50	,"data105":	21.05	,"data106":	11.76	,"data107":	42.86	}
];
// console.log(data[10].schoolname);


//number of spiral loops
var nspiral = 2;
// angle
var th = numeric.linspace(((-Math.PI) / 13), (2 * Math.PI * nspiral), 1000);

//Empty Value Containers
var xValues = [];
var yValues = [];
var yShift = [];
var finalX = [];
var finalY = [];

//spiral
for(var i = 0; i <th.length; i++){
  var a = 1.120529;
  var b = 0.306349;
  var r = a * Math.exp((-b) * th[i]);
  var xResult = (r * Math.cos(th[i]));
  var yResult = (r * Math.sin(th[i]));
  xValues.push(xResult);
  yValues.push(yResult);
}

function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
};

function getMinOfArray(numArray) {
  return Math.min.apply(null, numArray);
};

//Shift spiral north so that it is centered
var yShift = (1.6 - (getMaxOfArray(yValues) - getMinOfArray(yValues))) / 2;

var spiralTrace = {
  x: xValues.map(function(xi) { return -(xi) + xValues[0]; }),
  y: yValues.map(function(yi) { return yi - yValues[0] + yShift; }),
  type: 'scatter',
  line: {
    color: 'white',
    width: 3
  }
};

//Build the rectangles as a heatmap and specify the edges of the heatmap squares
var phi = (1 + Math.sqrt(5)) / 2;
var xe = [0, 1, (1 + (1 / Math.pow(phi,4))), 1 + (1 / Math.pow(phi,3)), phi];
var ye = [0, (1 / Math.pow(phi,3)), (1 / Math.pow(phi,3)) + (1 / Math.pow(phi,4)), (1 / Math.pow(phi,2)), 1];

var zValues = [
  [13, 3, 3, 5],
  [13, 2, 1, 5],
  [13, 10, 11, 12],
  [13, 8, 8, 8]
];

var hm = {
  x: xe,
  y: ye.map(function(yi) { return yi + yShift; }),
  z: zValues,
  type: 'heatmap',
  colorscale: 'Viridis'
};

var axisTemplate = {
  range: [0, 1.6],
  autorange: false,
  showgrid: false,
  zeroline: false,
  showticklabels: false,
  ticks: ''
};

var data = [spiralTrace, hm];

// var layout = {
//   title: 'Heatmap with Unequal Block Sizes',
//   margin: {
//     t: 100,
//     r: 100,
//     b: 100,
//     l: 100
//   },
//   xaxis: axisTemplate,
//   yaxis: axisTemplate,
//   showlegend: false,
//   width: 400,
//   height: 400,
//   autosize: false
// };

Plotly.newPlot('myDiv', data, layout);
