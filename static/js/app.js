//URL for analysis
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Promise Pending
const dataPromise = d3.json(url)
console.log("Data Promise: ", dataPromise);

//Get top 10 OTUs
let samples = dataPromise.samples;

// let trace1 = {
//     x: xData,
//     y: yData
//   };
  
//   let data = [trace1];
  
//   let layout = {
//     title: "A Plotly plot"
//   };
  
//   Plotly.newPlot("plot", data, layout);