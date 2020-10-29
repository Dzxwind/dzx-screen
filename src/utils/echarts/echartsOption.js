import style from "./echartsColor.js"
// rgb
const options = {
  color: style.color,
  backgroundColor: "rgba(0,0,0,0)",
  textStyle: {},
  title: {
    left: 'center',
    textStyle: {
      color: "#fff",
      fontSize: 18,
      fontWeight: 'normal'
    },
    subtextStyle: {
      color: style.fontColor
    }
  },
  line: {
    itemStyle: {
      normal: {
        borderWidth: 1
      }
    },
    label: {
      show: false,
      color: "#fff"
    },
    lineStyle: {
      width: 2
    },
    // symbolSize: 8,
    // symbol: "emptyCircle",
    smooth: true
  },
  radar: {
    itemStyle: {
      normal: {
        borderWidth: 1
      }
    },
    lineStyle: {
      normal: {
        width: 2
      }
    },
    splitArea: {
      areaStyle: {
        color: ['transparent']
      }
    },
    axisLabel: {
      show:false,
    },
    axisLine: {
      lineStyle: {
        color: 'rgba(87,182,255,0.5)'
      }
    },
    splitLine: {
      lineStyle: {
        color: 'rgba(87,182,255,0.5)'
      }
    },
    name: {
      textStyle: {
        fontSize: 14,
        color: '#fff',
        lineHeight: 16
      }
    },
    smooth: false
  },
  bar: {
    label: {
      show: false
    },
    itemStyle: {
      normal: {
        barBorderWidth: "0",
        barBorderColor: style.fontColor
      },
      emphasis: {
        barBorderWidth: "0",
        barBorderColor: style.fontColor
      }
    }
  },
  pie: {
    itemStyle: {
      normal: {
        borderColor: style.fontColor
      },
      emphasis: {
        borderColor: style.fontColor
      }
    }
  },
  scatter: {
    itemStyle: {
      normal: {
        borderWidth: "0",
        borderColor: style.fontColor
      },
      emphasis: {
        borderWidth: "0",
        borderColor: style.fontColor
      }
    }
  },
  boxplot: {
    itemStyle: {
      normal: {
        borderWidth: "0",
        borderColor: style.fontColor
      },
      emphasis: {
        borderWidth: "0",
        borderColor: style.fontColor
      }
    }
  },
  parallel: {
    itemStyle: {
      normal: {
        borderWidth: "0",
        borderColor: style.fontColor
      },
      emphasis: {
        borderWidth: "0",
        borderColor: style.fontColor
      }
    }
  },
  sankey: {
    itemStyle: {
      normal: {
        borderWidth: "0",
        borderColor: style.fontColor
      },
      emphasis: {
        borderWidth: "0",
        borderColor: style.fontColor
      }
    }
  },
  funnel: {
    itemStyle: {
      normal: {
        borderWidth: "0",
        borderColor: style.fontColor
      },
      emphasis: {
        borderWidth: "0",
        borderColor: style.fontColor
      }
    }
  },
  gauge: {
    itemStyle: {
      normal: {
        borderWidth: "0",
        borderColor: style.fontColor
      },
      emphasis: {
        borderWidth: "0",
        borderColor: style.fontColor
      }
    }
  },
  candlestick: {
    itemStyle: {
      normal: {
        color: "#c23531",
        color0: "#314656",
        borderColor: "#c23531",
        borderColor0: "#314656",
        borderWidth: 1
      }
    }
  },
  graph: {
    itemStyle: {
      normal: {
        borderWidth: "0",
        borderColor: style.fontColor
      }
    },
    lineStyle: {
      normal: {
        width: 1,
        color: "#aaaaaa"
      }
    },
    symbolSize: 4,
    symbol: "emptyCircle",
    smooth: false,
    color: style.color,
    label: {
      normal: {
        textStyle: {
          color: style.fontColor
        }
      }
    }
  },
  map: {
    itemStyle: {
      normal: {
        areaColor: "rgba(0,122,254,0.8)",
        borderColor: "#008dcb",
        borderWidth: 0.5
      },
      emphasis: {
        areaColor: "rgba(0,122,254,1)",
        borderColor: "#008dcb",
        borderWidth: 1
      }
    },
    label: {
      normal: {
        textStyle: {
          color: style.fontColor
        }
      },
      emphasis: {
        textStyle: {
          color: "rgb(100,0,0)"
        }
      }
    }
  },
  geo: {
    itemStyle: {
      normal: {
        areaColor: "#033874",
        borderColor: "#008dcb",
        borderWidth: 0.5
      },
      emphasis: {
        areaColor: "#2B91B7"
      }
    },
    label: {
      normal: {
        show: false,
        textStyle: {
          color: "#000000"
        }
      },
      emphasis: {
        show: false,
        textStyle: {
          color: "rgb(100,0,0)"
        }
      }
    }
  },
  categoryAxis: {
    axisLine: {
      show: true,
      lineStyle: {
        color: [style.lineColor]
      }
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: style.fontColor
      }
    },
    axisLabel: {
      show: true,
      interval: 0,
      textStyle: {
        fontSize: 14,
        color: style.fontColor,
      }
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: ["#ccc"]
      }
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"]
      }
    }
  },
  valueAxis: {
    nameTextStyle: {
      color: style.lineColor,
    },
    axisLine: {
      show: false,
      lineStyle: {
        color: style.lineColor
      },
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: style.lineColor
      }
    },
    axisLabel: {
      show: true,
      textStyle: {
        color: style.supportFontColor,
      }
    },
    splitLine: {
      show: true,
      lineStyle: {
        type: "dashed",
        color: [style.lineColor],
        opacity: 0.5
      }
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"]
      }
    }
  },
  logAxis: {
    axisLine: {
      show: true,
      lineStyle: {
        color: style.fontColor
      }
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: style.fontColor
      }
    },
    axisLabel: {
      show: true,
      textStyle: {
        color: style.fontColor
      }
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: [style.fontColor]
      }
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"]
      }
    }
  },
  timeAxis: {
    axisLine: {
      show: true,
      lineStyle: {
        color: style.fontColor
      }
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: style.fontColor
      }
    },
    axisLabel: {
      show: true,
      textStyle: {
        color: style.fontColor
      }
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: [style.fontColor]
      }
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"]
      }
    }
  },
  toolbox: {
    iconStyle: {
      normal: {
        borderColor: "#999999"
      },
      emphasis: {
        borderColor: "#666666"
      }
    }
  },
  legend: {
    textStyle: {
      color: style.fontColor,
      fontSize: 12
    },
    icon: "circle"
  },
  tooltip: {
    axisPointer: {
      lineStyle: {
        color: style.fontColor,
        width: "1"
      },
      crossStyle: {
        color: style.fontColor,
        width: "1"
      }
    }
  },
  timeline: {
    lineStyle: {
      color: style.fontColor,
      width: 1
    },
    itemStyle: {
      normal: {
        color: style.fontColor,
        borderWidth: 1
      },
      emphasis: {
        color: style.fontColor
      }
    },
    controlStyle: {
      normal: {
        color: style.fontColor,
        borderColor: style.fontColor,
        borderWidth: 0.5
      },
      emphasis: {
        color: style.fontColor,
        borderColor: style.fontColor,
        borderWidth: 0.5
      }
    },
    checkpointStyle: {
      color: style.fontColor,
      borderColor: "rgba(255,255,255,1)"
    },
    label: {
      normal: {
        textStyle: {
          color: style.fontColor
        }
      },
      emphasis: {
        textStyle: {
          color: style.fontColor
        }
      }
    }
  },
  visualMap: {
    color: style.color
  },
  dataZoom: {
    backgroundColor: "rgba(47,69,84,0)",
    dataBackgroundColor: "rgba(47,69,84,0.3)",
    fillerColor: "rgba(167,183,204,0.4)",
    handleColor: "#a7b7cc",
    handleSize: "100%",
    textStyle: {
      color: style.fontColor
    }
  },
  markPoint: {
    label: {
      normal: {
        textStyle: {
          color: style.fontColor
        }
      },
      emphasis: {
        textStyle: {
          color: style.fontColor
        }
      }
    }
  }
}
export default options
