const echart = require('echarts');
const tagChart = echart.init(document.getElementById('main'));

const categoryIcons = {
	'Company': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAYAAAA4E5OyAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAqJJREFUeNrtmkGOEkEUhv/XzMK44AR4ATDp9hJ4gWlW7gTN9KzkArYXYDOBSZzGC+AF5AbuGiNcAC4gK02cei7cvXqdUIGmyeR9y8dPpfoLVdVVFGAYhmEYhtEMpBVfvf/S5dbj4JwdKWejvGkZAHClFTlyPQZ9PHNf8qZlAEDUdAcuDRMiMCECEyK4CsyPQW7pVTn6qWSXIDdWshMA/aYf/CRCiLErZ+/Wsh5nhZ8F7cupn02y+Z7BTT93JTZkBCZEYEIEQXMIEzrx7eee/4GSBbe1LDO3tbbVdmvkWfR8+/3uzf4oIQAm4IN/VP2K1UcnJHsC/vz9PQCwkHUbMgITIjAhAhMiCFtlgEUE3vh15eyEsCFmb9JiohSMrh/nT3U8oAN1CUhrERIxFuX9yHvIOCs8IcS0KWfDXNaTbN5jsCekrhOz5KZImQ4XYkNGYEIEJkRgQgShe5lJfFvk/gdKFtyPbwvvPISZO1rbWhaMb6vZ0DtkirNiAsJrWV9Nh0fvh0L3Mp2As522trxWoi7FtNGiBHrBzIe3HYANGYEJEZgQQegcsgPBO1SpmCv2IOyUbAeAf0hE8LcEzFutEwzeavmzCyHGuJwNtVd3b6ol0LKcvvVemZNsvmDwtayHrBDaynMqbMgITIjAhAhMiCBoUnWENMke/L8WlCwTd5PsIdfq2he0LJjW5b0/iSc3RQpirx+nOFMJW2WAlPVbWIoRdNWTNK6K+1ki+grlrwIQDRi4Vpo5WogNGYEJEZgQgQkRXM4NInIvZclF9EvrhGu5D+Q4b1xInTeIVkq2ih93ox2gbBxPgA0ZgQkRmBDBk79BxP8PpOoRgid0g6gKGzICEyIwIQITIlAnVXLRGq3HWm70XArkWge/GRuGYRiGYZyDf88K8cOIblD0AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTA5LTI2VDIzOjM0OjEyKzAwOjAwDUxingAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wOS0yNlQyMzozNDoxMiswMDowMHwR2iIAAAAodEVYdHN2ZzpiYXNlLXVyaQBmaWxlOi8vL3RtcC9tYWdpY2stbFJYTVJqVFIlE33QAAAAAElFTkSuQmCC',
	'Male': '  data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAYAAAA4E5OyAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAn5JREFUeNrt289L03Ecx/HX57vvNBHSOhUSBJFDk0mRGlGBUBJdssvIdrIfdMvunTt36A/oJmMdwkOXKDsUHaaCW0OyDo1+HDopOnJtfb/vTsF4M7dvte9nNl8P8CB89vHFE9QvEwEiImoa0+oBw+k3fX4lOowIxHEquWzi9NddGSSeXogZDw8FOF+1QyDyzDhyJ3t17P2uCRJPLZ6AyDyAnm1WrTuejC8nR5fbPshgOt/helsrAI40mPYhuoFjS7dPVmzuc2wHiXrfrzSOAQBytNyDSdv7rAcBzNnA40TO2V5nPYi/3c+N2md7be+zHsQAn4KPk4LtffaD+JgLetaDBD7bLNaDZJMjGYg8bnhQkMpPjS22fRAA+NFdvgHIfJ0Yz3+6Xbdasa0lQVYvn9mMRQoTAG4CeA2gCMEmIK/EyPWY+/HiSmKo2IptRPVZf3Q//Ojlnt6OrkMeonvrnYugsrFe3vpcmB4vtWWQodTSgBG5byCXAHQGfFkJBk/h4F4uMbLaNkGGZhcuOAZPAHT/5RVFQCZzU6Mv/vsgg+nMAdcz7/AHj+y1yZov/kD+2qlvYe4N/ddu1MPdf48BAGafY9yZsPeGHkRgJpp3m9/Eu2qz8WB2sHlXmb6wx9oIEtmhd9XUkkf3nYxBFAZRGERhEIVBFAZRGERhEIVBFAZRGERhEIVBlNCDOCW3X/zO/b8/gOB/2wUwV/1ap+T2h73XDfsLLE8fX6/+PD6bKcMEfCtXpPw2GV8Le2M1fssoDKIwiMIgCoMoDKIwiMIgCoMoDKIwiMIgCoMoDKIwiMIgCoMoDKIwiBL6e6qaQB7AOI3/XwYAxP9ivQgRETXPL6TWpL3jR79pAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTA5LTI2VDIzOjIzOjUzKzAwOjAwDCOjaQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wOS0yNlQyMzoyMzo1MyswMDowMH1+G9UAAAAodEVYdHN2ZzpiYXNlLXVyaQBmaWxlOi8vL3RtcC9tYWdpY2stZDVldWg2Qmpf+DFiAAAAAElFTkSuQmCC',
	'Female': ' data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAYAAAA4E5OyAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAA3pJREFUeNrtmU1IFGEYx//PzH6YkmulbqZFUeHBQ1HXylVUkKKy2vUqVET4gQSdpXMdYpXCk9ClWE9dU1ehQxAdJPJQIKWkuwspSmLtrjNPh6JiaHXWnfcd0/d3fuaZPz+eh3lnBlAoFAqFY5DbAb40Pq7OsnECxOyF5215/PbcjhQy1/CwVtf0fgBNf+VgBl54QD0VY10fdoyQucaBUzpxHEAgR8mSpmkNlSOdk7KzabJv+C7c59OJY+vIAIAy0zRjfHrQu+2FlC+WtwE4aqP0eDKQubzthRD4rO1aDedk55MuhEGBPIrLZOeTLgSgWdulTJ9kp5M/IWw+t1tr6my71imkC6mK97wGMGyj9NmBke43214IAOjfV68DiK9TMqoZ2k03srl2UuVwTE8tpjoY3EGgkwAxgyfBGNq/L/iEhiOGW9kUity4/rbL4ZieWk4dAoBgIDjr9qq4JmSxaTCQQeYuGF34816zBKYBn+Z9sHf01vKOEZJojVZQhsYB1P07FL0ng0KVE51J2dlceexSmoZzyQAABteauvnUjWzShSSao/Ug1NsoDSWao3bq/m8hZNo/cJFJN6Tnk3mzj6Ghol36SgpAqc14X7OrmeDBV3e+ycoodUKKPSvn7csAAN7tK/G0yswoVQgz2vO+xsz/mkKQtjLJlvslMIpSAEryvHRVM7Rg5UTnioyc8iZkzX9xEzIAoNjU+YKsmPKEUCGjz9LWRsrKLLRGS7MZSgEo2mSLtI98QRnHeSkTkslobQXIAAB/FulLMrJKEaI5MPIMkrI2wldm5syjPX6/kQTgK7BVdg1UVTPWtSAyr/AJ8fuNsAMyAMDrIfOK6LwyVsa5UZdwSBO6Mr++e8wD8DjU0iAY1cGx3pSozGInJI12B2UAgG7Cc01kZLFCCjqM5ULsIU3YynwORWs8Os3AeelskHG4erTX/j/iPBA2IV5diwjqTzr0q6JyCxPCYkdbWG8hK5Ns6T8CA9Oi+gMAMR8Lxnumne4rZkJ+nheEPtJNaEKeNk4+En9DBl6ahEjOAg11xOhbrwcT7sHEVM4WzPNCsotouhGJpv4QMcY3ENJQNdo9ITubKz+qtjJKiAUlxIISYkEJsaCEWFBCLCghFpQQC0qIBSXEghJiQQmxoIRYUEIsCPlAtCFenuI0Rdat8fGUzW4KhUKh2Kr8ANNl63LqgbOWAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTA5LTI2VDIzOjEyOjU4KzAwOjAweAT6rAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wOS0yNlQyMzoxMjo1OCswMDowMAlZQhAAAAAodEVYdHN2ZzpiYXNlLXVyaQBmaWxlOi8vL3RtcC9tYWdpY2staEtWREdtc3QORS+GAAAAAElFTkSuQmCC'
};

const options = {
	title: {
		text: 'ECharts icon label example',
		subtext: '@kusillus',
		sublink: 'https://www.kusillus.me',
		subtarget: 'blank',

	},
	tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
	legend: {
        bottom: 10,
        left: 'center',
        data: ['Hombres', 'Mujeres', 'Empresa']
    },
	series: [
		{
			name: 'Demografia',
            type: 'pie',
            radius : '65%',
            center: ['50%', '50%'],
			selectedMode: 'single',
			data: [
				{
					value:462,
					name: 'Hombres',
					itemStyle: {
						color: '#5bc0de'
					},
					label: {
						normal: {
							formatter: [
								'{Male|}' + '\n' + ' Hombres ' + '\n {d}%'
                        ].join('\n'),
							rich: {
								Male: {
									height: 60,
                                    align: 'center',
                                    backgroundColor: {
                                        image: categoryIcons.Male
                                    }
								}
							}
						}
					}
				},
                {
					value:232,
					name: 'Mujeres',
					itemStyle: {
						color: '#fd79a8'
					},
					label: {
						normal: {
							formatter: [
								'{Female|}' + '\n' + ' Mujeres ' + '\n {d}%'
                        ].join('\n'),
							rich: {
								Female: {
									height: 60,
                                    align: 'center',
                                    backgroundColor: {
                                        image: categoryIcons.Female
                                    }
								}
							}
						}
					}
				},
				{
					value:535,
					name: 'Empresa',
					itemStyle: {
						color: '#337ab7'
					},
					label: {
						normal: {
							formatter: [
								'{Company|}' + '\n' + ' Empresa ' + '\n {d}%'
                        ].join('\n'),
							rich: {
								Company: {
									height: 60,
                                    align: 'center',
                                    backgroundColor: {
                                        image: categoryIcons.Company
                                    }
								}
							}
						}
					}
				},
			]
		}
	]
}

tagChart.setOption(options);